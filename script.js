// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener("DOMContentLoaded", function () {
  const tg = window.Telegram.WebApp;
  tg.ready();
  tg.expand();
  tg.setHeaderColor("#2c2c2e");
  tg.setBackgroundColor("#1c1c1d");

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
        loader.classList.remove("active");
        // Affiche la page Home par défaut
        document.getElementById("page-home").classList.add("active");
      }, 500); // Attend la fin du fondu
    }
  }, 2600); // 2600ms = 2.5s d'animation + 0.1s de délai

  // --- CONFIGURATION DES LIENS DE CONTACT ---
  const contactLinks = [
    {
      name: "WHATSAPP 📞",
      url: "https://wa.me/33745907270",
      id: "whatsapp",
      className: "whatsapp", // Il faudra peut-être ajouter ce CSS (Jaune)
      text: "WHATSAPP 📞",
    },
    {
      name: "CANAL TÉLÉGRAM 💙",
      url: "https://t.me/+qHFh_JeCp405MTc0",
      id: "telegram-main",
      className: "telegram", // Garde le style Bleu Telegram
      text: "CANAL TÉLÉGRAM 💙",
    },
    {
      name: "POTATO / MENU 🥔",
      url: "https://dympt.org/legacyog75",
      id: "potato-main",
      className: "potato", // Garde le style Marron/Doré Potato
      text: "CANAL POTATO 🥔",
    },
    {
      name: "INSTAGRAM 📸",
      url: "https://www.instagram.com/og_legacy75?igsh=bG5nc3duNWRxd3Ey&utm_source=qr",
      id: "instagram",
      className: "instagram", // Style dégradé Insta
      text: "INSTAGRAM 📸",
    },
  ];

  // --- DONNÉES DE L'APPLICATION (PISTACHIOBOT) ---
  const appData = [
    // ============================================================
    // CATEGORIE 1 : HOLLANDE 🌿
    // ============================================================
    {
      id: "WeedH",
      name: "WEED HOLLANDE 🇳🇱🌷",
      type: "WeedH",
      quality: "WEED HOLLANDE 🇳🇱🌷",
      image: "CategHo.png", // Ton image de catégorie Weed

      products: [
  
        {
          id: "🧠🍀AMNESIA CORE CUT 🍀🧠",
          flag: "🇳🇱",
          name: "🧠🍀 AMNESIA CORE CUT 🍀🧠",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductCore.png",
          video: "VideoCore.mp4",
          description:
            "💎🔥 Considérée par de nombreux connaisseurs comme l’une des meilleures expressions de l’Amnesia, la Amnesia Core Cut est une sélection d’élite recherchée pour son profil terpénique puissant et son effet cérébral particulièrement intense. 🔥💎\n\n ✨ Les effets\n\n 🚀 Montée rapide et énergique\n 😄 Euphorie marquée\n 🧠 Stimulation mentale puissante\n 🎨 Créativité et concentration accrues\n 🗣️ Effet social apprécié des amateurs de sativas\n\n 👃 Les arômes\n\n 🍊 Agrumes frais et zestés\n 🌿 Notes Haze classiques\n 🌶️ Légères touches épicées et encensées\n\n 🌱 Pourquoi elle est si recherchée ? \n\n • Sélection réputée pour sa stabilité \n • Profil aromatique particulièrement intense \n • Forte production de résine ✨ \n • Expression fidèle de l’esprit Amnesia « old school » \n • Très appréciée des amateurs de Haze européennes\n\n 🏆 Pour les connaisseurs\n La Core Cut est souvent citée parmi les meilleures coupes d’Amnesia grâce à son équilibre entre puissance, saveurs citronnées explosives et effet mental clair. Beaucoup la considèrent comme une référence lorsqu’on parle de vraie Amnesia de haut niveau.\n\n ⭐ En résumé :\n Une Amnesia premium, ultra citronnée, résineuse et cérébrale, recherchée par les amateurs de Haze authentiques et les passionnés de génétiques européennes. 🔥⚡🧠💎🌿",
          tarifs: [{ weight: "10g", price: 70.0 }],
        },
      ],
    },
    {
      id: "Jaune USA",
      name: "Jaune USA 🇺🇸",
      type: "Jaune USA",
      quality: "Jaune USA 🇺🇸",
      image: "CategJauneUsa.png", // Ton image de catégorie Weed

      products: [
        {
          id: "BISCOTTI 🍪",
          flag: "🇺🇸",
          name: "BISCOTTI 🍪",
          farm: "🌾 WEST COAST MOUSSE",
          promoEligible: true,
          type: "3xFiltre",
          image: "ProductBisco.jpg",
          video: "VideoBisco.mp4",
          description:
            "🍪🔥 BISCOTTI — WEST COAST MOUSSE 🔥🍪\n\n Une mousse gourmande inspirée des meilleurs profils dessert américains. Biscotti développe un mélange riche de biscuit sucré, de crème vanillée et de notes légèrement épicées, accompagné d’un fond kush et gazeux qui lui apporte beaucoup de caractère. 🇺🇸💎\n\n 👃 Profil aromatique :\n 🍪 Biscuit chaud et pâte sucrée\n 🍦 Vanille et crème douce\n 🌰 Amande et noisette grillée\n 🌶️ Légères notes épicées\n ⛽ Fond kush et gazeux\n\n 👅 Goût :\n En bouche, l’attaque rappelle un biscuit tout juste sorti du four, avec des notes de vanille, de caramel et de fruits à coque. Le profil devient ensuite plus profond et légèrement épicé, avant une finale kush et gassy qui reste longtemps sur le palais. 😮‍💨🍪\n\n 💛 Texture & qualité :\n ☁️ Mousseuse et souple\n 🤲 Facile à effriter\n ✨ Profil gourmand très marqué\n 🔥 Fumée dense et crémeuse\n 💎 Finition premium West Coast\n\n 🏆 Le verdict :\n Biscotti est une valeur sûre pour les amateurs de profils pâtissiers, crémeux et gazeux. Une mousse riche et réconfortante avec une véritable identité Cali dessert. 🍪🍦⛽🔥",
          tarifs: [
            { weight: "9G", price: 50.0 },
            { weight: "25G", price: 120.0 },
            { weight: "50G", price: 200.0 },
            { weight: "100G", price: 350.0 },
          ],
        },
        {
          id: "Candy Crush 🍭",
          flag: "🇺🇸",
          name: "Candy Crush 🍭",
          farm: "🌾 WEST COAST MOUSSE",
          promoEligible: true,
          type: "3xFiltre",
          image: "ProductUsa3.jpg",
          video: "VideoCCH.mp4",
          description:
            "🇺🇸 DRY SIFT PREMIUM • UPGRADE AROMATIQUE & PUISSANCE 🇺🇸 \n\n Le Mousseux Made in Los Angeles monte en gamme. Ce nouveau batch bénéficie d'une technique \"Dry Sift\" optimisée : le goût Cali est beaucoup plus prononcé et la défonce frappe nettement plus fort que l'ancienne version. \n\n  🍭 Candy Land : Euphorie percutante, profil ultra-sucré candy. \n\n 🍯 Texture : Jaune mousseux d’exception qui s'effrite tout seul. Une frappe exclusive introuvable ailleurs. 🥵😱🍫",
          tarifs: [
            { weight: "9G", price: 50.0 },
            { weight: "25G", price: 120.0 },
            { weight: "50G", price: 200.0 },
            { weight: "100G", price: 350.0 },
          ],
        }, 
         {
                    id: 'BLUE LOBSTER 🦞💙',
                    flag: '🇺🇸',
                    name: 'BLUE LOBSTER 🦞💙',
                    farm: '🌾 WEST COAST MOUSSE',
                    promoEligible: true,
                    type: 'JauneUsa',
                    image: 'ProductBlueL.png', 
                    video: 'VideoBlueL.mov',
                    description: 'Une variété lourde qui mélange parfaitement le côté fruité sucré et le gaz puissant typique des grosses génétiques US 🇺🇸🔥\n Le Blue Lobster en jaune mousseux envoie un profil très riche avec une fumée épaisse et ultra savoureuse 😮‍💨💨\n\n 👃 Profil aromatique :\n Dès l’ouverture, t’as une grosse odeur berry sucrée avec des notes crémeuses et un fond bien gassy ⛽️🫐🍬\n Le tout accompagné d’une petite touche marine/funky typique du Blue Lobster qui lui donne une vraie identité premium.\n\n 👅 Goût :\n En bouche c’est hyper gras et intense 🔥\n Tu sens les fruits bleus sucrés, une crème légère et surtout une finition diesel/gaz qui reste collée au palais longtemps 😵‍💫💨\n Très complexe et très propre à la combustion.\n\n 💥 Effets :\n Défonce lourde et euphorique au début avant de laisser place à une relaxation profonde 🧠💥\n Parfait pour les amateurs de produits qui cognent vraiment fort tout en gardant un goût incroyable.\n⭐️ Texture mousseuse premium\n⭐️ Très gros terps US\n⭐️ Fumée épaisse et savoureuse\n⭐️ Effet puissant et longue durée 🦞🔥',
                    tarifs: [
                        { weight: '9G', price: 50.00 },
                        { weight: '25G', price: 120.00 },
                        { weight: '50G', price: 200.00 },
                        { weight: '100G', price: 350.00 },
                    ]
                },
         {
                    id: 'White truffle 🍄',
                    flag: '🇺🇸',
                    name: 'White truffle 🍄',
                    farm: '🌾 WEST COAST MOUSSE',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductWT.jpg',
                    video:'VideoWT.mp4',
                      description: '🍄🤍 WHITE TRUFFLE — WEST COAST MOUSSE 🤍🍄\n\n Une mousse premium au profil profond, crémeux et raffiné. White Truffle se distingue par son mélange de notes terreuses, boisées et légèrement gazeuses, accompagné d’une douceur gourmande qui apporte beaucoup de rondeur à l’ensemble. 🇺🇸🔥\n\n 👃 Profil aromatique :\n 🍄 Notes terreuses et boisées\n 🌰 Noisette et fruits à coque\n 🍦 Fond crémeux et vanillé\n 🌿 Légère touche végétale\n ⛽ Finition gazeuse discrète\n\n 👅 Goût :\n En bouche, l’attaque est ronde et crémeuse, avec des saveurs de noisette grillée et de sous-bois. Une douceur légèrement vanillée apparaît ensuite, avant de laisser place à une finale plus profonde, terreuse et gassy qui reste longtemps sur le palais. 😮‍💨🍄\n\n 💛 Texture & qualité :\n ☁️ Mousseuse et homogène\n 🤲 Souple et facile à travailler\n ✨ Profil aromatique riche\n 🔥 Fumée dense et savoureuse\n 💎 Finition premium West Coast\n\n 🏆 Le verdict :\n White Truffle est une sélection élégante et pleine de caractère, idéale pour les amateurs de profils crémeux, terreux et légèrement gazeux. Une mousse raffinée qui change des saveurs fruitées classiques. 🍄🤍⛽🔥',
                      tarifs: [
                        { weight: '9G', price: 50.00 },
                        { weight: '25G', price: 120.00 },
                        { weight: '50G', price: 200.00 },
                        { weight: '100G', price: 350.00 },
                    ]
                },
        {
          id: "Papaya",
          flag: "🇺🇸",
          name: "PAPAYA 🥭",
          farm: "👹 MONSTER CALI-MOUSSE 👹",
          promoEligible: true,
          type: "JauneUsa",
          image: "ProductPA.jpg",
          video: "VideoMS.mov",
          description:
            "👹🥭 MONSTER CALI-MOUSSE — PAPAYA 🥭👹\n\nUne mousse jaune au profil tropical, fruité et gourmand, inspirée des saveurs exotiques de la papaye bien mûre. Papaya développe une identité douce, sucrée et légèrement crémeuse, parfaite pour les amateurs de profils fruités et modernes. 🇺🇸🔥\n\n👃 Profil aromatique :\n🥭 Papaye mûre et fruits tropicaux\n🍑 Notes de pêche et fruits jaunes\n🍬 Douceur candy légère\n🍦 Fond crémeux et rond\n🌿 Petite touche végétale propre\n\n👅 Goût :\nEn bouche, Papaya offre une attaque très fruitée, avec des notes tropicales sucrées et une rondeur crémeuse agréable. La dégustation reste douce, parfumée et équilibrée, avec une finale exotique qui reste bien présente. 😮‍💨🥭\n\n💛 Texture & qualité :\n☁️ Mousseuse et souple\n🤲 Facile à travailler\n✨ Arômes fruités bien marqués\n🔥 Fumée douce et parfumée\n💎 Sélection Monster Cali-Mousse\n\n🏆 Le verdict :\nPapaya est une Cali-Mousse gourmande et exotique, idéale pour ceux qui aiment les profils fruités, sucrés et tropicaux. Une sélection douce, parfumée et très agréable à découvrir. 👹🥭🔥",
          tarifs: [
            { weight: "9G", price: 50.0 },
            { weight: "25G", price: 120.0 },
            { weight: "50G", price: 200.0 },
            {
              weight: "100G",
              price: 350.0,
            },
          ],
        },
        {
          id: "GELATO",
          flag: "🇺🇸",
          name: "GELATO 🍦",
          farm: "👹 MONSTER CALI-MOUSSE 👹",
          promoEligible: true,
          type: "JauneUsa",
          image: "ProductGe.jpg",
                    video: "VideoMS.mov",
          description:
            "👹🍦 MONSTER CALI-MOUSSE — GELATO 🍦👹\n\n Une mousse jaune ultra gourmande qui met en avant tout le caractère crémeux et fruité de la célèbre Gelato. Dès l’ouverture, elle dévoile un parfum riche, sucré et moderne, avec une vraie identité Cali. 🇺🇸🔥\n\n 👃 Profil aromatique :\n 🍦 Crème glacée et vanille douce\n 🍓 Fruits rouges sucrés\n 🍊 Agrumes légèrement acidulés\n 🍬 Notes de bonbon\n ⛽ Fond gazeux discret\n\n 👅 Goût :\n En bouche, l’attaque est douce et crémeuse, accompagnée de saveurs fruitées rappelant les fruits rouges et les agrumes sucrés. La finale devient légèrement gazeuse et laisse un arrière-goût gourmand façon dessert. 😮‍💨🍦\n\n 💛 Texture :\n ☁️ Mousseuse et aérée\n 🤲 Facile à travailler\n ✨ Parfum intense dès l’ouverture\n 🔥 Combustion régulière\n\n 🏆 Le verdict :\n Une Cali-Mousse gourmande et équilibrée, idéale pour les amateurs de profils crémeux, fruités et légèrement gassy. Une valeur sûre signée Monster Cali-Mousse. 👹🍦🔥",
          tarifs: [
            { weight: "9G", price: 50.0 },
            { weight: "25G", price: 120.0 },
            { weight: "50G", price: 200.0 },
            {
              weight: "100G",
              price: 350.0,
            },
          ],
        },
        {
          id: "CHERRY PIE",
          flag: "🇺🇸",
          name: "CHERRY PIE 🥧",
          farm: "👹 MONSTER CALI-MOUSSE 👹",
          promoEligible: true,
          type: "JauneUsa",
          image: "ProductC.jpg",
                    video: "VideoMS.mov",
          description:
            "👹🍒 MONSTER CALI-MOUSSE — CHERRY PIE 🥧👹\n\n Une mousse jaune au profil dessert intense, dominée par la cerise sucrée et les notes pâtissières. Cherry Pie mélange gourmandise fruitée, douceur crémeuse et petite touche gazeuse pour une identité riche et reconnaissable. 🇺🇸🔥\n\n 👃 Profil aromatique :\n 🍒 Cerise mûre et fruits rouges\n 🥧 Pâte sucrée et biscuit\n 🍦 Crème douce et vanillée\n 🌿 Légère note terreuse\n ⛽ Fond gazeux subtil\n\n 👅 Goût :\n L’attaque rappelle une tarte à la cerise avec une belle douceur fruitée. Elle évolue ensuite vers des notes de pâte sucrée, de crème et de vanille, avant une finition légèrement terreuse et gassy qui reste longtemps en bouche. 😮‍💨🍒\n\n 💛 Texture :\n ☁️ Mousseuse et souple\n 🤲 Facile à effriter\n ✨ Riche en arômes\n 🔥 Fumée dense et savoureuse\n\n 🏆 Le verdict :\n Une Cali-Mousse très gourmande, pensée pour les amateurs de cerise, de profils pâtissiers et de saveurs dessert. Cherry Pie porte parfaitement la signature Monster Cali-Mousse. 👹🍒🥧🔥",
          tarifs: [
            { weight: "9G", price: 50.0 },
            { weight: "25G", price: 120.0 },
            { weight: "50G", price: 200.0 },
            {
              weight: "100G",
              price: 350.0,
            },
          ],
        },
        {
          id: "TROPICANA CHERRY",
          flag: "🇺🇸",
          name: "TROPICANA CHERRY 🍒",
          farm: "👹 MONSTER CALI-MOUSSE 👹",
          promoEligible: true,
          type: "JauneUsa",
          image: "ProductTC.jpg",
                    video: "VideoMS.mov",
          description:
            "👹🍊 MONSTER CALI-MOUSSE — TROPICANA CHERRY 🍒👹\n\n Une mousse jaune fruitée et explosive qui combine la douceur de la cerise avec la fraîcheur intense des agrumes. Tropicana Cherry développe un profil coloré, sucré et acidulé, parfaitement adapté aux amateurs de saveurs modernes. 🇺🇸🔥\n\n 👃 Profil aromatique :\n 🍒 Cerise sucrée et fruits rouges\n 🍊 Orange fraîche et zestée\n 🍋 Agrumes acidulés\n 🍬 Bonbon fruité\n 🌸 Petite touche florale\n\n 👅 Goût :\n En bouche, une vague de cerise et d’orange sucrée arrive dès la première bouffée. Les agrumes apportent ensuite une fraîcheur légèrement acidulée, tandis qu’une douceur candy et florale équilibre parfaitement l’ensemble. 😮‍💨🍊\n\n 💛 Texture :\n ☁️ Mousseuse et légère\n ✨ Profil aromatique très expressif\n 🤲 Facile à travailler\n 🔥 Fumée douce et parfumée\n\n 🏆 Le verdict :\n Une Cali-Mousse vive, fruitée et rafraîchissante, avec un équilibre parfait entre cerise sucrée et agrumes pétillants. Une sélection pleine de caractère signée Monster Cali-Mousse. 👹🍒🍊🔥",
          tarifs: [
            { weight: "9G", price: 50.0 },
            { weight: "25G", price: 120.0 },
            { weight: "50G", price: 200.0 },
            {
              weight: "100G",
              price: 350.0,
            },
          ],
        },
        {
          id: "PEANUT BUTTER",
          flag: "🇺🇸",
          name: "PEANUT BUTTER 🥜",
          farm: "👹 MONSTER CALI-MOUSSE 👹",
          promoEligible: true,
          type: "JauneUsa",
          image: "ProductPB.jpg",
                    video: "VideoMS.mov",
          description:
            "👹🥜 MONSTER CALI-MOUSSE — PEANUT BUTTER 🥜👹\n\n Une mousse jaune au profil gourmand et original, inspirée des saveurs riches du beurre de cacahuète. Elle mélange des notes crémeuses, grillées et légèrement salées avec un fond terreux et gazeux typique des grosses sélections US. 🇺🇸🔥\n\n 👃 Profil aromatique :\n 🥜 Cacahuète grillée\n 🧈 Beurre crémeux\n 🍪 Biscuit et pâte sucrée\n 🌿 Fond terreux\n ⛽ Légère touche de gaz\n\n 👅 Goût :\n L’attaque est ronde et crémeuse, avec une saveur de cacahuète grillée et de biscuit. Elle évolue progressivement vers des notes plus terreuses et légèrement gazeuses, laissant une finale riche et persistante sur le palais. 😮‍💨🥜\n\n 💛 Texture :\n ☁️ Mousseuse et souple\n 🤲 Facile à travailler\n ✨ Profil gourmand très marqué\n 🔥 Fumée épaisse et savoureuse\n\n 🏆 Le verdict :\n Une Cali-Mousse différente des profils fruités classiques, destinée aux amateurs de saveurs crémeuses, grillées et gassy. Une sélection originale et pleine de caractère. 👹🥜🧈🔥",
          tarifs: [
            { weight: "9G", price: 50.0 },
            { weight: "25G", price: 120.0 },
            { weight: "50G", price: 200.0 },
            {
              weight: "100G",
              price: 350.0,
            },
          ],
        },
        {
          id: "RS11",
          flag: "🇺🇸",
          name: "RS 11 🏎️",
          farm: "👹 MONSTER CALI-MOUSSE 👹",
          promoEligible: true,
          type: "JauneUsa",
          image: "ProductRS.jpg",
                    video: "VideoMS.mov",
          description:
            "👹🏎️ MONSTER CALI-MOUSSE — RS 11 🏎️👹\n\n Une mousse jaune inspirée de la célèbre RS11, connue pour son profil candy, fruité et crémeux accompagné d’une belle touche gazeuse. Une sélection moderne, riche en arômes et immédiatement reconnaissable. 🇺🇸🔥\n\n 👃 Profil aromatique :\n 🍬 Bonbon fruité\n 🍓 Fruits rouges et baies\n 🍦 Crème vanillée\n 🌸 Notes florales légères\n ⛽ Fond gazeux et terreux\n\n 👅 Goût :\n En bouche, RS11 commence par une douceur candy très marquée, accompagnée de fruits rouges sucrés. Des notes crémeuses et florales apparaissent ensuite, avant une finale gassy plus profonde qui apporte du relief et une belle longueur en bouche. 😮‍💨🍬\n\n 💛 Texture :\n ☁️ Mousseuse et aérée\n 🤲 Souple et facile à effriter\n ✨ Terpènes riches et expressifs\n 🔥 Fumée dense et parfumée\n\n 🏆 Le verdict :\n Une Cali-Mousse premium au profil candy-gas parfaitement équilibré. RS11 conviendra aux amateurs de saveurs fruitées, crémeuses et puissantes, avec une vraie identité West Coast. 👹🏎️🍬🔥",
          tarifs: [
            { weight: "9G", price: 50.0 },
            { weight: "25G", price: 120.0 },
            { weight: "50G", price: 200.0 },
            {
              weight: "100G",
              price: 350.0,
            },
          ],
        },
       
      ],
    },
    {
      id: "STATIC",
      name: "STATIC 🇲🇦",
      type: "DoubleStatic",
      quality: "STATIC 🇲🇦",
      image: "CategDouble.png", // Ton image de catégorie Weed

      products: [
        {
  id: 'Olive Double Static 🫒',
  flag: '🇲🇦',
  name: 'Olive Double Static 🫒',
  farm: "🌾 No Farm 🌾",
  promoEligible: true,
  type: 'STATIC',
  image: 'ProductODS.png',
  video: 'VideoODS.mp4',
  description:
    "🫒🧤 OLIVE DOUBLE STATIC — PREMIUM 🧤🫒\n\nUne sélection Double Static au format olive, inspirée du savoir-faire marocain et de l'univers des résines haut de gamme. Olive Double Static évoque une identité aromatique profonde et raffinée, mêlant notes boisées, douceur gourmande et caractère résineux. 🇲🇦💎✨\n\n👃 Profil aromatique :\n🍯 Notes douces et légèrement miellées\n🌰 Nuances de noisette et fruits à coque\n🍫 Touches chocolatées gourmandes\n🌿 Fond végétal et résineux\n🪵 Accents boisés et terreux\n🔥 Finition aromatique profonde\n\n🌈 Signature aromatique :\nUn profil imaginé autour d'une ouverture douce et gourmande, associant miel, noisette et nuances chocolatées. Des notes boisées et résineuses viennent compléter cette composition, rappelant les profils traditionnels marocains. 🫒🍯\n\n🧤 Texture & présentation :\n💎 Catégorie Double Static\n🫒 Format olive original\n🇲🇦 Inspiration marocaine\n🌿 Univers résineux et authentique\n✨ Présentation soignée\n👑 Identité premium et raffinée\n\n🏆 Le verdict :\nUne identité élégante et pleine de caractère, qui associe douceur miellée, nuances boisées et profondeur résineuse. Olive Double Static se distingue par son format original et son inspiration marocaine traditionnelle. 🫒🧤🇲🇦💎",
  tarifs: [
    { weight: '1 olive', price: 100.00 },
  ]
}, 

{
          id: "Permanant maker🍬🇺🇸",
          flag: "🇲🇦",
          name: "Permanant maker🍬🇺🇸",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "Static",
          image: "ProductPM.png",
          video: "VideoPM.mp4",
          description:   "🍬🇺🇸 PERMANANT MAKER — TERPVALLEY 🏜️\n\n Une sélection Static au profil sucré et fruité, inspirée des saveurs gourmandes américaines. Permanant Maker développe une identité aromatique riche, mêlant notes candy, touches crémeuses et fond résineux. 🇲🇦💎✨\n\n 👃 Profil aromatique :\n 🍬 Notes sucrées et candy\n 🍓 Fruits rouges et baies\n 🍦 Crème douce et vanillée\n 🌿 Fond résineux et terreux\n 🪵 Accents boisés subtils\n 🔥 Finition aromatique persistante\n\n 🌈 Signature aromatique :\n Un profil imaginé autour d'une ouverture sucrée et fruitée, associant candy, fruits rouges et nuances crémeuses. Des notes résineuses et boisées viennent compléter cette composition, rappelant les profils gourmands américains. 🍬🍓\n\n 🧤 Texture & présentation :\n 💎 Catégorie Static\n 🇲🇦 Inspiration marocaine\n 🌿 Univers résineux et authentique\n ✨ Présentation soignée\n 👑 Identité premium et gourmande\n\n 🏆 Le verdict :\n Une identité élégante et pleine de caractère, qui associe douceur candy, nuances fruitées et profondeur résineuse. Permanant Maker se distingue par son profil gourmand et son inspiration américaine. 🍬🇺🇸💎",
          tarifs: [
            { weight: "3G", price: 50.0 },
            { weight: "10G", price: 140.0 },
          ],
        },
        {
          id: "MelonZ 🍈🍭",
          flag: "🇲🇦",
          name: "MelonZ 🍈🍭",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "Static",
          image: "ProductMZ.png",
          video: "VideoMZ.mp4",
          description:   "🍈🍭 MELONZ — TERPVALLEY 🏜️\n\n Une sélection Static au profil sucré et fruité, inspirée des saveurs gourmandes de la pastèque et du melon. MelonZ développe une identité aromatique riche, mêlant notes fruitées, touches crémeuses et fond résineux. 🇲🇦💎✨\n\n 👃 Profil aromatique :\n 🍈 Notes sucrées de melon\n 🍉 Pastèque fraîche et juteuse\n 🍦 Crème douce et vanillée\n 🌿 Fond résineux et terreux\n 🪵 Accents boisés subtils\n 🔥 Finition aromatique persistante\n\n 🌈 Signature aromatique :\n Un profil imaginé autour d'une ouverture sucrée et fruitée, associant melon, pastèque et nuances crémeuses. Des notes résineuses et boisées viennent compléter cette composition, rappelant les profils gourmands estivaux. 🍈🍉\n\n 🧤 Texture & présentation :\n 💎 Catégorie Static\n 🇲🇦 Inspiration marocaine\n 🌿 Univers résineux et authentique\n ✨ Présentation soignée\n 👑 Identité premium et gourmande\n\n 🏆 Le verdict :\n Une identité élégante et pleine de caractère, qui associe douceur fruitée, nuances crémeuses et profondeur résineuse. MelonZ se distingue par son profil gourmand et son inspiration estivale. 🍈🍭💎",
          tarifs: [
            { weight: "3G", price: 50.0 },
            { weight: "10G", price: 140.0 },
          ],
        },
        {
          id: "GMO 🧄🧅⛽️",
          flag: "🇲🇦",
          name: "GMO 🧄🧅⛽️",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "Static",
          image: "ProductGMO.png",
          video: "VideoGMO.mp4",
          description:   " 🧄🧅 GMO — TERPVALLEY 🏜️\n\n Une sélection Static au profil puissant et résineux, inspirée des saveurs intenses de l’ail et de l’oignon. GMO développe une identité aromatique riche, mêlant notes terreuses, touches épicées et fond résineux. 🇲🇦💎✨\n\n 👃 Profil aromatique :\n 🧄 Notes d’ail et d’oignon\n 🌿 Fond terreux et résineux\n 🪵 Accents boisés subtils\n 🔥 Finition aromatique persistante\n\n 🌈 Signature aromatique :\n Un profil imaginé autour d’une ouverture puissante et résineuse, associant ail, oignon et nuances terreuses. Des notes boisées viennent compléter cette composition, rappelant les profils intenses et authentiques. 🧄🧅\n\n 🧤 Texture & présentation :\n 💎 Catégorie Static\n 🇲🇦 Inspiration marocaine\n 🌿 Univers résineux et authentique\n ✨ Présentation soignée\n 👑 Identité premium et intense\n\n 🏆 Le verdict :\n Une identité élégante et pleine de caractère, qui associe puissance aromatique, nuances terreuses et profondeur résineuse. GMO se distingue par son profil intense et son inspiration authentique. 🧄🧅⛽️💎",
          tarifs: [
            { weight: "3G", price: 50.0 },
            { weight: "10G", price: 140.0 },
          ],
        },
        {
          id: "Maracuya 🥭🌴🏖️",
          flag: "🇲🇦",
          name: "Maracuya 🥭🌴🏖️",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "Static",
          image: "ProductM.png",
          video: "VideoM.mp4",
          description:   " 🥭🌴🏖️ Maracuya — TERPVALLEY 🏜️\n\n Une sélection Static au profil sucré et fruité, inspirée des saveurs tropicales. Maracuya développe une identité aromatique riche, mêlant notes fruitées, touches crémeuses et fond résineux. 🇲🇦💎✨\n\n 👃 Profil aromatique :\n 🥭 Notes de maracuya\n 🌴 Tropicalité et fraîcheur\n 🍦 Crème douce et vanillée\n 🌿 Fond résineux et terreux\n 🪵 Accents boisés subtils\n 🔥 Finition aromatique persistante\n\n 🌈 Signature aromatique :\n Un profil imaginé autour d'une ouverture tropicale et fruitée, associant maracuya, nuances crémeuses et profondeur résineuse. Des notes boisées viennent compléter cette composition, rappelant les profils tropicaux authentiques. 🥭🌴\n\n 🧤 Texture & présentation :\n 💎 Catégorie Static\n 🇲🇦 Inspiration marocaine\n 🌿 Univers résineux et authentique\n ✨ Présentation soignée\n 👑 Identité premium et gourmande\n\n 🏆 Le verdict :\n Une identité élégante et pleine de caractère, qui associe douceur fruitée, nuances crémeuses et profondeur résineuse. Maracuya se distingue par son profil gourmand et son inspiration tropicale. 🥭🌴🏖️💎",
          tarifs: [
            { weight: "3G", price: 50.0 },
            { weight: "10G", price: 140.0 },
          ],
        },
        {
          id: "MaroccanPeach 🇲🇦🍑🤤",
          flag: "🇲🇦",
          name: "MaroccanPeach 🇲🇦🍑🤤",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "Static",
          image: "ProductMP.png",
          video: "VideoMP.mov",
          description:   " 🍑🍑 MaroccanPeach — TERPVALLEY 🏜️\n\n Une sélection Static au profil sucré et fruité, inspirée des saveurs marocaines. MaroccanPeach développe une identité aromatique riche, mêlant notes fruitées, touches crémeuses et fond résineux. 🇲🇦💎✨\n\n 👃 Profil aromatique :\n 🍑 Notes de pêche marocaine\n 🌴 Tropicalité et fraîcheur\n 🍦 Crème douce et vanillée\n 🌿 Fond résineux et terreux\n 🪵 Accents boisés subtils\n 🔥 Finition aromatique persistante\n\n 🌈 Signature aromatique :\n Un profil imaginé autour d'une ouverture tropicale et fruitée, associant pêche, nuances crémeuses et profondeur résineuse. Des notes boisées viennent compléter cette composition, rappelant les profils tropicaux authentiques. 🍑🌴\n\n 🧤 Texture & présentation :\n 💎 Catégorie Static\n 🇲🇦 Inspiration marocaine\n 🌿 Univers résineux et authentique\n ✨ Présentation soignée\n 👑 Identité premium et gourmande\n\n 🏆 Le verdict :\n Une identité élégante et pleine de caractère, qui associe douceur fruitée, nuances crémeuses et profondeur résineuse. MaroccanPeach se distingue par son profil gourmand et son inspiration tropicale. 🍑🌴🏖️💎",
          tarifs: [
            { weight: "3G", price: 50.0 },
            { weight: "10G", price: 140.0 },
          ],
        },
        {
          id: "Fanta 🥤🧡",
          flag: "🇲🇦",
          name: "Fanta 🥤🧡",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "Static",
          image: "ProductF.png",
          video: "VideoF.mp4",
          description:   " 🥤🧡 FANTA — TERPVALLEY 🏜️\n\n Une sélection Static au profil sucré et fruité, inspirée des saveurs de la célèbre boisson Fanta. Fanta développe une identité aromatique riche, mêlant notes d’agrumes, touches crémeuses et fond résineux. 🇲🇦💎✨\n\n 👃 Profil aromatique :\n 🥤 Notes d’orange et d’agrumes\n 🍬 Douceur sucrée et candy\n 🍦 Crème douce et vanillée\n 🌿 Fond résineux et terreux\n 🪵 Accents boisés subtils\n 🔥 Finition aromatique persistante\n\n 🌈 Signature aromatique :\n Un profil imaginé autour d'une ouverture sucrée et fruitée, associant agrumes, nuances crémeuses et profondeur résineuse. Des notes boisées viennent compléter cette composition, rappelant les profils gourmands estivaux. 🥤🍊\n\n 🧤 Texture & présentation :\n 💎 Catégorie Static\n 🇲🇦 Inspiration marocaine\n 🌿 Univers résineux et authentique\n ✨ Présentation soignée\n 👑 Identité premium et gourmande\n\n 🏆 Le verdict :\n Une identité élégante et pleine de caractère, qui associe douceur fruitée, nuances crémeuses et profondeur résineuse. Fanta se distingue par son profil gourmand et son inspiration estivale. 🥤🧡💎",
          tarifs: [
            { weight: "3G", price: 50.0 },
            { weight: "10G", price: 140.0 },
          ],
        },
        {
          id: "sb x gold cherry 🍊🍒🟣✨",
          flag: "🇲🇦",
          name: "sb x gold cherry 🍊🍒🟣✨",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "Static",
          image: "ProductSBG.png",
          video: "VideoSBG.mp4",
          description:   " 🍊🍒🟣✨ sb x gold cherry — TERPVALLEY 🏜️\n\n Une sélection Static au profil sucré et fruité, inspirée des saveurs de la célèbre boisson Fanta. Fanta développe une identité aromatique riche, mêlant notes d’agrumes, touches crémeuses et fond résineux. 🇲🇦💎✨\n\n 👃 Profil aromatique :\n 🍊 Notes d’orange et d’agrumes\n 🍒 Douceur sucrée et candy\n 🍦 Crème douce et vanillée\n 🌿 Fond résineux et terreux\n 🪵 Accents boisés subtils\n 🔥 Finition aromatique persistante\n\n 🌈 Signature aromatique :\n Un profil imaginé autour d'une ouverture sucrée et fruitée, associant agrumes, nuances crémeuses et profondeur résineuse. Des notes boisées viennent compléter cette composition, rappelant les profils gourmands estivaux. 🍊🍒\n\n 🧤 Texture & présentation :\n 💎 Catégorie Static\n 🇲🇦 Inspiration marocaine\n 🌿 Univers résineux et authentique\n ✨ Présentation soignée\n 👑 Identité premium et gourmande\n\n 🏆 Le verdict :\n Une identité élégante et pleine de caractère, qui associe douceur fruitée, nuances crémeuses et profondeur résineuse. Fanta se distingue par son profil gourmand et son inspiration estivale. 🍊🍒🟣✨",
          tarifs: [
            { weight: "3G", price: 50.0 },
            { weight: "10G", price: 140.0 },
          ],
        },
        {
          id: "ICC x TropCherry🍦🍒",
          flag: "🇲🇦",
          name: "ICC x TropCherry🍦🍒",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "Static",
          image: "ProductICC.jpg",
          video: "VideoICC.mov",
          description:   " 🍍🥥 TropCherry — TERPVALLEY 🏜️\n\n Une sélection Static au profil sucré et fruité, inspirée des saveurs tropicales. TropCherry développe une identité aromatique riche, mêlant notes fruitées, touches crémeuses et fond résineux. 🇲🇦💎✨\n\n 👃 Profil aromatique :\n 🍍 Notes de mangue et de papaye\n 🌴 Tropicalité et fraîcheur\n 🍦 Crème douce et vanillée\n 🌿 Fond résineux et terreux\n 🪵 Accents boisés subtils\n 🔥 Finition aromatique persistante\n\n 🌈 Signature aromatique :\n Un profil imaginé autour d'une ouverture tropicale et fruitée, associant fruits exotiques, nuances crémeuses et profondeur résineuse. Des notes boisées viennent compléter cette composition, rappelant les profils tropicaux authentiques. 🍍🌴\n\n 🧤 Texture & présentation :\n 💎 Catégorie Static\n 🇲🇦 Inspiration marocaine\n 🌿 Univers résineux et authentique\n ✨ Présentation soignée\n 👑 Identité premium et gourmande\n\n 🏆 Le verdict :\n Une identité élégante et pleine de caractère, qui associe douceur fruitée, nuances crémeuses et profondeur résineuse. TropCherry se distingue par son profil gourmand et son inspiration tropicale. 🍍🥥🏖️💎",
          tarifs: [
            { weight: "3G", price: 50.0 },
            { weight: "10G", price: 140.0 },
          ],
        },
      ],
    },
    // ============================================================
    // CATEGORIE 1 : CALI 🌿
    // ============================================================
    {
      id: "WEED",
      name: "WEED CALI 🇺🇸 🥦",
      type: "Weed",
      quality: "WEED CALI 🇺🇸 🥦",
      image: "CategWeed.png", // Ton image de catégorie Weed

      products: [
        {
                    id: 'Bhb',
                    flag: '🇺🇸',
                    name: 'Bhb 🎃',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductBH.png', 
                    video: 'VideoBH.mp4',
                    description:  "🎃🍪 BHB — CALI SELECTION 🍪🎃\n\nUne sélection à l'identité gourmande, ronde et chaleureuse. BHB évoque un univers aromatique inspiré des desserts épicés, des notes vanillées et d'une douceur légèrement boisée. 🇺🇸✨\n\n👃 Profil aromatique :\n🍪 Notes biscuitées\n🍦 Vanille douce\n🎃 Inspiration pâtissière\n🌰 Fruits à coque\n🌿 Fond végétal et boisé\n\n🌈 Signature aromatique :\nUne composition imaginée autour de nuances biscuitées et vanillées, accompagnées d'une rondeur légèrement épicée. Un univers qui rappelle les pâtisseries d'automne et les desserts gourmands. 🎃🍪\n\n🌿 Identité & sélection :\n💎 Collection Cali\n✨ Univers dessert et gourmand\n🍦 Inspiration crémeuse\n🌰 Nuances chaleureuses\n\n🏆 Le verdict :\nUne identité chaleureuse et originale, entre biscuit, vanille et nuances boisées, pour un univers aromatique inspiré de l'automne. 🎃🍪✨",                  
                    tarifs: [
                        { weight: '5g', price: 50.00 },
                        { weight: '10g', price: 90.00 },
                        { weight: '25g', price: 200.00 },
                        { weight: '50g', price: 350.00 },
                    ]
                }, 
         {
                    id: 'La pink',
                    flag: '🇺🇸',
                    name: 'La pink 🩷',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductLP.png', 
                    video: 'VideoLP.mp4',
                    description:  "🩷🍬 LA PINK — CALI PREMIUM 🍬🩷\n\nUne sélection au profil doux, sucré et très gourmand. La Pink se distingue par une belle rondeur aromatique, des notes fruitées/candy bien présentes et une finition propre qui lui donne une vraie identité premium. 🇺🇸🔥\n\n👃 Profil aromatique :\n🩷 Notes candy sucrées\n🍓 Fruits rouges doux\n🍦 Fond crémeux léger\n🌸 Petite touche florale\n🌿 Finition propre et équilibrée\n\n👅 Goût :\nEn bouche, La Pink développe une attaque douce et fruitée, avec une belle présence sucrée et une rondeur très agréable. Le profil reste propre, gourmand et parfumé, avec une finale douce qui reste bien en bouche. 😮‍💨🩷\n\n🌿 Qualité & sélection :\n💎 Sélection Cali premium\n✨ Profil sucré et expressif\n☁️ Dégustation douce et aromatique\n🔥 Belle rondeur en bouche\n🩷 Identité moderne et gourmande\n\n🏆 Le verdict :\nUne variété parfaite pour ceux qui aiment les profils candy, fruités et crémeux. La Pink combine douceur, gourmandise et finition premium dans une sélection très propre. 🩷🍬🔥",                  
                    tarifs: [
                        { weight: '5g', price: 50.00 },
                        { weight: '10g', price: 90.00 },
                        { weight: '25g', price: 200.00 },
                        { weight: '50g', price: 350.00 },
                    ]
                }, 

      ],
    },

    {
      id: "FROZEN",
      name: "FROZEN 🇲🇦🍯",
      type: "Frozen",
      quality: "FROZEN 🇲🇦🍯",
      image: "CategFrozen.png", // Ton image de catégorie Weed

      products: [
         {
          id: "Frosty Diesel",
          flag: "🇺🇸",
          name: "Frosty Diesel ⛽",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "FROZEN",
          image: "ProductFY.jpg",
          video: "VideoFD.mp4",
          description:
                  "⛽❄️ FROSTY DIESEL — FROZEN 160/73U ❄️⛽\n\nUne sélection Frozen premium au profil gassy, frais et puissant en arômes. Frosty Diesel se distingue par une identité diesel bien marquée, une texture soignée et une belle profondeur aromatique destinée aux amateurs de profils plus lourds et caractériels. 🇺🇸🔥\n\n👃 Profil aromatique :\n⛽ Notes diesel et gassy bien présentes\n🍋 Petite touche citronnée fraîche\n🌿 Fond végétal propre\n🔥 Finition résineuse intense\n❄️ Fraîcheur aromatique marquée\n\n👅 Goût :\nEn bouche, Frosty Diesel développe une attaque riche et aromatique, dominée par des notes gassy et légèrement citronnées. Le profil reste profond, propre et long en bouche, avec une finale résineuse qui apporte beaucoup de caractère. 😮‍💨⛽\n\n❄️ Texture & qualité :\n💎 Frozen 160/73u soigneusement sélectionné\n🤲 Texture propre et agréable à travailler\n🌈 Arômes bien conservés\n☁️ Dégustation dense et savoureuse\n🔥 Profil gassy, frais et premium\n\n🏆 Le verdict :\nUne Frozen de caractère, idéale pour ceux qui aiment les profils diesel, résineux et bien marqués. Frosty Diesel combine fraîcheur, intensité aromatique et finition premium dans une sélection très solide. ⛽❄️🔥",
                tarifs: [
            { weight: "5G", price: 50.0 },
            { weight: "10G", price: 90.0 },
            { weight: "25G", price: 200.0 },
                    ],
        },
      ],
    },
    {
      id: "3xFiltre",
      name: "3X FILTRE PREMIUM 🇲🇦🍫",
      type: "3xFiltre",
      quality: "3X FILTRE PREMIUM 🇲🇦🍫",
      image: "Categ3X.png", // Ton image de catégorie Weed

      products: [
         {
          id: "Peach Oz ⭐",
          flag: "🇲🇦",
          name: "Peach Oz ⭐",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "3xFiltre",
          image: "ProductPOZ.png",
          video: "VideoPOZ.mov",
          description:
                " 🍑👑 PEACH OZ — 3X FILTRE PREMIUM 👑🍑 \n\nUne sélection 3X Filtre à l'identité affirmée, classique et raffinée. Peach Oz évoque un univers aromatique profond, mêlant notes résineuses, douceur gourmande et touches boisées. Une signature inspirée du savoir-faire marocain. 🇲🇦✨\n\n👃 Profil aromatique :\n🍯 Notes douces et miellées\n🌰 Touches de noisette grillée\n🌿 Fond végétal et résineux\n🍫 Nuances chocolatées\n🪵 Finition boisée et terreuse\n\n🌈 Signature aromatique :\nUn profil imaginé autour d'une ouverture douce et gourmande, accompagnée de nuances boisées et légèrement épicées. L'ensemble évoque une identité traditionnelle, profonde et équilibrée. 🍑🌿\n\n✨ Texture & présentation :\n💎 Sélection 3X Filtre\n🤲 Univers résineux et authentique\n🇲🇦 Inspiration marocaine\n👑 Identité classique et élégante\n\n🏆 Le verdict :\nUne signature de caractère, entre douceur miellée, notes boisées et profondeur résineuse. Peach Oz porte une identité sobre, authentique et distinguée. 🍑👑🔥",
          tarifs: [
            { weight: "5G", price: 50.0 },
            { weight: "10G", price: 80.0 },
            { weight: "20G", price: 140.0 },
            { weight: "50G", price: 250.0 },
            { weight: "100G", price: 400.0 },
          ],
        },
         {
          id: "Fruity Peach 🍑",
          flag: "🇲🇦",
          name: "Fruity Peach 🍑",
          farm: "🌾 PJS",
          promoEligible: true,
          type: "3xFiltre",
          image: "ProductFP.png",
          video: "VideoFP.mov",
          description:
                "🍑👑 Fruity Peach — 3X FILTRE PREMIUM 👑🍑 \n\nUne sélection 3X Filtre à l'identité affirmée, classique et raffinée. Fruity Peach évoque un univers aromatique profond, mêlant notes résineuses, douceur gourmande et touches boisées. Une signature inspirée du savoir-faire marocain. 🇲🇦✨\n\n👃 Profil aromatique :\n🍯 Notes douces et miellées\n🌰 Touches de noisette grillée\n🌿 Fond végétal et résineux\n🍫 Nuances chocolatées\n🪵 Finition boisée et terreuse\n\n🌈 Signature aromatique :\nUn profil imaginé autour d'une ouverture douce et gourmande, accompagnée de nuances boisées et légèrement épicées. L'ensemble évoque une identité traditionnelle, profonde et équilibrée. 🍑🌿\n\n✨ Texture & présentation :\n💎 Sélection 3X Filtre\n🤲 Univers résineux et authentique\n🇲🇦 Inspiration marocaine\n👑 Identité classique et élégante\n\n🏆 Le verdict :\nUne signature de caractère, entre douceur miellée, notes boisées et profondeur résineuse. Fruity Peach porte une identité sobre, authentique et distinguée. 🍑👑🔥",
          tarifs: [
            { weight: "5G", price: 50.0 },
            { weight: "10G", price: 80.0 },
            { weight: "20G", price: 140.0 },
            { weight: "50G", price: 250.0 },
            { weight: "100G", price: 400.0 },
          ],
        },
       
      ],
    },
    {
      id: "HASH",
      name: "HASH 🌰",
      type: "HASH",
      quality: "HASH 🌰",
      image: "CategHash.png", // Ton image de catégorie Weed

      products: [
        {
          id: "S`Mores 🍹",
          flag: "🇲🇦",
          name: "S`Mores 🍹",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductSM.jpg",
          video: "VideoSM.mp4",
          description:
            "S`Mores 🍹\n\n Une sélection au profil gourmand et bien équilibré, inspirée de l’univers emblématique. Cette variété se distingue par ses notes fruitées, sucrées et légèrement terreuses, avec une belle intensité aromatique dès l’ouverture. 🔥💎\n\n 👃 Profil aromatique :\n 🍓 Fruits rouges sucrés\n 🍄 Notes terreuses légères\n 🍬 Bonbon fruité\n 🍋 Petite touche d’agrumes\n 🌿 Fond végétal doux et naturel\n\n 👅 Goût :\n En bouche, S`Mores développe une attaque fruitée et sucrée, suivie de notes plus rondes et légèrement terreuses. La fumée reste douce, agréable et laisse un arrière-goût gourmand avec une petite fraîcheur citronnée. 😮‍💨🍄\n\n ✨ Effets généralement recherchés :\n 😄 Bonne humeur et euphorie\n 🧠 Esprit léger et détendu\n 🎮 Sensation agréable et conviviale\n 💆 Relaxation corporelle progressive\n 🌙 Parfaite pour se poser tranquillement\n\n 🏆 Le verdict :\n Une variété originale, fruitée et facile à apprécier, idéale pour les amateurs de profils sucrés avec une légère touche terreuse. S`Mores combine gourmandise, équilibre et bonne vibe dans une sélection pleine de caractère. 🍄⭐🔥💎",
          tarifs: [
            { weight: "10g", price: 50.0 },
            { weight: "25g", price: 110.0 },
            { weight: "50g", price: 180.0 },
            { weight: "100g", price: 310.0 },
          ],
        },
         {
          id: "Fresh Juice 🍹",
          flag: "🇲🇦",
          name: "Fresh Juice 🍹",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductFJ.jpg",
          video: "VideoFJ.mp4",
          description:
            "Fresh Juice 🍹\n\n Une sélection au profil gourmand et bien équilibré, inspirée de l’univers emblématique de Mario. Cette variété se distingue par ses notes fruitées, sucrées et légèrement terreuses, avec une belle intensité aromatique dès l’ouverture. 🔥💎\n\n 👃 Profil aromatique :\n 🍓 Fruits rouges sucrés\n 🍄 Notes terreuses légères\n 🍬 Bonbon fruité\n 🍋 Petite touche d’agrumes\n 🌿 Fond végétal doux et naturel\n\n 👅 Goût :\n En bouche, Mario développe une attaque fruitée et sucrée, suivie de notes plus rondes et légèrement terreuses. La fumée reste douce, agréable et laisse un arrière-goût gourmand avec une petite fraîcheur citronnée. 😮‍💨🍄\n\n ✨ Effets généralement recherchés :\n 😄 Bonne humeur et euphorie\n 🧠 Esprit léger et détendu\n 🎮 Sensation agréable et conviviale\n 💆 Relaxation corporelle progressive\n 🌙 Parfaite pour se poser tranquillement\n\n 🏆 Le verdict :\n Une variété originale, fruitée et facile à apprécier, idéale pour les amateurs de profils sucrés avec une légère touche terreuse. Mario combine gourmandise, équilibre et bonne vibe dans une sélection pleine de caractère. 🍄⭐🔥💎",
          tarifs: [
            { weight: "10g", price: 50.0 },
            { weight: "25g", price: 110.0 },
            { weight: "50g", price: 180.0 },
            { weight: "100g", price: 310.0 },
          ],
        },
      ]
    }
  /*
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
                    { name: '2g : KGF Static 🇲🇦✨', targetId: '220u' } // usa'ai mis StaticUSA en exemple, mets l'ID de ta Cali
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
    searchTerm: "",
    quality: "all",
    farm: "all",
  };
  let currentView = "categories"; // 'categories', 'farms', ou 'products'
  let currentCategoryId = null; // Garde en mémoire la catégorie sélectionnée
  let currentFarmId = null; // Garde en mémoire la farm sélectionnée
  let appliedPromo = null; // Pour suivre le code promo
  let paymentMethod = "Espèce"; // Méthode de paiement par défaut

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
  const pages = document.querySelectorAll(".page");
  const productListContainer = document.getElementById("product-list");
  const loaderPage = document.getElementById("page-loader");

  const filterContainer = document.querySelector(".filters");

  // --- NOUVEAUX SÉLECTEURS POUR CHAQUE FILTRE ---
  const searchFilterWrapper =
    document.getElementById("search-filter").parentElement;
  const qualityFilterWrapper =
    document.getElementById("quality-filter").parentElement;
  const farmFilterWrapper =
    document.getElementById("farm-filter").parentElement;
  // --- FIN NOUVEAUX SÉLECTEURS ---

  // --- HELPER : TROUVER UN PRODUIT PAR SON ID ---
  function getProductById(productId) {
    for (const category of appData) {
      // 1. Cherche dans les produits directs (Nouveau cas)
      if (category.products) {
        const product = category.products.find((p) => p.id === productId);
        if (product) return product;
      }

      // 2. Cherche dans les farms (Ancien cas)
      if (category.farms) {
        for (const farm of category.farms) {
          const product = farm.products.find((p) => p.id === productId);
          if (product) return product;
        }
      }
    }
    return undefined; // Non trouvé
  }

  // --- NAVIGATION ---
  function showPage(pageId) {
    // 👇 AJOUT STRATÉGIQUE : Coupe toutes les vidéos instantanément au changement de page
    document.querySelectorAll("video").forEach((video) => {
      video.pause();
    });
    pages.forEach((p) => p.classList.remove("active"));
    // S'assure que la page existe avant de l'activer
    const page = document.getElementById(pageId);
    if (page) {
      page.classList.add("active");
    }

    // --- GESTION AUTOMATIQUE DES BOUTONS NAV ---
    const homeNav = document.getElementById("nav-menu");
    const infoNav = document.getElementById("nav-info"); // On ajoute l'info
    const contactNav = document.getElementById("nav-contact");
    const avisNav = document.getElementById("nav-avis"); // <-- AJOUT ICI

    // On reset tout
    homeNav.classList.remove("active");
    infoNav.classList.remove("active");
    contactNav.classList.remove("active");
    if (avisNav) avisNav.classList.remove("active"); // <-- AJOUT ICI

    // On active le bon
    if (pageId === "page-contact") {
      contactNav.classList.add("active");
    } else if (pageId === "page-info") {
      infoNav.classList.add("active");
    } else if (pageId === "page-avis") {
      // <-- LA NOUVELLE CONDITION
      if (avisNav) avisNav.classList.add("active");
    } else {
      // Pour page-home, page-produit, panier, etc.
      homeNav.classList.add("active");
    }
  }

  // --- LOGIQUE D'AFFICHAGE ---

  // --- MODIFIÉ : renderHomePage ---

  function renderHomePage() {
    // Toujours afficher le conteneur principal des filtres
    filterContainer.style.display = "flex";

    // On enlève les anciens boutons "retour"
    const existingBackBtnCat = filterContainer.querySelector(
      ".back-to-categories-btn",
    );
    if (existingBackBtnCat) existingBackBtnCat.remove();
    const existingBackBtnFarm =
      filterContainer.querySelector(".back-to-farms-btn");
    if (existingBackBtnFarm) existingBackBtnFarm.remove();

    if (currentView === "categories") {
      renderCategoryList();

      // --- GESTION DES FILTRES (Vue Catégorie) ---
      searchFilterWrapper.style.display = "none";
      farmFilterWrapper.style.display = "none";
      qualityFilterWrapper.style.display = "flex"; // On montre QUE la qualité

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)";
    } else if (currentView === "farms") {
      renderFarmList(currentCategoryId);

      // --- GESTION DES FILTRES (Vue Farms) ---
      searchFilterWrapper.style.display = "none";
      farmFilterWrapper.style.display = "none"; // Pas de filtres pour les farms
      qualityFilterWrapper.style.display = "none";

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)"; // 1 colonne pour les farms

      // --- AJOUT BOUTON RETOUR (vers Catégories) ---
      const category = appData.find((c) => c.id === currentCategoryId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-categories-btn"; // CLASSE IMPORTANTE
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
    } else if (currentView === "simple_products") {
      updateFarmFilter(currentCategoryId);

      renderProductListSimple(currentCategoryId);

      // --- GESTION DES FILTRES ---
      // 1. On AFFICHE la barre de recherche
      searchFilterWrapper.style.display = "flex";

      // 2. On AFFICHE le filtre Farm
      farmFilterWrapper.style.display = "flex";

      // 3. On CACHE le filtre Qualité ("Sélection du chef")
      qualityFilterWrapper.style.display = "none";

      // --- AJOUT BOUTON RETOUR (vers Catégories) ---
      const category = appData.find((c) => c.id === currentCategoryId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-categories-btn";
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
      productListContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
    } else if (currentView === "products") {
      updateFarmFilter(currentCategoryId, currentFarmId);

      renderProductList(currentCategoryId, currentFarmId);

      // --- GESTION DES FILTRES (Vue Produit) ---
      searchFilterWrapper.style.display = "flex";
      farmFilterWrapper.style.display = "flex"; // On montre les filtres produits
      qualityFilterWrapper.style.display = "none"; // On cache la qualité

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(2, 1fr)"; // 2 colonnes

      // --- AJOUT BOUTON RETOUR (vers Farms) ---
      const category = appData.find((c) => c.id === currentCategoryId);
      const farm = category.farms.find((f) => f.id === currentFarmId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-farms-btn"; // CLASSE IMPORTANTE
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
    const category = appData.find((c) => c.id === categoryId);
    const farmFilter = document.getElementById("farm-filter");

    if (!category) return;

    let availableFarms = [];

    // CAS 1 : On est dans une sous-catégorie précise (ex: Cali USA)
    if (subCategoryId && category.farms) {
      const subCategory = category.farms.find((f) => f.id === subCategoryId);
      if (subCategory) {
        subCategory.products.forEach((p) => {
          if (p.farm) availableFarms.push(p.farm);
        });
      }
    }
    // CAS 2 : On est dans une catégorie globale ou simple (ex: Packs Noel ou tout voir)
    else {
      if (category.farms) {
        // Si c'est une catégorie à tiroirs, on prend tout
        category.farms.forEach((sub) => {
          sub.products.forEach((p) => {
            if (p.farm) availableFarms.push(p.farm);
          });
        });
      } else if (category.products) {
        // Si c'est une catégorie simple
        category.products.forEach((p) => {
          if (p.farm) availableFarms.push(p.farm);
        });
      }
    }

    // 2. On enlève les doublons
    const uniqueFarms = ["all", ...new Set(availableFarms)];

    // 3. On génère le HTML
    const currentValue = currentFilters.farm;

    farmFilter.innerHTML = uniqueFarms
      .map(
        (farm) =>
          `<option value="${farm}">${farm === "all" ? "👨‍🌾  -  Toutes les farms" : farm}</option>`,
      )
      .join("");

    // 4. On remet la valeur si elle existe toujours
    if (uniqueFarms.includes(currentValue)) {
      farmFilter.value = currentValue;
    } else {
      farmFilter.value = "all";
      currentFilters.farm = "all";
    }
  }

  // --- MODIFIÉ : renderCategoryList ---
  // Prend en compte le filtre qualité
  function renderCategoryList() {
    const filteredCategories = appData.filter((category) => {
      const searchMatch = category.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      // --- AJOUT ---
      const qualityMatch =
        currentFilters.quality === "all" ||
        category.quality === currentFilters.quality;
      return searchMatch && qualityMatch;
      // --- FIN AJOUT ---
    });

    productListContainer.innerHTML = "";
    if (filteredCategories.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune catégorie ne correspond à votre recherche.</p>';
      return;
    }

    filteredCategories.forEach((category) => {
      const card = document.createElement("div");
      card.className = "category-card";
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
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }

    const farms = category.farms;

    // On change le style de la grille pour avoir une seule colonne (liste verticale)
    productListContainer.style.gridTemplateColumns = "1fr";
    productListContainer.style.gap = "10px"; // Espacement entre les boutons

    productListContainer.innerHTML = "";
    if (farms.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune farm trouvée.</p>';
      return;
    }

    farms.forEach((farm) => {
      const btn = document.createElement("div");
      // On change la classe pour ne plus utiliser le style "card"
      btn.className = "farm-list-btn";
      btn.dataset.farmId = farm.id;

      if (farm.clickable === false) {
        btn.classList.add("unclickable");
      }

      const productCount = farm.products.length;
      const countText = productCount > 0 ? `${productCount} prod.` : "";

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
    const category = appData.find((c) => c.id === categoryId);
    if (!category || !category.products) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit ne correspond à cette catégorie.</p>';
      return;
    }

    // Mise à jour du filtre farm intelligent
    if (typeof updateFarmFilter === "function") updateFarmFilter(categoryId);

    // On filtre le tableau products
    const filteredProducts = category.products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      const farmMatch =
        currentFilters.farm === "all" || product.farm === currentFilters.farm;
      return searchMatch && farmMatch;
    });

    productListContainer.innerHTML = "";
    if (filteredProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit trouvé.</p>';
      return;
    }

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card product-item-card";
      card.dataset.productId = product.id;

      // --- 1. LOGIQUE PLEINE LARGEUR ---
      // Si c'est un Pack, on ajoute la classe spéciale
      if (product.type === "Pack" || product.id === "PackNoel2025") {
        card.classList.add("full-width");
      }

      if (product.clickable === false) card.classList.add("unclickable");

      let flagHTML = product.flag
        ? `<span class="product-flag">${product.flag}</span>`
        : "";

      // --- 2. LOGIQUE IMAGE (On affiche seulement si elle existe) ---
      let imgHTML = "";
      if (product.image && product.image !== "") {
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
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }
    const farm = category.farms.find((f) => f.id === farmId);
    if (!farm) {
      productListContainer.innerHTML =
        '<p class="no-results">Farm non trouvée.</p>';
      return;
    }
    const filteredProducts = farm.products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      // On a supprimé 'qualityMatch'. Le choix de la catégorie suffit.
      const farmMatch =
        currentFilters.farm === "all" || product.farm === currentFilters.farm;

      return searchMatch && farmMatch; // On retourne sans le qualityMatch
    });

    productListContainer.innerHTML = "";
    if (filteredProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit ne correspond à votre recherche.</p>';
      return;
    }

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card product-item-card";
      card.dataset.productId = product.id;

      // Si c'est le Pack de Noël (vérifie bien que l'ID est correct), on met la classe large
      if (product.id === "PackNoel2025" || product.type === "Pack") {
        card.classList.add("full-width");
      }

      if (product.clickable === false) {
        card.classList.add("unclickable");
      }

      let flagHTML = product.flag
        ? `<span class="product-flag">${product.flag}</span>`
        : "";

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

    document.getElementById("product-page-title").innerText = product.name;
    const detailsContainer = document.getElementById("product-details-content");

    // --- 1. GESTION INTELLIGENTE DES MÉDIAS ---
    let galleryHTML = "";
    let hasMedia = false;

    // Images
    let mediaItems = [];
    if (product.images && product.images.length > 0) {
      mediaItems = product.images;
    } else if (product.image && product.image !== "") {
      mediaItems = [product.image];
    }

    if (mediaItems.length > 0) {
      hasMedia = true;
      galleryHTML += mediaItems
        .map(
          (imgSrc) => `
                <div class="gallery-item"><img src="${imgSrc}" alt="${product.name}"></div>
            `,
        )
        .join("");
    }

    // Vidéos
    if (product.videos && product.videos.length > 0) {
      hasMedia = true;
      product.videos.forEach((videoSrc) => {
        galleryHTML += `
                    <div class="gallery-item">
                        <video controls playsinline poster="${product.image || ""}">
                            <source src="${videoSrc}" type="video/mp4">
                        </video>
                    </div>`;
      });
    } else if (product.video && product.video !== "") {
      hasMedia = true;
      galleryHTML += `
                <div class="gallery-item">
                    <video controls playsinline poster="${product.image || ""}">
                        <source src="${product.video}" type="video/mp4">
                    </video>
                </div>`;
    }

    // --- 2. LE RESTE (OPTIONS, DESCRIPTION, TARIFS) ---

    // --- GESTION DU CONTENU PACK (Liens internes) ---
    let packLinksHTML = "";
    if (product.packContents && product.packContents.length > 0) {
      const links = product.packContents
        .map(
          (item) => `
            <div class="pack-item-btn" data-target-id="${item.targetId}">
                <span>${item.name}</span>
                <span class="pack-arrow">›</span>
            </div>
        `,
        )
        .join("");

      packLinksHTML = `
            <div class="pack-content-container">
                <div style="color:#8e8e93; font-size:0.9rem; margin-bottom:5px;">📦 CONTENU DU PACK :</div>
                ${links}
            </div>
        `;
    }
    let variantsHTML = "";
    if (product.jars && product.jars.length > 0) {
      const buttonsHTML = product.jars
        .map(
          (jar, index) => `
                <div class="variant-btn ${index === 0 ? "active " + jar.colorClass : ""}" 
                     data-name="${jar.name} ${jar.emoji}" 
                     data-color-class="${jar.colorClass}">
                    <span class="emoji">${jar.emoji}</span>
                    <span class="text">${jar.name}</span>
                </div>
            `,
        )
        .join("");
      variantsHTML = `<div class="variant-selector-container"><div class="variant-title">${product.variantTitle || "Choisir une option :"}</div><div class="variant-grid">${buttonsHTML}</div></div>`;
    } else if (product.options && product.options.length > 0) {
      variantsHTML = `<div class="product-options-container" style="margin-bottom: 15px;"><label style="color: #8e8e93; font-size: 0.9rem; margin-bottom: 5px; display:block;">Choisir :</label><select id="product-variant-select" style="width: 100%; padding: 12px; border-radius: 8px; background: #2c2c2e; color: white; border: 1px solid #3a3a3c;">${product.options.map((opt) => `<option value="${opt}">${opt}</option>`).join("")}</select></div>`;
    }

    let tarifsHTML = product.tarifs
      .map(
        (tarif) => `
            <div class="tarif-item">
                <div class="box-tarif">
                ${tarif.badge ? `<span class="tarif-badge">${tarif.badge}</span>` : ""} <div class="tarif-wieght">${tarif.weight}</div>
                    <div class="tarif-price">
    ${
      Number.isFinite(tarif.oldPrice) && tarif.oldPrice > tarif.price
        ? `<span class="old-price">${tarif.oldPrice.toFixed(2)}€</span>`
        : ""
    }
    <span class="current-price">${tarif.price.toFixed(2)}€</span>
</div>
                </div>
                <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                    <svg width="20" height="20"><use href="#icon-cart"/></svg>
                </button>
            </div>
        `,
      )
      .join("");

    let descriptionHTML = product.description
      ? `<p class="product-description">${product.description.replace(/\n/g, "<br>")}</p>`
      : "";

    const oldVideo = document.querySelector("#page-product .product-video");
    if (oldVideo) oldVideo.style.display = "none";

    // --- 3. INJECTION (On cache la galerie si pas de média) ---
    detailsContainer.innerHTML = `
            ${hasMedia ? `<div class="product-gallery-wrapper">${galleryHTML}</div>` : ""}
            ${hasMedia ? `<div class="gallery-counter">Swipe ➡️</div>` : ""}
            
            <div class="name" style="margin-top: ${hasMedia ? "0" : "20px"}">${product.name}</div>
            <div class="farm">${product.farm}</div>
            ${packLinksHTML} ${descriptionHTML}
                        ${variantsHTML}
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid-container">${tarifsHTML}</div>
        `;

    showPage("page-product");

    // Réattache les événements (pour les variantes de couleurs)
    if (product.jars && product.jars.length > 0) {
      const variantBtns = document.querySelectorAll(".variant-btn");
      const cartBtns = document.querySelectorAll(".add-to-cart-btn");
      const updateCartButtonsColor = (colorClass) => {
        cartBtns.forEach((btn) => {
          btn.classList.remove(
            "style-purple",
            "style-red",
            "style-green",
            "style-yellow",
            "style-orange",
            "style-brown",
            "style-passion",
            "style-melon",
            "style-gold",
            "style-cherry",
            "style-glue",
            "style-blue",
            "style-pink",
            "style-indigo",
            "style-silver",
            "style-white",
            "style-grape",
            "style-fanta",
            "style-dark",
          );
          if (colorClass) btn.classList.add(colorClass);
        });
      };
      updateCartButtonsColor(product.jars[0].colorClass);
      variantBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          variantBtns.forEach((b) => {
            b.classList.remove("active");
            const color = b.dataset.colorClass;
            b.classList.remove(color);
          });
          this.classList.add("active");
          this.classList.add(this.dataset.colorClass);
          updateCartButtonsColor(this.dataset.colorClass);
          if (window.Telegram.WebApp.HapticFeedback)
            window.Telegram.WebApp.HapticFeedback.selectionChanged();
        });
      });
    }
  }

  // Met à jour l'affichage du panier (CORRIGÉ : Cache l'image si vide)
  function renderCart() {
    const cartContainer = document.getElementById("cart-items-container");
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Votre panier est vide.</p>";
      document.getElementById("cart-total-price").innerText = "0.00€";
      updateCartCount();
      return;
    }

    cartContainer.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}
                
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
        `,
      )
      .join("");

    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    document.getElementById("cart-total-price").innerText =
      `${total.toFixed(2)}€`;
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
      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }
      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        discount = promo.value;
      }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;
    // --- Fin calcul ---

    // Mise à jour du résumé
    document.getElementById("confirmation-items-count").innerText =
      `${totalItems} article${totalItems > 1 ? "s" : ""}`;
    document.getElementById("confirmation-total-price").innerText =
      `${totalPrice.toFixed(2)}€`;

    // Liste des articles
    const itemsList = document.getElementById("confirmation-items-list");
    itemsList.innerHTML = cart
      .map(
        (item, index) => `
         <div class="cart-item">
            ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}

            <div class="item-details">
                <div>${index + 1}. ${item.name}</div>
                <div>Quantité: ${item.quantity}x ${item.weight}</div>
                <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
            </div>
        </div>
    `,
      )
      .join("");

    // UI Promo
    const promoInputContainer = document.getElementById(
      "promo-input-container",
    );
    const promoAppliedContainer = document.getElementById(
      "promo-applied-container",
    );
    if (appliedPromo) {
      promoInputContainer.style.display = "none";
      promoAppliedContainer.style.display = "flex";
      document.getElementById("promo-applied-text").innerText =
        `Code "${appliedPromo}" appliqué !`;
    } else {
      promoInputContainer.style.display = "flex";
      promoAppliedContainer.style.display = "none";
      document.getElementById("promo-code-input").value = "";
    }

    // UI Paiement
    document.querySelectorAll(".payment-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.method === paymentMethod);
    });

    // Résumé final
    const summaryContainer = document.getElementById("confirmation-summary");
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
    const copyBtn = document.getElementById("copy-order-btn");
    const contactBtn = document.getElementById("confirm-order-button");

    // 1. On CACHE le bouton "Copier" car il ne sert plus
    if (copyBtn) copyBtn.style.display = "none";

    // 2. On configure le bouton "Confirmer" pour être actif tout de suite
    if (contactBtn) {
      contactBtn.classList.remove("secondary-action-btn"); // Enlève le gris
      contactBtn.classList.add("main-action-btn"); // Met le rouge (ou couleur principale)
      contactBtn.disabled = false; // Active le clic
      contactBtn.innerHTML = "CONFIRMER SUR WHATSAPP 📞"; // Change le texte
    }

    showPage("page-confirmation");
  }
  // Affiche la page de contact (inchangé)
  function renderContactPage() {
    const linksContainer = document.getElementById("contact-links-container");
    linksContainer.innerHTML = contactLinks
      .map(
        (link) => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        
            <span>${link.text}</span>
        </a>
        `,
      )
      .join("");
  }

  // Met à jour le compteur du panier (inchangé)
  function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll(".cart-count");
    cartCountElements.forEach((el) => {
      el.innerText = count;
      el.style.display = count > 0 ? "flex" : "none";
    });
  }

  // --- MODIFIÉ : populateFilters ---
  function populateFilters() {
    const searchFilter = document.getElementById("search-filter");
    const qualityFilter = document.getElementById("quality-filter");
    const farmFilter = document.getElementById("farm-filter");

    // 1. On récupère TOUS les produits de l'app pour trouver toutes les farms
    const allNestedProducts = [];
    appData.forEach((category) => {
      if (category.farms) {
        category.farms.forEach((farm) =>
          allNestedProducts.push(...farm.products),
        );
      } else if (category.products) {
        allNestedProducts.push(...category.products);
      }
    });

    // 2. On remplit le filtre QUALITÉ (Pour la page d'accueil)
    const categoryQualities = appData.map((c) => c.quality).filter(Boolean); // filter Boolean enlève les vides
    const qualities = ["all", ...new Set(categoryQualities)];
    qualityFilter.innerHTML = qualities
      .map(
        (q) =>
          `<option value="${q}">${q === "all" ? "SELECTION DU CHEF" : q}</option>`,
      )
      .join("");

    // 3. On remplit le filtre FARM (Pour la page produits)
    // On récupère la propriété 'farm' de chaque produit
    const productFarms = allNestedProducts.map((p) => p.farm).filter((f) => f); // Garde seulement si une farm est définie
    const farms = ["all", ...new Set(productFarms)];

    farmFilter.innerHTML = farms
      .map(
        (farm) =>
          `<option value="${farm}">${farm === "all" ? "👨‍🌾  -  Toutes les farms" : farm}</option>`,
      )
      .join("");

    // 4. Les écouteurs d'événements
    searchFilter.addEventListener("input", (e) => {
      currentFilters.searchTerm = e.target.value;
      renderHomePage();
    });

    qualityFilter.addEventListener("change", (e) => {
      currentFilters.quality = e.target.value;
      renderHomePage();
    });

    farmFilter.addEventListener("change", (e) => {
      currentFilters.farm = e.target.value;
      renderHomePage();
    });
  }

  // --- NOTIFICATION (inchangé) ---
  let notificationTimeout;
  function showNotification(message) {
    const notification = document.getElementById("notification-toast");
    if (!notification) return;

    clearTimeout(notificationTimeout);
    notification.classList.remove("show");
    void notification.offsetWidth;

    notification.innerText = message;
    notification.classList.add("show");

    notificationTimeout = setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }

  // --- LOGIQUE DU PANIER ---

  // Ajoute le paramètre 'variant' à la fin
  function addToCart(productId, weight, price, variant = null) {
    // L'ID du panier doit inclure la variante pour différencier (ex: 10g Gelato vs 10g Papaya)
    const cartItemId = `${productId}-${weight}-${variant ? variant.replace(/\s+/g, "") : "default"}`;

    const existingItem = cart.find((item) => item.id === cartItemId);
    const product = getProductById(productId);

    // On prépare le nom à afficher (ex: "120u (Papaya Bomb)")
    const displayName = variant
      ? `${product.name} \n👉 ${variant}`
      : product.name;

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
        variant: variant, // On garde la variante en mémoire si besoin
      });
    }
    renderCart();
    tg.HapticFeedback.notificationOccurred("success");
    showNotification("✅ Produit ajouté au panier !");
  }
  // updateQuantity (inchangé)
  function updateQuantity(cartItemId, action) {
    const item = cart.find((i) => i.id === cartItemId);
    if (!item) return;

    if (action === "increase") {
      item.quantity++;
    } else if (action === "decrease") {
      item.quantity--;
    }

    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.id !== cartItemId);
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
      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }
      if (promo.type === "percent") {
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
      let cleanName = item.name.replace(/\n/g, " ").toUpperCase();

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
    if (navigator.clipboard) {
      // API moderne et sécurisée
      navigator.clipboard.writeText(text).then(
        () => {
          showNotification("✅ Commande copiée ! Colle-la dans le chat.");
          tg.HapticFeedback.notificationOccurred("success");
        },
        (err) => {
          showNotification("❌ Erreur en copiant le message");
        },
      );
    } else {
      // Ancien fallback (pour certains navigateurs)
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed"; // Hors de l'écran
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        showNotification("✅ Commande copiée ! Colle-la dans le chat.");
        tg.HapticFeedback.notificationOccurred("success");
      } catch (err) {
        showNotification("❌ Erreur en copiant le message");
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
  window.openImage = function (imgElement) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("img-in-modal");

    modal.style.display = "flex";
    modalImg.src = imgElement.src;
    tg.BackButton.show(); // Affiche le bouton retour natif

    // Clic pour fermer
    modal.onclick = function () {
      modal.style.display = "none";
      tg.BackButton.hide(); // Cache le bouton retour
    };

    // Gestion du bouton retour physique/natif Telegram
    tg.onEvent("backButtonClicked", function () {
      modal.style.display = "none";
      tg.BackButton.hide();
    });
  };
  // --- GESTION DES ÉVÉNEMENTS ---

  // Clics sur la barre de navigation
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      const pageId = item.dataset.page;
      if (!pageId) return;

      // Les lignes gérant la classe 'active' ont été supprimées
      // showPage(pageId) s'en occupe maintenant.

      if (pageId === "page-contact") {
        renderContactPage();
      }

      if (pageId === "page-home") {
        currentView = "categories";
        currentCategoryId = null;
        // On reset TOUS les filtres
        currentFilters.searchTerm = "";
        currentFilters.quality = "all";
        currentFilters.farm = "all";
        document.getElementById("search-filter").value = "";
        document.getElementById("quality-filter").value = "all";
        document.getElementById("farm-filter").value = "all";

        renderHomePage();
      }

      showPage(pageId);
    });
  });

  // Clics sur le reste de la page
  document.body.addEventListener("click", async function (e) {
    const target = e.target;

    if (target.closest("#copy-order-btn")) {
      let message = formatOrderMessage();
      message = message.replace(/\*/g, "");

      copyToClipboard(message);

      // --- AJOUT : Inverser les styles des boutons ---
      const copyBtn = document.getElementById("copy-order-btn");
      const contactBtn = document.getElementById("confirm-order-button");

      // Copier devient Gris (secondary)
      copyBtn.classList.remove("main-action-btn");
      copyBtn.classList.add("secondary-action-btn");

      // Contacter devient Rouge (main) et est activé
      contactBtn.classList.remove("secondary-action-btn");
      contactBtn.classList.add("main-action-btn");
      contactBtn.disabled = false; // <-- ON DÉVERROUILLE LE BOUTON
      return; // On s'arrête là
    }

    // Gère l'accordéon sur la page contact
    const accordionHeader = target.closest(".accordion-header");
    if (accordionHeader) {
      const accordionItem = accordionHeader.parentElement;

      // On ferme les autres items
      document
        .querySelectorAll("#page-info .accordion-item.active")
        .forEach((item) => {
          if (item !== accordionItem) {
            item.classList.remove("active");
          }
        });

      // On ouvre/ferme l'item cliqué
      accordionItem.classList.toggle("active");
      return; // On arrête là pour ne pas déclencher d'autres clics
    }

    // 1. Clic sur une carte CATÉGORIE
    const categoryCard = target.closest(".category-card");
    if (categoryCard) {
      const category = appData.find(
        (c) => c.id === categoryCard.dataset.categoryId,
      );

      if (category.products) {
        // Si la catégorie a des produits directement (pas de sous-catégorie)
        currentView = "simple_products"; // <-- NOUVEL ÉTAT
        currentCategoryId = category.id;
      } else if (category.farms) {
        // Si la catégorie a des farms
        currentView = "farms";
        currentCategoryId = category.id;
      } else {
        return; // Ne fait rien si la catégorie est vide
      }

      // On reset les filtres et on lance la page
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }
    // 2. MODIFIÉ : Clic sur un BOUTON FARM (Anciennement "carte farm")
    const farmBtn = target.closest(".farm-list-btn"); // <-- J'ai changé le nom de la classe ici
    if (farmBtn) {
      if (farmBtn.classList.contains("unclickable")) {
        return;
      }

      currentView = "products";
      currentFarmId = farmBtn.dataset.farmId;

      // On reset les filtres
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";

      renderHomePage();
      return;
    }
    // 3. Clic sur une carte PRODUIT
    const productCard = target.closest(".product-item-card");
    if (productCard) {
      if (productCard.classList.contains("unclickable")) {
        return;
      }
      renderProductPage(productCard.dataset.productId);
      return;
    }

    // 4. NOUVEAU : Clic sur le bouton "Retour" (vers Catégories)
    if (target.closest(".back-to-categories-btn")) {
      currentView = "categories";
      currentCategoryId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    // 5. NOUVEAU : Clic sur le bouton "Retour" (vers Farms)
    if (target.closest(".back-to-farms-btn")) {
      currentView = "farms";
      currentFarmId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    // Clic sur "Appliquer" le code promo
    if (target.closest("#apply-promo-btn")) {
      const input = document.getElementById("promo-code-input");
      const code = input.value.toUpperCase(); // Mets en majuscule

      if (validPromoCodes[code]) {
        appliedPromo = code;
        tg.HapticFeedback.notificationOccurred("success");
        showNotification("✅ Code promo appliqué !");
      } else {
        appliedPromo = null; // Reset au cas où
        tg.HapticFeedback.notificationOccurred("error");
        showNotification("❌ Code promo invalide.");
      }
      renderConfirmation(); // Met à jour la page de confirmation
    }

    // Clic sur "Supprimer" le code promo
    if (target.closest("#remove-promo-btn")) {
      appliedPromo = null;
      showNotification("Code promo retiré.");
      renderConfirmation(); // Met à jour la page
    }

    // Clic sur un bouton de paiement
    if (target.closest(".payment-btn")) {
      paymentMethod = target.closest(".payment-btn").dataset.method;
      // Pas besoin de rafraîchir toute la page, juste les boutons
      document.querySelectorAll(".payment-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.method === paymentMethod);
      });
    }

    // Clic sur "Ajouter au panier"
    if (target.closest(".add-to-cart-btn")) {
      const btn = target.closest(".add-to-cart-btn");

      let selectedVariant = null;

      // CAS 1 : Nouveau système (Boutons JARs)
      const activeVariantBtn = document.querySelector(".variant-btn.active");
      if (activeVariantBtn) {
        selectedVariant = activeVariantBtn.dataset.name;
      }
      // CAS 2 : Ancien système (Select) - Fallback
      else {
        const variantSelect = document.getElementById("product-variant-select");
        if (variantSelect) {
          selectedVariant = variantSelect.value;
        }
      }

      addToCart(
        btn.dataset.productId,
        btn.dataset.weight,
        parseFloat(btn.dataset.price),
        selectedVariant,
      );
    }

    // Clic sur les boutons de quantité
    if (target.closest(".quantity-btn")) {
      const btn = target.closest(".quantity-btn");
      updateQuantity(btn.dataset.id, btn.dataset.action);
    }

    // Clic sur le bouton "fermer"
    if (target.closest(".close-button")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur "Continuer les achats"
    if (target.closest("#cart-continue-shopping")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur les boutons "retour" (des pages produits, panier...)
    if (target.closest(".back-button")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur le bouton du panier
    if (target.closest("#home-cart-button")) {
      renderCart();
      showPage("page-cart");
    }

    // Clic sur "Commander"
    if (target.closest("#checkout-button")) {
      renderConfirmation();
    }

    // Clic sur "Modifier"
    if (target.closest("#confirmation-modify-order")) {
      showPage("page-cart");
    }

    // Clic sur un produit DANS un Pack
    if (target.closest(".pack-item-btn")) {
      const btn = target.closest(".pack-item-btn");
      const targetId = btn.dataset.targetId;

      // On charge la page du produit ciblé
      renderProductPage(targetId);
      return;
    }
    // Clic sur "Confirmer la commande" (VERSION WHATSAPP DIRECT)
    if (target.closest("#confirm-order-button")) {
      // 1. TON NUMÉRO WHATSAPP (Format international sans le +)
      const myPhoneNumber = "33745907270";

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
      showPage("page-home");
    }, 1500);
  }

  init();
});
