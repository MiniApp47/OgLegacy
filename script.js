// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener('DOMContentLoaded', function () {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#2c2c2e');
    tg.setBackgroundColor('#1c1c1d');

    const progressBar = document.getElementById("myBar");
    const loader = document.getElementById("page-loader");

    // 1. On lance l'animation de la barre après un tout petit délai
    setTimeout(() => {
        if (progressBar) {
            progressBar.style.width = "100%";
        }
    }, 100);

    // 2. On attend la fin de l'animation (2.5 secondes ici) pour cacher le loader
    setTimeout(() => {
        if (loader) {
            loader.style.opacity = "0"; // Effet de fondu
            loader.style.transition = "opacity 0.5s ease";

            setTimeout(() => {
                loader.style.display = "none";
                loader.classList.remove('active');
                // Affiche la page Home par défaut
                document.getElementById('page-home').classList.add('active');
            }, 500); // Attend la fin du fondu
        }
    }, 2600); // 2600ms = 2.5s d'animation + 0.1s de délai



    // --- CONFIGURATION DES LIENS DE CONTACT ---
    const contactLinks = [
        {
            name: 'WHATSAPP 📞',
            url: 'https://wa.me/33629121135',
            id: 'whatsapp',
            className: 'whatsapp', // Il faudra peut-être ajouter ce CSS (Jaune)
            text: "WHATSAPP 📞"
        },
        {
            name: 'TÉLÉGRAM 💙',
            url: 'https://t.me/+PN5wQTyu3o9kNmM0',
            id: 'telegram-main',
            className: 'telegram', // Garde le style Bleu Telegram
            text: "TÉLÉGRAM 💙"
        },
        {
            name: 'CANAL SECOURS 💙',
            url: 'https://t.me/oglegacysecouur',
            id: 'telegram-secours',
            className: 'secours',
            text: "TÉLÉ SECOURS 💙"
        },
        {
            name: 'POTATO / MENU 🥔',
            url: 'https://dympt.org/legacyog75',
            id: 'potato-main',
            className: 'potato', // Garde le style Marron/Doré Potato
            text: "CANAL POTATO 🥔"
        },
        {
            name: 'INSTAGRAM 📸',
            url: 'https://www.instagram.com/og_legacy75?igsh=bG5nc3duNWRxd3Ey&utm_source=qr',
            id: 'instagram',
            className: 'instagram', // Style dégradé Insta
            text: "INSTAGRAM 📸"
        }
      

    ];

    // --- DONNÉES DE L'APPLICATION (PISTACHIOBOT) ---
    const appData = [

        // ============================================================
        // CATEGORIE 1 : WEED 🌿
        // ============================================================
        {
            id: 'WEED',
            name: 'WEED CALI 🇺🇸 🥦',
            type: 'Weed',
            quality: 'WEED CALI 🇺🇸 🥦',
            image: 'CategWeed.png', // Ton image de catégorie Weed

            products: [
                {
                    id: '🔥 MIAMI HEAT',
                    flag: '🇺🇸',
                    name: '🔥 MIAMI HEAT',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductMia.png', 
                    video: 'VideoMia.mov',
                    description: 'Exotic Premium Strain \n THC : ~24–27% \n\n Prépare-toi à prendre une vague de chaleur venue tout droit de South Beach 🌴\n Miami Heat, c’est une variété ultra flashy, aussi belle que puissante, avec des têtes denses, bien manucurées, couvertes de trichomes brillants et de pistils orange feu.\n\n 👃 Arômes\n Explosion fruitée tropicale dès l’ouverture :\n mangue mûre, agrumes sucrés, avec une touche crémeuse et légèrement épicée en fin de nez.\n\n 👅 Saveur\n En bouche, c’est du lourd :\n sucré-exotique, notes de fruits tropicaux + une pointe candy/gourmande qui reste sur la langue.\n\n 🧠 Effets\n Montée rapide grâce à son taux de THC élevé (24–27%) 🔥\n Euphorie propre, bonne énergie, mood vacances direct 😌\n Parfait pour :\n ✔️ chiller en terrasse\n  ✔️ musique / vibes\n  ✔️ socialiser\n  Relaxant sans te scotcher au canapé.\n\n 🏆 Qualité Coffee Shop \n • Têtes compactes & résineuses \n  • Odeur puissante \n  • Finition propre \n • Sélection premium, gros visuel, gros goût  \n\n 💎 Miami Heat, c’est le soleil de Miami dans chaque bouffée. \n Une strain qui tape, qui goûte bon, et qui fait kiffer fort.',
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                    ]
                },
                {
                    id: '🍒 CHERRY RUNTZ',
                    flag: '🇺🇸',
                    name: '🍒 CHERRY RUNTZ',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductCherry.png', 
                    video: 'VideoCherry.mov',
                    description: 'Exotic Candy Strain \n THC : ~26% \n\n Cherry Runtz, c’est la rencontre parfaite entre le côté fruité de la cerise et le côté bonbon sucré des Runtz 🍬\n  Des têtes bien compactes, ultra résineuses, avec des reflets violets/verts et des pistils orangés qui claquent visuellement.\n\n  👃 Arômes\n  Grosse odeur de cerise mûre dès l’ouverture,\n  avec des notes candy sucrées, presque confiserie, et une petite touche crémeuse en fond.\n\n  👅 Saveur\n  En bouche, c’est une vraie friandise :\n  cerise sucrée, bonbon fruité, légère note vanillée en fin de bouche. Ultra gourmand.  \n\n 🧠 Effets\n  Montée douce mais bien présente 😌\n  Bonne humeur, détente mentale, vibes chill & sociales.\n\n  Parfait pour :\n ✔️ se poser entre potes\n ✔️ musique / films\n  ✔️ fin de journée tranquille\n Relaxant sans t’éteindre.  \n\n 🏆 Qualité Coffee Shop Premium\n  • Têtes denses & bien manucurées\n  • Très résineuse\n  • Odeur puissante\n  • Look exotique, top-shelf  \n\n 💎 Cherry Runtz, c’est la strain bonbon-fruitée qui passe crème à chaque fois.\n  Gourmande, propre, efficace.',
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                    ]
                },
                {
                    id: '🟣 SUPER BOOF (Blockberry)',
                    flag: '🇺🇸',
                    name: '🟣 SUPER BOOF (Blockberry)',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductBoof.png', 
                    video: 'VideoBoof.mp4',
                    description: 'Exotic Hybrid Strain \n THC : ~28%  \n 🫐 Fruité (baies) • 🍇 Raisin • 🥛 Crémeux \n 😌 Chill • ✨ Euphorique   \n\n Super Boof est une variété premium ultra reconnaissable, connue pour ses têtes violettes bien denses, couvertes de trichomes brillants. Visuel top-shelf direct, finition propre, résine bien présente.   \n\n 👃 Arômes \n Parfum intense de fruits rouges & baies (myrtille, raisin), \n avec une touche citronnée fraîche et un fond crémeux.   \n\n 👅 Saveur \n En bouche, c’est smooth et gourmand : \n fruits sucrés, notes berry/candy, finale légèrement acidulée et crémeuse.   \n\n 🧠 Effets \n Montée rapide, sensation de bien-être, humeur positive 😌 \n Relax du corps + esprit léger, sans effet “stone” lourd. \n Idéal pour chiller, écouter de la musique, discuter ou se poser en fin de journée.   \n\n 🏆 Qualité Coffee Shop Premium \n • Têtes denses, violettes & résineuses \n • Odeur puissante et propre \n • Sélection haut de gamme \n • Finition manucurée, look exotique   \n\n 💎 Super Boof, c’est la strain qui régale autant les yeux que le palais. \n Un classique moderne, validé par les connaisseurs.',
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                    ]
                },
                {
                    id: '🌴 VICE CITY',
                    flag: '🇺🇸',
                    name: '🌴 VICE CITY',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductVice.png', 
                    video: 'VideoVice.mp4',
                    description: 'Exotic Hybrid Strain \n THC : ~27%     \n\n Vice City, c’est la vibe Miami nocturne : flashy, chaude, addictive 🔥 \n Des têtes bien compactes, vert clair avec des reflets violets, ultra résineuses, manucurées proprement. Visuel exotique, top-shelf direct.   \n\n 👃 Arômes \n Grosse odeur tropicale & candy dès l’ouverture : \n agrumes sucrés, fruits exotiques, avec une touche creamy/vanillée en fond. Parfum bien lourd et propre.   \n\n 👅 Saveur \n En bouche, c’est gourmand et smooth : \n fruits tropicaux, notes sucrées type bonbon, finale crémeuse légèrement citronnée. Ça passe crème.   \n\n 🧠 Effets \n Montée rapide, euphorie clean, bonne énergie 😌 \n  Mood festif, vibes sociales, parfait pour chiller entre potes ou profiter de la soirée.  \n  Relaxant sans te scotcher au canapé.    \n\n 🏆 Qualité Coffee Shop Premium  \n • Têtes denses & résineuses  \n • Odeur puissante  \n • Finition propre, manucure soignée  \n • Sélection exotique haut de gamme    \n\n Gros goût, gros visuel, gros kif.',
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                    ]
                },
                {
                    id: '🍒🌴 TROPICANA CHERRY',
                    flag: '🇺🇸',
                    name: '🍒🌴 TROPICANA CHERRY',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductTropicana.png', 
                    video: 'VideoTropicana.mp4',
                    description: 'Exotic Hybrid Strain \n THC : ~26% \n\n Tropicana Cherry, c’est la fusion parfaite entre le fruit tropical et la cerise sucrée. \n Des têtes bien colorées, souvent violettes/rosées avec des reflets orange, ultra résineuses, manucurées proprement. Visuel exotique qui claque direct en vitrine.\n\n 👃 Arômes \n Grosse odeur d’agrumes tropicaux dès l’ouverture (orange, mandarine),\n mélangée à une cerise bien sucrée, avec une petite touche florale en fond. Parfum frais et gourmand.  \n\n 👅 Saveur \n En bouche, c’est ultra clean : \n agrumes sucrés, cerise candy, légère note acidulée en fin de bouche. Très rafraîchissant, très tasty.  \n\n 🧠 Effets \n Montée rapide, bonne humeur, vibes légères 😌 \n Effet énergisant au début, puis détente douce. \n Parfait pour : \n ✔️ mood social \n ✔️ journée chill \n ✔️ musique / créativité \n Relax sans t’assommer.  \n\n 🏆 Qualité Coffee Shop Premium \n  • Têtes colorées, denses & résineuses \n • Odeur fraîche et puissante   \n • Finition propre   \n• Sélection exotique haut de gamme    \n\n 💎 Tropicana Cherry, c’est la strain fruitée-tropicale qui met le smile direct.   \n Goût frais, visuel de fou, effet propre.',
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                    ]
                },
                {
                    id: '🍰 Trufflez Chantilly',
                    flag: '🇺🇸',
                    name: '🍰 Trufflez Chantilly',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductTrufle.png', 
                    video: 'VideoTrfle.mp4',
                    description: '🍰 Trufflez Chantilly \n\n Trufflez Chantilly est une variété ultra-gourmande et raffinée, pensée pour les amateurs de saveurs sucrées, crémeuses et puissantes. Dès l’ouverture, elle balance une odeur de crème fouettée, vanille sucrée et pâtisserie, avec une touche truffée/gassy qui rappelle les grosses génétiques US.\n\n 👃 Arômes & saveurs\n • Chantilly crémeuse 🍦\n • Vanille douce\n • Notes sucrées type dessert / pâtisserie\n • Fond gassy – truffe bien présent\n ➡️ Fumée épaisse, onctueuse, très savoureuse.\n\n 💨 Effets\n  Effet puissant et enveloppant :\n • Montée rapide\n • Relaxation profonde\n • Sensation de bien-être et de lourdeur agréable\n Parfait pour chill, détente, fin de journée ou soirée posée.\n\n 🌿 Aspect\n Têtes très denses, couleurs vert clair à beige crémeux, parfois touches violettes, gros glaçage de trichomes.\n ➡️ Qualité Premium / Top sélection.\n\n  ⚡ Puissance\n THC élevé – strain réservée aux amateurs, effet long et bien présent.\n\n 🎯 Idéal pour\n Clients qui cherchent :\n • Une weed gourmande & sucrée\n  • Un effet relaxant et lourd\n • Une vraie expérience dessert strain',
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 750.00 },
                    ]
                },
            ]
        },
        {
            id: 'FROZEN',
            name: 'FROZEN 🇲🇦🍯',
            type: 'Frozen',
            quality: 'FROZEN 🇲🇦🍯',
            image: 'CategFrozen.png', // Ton image de catégorie Weed

            products: [
                {
                    id: '🥵 FROZEN SIFT 🍫',
                    flag: '🇲🇦',
                    name: '🥵 FROZEN SIFT 🍫',
                    farm: 'HLA SOURCE x DHF 💥',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductFroz2.png', // ⚠️ A changer
                    videos: ['VideoFrozs.mov','VideoFrozs2.mov','VideoFrozs3.mov'],
                    description: 'Votre meilleur farm du moment plusieurs strains disponible 🍯',

                       // 👇 NOUVELLE STRUCTURE
                       variantTitle: 'Saveurs Frozen ❄️ :',
                       jars: [
                        { name: 'SOUR CHERRY', emoji: '🍒', colorClass: 'style-cherry' }, // <-- Modifié
                        { name: 'ACAPULCO GOLD', emoji: '💛', colorClass: 'style-gold' },   // <-- Modifié
                        { name: 'GORILLA GLUE #4', emoji: '🍫🍯', colorClass: 'style-glue' } // <-- Modifié   
                       ],

                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '50G', price: 400.00 },
                        { weight: '100G', price: 750.00 },
                    ]
                },
                {
                    id: '🧊 FROZEN',
                    flag: '🇲🇦',
                    name: '🧊 FROZEN',
                    farm: 'HASBULLA FARM 🇲🇦',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductFroz.png', // ⚠️ A changer
                    video: 'VideoFroz.mp4',
                    description: 'Votre meilleur farm du moment plusieurs strains disponible 🍯',

                       // 👇 NOUVELLE STRUCTURE
                       variantTitle: 'Saveurs Frozen ❄️ :',
                       jars: [
                           { name: 'Oreo Runtz', emoji: '🍪❤️‍🔥', colorClass: 'style-brown' },
                           { name: 'Carbon fiber', emoji: '🥵❤️‍🔥', colorClass: 'style-orange' },
   
                       ],

                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '50G', price: 400.00 },
                        { weight: '100G', price: 750.00 },
                    ]
                },
               /*  {
                    id: '🍓 90U Lamponi',
                    flag: '🇲🇦',
                    name: '🍓 90U Lamponi',
                    farm: 'KGF 🦊',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductLamponi.png', // ⚠️ A changer
                    video: 'VideoLamponi.mov',
                    description: 'Un joyau de précision signé KGF, issu d’une extraction full melt à 90 microns, gage d’une pureté et d’une puissance exceptionnelles. Le Lamponi, qui signifie “framboise” en italien, porte parfaitement son nom : une véritable gourmandise olfactive et gustative. \n\n • Texture : ultra-crémeuse, presque mousseuse, fond instantanément à la chaleur des doigts.\n\n • Couleur : blond pâle aux reflets rosés, typique des extractions haut de gamme.\n\n • Odeur : un parfum de fruits rouges sucrés, dominé par la framboise fraîche et la crème légère.\n\n • Effet : profond, relaxant et euphorique — une montée douce suivie d’un apaisement complet du corps et de l’esprit.\n\n • Qualité : 90U full melt — pure tête de trichome, sans impuretés ni contaminants végétaux.\n\n\n Chaque lot de Lamponi 90U incarne l’excellence artisanale de KGF, un hash qui allie saveur, texture et effet dans un équilibre parfait. Un produit d’exception pour connaisseurs exigeants. 🦊',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '25G', price: 280.00 },
                        { weight: '50G', price: 500.00 },
                        { weight: '100G', price: 800.00 },
                    ]
                }, */
            ]
        },
        {
            id: '3xFiltre',
            name: '3X FILTRE PREMIUM 🇲🇦🍫',
            type: '3xFiltre',
            quality: '3X FILTRE PREMIUM 🇲🇦🍫',
            image: 'Categ3X.png', // Ton image de catégorie Weed

            products: [
                {
                    id: '35u Panacota 🧁',
                    flag: '🇲🇦',
                    name: '🧁 35u Panacota 🧁',
                    farm: 'KGF 🦊',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductPana.png', // ⚠️ A changer
                    video: 'VideoPana.mp4',
                    description: 'Une pièce ultra-fine,  signée KGF, pensée pour les amateurs de profils gourmands et propres. La 35u Panacota filtrée brille par sa pureté visuelle, sa texture soyeuse et son travail de filtration d’une précision chirurgicale. \n\n Le profil aromatique est un vrai dessert : crème fraîche, vanille douce, sucre délicat, avec une rondeur lactée qui s’installe naturellement. C’est gourmand sans lourdeur, élégant et parfaitement maîtrisé. \n\n Chaque nuance est nette, fidèle et persistante, offrant une signature riche mais équilibrée, idéale pour celles et ceux qui recherchent finesse, constance et caractère.',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '25G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
                {
                    id: '🍓 Tutti Frutti 🍍',
                    flag: '🇲🇦',
                    name: '🍓 Tutti Frutti 🍍',
                    farm: 'KGF 🦊',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductTutti.png', // ⚠️ A changer
                    video: 'VideoTutti.mov',
                    description: '💎 FILTRÉ PREMIUM • HAUTE INTENSITÉ 💎\n\n Ce lot se distingue nettement des filtrés classiques par une concentration de terpènes bien supérieure. \n\n 👅 LE GOÛT : Une saturation aromatique totale. L’alliance fruits rouges / ananas est explosive et reste en bouche bien plus longtemps qu’un filtré standard.\n\n 🧠 L’EFFET : High élevé et percutant. La qualité du filtrage conserve tous les cannabinoïdes pour une montée franche et durable.\n\n 🦊 Signature KGF : Texture huileuse, propre, 0 déchet. Pour ceux qui cherchent la puissance avant tout.',
                    tarifs: [
                        { weight: '5G', price: 60.00 },
                        { weight: '10G', price: 100.00 },
                        { weight: '25G', price: 250.00 },
                        { weight: '50G', price: 380.00 },
                        { weight: '100G', price: 550.00 },
                    ]
                },
                {
                    id: '🍇 Acai Cake 🍰',
                    flag: '🇲🇦',
                    name: '🍇 Acai Cake 🍰',
                    farm: 'KGF 🦊',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductAcai.png', // ⚠️ A changer
                    video: 'VideoAcai.mov',
                    description: '💎 FILTRÉ PREMIUM • GOURMANDISE & PUISSANCE 💎\n\n Oubliez les standards. Cette version Premium de l’Acai Cake offre une profondeur de goût et une lourdeur d’effets rarement atteintes.\n\n 👅 LE GOÛT : Une saveur pâtissière "Loud". Les notes de cake vanillé et de baies d’Açaï sont ultra prononcées, offrant une fumée dense et crémeuse qui tapisse le palais.\n\n 🧠 L’EFFET : Grosse charge. Le niveau de THC est préservé au maximum pour un effet relaxant profond, quasi narcotique. \n\n 🦊 Signature KGF : Un hash sombre, gras et puissant. Réservé aux tolérances élevées.',
                    tarifs: [
                        { weight: '5G', price: 60.00 },
                        { weight: '10G', price: 100.00 },
                        { weight: '25G', price: 250.00 },
                        { weight: '50G', price: 380.00 },
                        { weight: '100G', price: 550.00 },
                    ]
                },
                {
                    id: 'RUNTZ',
                    flag: '🇲🇦',
                    name: '🍭 RUNTZ 🍧',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductRu.png',
                    video: 'VideoRu.mov',
                    description: 'Un concentré de douceur et de maîtrise. Ce 3x filtré 90 microns RUNTZ révèle toute la gourmandise emblématique de la strain : des notes sucrées de bonbon, de fruits mûrs et une légère touche crémeuse qui arrondit parfaitement le profil.\n Le triple filtrage garantit une matière ultra propre, à la texture grasse, souple et fondante, avec une combustion nette et régulière. En bouche, les saveurs sont intenses mais élégantes, longues et sans lourdeur, pour une expérience aussi savoureuse que qualitative.\n\n 🔥 Points forts :\n • Profil RUNTZ sucré et candy\n • Triple filtration pour une pureté maximale\n • Texture fondante et combustion clean\n • Sélection NO FARM\n\n Un Dry Premium, équilibré et ultra gourmand, destiné aux amateurs de produits raffinés et bien travaillés. 🍬💎',
                    tarifs: [
                        { weight: '10G', price: 60.00, badge: 'PROMO ⚡️' },
                        { weight: '20G', price: 100.00, badge: 'PROMO ⚡️' },
                        { weight: '50G', price: 220.00, badge: 'PROMO ⚡️' },
                        { weight: '100G', price: 400.00, badge: 'PROMO ⚡️' },
                    ]
                },
                {
                    id: 'TWIX STRAWBERRY GUMMY',
                    flag: '🇲🇦',
                    name: '🍫 TWIX STRAWBERRY GUMMY 🍓',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductTwix.png',
                    video: 'VideoTwix.mov',
                    description: 'Un profil ultra gourmand et régressif. Ce 3x filtré 90 microns TWIX STRAWBERRY GUMMY combine des notes sucrées de fraise candy, de chocolat doux et une touche biscuitée crémeuse, rappelant une confiserie fondante et addictive.\n Grâce au triple filtrage, la matière est extrêmement propre, avec une texture grasse, souple et fondante. La combustion est nette, la fumée douce et savoureuse, laissant une longueur en bouche sucrée et fruitée parfaitement maîtrisée.\n\n 🔥 Points forts :\n • Arômes fraise gummy, chocolat et biscuit\n • Triple filtration pour une pureté maximale\n • Texture fondante et combustion clean\n • Sélection NO FARM  \n\n Un Dry Premium, intensément gourmand, pensé pour les amateurs de saveurs sucrées, candy et ultra clean. 🍬💎',
                    tarifs: [
                        { weight: '10G', price: 60.00, badge: 'PROMO ⚡️' },
                        { weight: '20G', price: 100.00, badge: 'PROMO ⚡️' },
                        { weight: '50G', price: 220.00, badge: 'PROMO ⚡️' },
                        { weight: '100G', price: 400.00, badge: 'PROMO ⚡️' },
                    ]
                },
                {
                    id: 'SKITTLES',
                    flag: '🇲🇦',
                    name: '🍊 SKITTLES 🍬',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductSkit.png',
                    video: 'VideoSkit.mov',
                    description: 'Un profil ultra fruité et explosif. Ce 3x filtré 90 microns SKITTLES délivre une palette aromatique intense mêlant bonbons tropicaux, agrumes sucrés et notes candy acidulées, fidèle à la strain mythique dont il porte le nom.\n Grâce au triple filtrage, la matière est exceptionnellement propre, avec une texture grasse, souple et fondante. La combustion est nette et homogène, la fumée douce et parfumée, laissant une longueur en bouche sucrée et fruitée qui rappelle un mélange de bonbons arc-en-ciel.\n\n 🔥 Points forts :\n • Arômes candy, fruits tropicaux et agrumes\n • Triple filtration pour une pureté maximale\n • Texture fondante & combustion clean\n • Sélection NO FARM\n\n Un Dry Premium, intensément gourmand et aromatique, pensé pour les amateurs de profils candy, fruités et ultra clean 🍬💎',
                    tarifs: [
                        { weight: '10G', price: 60.00, badge: 'PROMO ⚡️' },
                        { weight: '20G', price: 100.00, badge: 'PROMO ⚡️' },
                        { weight: '50G', price: 220.00, badge: 'PROMO ⚡️' },
                        { weight: '100G', price: 400.00, badge: 'PROMO ⚡️' },
                    ]
                }/* ,
                {
                    id: 'SUPER SOAKER',
                    flag: '🇲🇦',
                    name: '💦 SUPER SOAKER 🍉',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductSoa.png',
                    video: 'VideoSoa.mov',
                    description: 'Un profil ultra frais et juteux. Ce 3x filtré 90 microns Super Soaker développe des arômes puissants de fruits rouges gorgés de sucre, pastèque fraîche et bonbon acidulé, avec une sensation aqueuse et rafraîchissante qui rappelle un candy estival.\n Grâce au triple filtrage, la matière est extrêmement propre, affichant une texture grasse, souple et fondante. La combustion est clean et régulière, la fumée douce et aromatique, laissant une longueur en bouche fruitée, fraîche et légèrement acidulée.\n\n 🔥 Points forts :\n  Notes de pastèque, fruits rouges et candy frais\n • Triple filtration pour une pureté maximale\n • Texture fondante & combustion nette\n • Sélection NO FARM\n\n Un Dry Premium, rafraîchissant et gourmand, idéal pour les amateurs de profils fruités, juteux et ultra clean 🍉💎',
                    tarifs: [
                        { weight: '10G', price: 60.00, badge: 'PROMO ⚡️' },
                        { weight: '20G', price: 100.00, badge: 'PROMO ⚡️' },
                    ]
                } *//* ,
                {
                    id: 'PremiumDur',
                    flag: '🇲🇦',
                    name: 'PREMIUM DUR CASSANT 🍯',
                    farm: '👨‍🌾 DHF Farmz 👨‍🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductPremiumDur.png',
                    videos: [
                        'VideoUni.mp4',
                        'VideoCandy.mp4',
                        'VideoHead.mp4'
                                        ],
                    description: '🏺 L’ART DU DUR CASSANT BY DHF 🏺 \n\n Oubliez le mou commercial. Ici on parle de "Glassy Tech" : un hash dur comme de la pierre à froid, qui devient une crème bulleuse au contact de la flamme. \n\n 🔥 Pourquoi le choisir ?\n • Conservation des terpènes maximale (coque protectrice)\n • Défonce lucide et puissante (High Clean)\n • 5 Variétés certifiées (Pas de mélange)\n\n 👅 Les Saveurs :\n Du fruité (Unicornz) au Gazeux (Head Banger) en passant par le Crémeux (Purple/Zushi). \n\n ⚠️ Conseil : À travailler au couteau ou à effriter finement pour une combustion parfaite.',
                    variantTitle: 'Saveurs Premium ❄️ :',
                    jars: [
                        { name: 'UNICORNZ ÉLITE', emoji: '🟠', colorClass: 'style-brown' },
                        { name: 'CANDY CANE', emoji: '🔴', colorClass: 'style-red' },
                        { name: 'HEAD BANGER', emoji: '🟡', colorClass: 'style-yellow' },
                
                    ],
                    tarifs: [
                        { weight: '5G', price: 60.00 },
                        { weight: '10G', price: 80.00, badge: 'PROMO ⚡️' },
                        { weight: '25G', price: 200.00 },
                        { weight: '50G', price: 280.00, badge: 'PROMO ⚡️' },
                        { weight: '100G', price: 450.00, badge: 'PROMO ⚡️' },
                    ]
                } *//* ,
                {
                    id: 'GRAND DADDY 💙',
                    flag: '🇲🇦',
                    name: 'GRAND DADDY 💙',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductDaddy.png',
                    video: 'VideoDaddy.mp4',
                    description: '3X FILTRE DHF 120U PREMIUM',
                    tarifs: [
                        { weight: '5G', price: 60.00 },
                        { weight: '10G', price: 80.00, badge: 'PROMO ⚡️' },
                    ]
                } */
            ]
        },
        {
            id: 'STATIC',
            name: 'STATIC 🇲🇦',
            type: 'DoubleStatic',
            quality: 'STATIC 🇲🇦',
            image: 'CategDouble.png', // Ton image de catégorie Weed

            products: [
              /*   {
                    id: 'BLUESUNSET',
                    flag: '🇲🇦',
                    name: 'BLUE SUNSET SHERBET🥵💙',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductSunset.png', // ⚠️ A changer
                    video: 'VideoSunset.mp4',
                    description: 'Pour les gros pecs static tout droit venu de la source que des gros drop en 2026 🍯🥵',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 140.00 },
                        { weight: '20G', price: 280.00 },
                        { weight: '50G', price: 400.00 },
                        { weight: '100G', price: 750.00 },
                    ]
                }, */
              /*   {
                    id: 'LAKERS',
                    flag: '🇲🇦',
                    name: 'LAKERS FARM STATIC 🇲🇦🍯',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductLakers.png', // ⚠️ A changer
                    video: 'VideoLakers.mov',
                    description: 'TRES BON GOUT GROSSE HIGH LAKERS STATIC TRES BIEN REPUTÉ',
                    tarifs: [
                        { weight: '5G', price: 100.00 },
                        { weight: '10G', price: 150.00 },
                        { weight: '20G', price: 280.00 },
                    ]
                }, */
               /*  {
                    id: 'OLIVE',
                    flag: '🇲🇦',
                    name: '🍫 OLIVE HASBULLA 🍯🫒',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductOlive.png', // ⚠️ A changer
                    video: 'VideoOlive.mov',
                    description: 'OLIVE DOUBLE STATIC TRES GROS GOUT PRONONCÉ ET HIGH QUI TE MET UNE VRAI FRAPPE POUR LES GROS PECS 🍯',

                         // 👇 NOUVELLE STRUCTURE
                         variantTitle: 'Choisis ton goût 🥣 :',
                         jars: [
                             { name: 'CEREAL MILK', emoji: '🍼🥵', colorClass: 'style-passion' },
                             { name: 'PINA', emoji: '🍍🤯', colorClass: 'style-melon' },
                             { name: 'GEORGIA PIE', emoji: '🍑🍯', colorClass: 'style-orange' }
                         ],

                    tarifs: [
                        { weight: '5G', price: 100.00 },
                        { weight: '10G', price: 150.00 },
                        { weight: '20G', price: 280.00 },
                    ]
                }, */
            ]
        },

   /*      // ============================================================
        // CATEGORIE 2 : HASH 🍫
        // ============================================================
        {
            id: 'HASH',
            name: '🍫 HASH',
            type: 'Hash',
            quality: '🍫 Hashish',
            image: 'CategExctra.png',

            farms: [
                // 1. JAUNE CRÉMEUX 🍯
                {
                    id: 'JAUNE_CREMEUX',
                    name: 'JAUNE CRÉMEUX 🍯',
                    image: '',
                    badgeText: 'Classique',
                    products: [
                        {
                            id: 'Og',
                            flag: '🇪🇸',
                            name: '🧽 OG KUSH & BUBAA KUSH 🧽',
                            farm: '🌾 No Farm 🌾',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductOg.jpg',
                            video: 'VideoOg.mov',
                            description: '🧽Jaune mousseux top crème 🧽⬇️ \n\n - Jaune crémeux comme on aime avec bonne défonce  🚬 \n -super odeur de bonne plante 🌱',
                            tarifs: [
                                { weight: '10g', price: 40.00 },
                                { weight: '25g', price: 100.00 },
                                { weight: '50g', price: 160.00 },
                                { weight: '100g', price: 280.00 },
                            ]
                        }
                    ]
                },

                // 2. CALI MOUSSE 🧬 (Nouvelle entrée distincte)
                {
                    id: 'CALI_MOUSSE_BTN',
                    name: 'CALI MOUSSE 🧬',
                    image: '', // Mets l'image qui correspond au Cali Mousse
                    badgeText: 'Filtré',
                    products: [
                  
                    ]
                },

                // 3. DRY SIFT HASH ⚡️ 
                {
                    id: 'DRY_SIFT',
                    name: 'DRY SIFT HASH ⚡️',
                    image: '',
                    badgeText: '90u',
                    products: [
                        {
                            id: 'feat',
                            flag: '🇲🇦',
                            name: 'Barbara punch 90u⚡️',
                            farm: 'Goat Farmers 🐐🍀',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductFeat.png',
                            video: 'VideoFeat.mov',
                            description: 'Réel collaborations avec La farmz Goat farmers \n ( single source marocain de grande qualité )',
                            tarifs: [
                                { weight: '10g', price: 60.00 },
                                { weight: '25g', price: 150.00 },
                                { weight: '50g', price: 250.00 },
                                { weight: '100g', price: 430.00 },
                            ]
                        }
                       
                    ]
                },

                // 4. 120U PREMIUM (Avec les options de goût qu'on a ajoutées)
                {
                    id: '120U_PREMIUM',
                    name: '120U PREMIUM 🛖',
                    image: '',
                    badgeText: 'Top Qualité',
                    products: [
                        {
                            id: '120u',
                            flag: '🇲🇦',
                            name: '🛖 120u Premium 2026',
                            farm: 'DHF FARMZ ✨',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductPapaya.png',
                            images: [
                                'ProductGrandDaddy.jpg',
                                'ProductPapaya.jpg',
                            ],
                            video: 'VideoPapaya.mov',
                            description: 'La maison et connue 🏠🔥\n un super 120u prenium 🤝 \n Sec petant avec un goût assez fruité...',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Choisis ton goût 🥣 :',
                            jars: [
                                { name: 'PAPAYA BOMB', emoji: '🥤🧨', colorClass: 'style-red' },
                                { name: 'LA GRANDADDY', emoji: '☔️☔️', colorClass: 'style-purple' }
                            ],

                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 450.00 },
                            ]
                        },
                        {
                            id: 'PURPLE',
                            flag: '🇲🇦',
                            name: 'PURPLE CREAM',
                            farm: 'DHF FARMZ ✨',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductCream.png',
                            video: 'VideoCream.mov',
                            description: '🛖 120u Premium 2026 \n\n La maison et connue 🏠🔥\n un super 120u prenium 🤝 \n Sec petant avec un goût assez fruité...',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 450.00 },
                            ]
                        },
                        {
                            id: 'BLUE ZUSHI',
                            flag: '🇲🇦',
                            name: 'BLUE ZUSHI',
                            farm: 'DHF FARMZ ✨',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBlueZ.png',
                            video: 'VideoBlueZ.mov',
                            description: '🛖 120u Premium 2026 \n\n La maison et connue 🏠🔥\n un super 120u prenium 🤝 \n Sec petant avec un goût assez fruité...',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 450.00 },
                            ]
                        },
                        {
                            id: 'CANDY GANE',
                            flag: '🇲🇦',
                            name: 'CANDY GANE',
                            farm: 'DHF FARMZ ✨',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductGane.png',
                            video: 'VideoGane.mov',
                            description: '🛖 120u Premium 2026 \n\n La maison et connue 🏠🔥\n un super 120u prenium 🤝 \n Sec petant avec un goût assez fruité...',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 450.00 },
                            ]
                        },
                        {
                            id: 'HEAD BANGER',
                            flag: '🇲🇦',
                            name: 'HEAD BANGER',
                            farm: 'DHF FARMZ ✨',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductHead.png',
                            video: 'VideoHead.mov',
                            description: '🛖 120u Premium 2026 \n\n La maison et connue 🏠🔥\n un super 120u prenium 🤝 \n Sec petant avec un goût assez fruité...',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 450.00 },
                            ]
                        },
                        {
                            id: 'UNICORNZ ÉLITE',
                            flag: '🇲🇦',
                            name: 'UNICORNZ ÉLITE',
                            farm: 'DHF FARMZ ✨',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductUni.png',
                            video: 'VideoUni.mov',
                            description: '🛖 120u Premium 2026 \n\n La maison et connue 🏠🔥\n un super 120u prenium 🤝 \n Sec petant avec un goût assez fruité...',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 450.00 },
                            ]
                        },
                    ]
                },

                // 5. FROZEN PREMIUM ❄️
                {
                    id: 'FROZEN',
                    name: 'FROZEN PREMIUM ❄️',
                    image: '',
                    badgeText: 'Terps',
                    products: [
                        {
                            id: 'Buchettes',
                            flag: '🇲🇦',
                            name: 'Buchettes 🪵',
                            farm: 'Singe Source ♻️',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBuchettes.jpg',
                            videos: [
                                'VideoBuch.mov', // Ta 1ère vidéo
                                'VideoBuch2.mov'  // Ta 2ème vidéo
                            ],
                            description: '🎄❄️ Exclu Uniquement chez nous Noël chez PISTACHIO420 🌿🔥\n\n ~ Extraction haut de gamme, arômes ultra frais✨ \n ~ texture propre et qualité premium 🥇 \n\n 🎄😮‍💨 Cette année, la bûche de Noël se déguste aussi en version Fresh Frozen ❄️🔥',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Saveurs Frozen ❄️ :', 
                            jars: [
                                { name: 'RS11', emoji: '💨💨', colorClass: 'style-purple' },
                                { name: 'I.C.C', emoji: '🍦🍦', colorClass: 'style-brown' },
                            ],

                            tarifs: [
                                { weight: '🪵x1', price: 130.00 },               
                                { weight: '🪵x2', price: 250.00 },
                                { weight: '🪵x4', price: 420.00 },


                            ]
                        },
                        {
                            id: 'Frozensift',
                            flag: '🇲🇦',
                            name: '🫒 Frozen sift ⚡️🏆',
                            farm: '🌾 No Farm 🌾',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductSift.jpg',
                            videos: [
                                'VideoSift.mov', // Ta 1ère vidéo
                                'VideoSift2.mov'  // Ta 2ème vidéo
                            ],
                            description: '🏠 No FARMZ incroyable 🏆   \n Vous les connaissait déjà produit plus que satisfaisant 🥇\n  Sec pétante 🫡\n Défonce super présente ces pour les gros pec 🤓\n 130 chez nous 😋😋\n On me chuchote que sa les vend 170 en I.D.F 🤭🤭',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Saveurs Frozen ❄️ :',
                            jars: [
                                { name: 'POISON', emoji: '💀', colorClass: 'style-purple' },
                                { name: 'ORANGE GROW', emoji: '🍊', colorClass: 'style-orange' },
                                { name: 'OREOZ', emoji: '🍩', colorClass: 'style-brown' },
                                { name: 'PANNACOTA', emoji: '🍮', colorClass: 'style-red' },

                            ],

                            tarifs: [
                                { weight: '🫒x1', price: 130.00 },               
                                { weight: '🫒x3', price: 350.00 },
                                { weight: '🫒x5', price: 500.00 },
                            ]
                        },
                        
                        {
                            id: 'FrozenSource',
                            flag: '⚡️',
                            name: '🇲🇦Frozen Sift Hash ⚡️🌬️',
                            farm: 'LA SOURCE 🥇',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductSource.png',
                               images: [
                                'ProductSource.png',
                                'ProductSource2.jpg',
                            ],
                            videos: [
                                'VideoSource.mov', // Ta 1ère vidéo
                                'VideoSource2.mov'  // Ta 2ème vidéo
                            ],
                            description: '~ Saison 2026 🪐 \n La source 🏠 Nous à sortie un ❄️ magnifique 🔥 \n Le goût l’odeur tout et la 🏆 \n Juste les vidéo donne envie 😋',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Choisis ton goût 🥣 :',
                            jars: [
                                { name: 'Pink passion', emoji: '👛❤️‍🔥', colorClass: 'style-passion' },
                                { name: 'Water melon ', emoji: '🍈 💦', colorClass: 'style-melon' }
                            ],

                            tarifs: [
                                { weight: '10g', price: 130.00 },
                                { weight: '25g', price: 250.00 },
                                { weight: '50g', price: 370.00 },
                            ]
                        }
                    ]
                },

                // 6. STATIC MOROCCO 🇲🇦
                {
                    id: 'STATIC_MOROCCO',
                    name: 'STATIC MOROCCO 🇲🇦',
                    image: '', // Mets une image de Static
                    badgeText: 'Saison 2026',
                    products: [
                        {
                            id: 'Tepo / Gelato',
                            flag: '🇲🇦',
                            name: 'Tepo / Gelato 🦅',
                            farm: '🏠 STATIC NO FARMZ',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductTepo.jpg',
                            video: 'VideoTepo.mov',
                            description: '180/90u 🍁',
                            tarifs: [
                                { weight: '5g', price: 70.00 },
                                { weight: '10g', price: 130.00 },
                            ]
                        },
                        {
                            id: 'Black',
                            flag: '🇲🇦',
                            name: 'Black Cherry 🍒',
                            farm: '🏠 STATIC NO FARMZ',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBlack.jpg',
                            video: 'VideoBlack.mov',
                            description: 'Un static marocain haut de gamme, travaillé avec soin, qui se distingue immédiatement par son profil aromatique intense et profond.🥇⚡️ 🏆 \n Un static marocain de très haut niveau, axé sur une intensité aromatique rare, avec un profil Black Cherry sombre, sucré et profond. Idéal pour ceux qui privilégient l’odeur, le goût et la finesse du filtrage. 🔱',
                            tarifs: [
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 150.00 },
                                { weight: '20g', price: 250.00 },
                            ]
                        },
                        {
                            id: '220u',
                            flag: '🇲🇦',
                            name: 'K.G.F STATIC 🏆🥇',
                            farm: 'KILO GRAMMES FARMERZ ⚡️',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductKgf.png',
                          
                            video: 'VideoKgf.mov',
                            description: 'K.G.F STATIC 🏆🥇 \n Un produit d’exception de la maison KGF 🏆 \n uJamais déçu 🥇 \n Goût plus fumette douce mes en même temp forte 💪\n Une odeur qui se dégage quand tu allume le joint wahouu 🔱🔱🔥 🏠🔥\n\n 190/220u ( Réal no fake )🔥',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Choisis ton goût 🥣 :',
                            jars: [
                                { name: 'CHEERY CAKE X ORANGE PUNCH', emoji: '🍒🍊', colorClass: 'style-red' },
                                { name: 'LAMPONI', emoji: '✅', colorClass: 'style-brown' }
                            ],

                            tarifs: [
                                { weight: '5g', price: 90.00 },
                                { weight: '10g', price: 160.00 },
                      
                            ]
                        }
                    ]
                },

                // 7. STATIC USA 🇺🇸
                {
                    id: 'STATIC_USA',
                    name: 'STATIC USA 🇺🇸',
                    image: '',
                    badgeText: 'Exclusif',
                    products: [
                        {
                            id: 'StaticUSA',
                            flag: '🇺🇸',
                            name: '🗽 Kevin breats 🇺🇸',
                            farm: 'BLOOD&PRESS 🔱',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductKevin.png',
                            video: 'VideoKevin.mov',
                            description: '~Un hybride premium combinant la gourmandise crémeuse Forbidden et les notes sucrée de son fruit. 🍇   \n ~ En bouche ou à l’odeur on sent que sa était travailler avec amour 😍 🇺🇸\n ~Arômes sucrés, texture résineuse et pétante après mutation légère🌬️💨 et profil terpène riche🔥🧨 \n ~Déjà connue des habituer 🥇🏅🎖️',
                            tarifs: [
                                { weight: '1g', price: 40.00 },
                                { weight: '3g', price: 100.00 },
                                { weight: '10g', price: 320.00 },

                            ]
                        },
                        {
                            id: 'HASHIVAStaticUSA',
                            flag: '🇺🇸',
                            name: '🇺🇸💎 CANDY BEZELS 💎🇺🇸',
                            farm: 'HASHIVA STATIC 💙',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBezels.jpg',
                            video: 'VideoBezels.mov',
                            description: '💎 HASHIVA STATIC USA 💎 \n Straight from USA 🇺🇸, ce static sift d’élite affiche une robe dorée brillante ✨🍯, résultat d’un tri ultra-clean et d’un savoir-faire top-shelf 🧬.\n\n Profil terpènique candy luxury 🍬🍭 : \n 🍓 fruits sucrés \n 🍬 bonbon haut de gamme \n ⛽ touche gazzy crémeuse signature US',
                            tarifs: [
                                { weight: '2g', price: 80.00 },
                                { weight: '5g', price: 180.00 },
                                { weight: '10g', price: 330.00 },

                            ]
                        },
                    ]
                },
                // 8. EXCTRACTION 🇺🇸
                {
                    id: 'ExctraUsa',
                    name: 'EXCTRACTION 🇺🇸',
                    image: '',
                    badgeText: 'Piatella',
                    products: [
                        {
                            id: 'LEMON TREEZ',
                            flag: '🇺🇸',
                            name: '🍋 LEMON TREEZ 🌲',
                            farm: 'PIATELLA ALBINOS 🧉',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductKevin.png',
                            video: 'VideoKevin.mov',
                            description: '159/73u 🎖️',
                            tarifs: [
                                { weight: '1g', price: 50.00 },
                                { weight: '5g', price: 220.00 },
                                { weight: '10g', price: 380.00 },

                            ]
                        }
                    ]
                }
            ]
        },
        // ============================================================
    // CATEGORIE 3 : PACKS DE NOEL 🎄
    // ============================================================
    {
        id: 'PACKS',
        name: '⏳ PACK 2025 ⌛️',
        type: 'Pack',
        quality: '⭐️ Offres Spéciales', // S'affichera dans le filtre "Sélection du chef"
        image: 'CategPack2025.png', // ⚠️ Pense à mettre une image festive ici

        // PAS DE FARMS, DIRECTEMENT LES PRODUITS
        products: [
            {
                id: '🌟 PACK 150 🌟',
                flag: '🎁',
                name: '🌟 PACK 150 🌟',
                farm: '🚨 MEGA PACK 2026 📅',
                promoEligible: false, // En général pas de code promo sur les packs déjà remisés
                type: 'Pack',
                image: '', // L'image du pack
                video: '', // Tu peux mettre une vidéo de l'ensemble si tu as

                // 'targetId' doit être l'ID EXACT du produit vers lequel tu veux aller
                packContents: [
                    { name: '5g : Cali Us ( au choix ) 🇺🇸', targetId: 'CALI_USA' },
                    { name: '5g : Frozen Sift Hash ⚡️🌬️ ', targetId: 'FrozenSource' },
                    { name: '5g : 🛖 120u Premium 2026 ( au choix ) ', targetId: '120U_PREMIUM' },
                ],
                
                // Description formatée avec les sauts de ligne
                description: 'Qualité lourde, terps ouverts à fond 🤤🌿🔥',
                
                tarifs: [
                    { weight: 'LE PACK 📦', price: 150.00 },
                ]
            },
            {
                id: '🔥 PACK 300 🔥',
                flag: '🎁',
                name: '🔥 PACK 300 🔥',
                farm: '🚨 MEGA PACK 2026 📅',
                promoEligible: false, // En général pas de code promo sur les packs déjà remisés
                type: 'Pack',
                image: '', // L'image du pack
                video: '', // Tu peux mettre une vidéo de l'ensemble si tu as

                // 'targetId' doit être l'ID EXACT du produit vers lequel tu veux aller
                packContents: [
                    { name: '10g : Cali 🇨🇦💎', targetId: 'PurpleBud' },
                    { name: '10g : Frozen Sift 🫒❄️', targetId: 'Frozensift' },
                    { name: '10g : Fresh Frozen 🪵🧊', targetId: 'Buchettes' },
                    { name: '2g : KGF Static 🇲🇦✨', targetId: '220u' } // J'ai mis StaticUSA en exemple, mets l'ID de ta Cali
                ],
                
                // Description formatée avec les sauts de ligne
                description: 'Qualité lourde, terps ouverts à fond 🤤🌿🔥',
                
                tarifs: [
                    { weight: 'LE PACK 📦', price: 300.00 },
                ]
            },
            {
                id: '💥 PACK 600 💥',
                flag: '🎁',
                name: '💥 PACK 600 💥',
                farm: '🚨 MEGA PACK 2026 📅',
                promoEligible: false, // En général pas de code promo sur les packs déjà remisés
                type: 'Pack',
                image: '', // L'image du pack
                video: '', // Tu peux mettre une vidéo de l'ensemble si tu as

                // 'targetId' doit être l'ID EXACT du produit vers lequel tu veux aller
                packContents: [
                    { name: '25g : Cali 🇨🇦💎', targetId: 'PurpleBud' },
                    { name: '20g : Frozen Sift 🫒❄️', targetId: 'Frozensift' },
                    { name: '20g : Fresh Frozen 🪵🧊', targetId: 'Buchettes' },
                ],
                
                // Description formatée avec les sauts de ligne
                description: 'Qualité lourde, terps ouverts à fond 🤤🌿🔥',
                
                tarifs: [
                    { weight: 'LE PACK 📦', price: 300.00 },
                ]
            }
        ]
    } */
    ];

    // --- VARIABLES D'ÉTAT ---
    let cart = [];
    let currentFilters = {
        searchTerm: '',
        quality: 'all',
        farm: 'all'
    };
    let currentView = 'categories'; // 'categories', 'farms', ou 'products'
    let currentCategoryId = null; // Garde en mémoire la catégorie sélectionnée
    let currentFarmId = null; // Garde en mémoire la farm sélectionnée
    let appliedPromo = null; // Pour suivre le code promo
    let paymentMethod = 'Espèce'; // Méthode de paiement par défaut

    // --- DÉFINIS TES CODES PROMO ICI ---
    const validPromoCodes = {
      /*   "": {
            type: 'fixed', // 'percent' (pourcentage) ou 'fixed' (fixe)
            value: 10,       // 20%
            appliesTo: 'eligible', // 'eligible' (articles marqués) ou 'all' (tout le panier)
            cumulative: false // <-- AJOUTE CETTE LIGNE
        },
        "": {
            type: 'fixed', // 'percent' (pourcentage) ou 'fixed' (fixe)
            value: 10,       // 20%
            appliesTo: 'eligible', // 'eligible' (articles marqués) ou 'all' (tout le panier)
            cumulative: false // <-- AJOUTE CETTE LIGNE
        } */
        /*  "WELCOME5": {
             type: 'percent',   // 20%
             value: 20,        // 20%
             appliesTo: 'all' // S'applique à tout
         } */
        // Ajoute d'autres codes ici

        // ADD CUMULABLE FONCTION POUR PLUTARD
    };


    // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
    const pages = document.querySelectorAll('.page');
    const productListContainer = document.getElementById('product-list');
    const loaderPage = document.getElementById('page-loader');

    const filterContainer = document.querySelector('.filters');

    // --- NOUVEAUX SÉLECTEURS POUR CHAQUE FILTRE ---
    const searchFilterWrapper = document.getElementById('search-filter').parentElement;
    const qualityFilterWrapper = document.getElementById('quality-filter').parentElement;
    const farmFilterWrapper = document.getElementById('farm-filter').parentElement;
    // --- FIN NOUVEAUX SÉLECTEURS ---

    // --- HELPER : TROUVER UN PRODUIT PAR SON ID ---
    function getProductById(productId) {
        for (const category of appData) {
            // 1. Cherche dans les produits directs (Nouveau cas)
            if (category.products) {
                const product = category.products.find(p => p.id === productId);
                if (product) return product;
            }

            // 2. Cherche dans les farms (Ancien cas)
            if (category.farms) {
                for (const farm of category.farms) {
                    const product = farm.products.find(p => p.id === productId);
                    if (product) return product;
                }
            }
        }
        return undefined; // Non trouvé
    }

    // --- NAVIGATION ---
    function showPage(pageId) {
        pages.forEach(p => p.classList.remove('active'));
        // S'assure que la page existe avant de l'activer
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.add('active');
        }

        // --- GESTION AUTOMATIQUE DES BOUTONS NAV ---
        const homeNav = document.getElementById('nav-menu');
        const infoNav = document.getElementById('nav-info'); // On ajoute l'info
        const contactNav = document.getElementById('nav-contact');
        const avisNav = document.getElementById('nav-avis'); // <-- AJOUT ICI

        // On reset tout
        homeNav.classList.remove('active');
        infoNav.classList.remove('active');
        contactNav.classList.remove('active');
        if (avisNav) avisNav.classList.remove('active'); // <-- AJOUT ICI

        // On active le bon
        if (pageId === 'page-contact') {
            contactNav.classList.add('active');
        } else if (pageId === 'page-info') {
            infoNav.classList.add('active');
        } else if (pageId === 'page-avis') { // <-- LA NOUVELLE CONDITION
            if (avisNav) avisNav.classList.add('active');
        }else {
            // Pour page-home, page-produit, panier, etc.
            homeNav.classList.add('active');
        }
    }

    // --- LOGIQUE D'AFFICHAGE ---

    // --- MODIFIÉ : renderHomePage ---

    function renderHomePage() {
        // Toujours afficher le conteneur principal des filtres
        filterContainer.style.display = 'flex';

        // On enlève les anciens boutons "retour"
        const existingBackBtnCat = filterContainer.querySelector('.back-to-categories-btn');
        if (existingBackBtnCat) existingBackBtnCat.remove();
        const existingBackBtnFarm = filterContainer.querySelector('.back-to-farms-btn');
        if (existingBackBtnFarm) existingBackBtnFarm.remove();


        if (currentView === 'categories') {
            renderCategoryList();

            // --- GESTION DES FILTRES (Vue Catégorie) ---
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'flex'; // On montre QUE la qualité

            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';

        } else if (currentView === 'farms') {
            renderFarmList(currentCategoryId);

            // --- GESTION DES FILTRES (Vue Farms) ---
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none'; // Pas de filtres pour les farms
            qualityFilterWrapper.style.display = 'none';

            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)'; // 1 colonne pour les farms

            // --- AJOUT BOUTON RETOUR (vers Catégories) ---
            const category = appData.find(c => c.id === currentCategoryId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn'; // CLASSE IMPORTANTE
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
            backButton.style.cssText = `
            border: none;
            color: #f16101;
            padding: 40px;
            font-weight: 700;
            cursor: pointer;
            gap: 10px;
            box-sizing: border-box;
            margin-top: 3vh;
            font-family: Copperplate;
            height: 7vh;
            font-size: 1.8vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(194deg, rgb(100 35 33), #0000004f);
            border-radius: 10px;`;

            filterContainer.prepend(backButton);

        } else if (currentView === 'simple_products') { 

            updateFarmFilter(currentCategoryId);

            renderProductListSimple(currentCategoryId);

            // --- GESTION DES FILTRES ---
            // 1. On AFFICHE la barre de recherche
            searchFilterWrapper.style.display = 'flex';
            
            // 2. On AFFICHE le filtre Farm
            farmFilterWrapper.style.display = 'flex'; 
            
            // 3. On CACHE le filtre Qualité ("Sélection du chef")
            qualityFilterWrapper.style.display = 'none';

            // --- AJOUT BOUTON RETOUR (vers Catégories) ---
            const category = appData.find(c => c.id === currentCategoryId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn';
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;

            backButton.style.cssText = `
            border: none;
            color: #f16101;
            padding: 40px;
            font-weight: 700;
            cursor: pointer;
            gap: 10px;
            box-sizing: border-box;
            margin-top: 3vh;
            font-family: Copperplate;
            height: 7vh;
            font-size: 1.8vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(194deg, rgb(100 35 33), #0000004f);
            border-radius: 10px;`;

            filterContainer.prepend(backButton);

            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

        } else if (currentView === 'products') {
            updateFarmFilter(currentCategoryId, currentFarmId); 

            renderProductList(currentCategoryId, currentFarmId);

            // --- GESTION DES FILTRES (Vue Produit) ---
            searchFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'flex'; // On montre les filtres produits
            qualityFilterWrapper.style.display = 'none'; // On cache la qualité

            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'; // 2 colonnes

            // --- AJOUT BOUTON RETOUR (vers Farms) ---
            const category = appData.find(c => c.id === currentCategoryId);
            const farm = category.farms.find(f => f.id === currentFarmId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-farms-btn'; // CLASSE IMPORTANTE
            backButton.innerHTML = `<svg width="24"
             height="24"
              viewBox="0 0 24 24"
              ><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>  ${farm.name}`;
            backButton.style.cssText = `
            border: none;
            color: white;
            padding: 40px;
            font-weight: 700;
            cursor: pointer;
            gap: 10px;
            box-sizing: border-box;
            margin-top: 3vh;
            font-family: Copperplate;
            height: 7vh;
            font-size: 1.8vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(182deg, #480092, transparent);
                        border-radius: 10px;`;

            filterContainer.prepend(backButton);
        }
    }

// --- FONCTION MODIFIÉE : Filtre intelligent par Sous-Catégorie ---
function updateFarmFilter(categoryId, subCategoryId = null) {
    const category = appData.find(c => c.id === categoryId);
    const farmFilter = document.getElementById('farm-filter');
    
    if (!category) return;

    let availableFarms = [];

    // CAS 1 : On est dans une sous-catégorie précise (ex: Cali USA)
    if (subCategoryId && category.farms) {
        const subCategory = category.farms.find(f => f.id === subCategoryId);
        if (subCategory) {
            subCategory.products.forEach(p => {
                if (p.farm) availableFarms.push(p.farm);
            });
        }
    } 
    // CAS 2 : On est dans une catégorie globale ou simple (ex: Packs Noel ou tout voir)
    else {
        if (category.farms) {
            // Si c'est une catégorie à tiroirs, on prend tout
            category.farms.forEach(sub => {
                sub.products.forEach(p => {
                    if (p.farm) availableFarms.push(p.farm);
                });
            });
        } else if (category.products) {
            // Si c'est une catégorie simple
            category.products.forEach(p => {
                if (p.farm) availableFarms.push(p.farm);
            });
        }
    }

    // 2. On enlève les doublons
    const uniqueFarms = ['all', ...new Set(availableFarms)];

    // 3. On génère le HTML
    const currentValue = currentFilters.farm;
    
    farmFilter.innerHTML = uniqueFarms.map(farm => 
        `<option value="${farm}">${farm === 'all' ? '👨‍🌾  -  Toutes les farms' : farm}</option>`
    ).join('');

    // 4. On remet la valeur si elle existe toujours
    if (uniqueFarms.includes(currentValue)) {
        farmFilter.value = currentValue;
    } else {
        farmFilter.value = 'all';
        currentFilters.farm = 'all'; 
    }
}

    // --- MODIFIÉ : renderCategoryList ---
    // Prend en compte le filtre qualité
    function renderCategoryList() {
        const filteredCategories = appData.filter(category => {
            const searchMatch = category.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            // --- AJOUT ---
            const qualityMatch = currentFilters.quality === 'all' || category.quality === currentFilters.quality;
            return searchMatch && qualityMatch;
            // --- FIN AJOUT ---
        });

        productListContainer.innerHTML = '';
        if (filteredCategories.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucune catégorie ne correspond à votre recherche.</p>';
            return;
        }

        filteredCategories.forEach(category => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.dataset.categoryId = category.id;

            card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
              
            `;
            productListContainer.appendChild(card);
        });
    }

    // --- NOUVELLE FONCTION ---
    // Affiche la liste des FARMS pour une catégorie
    // --- FONCTION MODIFIÉE : Affichage liste bouton ---
    function renderFarmList(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) {
            productListContainer.innerHTML = '<p class="no-results">Catégorie non trouvée.</p>';
            return;
        }

        const farms = category.farms;

        // On change le style de la grille pour avoir une seule colonne (liste verticale)
        productListContainer.style.gridTemplateColumns = '1fr';
        productListContainer.style.gap = '10px'; // Espacement entre les boutons

        productListContainer.innerHTML = '';
        if (farms.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucune farm trouvée.</p>';
            return;
        }

        farms.forEach(farm => {
            const btn = document.createElement('div');
            // On change la classe pour ne plus utiliser le style "card"
            btn.className = 'farm-list-btn';
            btn.dataset.farmId = farm.id;

            if (farm.clickable === false) {
                btn.classList.add('unclickable');
            }

            const productCount = farm.products.length;
            const countText = productCount > 0 ? `${productCount} prod.` : '';

            // Structure : Icone | Nom + Badge | Flèche
            btn.innerHTML = `
            <div class="farm-btn-left">
                
                <div class="farm-btn-info">
                    <span class="farm-btn-title">${farm.name}</span>
                    <span class="farm-btn-subtitle">${farm.badgeText || countText}</span>
                </div>
            </div>
            <div class="farm-btn-right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6e6e73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>
        `;
            productListContainer.appendChild(btn);
        });
    }


// Affiche la liste des PRODUITS (Version corrigée : Pleine largeur + Sans image vide)
function renderProductListSimple(categoryId) {
    const category = appData.find(c => c.id === categoryId);
    if (!category || !category.products) {
        productListContainer.innerHTML = '<p class="no-results">Aucun produit ne correspond à cette catégorie.</p>';
        return;
    }

    // Mise à jour du filtre farm intelligent
    if(typeof updateFarmFilter === "function") updateFarmFilter(categoryId); 

    // On filtre le tableau products
    const filteredProducts = category.products.filter(product => {
        const searchMatch = product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
        const farmMatch = currentFilters.farm === 'all' || product.farm === currentFilters.farm;
        return searchMatch && farmMatch;
    });

    productListContainer.innerHTML = '';
    if (filteredProducts.length === 0) {
        productListContainer.innerHTML = '<p class="no-results">Aucun produit trouvé.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card product-item-card';
        card.dataset.productId = product.id;
        
        // --- 1. LOGIQUE PLEINE LARGEUR ---
        // Si c'est un Pack, on ajoute la classe spéciale
        if (product.type === 'Pack' || product.id === 'PackNoel2025') {
            card.classList.add('full-width');
        }

        if (product.clickable === false) card.classList.add('unclickable');

        let flagHTML = product.flag ? `<span class="product-flag">${product.flag}</span>` : '';

        // --- 2. LOGIQUE IMAGE (On affiche seulement si elle existe) ---
        let imgHTML = '';
        if (product.image && product.image !== '') {
            imgHTML = `<img src="${product.image}" alt="${product.name}">`;
        }

        card.innerHTML = `
            ${imgHTML}
            <div class="info">
                <div class="name">${product.name} ${flagHTML}</div>
                <div class="farm">${product.farm}</div> 
                <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
            </div>
        `;
        productListContainer.appendChild(card);
    });
}
    // Affiche la liste des PRODUITS pour une farm
    function renderProductList(categoryId, farmId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) {
            productListContainer.innerHTML = '<p class="no-results">Catégorie non trouvée.</p>';
            return;
        }
        const farm = category.farms.find(f => f.id === farmId);
        if (!farm) {
            productListContainer.innerHTML = '<p class="no-results">Farm non trouvée.</p>';
            return;
        }
        const filteredProducts = farm.products.filter(product => {
            const searchMatch = product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            // On a supprimé 'qualityMatch'. Le choix de la catégorie suffit.
            const farmMatch = currentFilters.farm === 'all' || product.farm === currentFilters.farm;

            return searchMatch && farmMatch; // On retourne sans le qualityMatch
        });

        productListContainer.innerHTML = '';
        if (filteredProducts.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucun produit ne correspond à votre recherche.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card product-item-card';
            card.dataset.productId = product.id;

            // Si c'est le Pack de Noël (vérifie bien que l'ID est correct), on met la classe large
        if (product.id === 'PackNoel2025' || product.type === 'Pack') {
            card.classList.add('full-width');
        }

            if (product.clickable === false) {
                card.classList.add('unclickable');
            }

            let flagHTML = product.flag ? `<span class="product-flag">${product.flag}</span>` : '';

     

            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="info">
                    <div class="name">${product.name} ${flagHTML}</div>
                    <div class="farm">${product.farm}</div>
                    <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                </div>
            `;
            productListContainer.appendChild(card);
        });
    }


    // Affiche la page de détail d'un produit
    function renderProductPage(productId) {
        const product = getProductById(productId);
        if (!product) return;
    
        document.getElementById('product-page-title').innerText = product.name;
        const detailsContainer = document.getElementById('product-details-content');
    
        // --- 1. GESTION INTELLIGENTE DES MÉDIAS ---
        let galleryHTML = '';
        let hasMedia = false;
    
        // Images
        let mediaItems = [];
        if (product.images && product.images.length > 0) {
            mediaItems = product.images;
        } else if (product.image && product.image !== '') {
            mediaItems = [product.image];
        }
    
        if (mediaItems.length > 0) {
            hasMedia = true;
            galleryHTML += mediaItems.map(imgSrc => `
                <div class="gallery-item"><img src="${imgSrc}" alt="${product.name}"></div>
            `).join('');
        }
    
        // Vidéos
        if (product.videos && product.videos.length > 0) {
            hasMedia = true;
            product.videos.forEach(videoSrc => {
                galleryHTML += `
                    <div class="gallery-item">
                        <video controls playsinline poster="${product.image || ''}">
                            <source src="${videoSrc}" type="video/mp4">
                        </video>
                    </div>`;
            });
        } else if (product.video && product.video !== '') {
            hasMedia = true;
            galleryHTML += `
                <div class="gallery-item">
                    <video controls playsinline poster="${product.image || ''}">
                        <source src="${product.video}" type="video/mp4">
                    </video>
                </div>`;
        }
    
        // --- 2. LE RESTE (OPTIONS, DESCRIPTION, TARIFS) ---

        // --- GESTION DU CONTENU PACK (Liens internes) ---
    let packLinksHTML = '';
    if (product.packContents && product.packContents.length > 0) {
        const links = product.packContents.map(item => `
            <div class="pack-item-btn" data-target-id="${item.targetId}">
                <span>${item.name}</span>
                <span class="pack-arrow">›</span>
            </div>
        `).join('');
        
        packLinksHTML = `
            <div class="pack-content-container">
                <div style="color:#8e8e93; font-size:0.9rem; margin-bottom:5px;">📦 CONTENU DU PACK :</div>
                ${links}
            </div>
        `;
    }
        let variantsHTML = '';
        if (product.jars && product.jars.length > 0) {
            const buttonsHTML = product.jars.map((jar, index) => `
                <div class="variant-btn ${index === 0 ? 'active ' + jar.colorClass : ''}" 
                     data-name="${jar.name} ${jar.emoji}" 
                     data-color-class="${jar.colorClass}">
                    <span class="emoji">${jar.emoji}</span>
                    <span class="text">${jar.name}</span>
                </div>
            `).join('');
            variantsHTML = `<div class="variant-selector-container"><div class="variant-title">${product.variantTitle || 'Choisir une option :'}</div><div class="variant-grid">${buttonsHTML}</div></div>`;
        } else if (product.options && product.options.length > 0) {
            variantsHTML = `<div class="product-options-container" style="margin-bottom: 15px;"><label style="color: #8e8e93; font-size: 0.9rem; margin-bottom: 5px; display:block;">Choisir :</label><select id="product-variant-select" style="width: 100%; padding: 12px; border-radius: 8px; background: #2c2c2e; color: white; border: 1px solid #3a3a3c;">${product.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}</select></div>`;
        }
    
        let tarifsHTML = product.tarifs.map(tarif => `
            <div class="tarif-item">
                <div class="box-tarif">
                ${tarif.badge ? `<span class="tarif-badge">${tarif.badge}</span>` : ''} <div class="tarif-wieght">${tarif.weight}</div>
                    <div class="tarif-price">${tarif.price.toFixed(2)}€</div>
                </div>
                <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                    <svg width="20" height="20"><use href="#icon-cart"/></svg>
                </button>
            </div>
        `).join('');
    
        let descriptionHTML = product.description ? `<p class="product-description">${product.description.replace(/\n/g, '<br>')}</p>` : '';
    
        const oldVideo = document.querySelector('#page-product .product-video');
        if(oldVideo) oldVideo.style.display = 'none';
    
        // --- 3. INJECTION (On cache la galerie si pas de média) ---
        detailsContainer.innerHTML = `
            ${hasMedia ? `<div class="product-gallery-wrapper">${galleryHTML}</div>` : ''}
            ${hasMedia ? `<div class="gallery-counter">Swipe ➡️</div>` : ''}
            
            <div class="name" style="margin-top: ${hasMedia ? '0' : '20px'}">${product.name}</div>
            <div class="farm">${product.farm}</div>
            ${packLinksHTML} ${descriptionHTML}
                        ${variantsHTML}
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid-container">${tarifsHTML}</div>
        `;
    
        showPage('page-product');
    
        // Réattache les événements (pour les variantes de couleurs)
        if (product.jars && product.jars.length > 0) {
            const variantBtns = document.querySelectorAll('.variant-btn');
            const cartBtns = document.querySelectorAll('.add-to-cart-btn');
            const updateCartButtonsColor = (colorClass) => {
                cartBtns.forEach(btn => {
                    btn.classList.remove('style-purple', 'style-red', 'style-green', 'style-yellow', 'style-orange', 'style-brown', 'style-passion', 'style-melon', 'style-gold', 'style-cherry', 'style-glue');
                    if (colorClass) btn.classList.add(colorClass);
                });
            };
            updateCartButtonsColor(product.jars[0].colorClass);
            variantBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    variantBtns.forEach(b => {
                        b.classList.remove('active');
                        const color = b.dataset.colorClass;
                        b.classList.remove(color);
                    });
                    this.classList.add('active');
                    this.classList.add(this.dataset.colorClass);
                    updateCartButtonsColor(this.dataset.colorClass);
                    if(window.Telegram.WebApp.HapticFeedback) window.Telegram.WebApp.HapticFeedback.selectionChanged();
                });
            });
        }
    }

    // Met à jour l'affichage du panier (CORRIGÉ : Cache l'image si vide)
    function renderCart() {
        const cartContainer = document.getElementById('cart-items-container');
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Votre panier est vide.</p>';
            document.getElementById('cart-total-price').innerText = '0.00€';
            updateCartCount();
            return;
        }

        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ''}
                
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    <div class="gram" >${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        document.getElementById('cart-total-price').innerText = `${total.toFixed(2)}€`;
        updateCartCount();
    }

  // Affiche la page de confirmation (VERSION WHATSAPP DIRECT)
  function renderConfirmation() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // --- Logique de calcul des prix (inchangée) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
        const promo = validPromoCodes[appliedPromo];
        if (promo.appliesTo === 'eligible') {
            cart.forEach(item => {
                const product = getProductById(item.productId);
                if (product && product.promoEligible) {
                    discountableAmount += item.totalPrice;
                }
            });
        } else {
            discountableAmount = subTotal;
        }
        if (promo.type === 'percent') {
            discount = (discountableAmount * promo.value) / 100;
        } else { 
            discount = promo.value;
        }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;
    // --- Fin calcul ---

    // Mise à jour du résumé
    document.getElementById('confirmation-items-count').innerText = `${totalItems} article${totalItems > 1 ? 's' : ''}`;
    document.getElementById('confirmation-total-price').innerText = `${totalPrice.toFixed(2)}€`;

    // Liste des articles
    const itemsList = document.getElementById('confirmation-items-list');
    itemsList.innerHTML = cart.map((item, index) => `
         <div class="cart-item">
            ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ''}

            <div class="item-details">
                <div>${index + 1}. ${item.name}</div>
                <div>Quantité: ${item.quantity}x ${item.weight}</div>
                <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
            </div>
        </div>
    `).join('');

    // UI Promo
    const promoInputContainer = document.getElementById('promo-input-container');
    const promoAppliedContainer = document.getElementById('promo-applied-container');
    if (appliedPromo) {
        promoInputContainer.style.display = 'none';
        promoAppliedContainer.style.display = 'flex';
        document.getElementById('promo-applied-text').innerText = `Code "${appliedPromo}" appliqué !`;
    } else {
        promoInputContainer.style.display = 'flex';
        promoAppliedContainer.style.display = 'none';
        document.getElementById('promo-code-input').value = ''; 
    }

    // UI Paiement
    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.method === paymentMethod);
    });

    // Résumé final
    const summaryContainer = document.getElementById('confirmation-summary');
    let summaryHTML = `
        <div class="summary-line">
            <span>Sous-total:</span>
            <span>${subTotal.toFixed(2)}€</span>
        </div>
    `;
    if (discount > 0) {
        summaryHTML += `
        <div class="summary-line discount">
            <span>Réduction:</span>
            <span>-${discount.toFixed(2)}€</span>
        </div>
        `;
    }
    summaryHTML += `
        <div class="summary-line total">
            <span>💰 Total final:</span>
            <span>${totalPrice.toFixed(2)}€</span>
        </div>
    `;
    summaryContainer.innerHTML = summaryHTML;

    // --- MODIFICATION POUR WHATSAPP DIRECT ---
    const copyBtn = document.getElementById('copy-order-btn');
    const contactBtn = document.getElementById('confirm-order-button');

    // 1. On CACHE le bouton "Copier" car il ne sert plus
    if(copyBtn) copyBtn.style.display = 'none';

    // 2. On configure le bouton "Confirmer" pour être actif tout de suite
    if(contactBtn) {
        contactBtn.classList.remove('secondary-action-btn'); // Enlève le gris
        contactBtn.classList.add('main-action-btn');      // Met le rouge (ou couleur principale)
        contactBtn.disabled = false;                      // Active le clic
        contactBtn.innerHTML = 'CONFIRMER SUR WHATSAPP 📞'; // Change le texte
    }

    showPage('page-confirmation');
}
    // Affiche la page de contact (inchangé)
    function renderContactPage() {
        const linksContainer = document.getElementById('contact-links-container');
        linksContainer.innerHTML = contactLinks.map(link => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        
            <span>${link.text}</span>
        </a>
        `).join('');
    }

    // Met à jour le compteur du panier (inchangé)
    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(el => {
            el.innerText = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

  // --- MODIFIÉ : populateFilters ---
  function populateFilters() {
    const searchFilter = document.getElementById('search-filter');
    const qualityFilter = document.getElementById('quality-filter');
    const farmFilter = document.getElementById('farm-filter');

    // 1. On récupère TOUS les produits de l'app pour trouver toutes les farms
    const allNestedProducts = [];
    appData.forEach(category => {
        if (category.farms) {
            category.farms.forEach(farm => allNestedProducts.push(...farm.products));
        } else if (category.products) {
            allNestedProducts.push(...category.products);
        }
    });

    // 2. On remplit le filtre QUALITÉ (Pour la page d'accueil)
    const categoryQualities = appData.map(c => c.quality).filter(Boolean); // filter Boolean enlève les vides
    const qualities = ['all', ...new Set(categoryQualities)];
    qualityFilter.innerHTML = qualities.map(q => `<option value="${q}">${q === 'all' ? 'SELECTION DU CHEF' : q}</option>`).join('');

    // 3. On remplit le filtre FARM (Pour la page produits)
    // On récupère la propriété 'farm' de chaque produit
    const productFarms = allNestedProducts.map(p => p.farm).filter(f => f); // Garde seulement si une farm est définie
    const farms = ['all', ...new Set(productFarms)];
    
    farmFilter.innerHTML = farms.map(farm => `<option value="${farm}">${farm === 'all' ? '👨‍🌾  -  Toutes les farms' : farm}</option>`).join('');

    // 4. Les écouteurs d'événements
    searchFilter.addEventListener('input', (e) => {
        currentFilters.searchTerm = e.target.value;
        renderHomePage();
    });

    qualityFilter.addEventListener('change', (e) => {
        currentFilters.quality = e.target.value;
        renderHomePage();
    });

    farmFilter.addEventListener('change', (e) => {
        currentFilters.farm = e.target.value;
        renderHomePage();
    });
}

    // --- NOTIFICATION (inchangé) ---
    let notificationTimeout;
    function showNotification(message) {
        const notification = document.getElementById('notification-toast');
        if (!notification) return;

        clearTimeout(notificationTimeout);
        notification.classList.remove('show');
        void notification.offsetWidth;

        notification.innerText = message;
        notification.classList.add('show');

        notificationTimeout = setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // --- LOGIQUE DU PANIER ---

    // Ajoute le paramètre 'variant' à la fin
    function addToCart(productId, weight, price, variant = null) {
        // L'ID du panier doit inclure la variante pour différencier (ex: 10g Gelato vs 10g Papaya)
        const cartItemId = `${productId}-${weight}-${variant ? variant.replace(/\s+/g, '') : 'default'}`;

        const existingItem = cart.find(item => item.id === cartItemId);
        const product = getProductById(productId);

        // On prépare le nom à afficher (ex: "120u (Papaya Bomb)")
        const displayName = variant ? `${product.name} \n👉 ${variant}` : product.name;

        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
        } else {
            cart.push({
                id: cartItemId,
                productId: productId,
                name: displayName, // On utilise le nom avec la variante
                image: product.image,
                weight: weight,
                quantity: 1,
                unitPrice: price,
                totalPrice: price,
                variant: variant // On garde la variante en mémoire si besoin
            });
        }
        renderCart();
        tg.HapticFeedback.notificationOccurred('success');
        showNotification('✅ Produit ajouté au panier !');
    }
    // updateQuantity (inchangé)
    function updateQuantity(cartItemId, action) {
        const item = cart.find(i => i.id === cartItemId);
        if (!item) return;

        if (action === 'increase') {
            item.quantity++;
        } else if (action === 'decrease') {
            item.quantity--;
        }

        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== cartItemId);
        } else {
            item.totalPrice = item.quantity * item.unitPrice;
        }
        renderCart();
    }

  // --- FORMATAGE DU MESSAGE WHATSAPP (STYLE PRO & EMOJIS) ---
  function formatOrderMessage() {
    // --- 1. CALCULS (Inchangés) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
        const promo = validPromoCodes[appliedPromo];
        if (promo.appliesTo === 'eligible') {
            cart.forEach(item => {
                const product = getProductById(item.productId);
                if (product && product.promoEligible) {
                    discountableAmount += item.totalPrice;
                }
            });
        } else {
            discountableAmount = subTotal;
        }
        if (promo.type === 'percent') {
            discount = (discountableAmount * promo.value) / 100;
        } else {
            discount = promo.value;
        }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;

    // --- 2. CONSTRUCTION DU MESSAGE (NOUVEAU DESIGN) ---
    
    // En-tête
    let message = "*🛒 DÉTAIL DE LA COMMANDE:*\n\n";

    // Boucle sur les articles
    cart.forEach((item, index) => {
        // On nettoie le nom (enlève les sauts de ligne techniques si variante)
        // On met en majuscules pour faire comme sur ta capture
        let cleanName = item.name.replace(/\n/g, ' ').toUpperCase();

        // Ligne 1 : Numéro + Nom du produit (en Gras *)
        message += `*${index + 1}. ${cleanName}*\n`;
        
        // Ligne 2 : Quantité
        message += `• Quantité: ${item.quantity}x ${item.weight}\n`;
        
        // Ligne 3 : Prix unitaire
        message += `• Prix unitaire: ${item.unitPrice.toFixed(2)}€\n`;
        
        // Ligne 4 : Total de la ligne
        message += `• Total: ${item.totalPrice.toFixed(2)}€\n\n`;
    });

    // Résumé financier
    // Si promo, on affiche le détail, sinon juste le total
    if (discount > 0) {
        message += `Sous-total: ${subTotal.toFixed(2)}€\n`;
        message += `Réduction (${appliedPromo}): -${discount.toFixed(2)}€\n`;
        message += `\n*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
    } else {
        message += `*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
    }

    // Pied de page
    message += `\n📍 Livraison à convenir\n`;
    message += `💳 Paiement: ${paymentMethod}`;

    return message;
}

    // --- NOUVELLE FONCTION POUR COPIER DANS LE PRESSE-PAPIERS ---
    function copyToClipboard(text) {
        if (navigator.clipboard) { // API moderne et sécurisée
            navigator.clipboard.writeText(text).then(() => {
                showNotification('✅ Commande copiée ! Colle-la dans le chat.');
                tg.HapticFeedback.notificationOccurred('success');
            }, (err) => {
                showNotification('❌ Erreur en copiant le message');
            });
        } else { // Ancien fallback (pour certains navigateurs)
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed'; // Hors de l'écran
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                showNotification('✅ Commande copiée ! Colle-la dans le chat.');
                tg.HapticFeedback.notificationOccurred('success');
            } catch (err) {
                showNotification('❌ Erreur en copiant le message');
            }
            document.body.removeChild(textArea);
        }
    }

    // --- GESTION PAGE AVIS ---

    // 1. Bouton vers le canal Potato
/*     const btnChannel = document.getElementById('btn-open-channel');
    if (btnChannel) {
        btnChannel.addEventListener('click', function() {
            // Remplace par ton vrai lien de canal
            const channelLink = "https://dympt.org/RetourP420"; 
            
            // Ouvre le lien via Telegram
            tg.openLink(channelLink); 
        });
    }
 */
    // 2. (Optionnel) Zoom sur l'image quand on clique dessus
    window.openImage = function(imgElement) {
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('img-in-modal');
        
        modal.style.display = "flex";
        modalImg.src = imgElement.src;
        tg.BackButton.show(); // Affiche le bouton retour natif
        
        // Clic pour fermer
        modal.onclick = function() {
            modal.style.display = "none";
            tg.BackButton.hide(); // Cache le bouton retour
        }
        
        // Gestion du bouton retour physique/natif Telegram
        tg.onEvent('backButtonClicked', function() {
            modal.style.display = "none";
            tg.BackButton.hide();
        });
    };
    // --- GESTION DES ÉVÉNEMENTS ---

    // Clics sur la barre de navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.dataset.page;
            if (!pageId) return;

            // Les lignes gérant la classe 'active' ont été supprimées
            // showPage(pageId) s'en occupe maintenant.

            if (pageId === 'page-contact') {
                renderContactPage();
            }

            if (pageId === 'page-home') {
                currentView = 'categories';
                currentCategoryId = null;
                // On reset TOUS les filtres
                currentFilters.searchTerm = '';
                currentFilters.quality = 'all';
                currentFilters.farm = 'all';
                document.getElementById('search-filter').value = '';
                document.getElementById('quality-filter').value = 'all';
                document.getElementById('farm-filter').value = 'all';

                renderHomePage();
            }

            showPage(pageId);
        });
    });

    // Clics sur le reste de la page
    document.body.addEventListener('click', async function (e) {
                const target = e.target;

        if (target.closest('#copy-order-btn')) {
            let message = formatOrderMessage();
            message = message.replace(/\*/g, '');

            copyToClipboard(message);

            // --- AJOUT : Inverser les styles des boutons ---
            const copyBtn = document.getElementById('copy-order-btn');
            const contactBtn = document.getElementById('confirm-order-button');

            // Copier devient Gris (secondary)
            copyBtn.classList.remove('main-action-btn');
            copyBtn.classList.add('secondary-action-btn');

            // Contacter devient Rouge (main) et est activé
            contactBtn.classList.remove('secondary-action-btn');
            contactBtn.classList.add('main-action-btn');
            contactBtn.disabled = false; // <-- ON DÉVERROUILLE LE BOUTON
            return; // On s'arrête là
        }

        // Gère l'accordéon sur la page contact
        const accordionHeader = target.closest('.accordion-header');
        if (accordionHeader) {
            const accordionItem = accordionHeader.parentElement;

            // On ferme les autres items
            document.querySelectorAll('#page-info .accordion-item.active').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                }
            });

            // On ouvre/ferme l'item cliqué
            accordionItem.classList.toggle('active');
            return; // On arrête là pour ne pas déclencher d'autres clics
        }

        // 1. Clic sur une carte CATÉGORIE
        const categoryCard = target.closest('.category-card');
        if (categoryCard) {
            const category = appData.find(c => c.id === categoryCard.dataset.categoryId);

            if (category.products) {
                // Si la catégorie a des produits directement (pas de sous-catégorie)
                currentView = 'simple_products'; // <-- NOUVEL ÉTAT
                currentCategoryId = category.id;
            } else if (category.farms) {
                // Si la catégorie a des farms
                currentView = 'farms';
                currentCategoryId = category.id;
            } else {
                return; // Ne fait rien si la catégorie est vide
            }

            // On reset les filtres et on lance la page
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }
        // 2. MODIFIÉ : Clic sur un BOUTON FARM (Anciennement "carte farm")
        const farmBtn = target.closest('.farm-list-btn'); // <-- J'ai changé le nom de la classe ici
        if (farmBtn) {

            if (farmBtn.classList.contains('unclickable')) {
                return;
            }

            currentView = 'products';
            currentFarmId = farmBtn.dataset.farmId;

            // On reset les filtres
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';

            renderHomePage();
            return;
        }
        // 3. Clic sur une carte PRODUIT
        const productCard = target.closest('.product-item-card');
        if (productCard) {

            if (productCard.classList.contains('unclickable')) {
                return;
            }
            renderProductPage(productCard.dataset.productId);
            return;
        }

        // 4. NOUVEAU : Clic sur le bouton "Retour" (vers Catégories)
        if (target.closest('.back-to-categories-btn')) {
            currentView = 'categories';
            currentCategoryId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 5. NOUVEAU : Clic sur le bouton "Retour" (vers Farms)
        if (target.closest('.back-to-farms-btn')) {
            currentView = 'farms';
            currentFarmId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // Clic sur "Appliquer" le code promo
        if (target.closest('#apply-promo-btn')) {
            const input = document.getElementById('promo-code-input');
            const code = input.value.toUpperCase(); // Mets en majuscule

            if (validPromoCodes[code]) {
                appliedPromo = code;
                tg.HapticFeedback.notificationOccurred('success');
                showNotification('✅ Code promo appliqué !');
            } else {
                appliedPromo = null; // Reset au cas où
                tg.HapticFeedback.notificationOccurred('error');
                showNotification('❌ Code promo invalide.');
            }
            renderConfirmation(); // Met à jour la page de confirmation
        }

        // Clic sur "Supprimer" le code promo
        if (target.closest('#remove-promo-btn')) {
            appliedPromo = null;
            showNotification('Code promo retiré.');
            renderConfirmation(); // Met à jour la page
        }

        // Clic sur un bouton de paiement
        if (target.closest('.payment-btn')) {
            paymentMethod = target.closest('.payment-btn').dataset.method;
            // Pas besoin de rafraîchir toute la page, juste les boutons
            document.querySelectorAll('.payment-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.method === paymentMethod);
            });
        }

        // Clic sur "Ajouter au panier"
        if (target.closest('.add-to-cart-btn')) {
            const btn = target.closest('.add-to-cart-btn');

            let selectedVariant = null;

            // CAS 1 : Nouveau système (Boutons JARs)
            const activeVariantBtn = document.querySelector('.variant-btn.active');
            if (activeVariantBtn) {
                selectedVariant = activeVariantBtn.dataset.name;
            }
            // CAS 2 : Ancien système (Select) - Fallback
            else {
                const variantSelect = document.getElementById('product-variant-select');
                if (variantSelect) {
                    selectedVariant = variantSelect.value;
                }
            }

            addToCart(btn.dataset.productId, btn.dataset.weight, parseFloat(btn.dataset.price), selectedVariant);
        }

        // Clic sur les boutons de quantité
        if (target.closest('.quantity-btn')) {
            const btn = target.closest('.quantity-btn');
            updateQuantity(btn.dataset.id, btn.dataset.action);
        }

        // Clic sur le bouton "fermer"
        if (target.closest('.close-button')) {
            showPage('page-home');
            // La gestion des classes 'active' est maintenant dans showPage
        }

        // Clic sur "Continuer les achats"
        if (target.closest('#cart-continue-shopping')) {
            showPage('page-home');
            // La gestion des classes 'active' est maintenant dans showPage
        }

        // Clic sur les boutons "retour" (des pages produits, panier...)
        if (target.closest('.back-button')) {
            showPage('page-home');
            // La gestion des classes 'active' est maintenant dans showPage
        }

        // Clic sur le bouton du panier
        if (target.closest('#home-cart-button')) {
            renderCart();
            showPage('page-cart');
        }

        // Clic sur "Commander"
        if (target.closest('#checkout-button')) {
            renderConfirmation();
        }

        // Clic sur "Modifier"
        if (target.closest('#confirmation-modify-order')) {
            showPage('page-cart');
        }

        // Clic sur un produit DANS un Pack
        if (target.closest('.pack-item-btn')) {
            const btn = target.closest('.pack-item-btn');
            const targetId = btn.dataset.targetId;
            
            // On charge la page du produit ciblé
            renderProductPage(targetId);
            return;
        }
          // Clic sur "Confirmer la commande" (VERSION WHATSAPP DIRECT)
    if (target.closest('#confirm-order-button')) {

        // 1. TON NUMÉRO WHATSAPP (Format international sans le +)
        const myPhoneNumber = '33629121135'; 
        
        // 2. On prépare le message
        let message = formatOrderMessage();
        
        // 3. On encode le message pour qu'il passe dans une URL
        const encodedMessage = encodeURIComponent(message);
        
        // 4. On crée le lien magique WhatsApp
        const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`;

        // 5. On ouvre WhatsApp
        tg.openLink(whatsappUrl);
    }

    });

    // --- INITIALISATION DE L'APP ---
    function init() {
        setTimeout(() => {
            populateFilters();
            renderHomePage(); // Affiche les catégories au début
            updateCartCount();
            showPage('page-home');
        }, 1500);
    }

    init();
});