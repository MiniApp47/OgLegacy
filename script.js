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
            url: 'https://t.me/+nszc04LgDUEyNzI8',
            id: 'telegram-main',
            className: 'telegram', // Garde le style Bleu Telegram
            text: "TÉLÉGRAM 💙"
        },
        {
            name: 'CANAL SECOURS 💙',
            url: 'https://t.me/oglegsecour',
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
        {
            id: 'HASH',
            name: 'HASH 🌰',
            type: 'HASH',
            quality: 'HASH 🌰',
            image: 'CategHash.png', // Ton image de catégorie Weed

            products: [
                /* {
                    id: 'NICOLE KUSH ✨',
                    flag: '🇺🇸',
                    name: 'NICOLE KUSH ✨',
                    farm: '🧪 Kilogrammes Farm',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductNicole.png', 
                    video: 'VideoNicole.mov',
                    description: '💛 JAUNE MOUSSEUX \n\n 🇫🇷 Premium France \n 🧪 Travaillé par Kilogrammes Farm  \n\n 🔥 Description  \n\n Oublie le “jaune mousseux” classique. \n Ici on est sur un jaune mousseux premium de très haute qualité, travaillé par Kilogrammes Farm sur la génétique Nicole Kush — un produit qui met tout le monde d’accord dès la première odeur.  \n\n Le goût est propre, rond et puissant : notes kushy bien grasses, touches légèrement sucrées, avec un fond crémeux qui reste longtemps en bouche. Zéro goût chimique, zéro sensation cheap — c’est du vrai jaune mousseux de connaisseur.  \n\n  La texture est bien mousseuse, grasse, fondante, facile à travailler, qui s’effrite parfaitement sans coller. \n À l’odeur, c’est lourd, kush, propre, ça annonce direct le niveau premium.  \n\n 😶‍🌫️ Effet / High  \n\n Grosse montée propre et progressive. \n  High puissant mais clean, mental détendu + corps lourd, parfait pour se poser fort sans être éclaté. \n Tu sens direct que c’est au-dessus du lot.  \n\n 🏆 Pourquoi c’est du haut niveau \n • 🌿 Travaillé par Kilogrammes Farm \n • 🧬 Génétique : Nicole Kush \n • 💛 Jaune mousseux premium (pas du jaune basique) \n • 😮‍💨 Goût lourd, kushy, crémeux \n • 💎 Texture mousseuse grasse \n • 🇫🇷 Clairement dans le top des jaunes premium en France  \n\n  📦 Pour les vrais amateurs de qualité \n Si tu veux du jaune mousseux qui a du goût + du high + du standing, celui-là coche toutes les cases.',
                    tarifs: [
                        { weight: '10g', price: 60.00 },
                        { weight: '20g', price: 100.00 },
                        { weight: '50g', price: 200.00 },
                        { weight: '100g', price: 330.00 },
                    ]
                },  */
            ]
        },
        {
            id: 'Jaune USA',
            name: 'Jaune USA 🇺🇸',
            type: 'Jaune USA',
            quality: 'Jaune USA 🇺🇸',
            image: 'CategJauneUsa.png', // Ton image de catégorie Weed

            products: [
              /*   {
                    id: 'Jaune mousseux 🥵',
                    flag: '🇲🇦',
                    name: 'Jaune mousseux 🥵',
                    farm: 'CALI DRY SIFT PRENIUM 🥵🍯🇺🇸',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductUsa1.png',
                    // images: ['ProductUsa1.jpg','ProductUsa3.jpg','ProductUsa4.jpg','ProductUsa5.jpg','ProductUsa6.jpg','ProductUsa7.jpg'],
                    videos: ['VideoUsa1.mov','VideoUsa2.mov','VideoUsa3.mov'],
                      // 👇 NOUVELLE STRUCTURE
                      variantTitle: 'Saveurs 🧁 :',
                      jars: [
                       { name: 'Ice Cream Cake', emoji: '🎂', colorClass: 'style-gold' },
                       { name: 'Candy Land', emoji: '🍭', colorClass: 'style-cherry' },
                       { name: 'Sunset Runtz', emoji: '🌄', colorClass: 'style-orange' }, 
                      ],

                      description: '🇺🇸 DRY SIFT PREMIUM • UPGRADE AROMATIQUE & PUISSANCE 🇺🇸 \n\n Le Mousseux Made in Los Angeles monte en gamme. Ce nouveau batch bénéficie d\'une technique "Dry Sift" optimisée : le goût Cali est beaucoup plus prononcé et la défonce frappe nettement plus fort que l\'ancienne version. \n\n 🎂 Ice Cream Cake : Sédation profonde, notes vanille/crème.\n 🍭 Candy Land : Euphorie percutante, profil ultra-sucré candy.\n 🌄 Sunset Runtz : Détente corporelle totale, goût fruité et gazeux.\n\n 🍯 Texture : Jaune mousseux d’exception qui s\'effrite tout seul. Une frappe exclusive introuvable ailleurs. 🥵😱🍫',
                      tarifs: [
                        { weight: '10G', price: 60.00 },
                        { weight: '20G', price: 100.00 },
                        { weight: '50G', price: 220.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                } */
            ]
        },

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
                    id: '🍍🍬 TROPICAL CANDY 🌴',
                    flag: '🇺🇸',
                    name: '🍍🍬 TROPICAL CANDY 🌴',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductTropicc.png', 
                    video: 'VideoTropicc.mov',
                    description: '🔥 Description \n Tropical Candy, c’est une vraie vague exotique. Dès que t’ouvres, t’as une explosion d’arômes tropicaux : ananas, mangue, fruits de la passion… mélangés à un côté bonbon sucré bien prononcé. Une strain ultra gourmande, fraîche et addictive, avec parfois une légère touche creamy/gazzy en fond.  \n\n 🌿 Aspect  \n Des buds bien colorés, vert clair avec parfois des reflets dorés ou violets. Bien denses, recouverts de trichomes brillants qui donnent un effet givré. Pistils orange flashy — visuellement très attractif.  \n\n 😶‍🌫️ Effet  \n Un high énergisant au début : \n ➡️ boost mental, bonne humeur, créativité \n ➡️ puis une détente légère du corps sans t’alourdir  \n  Parfaite en journée ou en soirée chill, sans te mettre KO.  \n\n 🍭 Saveur  \n Tropical / sweet / fruity candy  \n Un vrai goût de cocktail exotique sucré, avec une sensation bonbon bien smooth en bouche.     \n\n ⚖️ Type  \n Hybride à tendance sativa      \n\n 💎 Conclusion  \n  Tropical Candy, c’est le délire vacances en version weed. Ultra parfumée, easy à fumer et super agréable — parfaite pour ceux qui aiment les profils fruités et sucrés bien marqués 🍍🔥🍬',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 750.00 },
                    ]
                }, 
                {
                    id: '🍋 LCG 🍒🍦',
                    flag: '🇺🇸',
                    name: '🍋 LCG 🍒🍦',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductChery.png', 
                    video: 'VideoChery.mov',
                    description: '🍋 Lemon Cherry Gelato 🍒🍦\n\n 🔥 Description\n La LCG (Lemon Cherry Gelato), c’est une des strains les plus demandées en ce moment. Un vrai mélange entre fraîcheur citrus et gourmandise sucrée. À l’ouverture, t’as direct un parfum complexe : citron acidulé, cerise sucrée et une base crémeuse typique des Gelato, avec un petit fond gazzy qui donne du caractère.\n\n 🌿 Aspect\n Des buds bien compacts, ultra résineux, souvent avec des reflets violets et vert foncé. Blindés de trichomes bien blancs, ça brille fort — qualité visuelle premium directe.\n\n 😶‍🌫️ Effet\n  Un high puissant et propre :\n ➡️ montée rapide euphorique, boost mental\n ➡️ puis une détente progressive du corps sans t’endormir\n   Parfaite pour rester focus mais détendu, ou pour chill sans être KO.\n\n  🍬 Saveur\n  Citrus / cherry / creamy / gas\n  Un mix unique entre acidité citronnée et douceur fruitée, avec une touche dessert en fin de bouche.\n\n  ⚖️ Type\n Hybride équilibrée (légère tendance indica)\n\n  💎 Conclusion\n La LCG, c’est une vraie star : goût signature, effet clean et look premium. Une des strains les plus complètes du moment — validée par tous les amateurs de cali 🔥🍋🍒',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 750.00 },
                    ]
                }, 
                {
                    id: '🍬 CANDY GELATO 🍦',
                    flag: '🇺🇸',
                    name: '🍬 CANDY GELATO 🍦',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductCGR.png', 
                    video: 'VideoCGR.mov',
                    description: '🍬 (Gelato x Candy genetics) 🍦\n\n 🔥 Description  \n Candy Gelato, c’est la rencontre parfaite entre la puissance de la famille Gelato et un côté bonbon ultra sucré. Dès que t’ouvres le pot, t’es frappé par une odeur gourmande de candy, fruits sucrés et crème vanillée, avec un fond légèrement gazzy qui rappelle les meilleures cali.    \n\n 🌿 Aspect  \n Des têtes bien denses et résineuses, avec des nuances vert clair parfois tirant vers le violet. Blindées de trichomes brillants qui collent aux doigts, avec des pistils orange vif — visuellement c’est très propre, très premium.\n\n 😶‍🌫️ Effet  \n Un high équilibré mais bien présent : \n  ➡️ montée euphorique et mentale au début \n ➡️ puis relaxation du corps progressive \n Ça te met bien sans te casser, parfait pour chill, social ou même après l’entraînement pour relâcher la pression.  \n\n 🍭 Saveur  \n Ultra sweet / candy / creamy \n Un vrai goût de bonbon fruité avec une touche gelato bien crémeuse, légèrement gazeuse en fin de bouche.  \n\n  ⚖️ Type  \n Hybride (légère dominance indica)  \n\n  💎 Conclusion  \n Candy Gelato, c’est une valeur sûre : grosse saveur, belle puissance et un rendu clean. Parfaite pour ceux qui aiment les strains sucrées avec du caractère 🍬🔥',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 750.00 },
                    ]
                }, 
                {
                    id: '🌸 MOCHI 🍡',
                    flag: '🇺🇸',
                    name: '🌸 MOCHI 🍡',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductMoch.png', 
                    video: 'VideoMoch.mov',
                    description: '🌸 (Gelato 47 x Mochi Gelato) 🍡\n\n 🔥 Description \n La Mochi, c’est une vraie pépite californienne, issue de la famille Gelato. Elle se démarque direct avec un profil ultra gourmand et raffiné. À l’ouverture, t’as une explosion de notes sucrées et crémeuses, avec un mélange subtil de vanille, fruits rouges et une touche légèrement terreuse qui vient équilibrer le tout.  \n\n 🌿 Aspect  \n Des buds bien compacts, denses comme il faut, avec des teintes vert clair à violet, recouvertes d’une couche épaisse de trichomes bien blancs. Les pistils orangés ressortent fort, signe d’une qualité bien travaillée.  \n\n 😶‍🌫️ Effet  \n Un high smooth mais puissant : ça commence par une montée euphorique, légère dans la tête, puis ça glisse vers une détente corporelle bien chill. Parfait pour se poser sans être complètement éclaté. Idéal fin de journée ou après un gros training.  \n\n  🍬 Saveur  \n  Sucré / creamy / dessert vibes \n Un vrai goût de mochi japonais avec une touche gelato — doux, légèrement fruité, et super agréable en bouche.  \n\n ⚖️ Type  \n Hybride équilibrée (légère dominance indica)  \n\n  💎 Conclusion  \n  La Mochi, c’est clairement une strain premium pour les amateurs de saveurs fines et de high clean. Pas la plus violente, mais une des plus agréables à fumer. Un vrai délire gourmand 🍡🔥',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 750.00 },
                    ]
                }, 
                {
                    id: '🌸 PINK RUNTZ 💎',
                    flag: '🇺🇸',
                    name: '🌸 PINK RUNTZ 💎',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductPK.png', 
                    video: 'VideoPK.mov',
                    description: 'Une des strains les plus reconnues de la nouvelle génération, célèbre pour son profil candy ultra gourmand et son équilibre parfait. \n\n 🍭 Profil aromatique \n La Pink Runtz offre une explosion de saveurs sucrées et fruitées, avec des notes de bonbon, fruits tropicaux et une légère touche crémeuse. En bouche, c’est rond, doux et très persistant, avec une vraie signature “candy” qui reste longtemps 🍓🍍\n\n 🌿 Aspect\n Des buds bien denses et givrés, recouverts de trichomes brillants, avec des nuances de vert clair et parfois rosées, accompagnées de pistils orangés.\n\n 😮‍💨 Effet\n Un high équilibré et agréable, qui commence par une sensation euphorique et légère avant de s’installer progressivement dans un état de détente sans être trop lourd.\n\n 💎 Signature\n Une strain moderne incontournable, parfaite pour ceux qui recherchent le goût avant tout, avec une qualité aromatique marquée et reconnaissable.',                    
                    tarifs: [
                        { weight: '5g', price: 60.00 },
                        { weight: '10g', price: 100.00 },
                        { weight: '25g', price: 220.00 },
                        { weight: '50g', price: 400.00 },
                        { weight: '100g', price: 700.00 },
                    ]
                }, 
               
                {
                    id: '🖤 BLACK RUNTZ 🍬',
                    flag: '🇺🇸',
                    name: '🖤 BLACK RUNTZ 🍬',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductBlackR.png', 
                    video: 'VideoBlackR.mp4',
                    description: '🎱 EXCLUSIVITÉ SOMBRE • CALI CANDY 🇺🇸 \n\n Le phénotype le plus obscur et recherché de la famille Runtz. La Black Runtz se distingue par ses teintes ténébreuses et son profil terpénique explosif, bien plus profond et lourd que la Runtz classique. \n\n 👀 Aspect : Buds compacts, violet très foncé (presque noir), contrastant avec des pistils orange fluo et une résine brillante.\n 👃 Arômes : Bonbon acidulé, fruits des bois, avec un fond terreux et gazeux très prononcé.\n 👅 Goût : Frappe fruitée Zkittlez en première ligne, finition lourde et crémeuse Gelato.\n 🧠 Effets : Montée euphorique rapide (High clair) qui bascule rapidement vers un body-high profond et apaisant. Puissance validée.',                    tarifs: [
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
                    id: 'Chocolato 🍪',
                    flag: '🇲🇦',
                    name: 'Chocolato 🍪',
                    farm: 'CaliPlate ⚜️',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductChoco.png', 
                    video: 'VideoChoco.mov',
                    description: '🔥 Description\n Le frozen sift Chocolato par CaliPlate, c\'est le summum de l\'exclusivité. Une extraction ultra-premium réservée à l\'élite des connaisseurs. CaliPlate signe ici une véritable masterclass avec un produit d\'une rareté et d\'une pureté phénoménales, justifiant son positionnement top-shelf.\n\n 👃 Arômes & Saveurs\n Un profil terpénique lourd, sombre et incroyablement gourmand. Grosse attaque de cacao brut et de chocolat fondant 🍫, parfaitement adoucie par la rondeur crémeuse et vanillée propre aux génétiques Gelato. Une fumée épaisse et onctueuse qui laisse un goût de dessert luxueux sur le palais.\n\n 👀 Aspect\n Visuel hors norme. Une résine translucide, brillante, qui se rapproche presque d\'une texture cireuse ou de caviar. Le tri des trichomes est millimétré, sans aucun déchet végétal. Ça fond et bulle violemment à la moindre source de chaleur (Full Melt absolu).\n\n 😮‍💨 Effet\n Une frappe dévastatrice. La montée cérébrale est instantanée et te scotche littéralement, suivie très vite d\'un body-stone profond, presque narcotique. Réservé aux tolérances élevées vu la concentration massive en principes actifs.\n\n 💎 Conclusion\n Le Chocolato de CaliPlate, c\'est le caviar du Frozen Sift. Une qualité stratosphérique pour un rendement d\'extraction minuscule. L\'expérience ultime pour les palais les plus exigeants qui ne veulent que le meilleur.',
                    tarifs: [
                        { weight: '5G', price: 150.00 },
                        { weight: '10G', price: 250.00 },
                        { weight: '25G', price: 500.00 },
                    ]
                },
                   {
                    id: 'Peach Lassi 🍑',
                    flag: '🇲🇦',
                    name: 'Peach Lassi 🍑',
                    farm: 'La Source x Dirham Farm ⚗️',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductPea.png', // ⚠️ A changer
                    video: 'VideoPea.mov',
                    description: '🔥 Description \n Un frozen sift premium issu du travail précis de La Source x Dirham Farm. Avec la Peach Lassi, on est sur une génétique ultra gourmande qui mélange douceur fruitée et profondeur crémeuse. \n\n 🌿 Profil aromatique \n Dès l’ouverture, ça frappe avec des notes intenses de pêche mûre, accompagnées d’une touche crémeuse et sucrée qui rappelle la célèbre boisson indienne Lassi. Une terpène profile très dessert / fruit exotique, rond et puissant. \n\n ✨ Texture & aspect \n Une résine claire et sableuse, riche en trichomes, qui devient huileuse et collante sous la chaleur. La qualité du sift montre un travail de filtration propre avec une matière très aromatique. \n\n 😶‍🌫️ Effet \n Un effet relaxant et euphorique, qui commence par une montée douce et joyeuse avant de laisser place à une détente profonde. Parfait pour apprécier toute la richesse des saveurs. \n\n 💎 Conclusion \n  Un frozen sift gourmand et premium, idéal pour les amateurs de hash fruité et crémeux. Une signature terpène peach dessert qui se démarque clairement.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '25G', price: 250.00 },
                        { weight: '50G', price: 400.00 },
                        { weight: '100G', price: 750.00 },
                    ]
                }, 
                   {
                    id: 'Exotic Thai 🌴',
                    flag: '🇲🇦',
                    name: 'Exotic Thai 🌴',
                    farm: 'La Source x Dirham Farm ⚗️',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductExo.png', // ⚠️ A changer
                    video: 'VideoExo.mov',
                    description: '🔥 Description \n  Un frozen sift d’exception né de la collaboration entre La Source et Dirham Farm, deux noms qui travaillent la matière avec précision. Cette version issue de la Exotic Thai apporte un profil aromatique rare et très recherché, inspiré des génétiques asiatiques. \n\n 🌿 Profil aromatique \n  Des notes exotiques et tropicales qui explosent dès l’ouverture : mangue mûre, agrumes sucrés et une légère touche florale typique des variétés Thai. En bouche, le hash développe un côté crémeux et légèrement épicé, avec une longueur très propre. \n\n  ✨ Texture & aspect \n Un frozen sift ultra propre, texture sable doré qui devient huileuse à la chaleur. La matière est riche en résine, brillante et très parfumée — signe d’un travail de filtration précis et d’une génétique de qualité. \n\n  😶‍🌫️ Effet \n  Un high clair et euphorique, qui commence par une montée cérébrale énergisante typique des strains Thai, avant de se transformer en une détente douce et agréable. Parfait pour profiter de l’arôme et de l’expérience complète. \n\n 💎 Conclusion \n  Un produit exotic et premium, réservé aux amateurs de résine fine qui recherchent quelque chose de différent du classique gas californien. Ici on est sur une signature aromatique tropicale rare.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '25G', price: 250.00 },
                        { weight: '50G', price: 400.00 },
                        { weight: '100G', price: 750.00 },
                    ]
                }, 
            /*        {
                    id: '🍋🦞 LEMON LOBSTER',
                    flag: '🇲🇦',
                    name: '🍋🦞 LEMON LOBSTER',
                    farm: 'JCVD Farm 🎹',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductLob.png', // ⚠️ A changer
                    video: 'VideoLob.mov',
                    description: '💎 Type : Frozen Sift premium \n 🌿 Farm : JCVD \n 🧬 Strain : Lemon Lobster   \n\n 🔥 Description  \n\n La Lemon Lobster, c’est une frappe ultra propre signée JCVD Farm. \n Dès l’ouverture, ça explose au nez : une vague citronnée puissante, zestée, presque acidulée, avec un fond gaz subtil qui rappelle les meilleures génétiques US.  \n\n On est sur un frozen clair, travaillé proprement, texture sableuse fine, riche en trichomes. Ça colle, ça brille, ça sent fort rien à voir avec du jaune classique.   \n\n 👃 Terpènes & Saveur \n  • 🍋 Citron frais / zeste intense \n  • ⛽ Légère touche gaz en fond \n  • 🌬️ Finale propre, légèrement sucrée  \n\n  En bouche, c’est frais, citronné, avec une petite amertume noble qui reste longtemps. Pas écœurant, pas lourd juste précis et qualitatif.   \n\n  🧠 Effet  \n\n   Effet clean, progressif, qui monte doucement à la tête avant de détendre le corps. \n   Parfait pour ceux qui aiment sentir la puissance sans être assommés direct.  \n\n  ✔️ Bonne clarté mentale \n   ✔️ Relaxation agréable \n  ✔️ High équilibré mais présent   \n\n  🏆 Verdict    \n  La Lemon Lobster JCVD, c’est du frozen travaillé sérieusement.  \n  Profil citron dominant, qualité premium, effet propre.  \n  Un produit pour connaisseurs qui cherchent du goût avant tout',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '25G', price: 250.00 },
                        { weight: '50G', price: 400.00 },
                        { weight: '100G', price: 750.00 },
                    ]
                },  */
                  
                  /*  {
                    id: 'GRAPENANA 🍫 🍯',
                    flag: '🇲🇦',
                    name: 'GRAPENANA 🍫 🍯',
                    farm: 'NOUS C’EST LE GOUT 🍝',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductGrapa.png', // ⚠️ A changer
                    video: 'VideoGrapa.mp4',
                    description: 'Une signature construite autour du goût 🤤 \n\n Grapenana, c’est une base fruitée profonde qui mêle des nuances de raisin mûr et de banane veloutée, relevée par une touche agrumes gaz qui apporte du relief et une sensation presque pétillante.\n\n L’équilibre 60% indica / 40% sativa donne un caractère posé mais vivant.\n Une structure qui commence ronde et douce, puis qui laisse place à une énergie subtile et maîtrisée.\n\n FROZEN porte bien son nom 🧊 \n  une attaque fraîche, nette, presque glaciale…\n puis une montée aromatique qui s’installe et marque les esprits.\n\n Ici, tout est pensé autour du profil.\n Pas de hasard. Pas de compromis.\n\n FARM : NOUS C’EST LE GOÛT PAR LES CONNAISSEURS POUR LES CONNAISSEURS 🍯',
                    tarifs: [
                        { weight: '5G', price: 60.00 },
                        { weight: '10G', price: 100.00 },
                        { weight: '50G', price: 350.00 },
                        { weight: '100G', price: 650.00 },
                    ]
                },  */
                /* {
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
                       ],

                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '50G', price: 400.00 },
                        { weight: '100G', price: 750.00 },
                    ]
                }, */
              /*   {
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
                           { name: 'Carbon fiber', emoji: '🥵❤️‍🔥', colorClass: 'style-orange' },
                       ],

                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 120.00 },
                        { weight: '50G', price: 400.00 },
                        { weight: '100G', price: 750.00 },
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
                    id: '🍓 ZKITTLEZ 💎',
                    flag: '🇲🇦',
                    name: '🍓 ZKITTLEZ 💎',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductZK.png', 
                    video: 'VideoZK.mov',
                    description: '🍓 3x FILTERED 90u 💎\n Une sélection triple filtrée en 90 microns, conçue pour capturer toute la richesse aromatique de la strain avec une pureté optimale. \n\n 🍭 Profil aromatique\n La Zkittlez offre une explosion de saveurs fruitées et sucrées, rappelant un mélange de bonbons tropicaux 🍬🍍. On retrouve des notes de fruits rouges, agrumes et touches exotiques, avec une douceur naturelle qui enrobe parfaitement le palais. \n\n 🔥 Texture\n Fine, propre et homogène, avec une finition soignée qui met en valeur un travail de filtration précis.     \n\n 😮‍💨 Rendu \n Un profil smooth et ultra agréable, avec une sensation légère et une expression aromatique qui ressort pleinement à chaque utilisation.   \n\n 💎 Signature \n Une strain iconique dans sa version la plus propre, où le goût fruité prend le dessus avec une intensité maîtrisée et une vraie longueur en bouche.',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
              /*   {
                    id: '🍭 RUNTZ 💎',
                    flag: '🇲🇦',
                    name: '🍭 RUNTZ 💎',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductRT.png', 
                    video: 'VideoRT.mov',
                    description: '🍭 3x FILTERED 90u 💎 \n Une sélection triple filtrée en 90 microns, offrant une matière pure et une restitution aromatique précise, fidèle à l’identité de la strain.   \n\n 🍬 Profil aromatique \n La Runtz est une vraie signature candy : des notes sucrées, fruitées et bonbon, avec une touche légèrement crémeuse et exotique. En bouche, c’est gourmand, rond et ultra agréable, avec une longueur sucrée qui reste bien présente.   \n\n 🔥 Texture \n Fine, homogène et parfaitement travaillée, avec une propreté visible et une finition maîtrisée.   \n\n 😮‍💨 Rendu \n Une expérience douce et équilibrée, avec une sensation smooth et un profil accessible mais marqué, typique des variétés candy modernes.   \n\n 💎 Signature \n Un classique revisité en version filtrée premium, mettant en avant toute la richesse sucrée et addictive de la Runtz.',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                }, */
                {
                    id: '🌊 SUPER SOAKER 💎',
                    flag: '🇲🇦',
                    name: '🌊 SUPER SOAKER 💎',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductSoak.png', 
                    video: 'VideoSoak.mov',
                    description: '🌊 3x FILTERED 90u 💎\n Une sélection triple filtrée en 90 microns, pensée pour offrir une matière d’une pureté remarquable et une expression aromatique nette. \n\n 🍬 Profil aromatique\n La Super Soaker dévoile un mélange intense de fruits sucrés et tropicaux, accompagné d’une légère touche crémeuse et gassy. En bouche, c’est rond, riche et persistant, avec une vraie profondeur de saveur qui reste longtemps. \n\n  🔥 Texture \n Fine, propre et homogène, avec une finition soignée qui reflète un travail précis sur la filtration.  \n\n 😮‍💨 Rendu \n Une expérience smooth et équilibrée, avec une montée progressive et un ressenti clair, sans lourdeur.  \n\n  💎 Signature \n  Un produit moderne, axé sur le goût et la propreté, qui met en avant toute la richesse aromatique de la strain Super Soaker.',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
               
                {
                    id: '🍯 FRITTER LICKER 🔥',
                    flag: '🇲🇦',
                    name: '🍯 FRITTER LICKER 🔥',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductLicker.png', 
                    video: 'VideoLicker.mov',
                    description: '💎 Description\n\n Fritter Licker, c’est du très lourd pour les connaisseurs. Un produit 3x filtré ultra propre, travaillé avec précision pour garder uniquement la crème du hash. Dès l’ouverture, ça dégage une odeur intense mêlant notes sucrées de pâtisserie, touche crémeuse et fond légèrement gaz qui rappelle les meilleures génétiques modernes.  \n\n 🌿 Texture & Aspect\n\n Une texture grasse, souple et brillante, signe d’un filtrage maîtrisé. La matière est homogène, facile à travailler, avec une couleur claire et dorée qui annonce direct la qualité. À chaud, ça bulle et fond parfaitement, preuve d’un produit bien sélectionné.\n\n 😶‍🌫️ Effet\n\n Un high profond et enveloppant, qui commence par une montée mentale relaxante avant de poser un effet lourd et agréable dans le corps. Parfait pour se détendre, se poser entre amis ou savourer un moment chill avec une vraie frappe.\n\n 🔥 Signature\n  Un 3x filtré premium, riche en goût et en puissance — le genre de produit qui se reconnaît dès la première taffe.',
                    tarifs: [
                        { weight: '5G', price: 50.00 },
                        { weight: '10G', price: 80.00 },
                        { weight: '20G', price: 140.00 },
                        { weight: '50G', price: 250.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
          
               
               /* ,
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

                {
                    id: '🫒 PINK RUNTZ 🎀',
                    flag: '🇲🇦',
                    name: '🫒 PINK RUNTZ 🎀', // ⚠️ Corrigé ici (c'était écrit Zkittlez)
                    farm: '🏠 STATIC NO FARMZ',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductPR.png',
                    video: 'VideoPR.mov',
                    description: '🔥 Description\n Le static Pink Runtz issu de la sélection NO FARMZ, c’est l’exigence à l’état pur. Une extraction minutieuse qui offre une résine d’une pureté exceptionnelle. Un vrai travail d’orfèvre pour les puristes qui cherchent une matière ultra clean et un profil terpénique respecté à 100%.\n\n 👃 Arômes & Saveurs\n Une véritable explosion de bonbons acidulés et de fruits rouges sucrés 🍓🍬. Le profil Runtz est indéniable, avec une base crémeuse et une légère touche gazeuse en fond qui vient tapisser le palais. À la chauffe, ça libère une fumée douce, épaisse et extrêmement gourmande.\n\n 👀 Aspect\n Teinte dorée à sable clair, avec une texture fine et soyeuse caractéristique des meilleurs statics. Ça s’effrite tout seul entre les doigts tout en gardant ce côté collant parfait pour le roulage. Zéro impureté.\n\n 😮‍💨 Effet\n Un high joyeux et euphorique qui monte rapidement à la tête, suivi d’une détente corporelle profonde et chaleureuse. Puissant mais lucide, parfait pour chill entre potes ou se relaxer en fin de journée sans être totalement assommé.\n\n 💎 Conclusion\n Le Pink Runtz NO FARMZ, c’est le bonbon ultime version premium. Un static qui allie une gourmandise extrême à une frappe nette et sans bavure. Une valeur sûre pour les amateurs de sucré.',
                    tarifs: [
                        { weight: '5G', price: 80.00 },
                        { weight: '10G', price: 140.00},
                        { weight: '25G', price: 300.00 },
                        { weight: '50G', price: 450.00},
                        { weight: '100G', price: 850.00}
                    ]
                },  
                 {
                    id: '🫒 ZKITTLEZ 🧸',
                    flag: '🇲🇦',
                    name: '🫒 ZKITTLEZ 🧸',
                    farm: '🏠 STATIC NO FARMZ',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductZ.png',
                    video: 'VideoZ.mov',
                    description: '🔥 Description\n Le static Zkittlez de la sélection NO FARMZ frappe très fort. On est sur une extraction de très haute volée, avec un tri des trichomes chirurgical. Un produit brut, haut de gamme, qui capture parfaitement l\'essence de l\'une des génétiques les plus réputées au monde.\n\n 👃 Arômes & Saveurs\n Un véritable arc-en-ciel de saveurs 🌈. Dès l\'ouverture, tu te prends des notes intenses de fruits tropicaux, d’agrumes doux et de baies sucrées. À la combustion, le fameux côté "Z" se révèle pleinement, offrant une fumée riche, intensément fruitée et qui reste très longtemps en bouche.\n\n 👀 Aspect\n Une poudre d’or compacte. Couleur blonde très claire, texture sablonneuse et malléable qui bulle instantanément au contact de la flamme. Le tri est parfait, c\'est de la tête de trichome pure.\n\n 😮‍💨 Effet\n L\'équilibre parfait. La montée est stimulante, booste l\'humeur et la créativité, avant de glisser doucement vers un apaisement physique lourd et réconfortant. Une défonce premium qui dure dans le temps.\n\n 💎 Conclusion\n Le Zkittlez en static NO FARMZ, c’est le summum de l\'exotisme. Un profil terpénique explosif couplé à une qualité de filtration irréprochable. Un must-have absolu pour les chasseurs de terps fruités.',
                    tarifs: [
                        { weight: '5G', price: 80.00 },
                        { weight: '10G', price: 140.00},
                        { weight: '25G', price: 300.00 },
                        { weight: '50G', price: 450.00},
                        { weight: '100G', price: 850.00}
                    ]
                },
                 {
                    id: '🌟 CALYPSO',
                    flag: '🇲🇦',
                    name: '🌟 CALYPSO',
                    farm: 'MOZART FARM 🎹',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductC.png', // ⚠️ A changer
                    video: 'VideoC.mov',
                    description: '🔥 Description\n Le static Calypso signé MOZART FARM, c’est clairement du très haut niveau — une extraction propre, raffinée, où chaque détail est maîtrisé. On est sur un produit ultra clean, avec une texture sablonneuse fine, presque soyeuse, qui témoigne d’un tri précis et d’une qualité de résine exceptionnelle.\n\n 👃 Arômes & Saveurs\n Calypso, ça part sur un profil exotique et lumineux : des notes fruitées tropicales bien fraîches, mélangées à une touche sucrée presque creamy, avec derrière un léger fond gazeux qui vient équilibrer le tout. À la chauffe, ça développe encore plus — c’est riche, doux, et surtout hyper savoureux, sans agressivité.\n\n 👀 Aspect\n Couleur claire à dorée, homogène, avec cette texture “static” bien sèche mais collante juste comme il faut. Ça s’effrite parfaitement, signe d’une extraction premium et bien travaillée.\n\n 😮‍💨 Effet\n Un high propre et progressif : ça démarre avec une montée cérébrale légère, euphorique, puis ça pose tranquillement le corps sans t’écraser. Idéal pour rester fonctionnel tout en profitant d’un vrai moment de détente qualitative.\n\n 💎 Conclusion\n Le Calypso en static de chez MOZART FARM, c’est un produit d’esthète — goût précis, effet maîtrisé, et finition premium. Clairement une pièce de collection pour ceux qui cherchent du clean et du goût au-dessus de la moyenne.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 130.00},
                        { weight: '25G', price: 300.00 },
                        { weight: '50G', price: 450.00},
                        { weight: '100G', price: 800.00}
                    ]
                },  
                 {
                    id: '🌑 BLACK CHERRY',
                    flag: '🇲🇦',
                    name: '🌑 BLACK CHERRY',
                    farm: 'MOZART FARM 🎹',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductBC.png', // ⚠️ A changer
                    video: 'VideoBC.mov',
                    description: '🔥 Description\n Le static Black Cherry de chez MOZART FARM, c’est une extraction ultra propre avec une vraie identité. On est sur un produit travaillé avec précision, texture fine et homogène, qui montre direct que le tri a été fait sérieusement. Un static premium, propre, sans impuretés, avec ce côté sablonneux haut de gamme. \n\n 👃 Arômes & Saveurs \n Là on part sur un profil gourmand et profond : grosse dominante cerise noire bien mûre 🍒, presque confiturée, accompagnée de notes sucrées et légèrement crémeuses. En fond, tu retrouves une touche terreuse/gazeuse qui vient donner du relief et éviter le côté trop sucré. À la chauffe, ça devient encore plus riche, avec une vraie longueur en bouche. \n\n 👀 Aspect \n Couleur beige clair à doré, texture sèche et aérienne, qui s’effrite parfaitement. Brillance légère, signe d’une extraction bien maîtrisée. C’est propre, fin, et très agréable à manipuler. \n\n 😮‍💨 Effet \n Effet chill mais qualitatif : une montée douce avec une sensation de bien-être mentale, suivie d’un relâchement physique progressif. Pas assommant, mais bien relaxant — parfait pour poser sans être KO. \n\n 💎 Conclusion \n Le Black Cherry en static de chez MOZART FARM, c’est le parfait mélange entre gourmandise et puissance maîtrisée. Une vraie signature aromatique avec ce côté fruit noir sucré, et une qualité d’extraction qui place le produit dans le haut du panier.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 130.00},
                        { weight: '25G', price: 300.00 },
                        { weight: '50G', price: 450.00},
                        { weight: '100G', price: 800.00}
                    ]
                },  
                 {
                    id: '🌬️ B. GARLIC JAM',
                    flag: '🇲🇦',
                    name: '🌬️ B. GARLIC JAM',
                    farm: 'DR FRENCH 🥖',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductBG.png', // ⚠️ A changer
                    video: 'VideoBG.mp4',
                    description: '🔥 Description \n\n  Le Static B. Garlic Jam, signé DR French, c’est une vraie pièce de caractère. On est sur un concentré ultra propre, travaillé avec précision pour garder toute la richesse terpénique de la strain. Dès l’ouverture, ça envoie direct : une attaque garlic bien pungente, mélangée à une douceur presque confiturée (“jam”), avec un fond légèrement épicé et crémeux.  \n\n Le résultat est unique : un équilibre entre le funky US bien sale et une rondeur sucrée qui rend le produit hyper addictif.  \n\n 🌿 Texture & Aspect  \n Static clair, presque sableux, avec une texture fine et soyeuse. Les grains sont propres, bien séparés, avec une couleur beige doré tirant parfois vers le blond clair — signe d’une extraction maîtrisée et d’une sélection premium.  \n\n👃 Profil aromatique \n • 🧄 Garlic / onion funky (dominant) \n • 🍯 Sucré “jam” / confiture légère \n • 🌶️ Épicé subtil \n • 🌿 Notes terreuses & creamy en fond  \n\n 💨 Effet  \n Une montée rapide qui frappe direct au cerveau avec un côté euphorique et focus, puis une descente plus lourde, relaxante, qui te pose sans t’éteindre complètement. Parfait pour ceux qui aiment les profils puissants avec du goût qui reste en bouche longtemps.  \n\n 💎 Conclusion  \n Le B. Garlic Jam en static, c’est un produit de connaisseur : un goût sale mais maîtrisé, une extraction clean, et une vraie identité. Typiquement le genre de pièce que tu retrouves pas partout.  \n\n OG Legacy approved 🔥',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 130.00},
                        { weight: '25G', price: 300.00 },
                        { weight: '50G', price: 450.00},
                        { weight: '100G', price: 800.00}
                    ]
                }, 
                 {
                    id: 'ALL BLUE 🫐',
                    flag: '🇲🇦',
                    name: 'ALL BLUE 🫐',
                    farm: 'DR FRENCH 🥖',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductAllB.png', // ⚠️ A changer
                    video: 'VideoAllB.mp4',
                    description: '🫐 STATIC SINGLE SOURCE \n\n 🔥 Description\n All Blue, c’est une strain ultra fruitée qui tourne autour de notes intenses de myrtille, baies sauvages et une légère touche sucrée presque candy. À l’ouverture, ça sent direct le fruit mûr avec une profondeur fraîche et légèrement crémeuse — un profil terpénique propre et addictif. \n\n 🌿 Qualité Static \n Single source signé DR FRENCH = qualité maîtrisée de A à Z. Le static est propre, clair, texture sableuse fine avec un reflet légèrement doré, signe d’une extraction propre et bien travaillée. Ça fond parfaitement et ça libère tous les arômes. \n\n 😶‍🌫️ Effet \n Effet équilibré avec une montée mentale douce et euphorique, suivie d’un relâchement corporel léger. Ça reste fonctionnel mais ultra chill — parfait pour kiffer sans être KO. \n\n 💎 Conclusion \n All Blue, c’est la combinaison parfaite entre fraîcheur fruitée, douceur et qualité premium. Un static propre qui parle aux amateurs de goûts nets et raffinés.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 130.00},
                        { weight: '25G', price: 300.00 },
                        { weight: '50G', price: 450.00},
                        { weight: '100G', price: 800.00}
                    ]
                }, 
                 {
                    id: 'ALL CAKEZ 🍰',
                    flag: '🇲🇦',
                    name: 'ALL CAKEZ 🍰',
                    farm: 'DR FRENCH 🥖',
                    promoEligible: true,
                    type: 'STATIC',
                    image: 'ProductAll.png', // ⚠️ A changer
                    video: 'VideoAll.mp4',
                    description: '🍰 STATIC SINGLE SOURCE \n\n 🔥 Description \n All Cakez, c’est une vraie pâtisserie version haut de gamme. Une strain ultra gourmande qui mélange des notes sucrées, crémeuses et légèrement vanillées, avec une profondeur riche typique des meilleures génétiques “cake”. Dès l’ouverture, ça dégage un parfum lourd et raffiné, entre dessert fraîchement sorti du four et touche légèrement gassy qui rappelle son côté premium. \n\n 🌿 Qualité Static \n Extraction single source = pureté maximale. Tout vient de la même farm DR FRENCH, ce qui garantit une cohérence parfaite entre goût, effet et qualité. Le résultat : un static clean, blond clair, texture sableuse ultra fine, qui fond parfaitement. \n\n 😶‍🌫️ Effet \n Un high smooth mais puissant. Ça commence par une montée euphorique et relaxante, puis ça s’installe dans un chill profond sans t’éteindre. Parfait pour se poser, kiffer ou créer. \n\n 💎 Conclusion \n  Un produit élite pour les vrais connaisseurs. All Cakez en static single source, c’est le mélange parfait entre gourmandise, puissance et pureté.',
                    tarifs: [
                        { weight: '5G', price: 70.00 },
                        { weight: '10G', price: 130.00},
                        { weight: '25G', price: 300.00 },
                        { weight: '50G', price: 450.00},
                        { weight: '100G', price: 800.00}
                    ]
                }, 
              
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
        }

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
        // 👇 AJOUT STRATÉGIQUE : Coupe toutes les vidéos instantanément au changement de page
        document.querySelectorAll('video').forEach(video => {
            video.pause();
        });
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