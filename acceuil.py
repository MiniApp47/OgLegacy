import os
import logging
import asyncio
from dotenv import load_dotenv
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import ApplicationBuilder, ContextTypes, CommandHandler, MessageHandler, filters, ConversationHandler

# ==========================================
# ⚙️ CONFIGURATION DU BOT
# ==========================================
load_dotenv()

TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
ADMIN_ID = os.getenv("ADMIN_ID") # <-- TON ID POUR SÉCURISER

if not TOKEN:
    raise ValueError("❌ ERREUR : Le token est introuvable. Vérifie ton fichier .env !")

WEBAPP_URL = "https://miniapp47.github.io/OgLegacy/"
USERS_FILE = "users.txt" # <-- Le fichier qui va stocker les clients en cachette

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)

# --- SAUVEGARDE SILENCIEUSE DES CLIENTS ---
def save_user(user_id):
    users = set()
    if os.path.exists(USERS_FILE):
        with open(USERS_FILE, "r") as f:
            users = set(f.read().splitlines())
    if str(user_id) not in users:
        with open(USERS_FILE, "a") as f:
            f.write(f"{user_id}\n")

# ==========================================
# 📝 ACCUEIL DES CLIENTS (/start)
# ==========================================
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # Enregistre le client dès qu'il clique sur Démarrer
    save_user(update.effective_chat.id)
    
    welcome_text = (
        "<b>BONJOUR 👋</b>\n\n"
        "<b>BIENVENUE CHEZ OG LEGACY COFFEE 🔥🌿</b>\n\n"
        "Nous proposons une sélection exclusive de produits de haute qualité.\n"
        "<i>Pour les connaisseurs, par les connaisseurs.</i>\n\n"
        "📍 <b>CHEZ NOUS TU PEUX COMMANDER POUR TE FAIRE LIVRER À DOMICILE DE 14H à 02H</b> 📍\n\n"
        "🚚 <b>PROFITEZ DE NOTRE SERVICE DE LIVRAISON</b>\n"
        "▬▬▬▬▬▬▬ <b>OU</b> ▬▬▬▬▬▬▬\n"
        "📍 <b>PASSEZ RÉCUPÉRER SUR PLACE (92) DE 12H à 00H</b>\n"
        "🚇 À 10 MINUTES DE PARIS LIGNE 13\n"
        "🚶‍♂️ 4 MINUTES À PIED DE LA STATION\n"
        "<i>(L’adresse change à chaque fois)</i> ✅✅⚡️\n\n"
        "🚀 <b>PRISE DE COMMANDE 24/24</b>\n\n"
        "⚠️ <b>PREMIÈRE COMMANDE : VÉRIFICATION OBLIGATOIRE SELFIE + CNI</b> 📱 🪪\n\n"
        "<b>NOUS LIVRONS LES SECTEURS SUIVANTS :</b>\n"
        "95 / 78 / 92 / 93 / 91 / 94 / 75 / 77 / 60\n\n"
        "🚨 <i>MINIMUM OBLIGATOIRE : 91 / 60 / 77 / certaines villes 94</i>\n"
    )

    keyboard = [
        [InlineKeyboardButton("🎩 OUVRIR LE SHOP / MENU 🎩", web_app=WebAppInfo(url=WEBAPP_URL))],
        [InlineKeyboardButton("WHATSAPP 📞", url="https://wa.me/33629121135")],
        [InlineKeyboardButton("CANAL TÉLÉGRAM 💙", url="https://t.me/oglegsecour")],
        [InlineKeyboardButton("CANAL POTATO 🥔", url="https://dympt.org/legacyog75")],
        [InlineKeyboardButton("INSTAGRAM 📸", url="https://www.instagram.com/og_legacy75?igsh=bG5nc3duNWRxd3Ey&utm_source=qr")]
    ]
    
    reply_markup = InlineKeyboardMarkup(keyboard)

    if update.message:
        await update.message.reply_text(text=welcome_text, reply_markup=reply_markup, parse_mode='HTML')
    elif update.callback_query:
        await update.callback_query.message.reply_text(text=welcome_text, reply_markup=reply_markup, parse_mode='HTML')


# ==========================================
# 👑 SYSTEME ADMIN (Depuis ton téléphone)
# ==========================================
WAITING_FOR_POST = 1

async def admin_start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # Si c'est pas toi, le bot ignore
    if str(update.effective_user.id) != ADMIN_ID:
        return ConversationHandler.END
    
    await update.message.reply_text(
        "👑 <b>MODE ADMIN ACTIVÉ</b>.\n\n"
        "Envoie-moi la vidéo, la photo ou le texte que tu veux faire apparaître chez TOUS tes clients.\n"
        "<i>(Tape /cancel pour annuler)</i>", 
        parse_mode='HTML'
    )
    return WAITING_FOR_POST

async def admin_broadcast(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not os.path.exists(USERS_FILE):
        await update.message.reply_text("❌ Aucun client n'est encore enregistré dans la base.")
        return ConversationHandler.END

    with open(USERS_FILE, "r") as f:
        users = f.read().splitlines()

    await update.message.reply_text(f"🚀 C'est parti. Envoi en cours à {len(users)} clients...")

    success = 0
    for uid in users:
        uid = uid.strip() # Nettoyage des lignes vides
        if not uid:
            continue
            
        try:
            # La méthode absolue pour copier n'importe quel post (vidéo, texte, image, audio)
            await context.bot.copy_message(
                chat_id=int(uid),
                from_chat_id=update.message.chat_id,
                message_id=update.message.message_id
            )
            success += 1
            await asyncio.sleep(0.1) # Anti-ban Telegram
        except Exception as e:
            # Enregistre l'erreur côté serveur pour débogage ultérieur
            logging.warning(f"Échec d'envoi pour le client {uid} : {e}")

    await update.message.reply_text(f"✅ Opération terminée ! {success} clients ont reçu ton drop.")
    return ConversationHandler.END

async def cancel(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Opération annulée bro.")
    return ConversationHandler.END


# ==========================================
# 🚀 LANCEMENT DU PROGRAMME
# ==========================================
if __name__ == '__main__':
    application = ApplicationBuilder().token(TOKEN).build()
    
    # 1. Commande normale pour les clients
    application.add_handler(CommandHandler('start', start))
    
    # 2. Gestion du mode Admin
    admin_conv_handler = ConversationHandler(
        entry_points=[CommandHandler('admin', admin_start)],
        states={
            WAITING_FOR_POST: [MessageHandler(filters.ALL & ~filters.COMMAND, admin_broadcast)]
        },
        fallbacks=[CommandHandler('cancel', cancel)]
    )
    application.add_handler(admin_conv_handler)
    
    print("🤖 OgLegacyBot est en ligne avec le Panel Admin ! Appuie sur Ctrl+C pour arrêter.")
    application.run_polling()