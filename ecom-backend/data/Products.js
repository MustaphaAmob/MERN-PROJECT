const Products = [
    {
      title: "DYLAN BLUE - EDT",
      price: 109.95,
      description: "Dylan Blue, c'est la quintessence de l'homme Versace d'aujourd'hui. C'est un parfum au caractère marqué, singulier, l'incarnation de la force et du charisme de l'homme.» Donatella Versace",
      category: "men's parfums",
      image: "/uploads/dylan.png",
      rating: {
        rate: 3.9,
        count: 120
      }
    },
    {
      title: "EROS FLAME",
      price: 22.3,
      description: "EROS FLAME DE VERSACE EST UN PARFUM POUR HOMME FORT. LES NOTES OLFACTIVES D'EROS FLAME DE VERSACE SE CARACTÉRISENT PAR DE FORTS CONTRASTES OÙ LES INGRÉDIENTS LES PLUS NOBLES ET ÉLÉGANTS VIENNENT S'ENRICHIR ET SE REHAUSSER MUTUELLEMENT : CITRON, MANDARINE, ORANGE, POIVRE NOIR, ROMARIN SAUVAGE, PEPPERWOOD, GÉRANIUM, ROSE, CÈDRE, PATCHOULI, FÈVE DE TONKA ET VANILLE.",
      category: "men's parfums",
      image: "/uploads/eros.png",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      title: "Khamrah lattafa",
      price: 55.99,
      description: "Découvrez le nouveau parfum Khamrah de Lattafa Perfumes. Inspiré par les épices et les dattes, ce parfum délicat offre une essence aromatique et épicée avec des notes de cannelle, de muscade et de bergamote. Enrobez-vous de cette fragrance envoûtante aux notes de vanille, de fève tonka et de bois d'ambre.",
      category: "women's parfums",
      image: "/uploads/khamrah.png",
      rating: {
        rate: 4.7,
        count: 500
      }
    },
    {
      title: "GEPARLYS – IDOLE FOR MEN",
      price: 15.99,
      description: "Le parfum Idole for Men de Geparlys est une Eau de Toilette pour homme qui se distingue par sa fragrance boisée et épicée. Il est souvent comparé à The One de Dolce & Gabbana en version Eau de Parfum.",
      category: "men's parfums",
      image: "/uploads/idole.png",
      rating: {
        "rate": 2.1,
        "count": 430
      }
    },
    {
      title: "Montblanc Legend Spirit",
      price: 695,
      description: "Montblanc Legend Spirit est une eau de toilette pour homme lancée en 2016, incarnant une fraîcheur moderne et sophistiquée. Cette composition s'ouvre sur des accords d'agrumes pétillants et d'épices, évolue vers un cœur aromatique et aquatique, puis se conclut sur des notes boisées et musquées, offrant une signature élégante et rafraîchissante.",
      category: "men's parfums",
      image: "/uploads/legend.png",
      rating: {
        rate: 4.6,
        count: 400
      }
    },
    {
      title: "Armani Acqua di Gio Profondo",
      price: 168,
      description: "Armani Acqua di Giò Profondo est une eau de parfum masculine aux notes marines intenses, mêlant agrumes pétillants, lavande aromatique et un fond boisé profond. Son essence fraîche et sophistiquée évoque la liberté de l’océan avec une touche moderne et élégante. Idéal pour les amateurs de parfums aquatiques et raffinés.",
      category: "men's parfums",
      image: "/uploads/profondo.png",
      rating: {
        rate: 3.9,
        count: 70
      }
    },
    {
        title: "Qaed Al Fursan Unlimited",
        price: 9.99,
        description: "Qaed Al Fursan Unlimited de Lattafa est un parfum exotique et gourmand, mêlant des notes fruitées d’ananas et de noix de coco à un cœur floral et une base douce de vanille, musc blanc et bois de santal.",
        category: "women's parfums",
        image: "/uploads/qaed.jpg",
        rating: {
          rate: 3,
          count: 400
        }
      },
      {
        title: "Sculpture Homme - Nikos",
        price: 10.99,
        description: "Sculpture Homme de Nikos est un parfum frais et sensuel, mêlant des notes lumineuses de bergamote et de citron à un cœur épicé de cannelle et un fond chaleureux de fève tonka et vanille.",
        category: "men's parfums",
        image: "/uploads/sculpture.png",
        rating: {
          rate: 1.9,
          count: 100
        }
      },
      {
        title: "Très Nuit - Armaf",
        price: 64,
        description: "Très Nuit de Armaf est un parfum élégant et sophistiqué, combinant des notes fraîches de citron et de verveine avec un cœur épicé de lavande et de muscade, reposant sur une base boisée et ambrée.",
        category: "men's parfums",
        image: "/uploads/tres nuit.png",
        rating: {
          rate: 3.3,
          count: 203
        }
      },
      {
        title: "Valentino pour Femme",
        price: 109,
        description: "Valentino pour Femme est un parfum raffiné et envoûtant, alliant des notes florales élégantes de jasmin et de rose à une touche gourmande de vanille et une base boisée sensuelle.",
        category: "women's parfums",
        image: "/uploads/valentino.png",
        rating: {
          rate: 2.9,
          count: 470
        }
      },
      {
        title: "Libre - Yves Saint Laurent",
        price: 109,
        description: "Libre d'Yves Saint Laurent est un parfum féminin audacieux qui combine la lavande et la mandarine en tête, suivis d'un cœur floral de jasmin. Sa base sensuelle de vanille et musc lui confère une profondeur irrésistible, parfaite pour une allure moderne et sophistiquée.",
        category: "women's parfums",
        image: "/uploads/libre.png",
        rating: {
          rate: 4.8,
          count: 319
        }
      },
      {
        title: "Flora Gorgeous Gardenia - Gucci",
        price: 114,
        description: "Flora Gorgeous Gardenia de Gucci est un parfum floral et féminin, qui mélange des notes fraîches de poire et de fruits rouges avec un cœur floral de gardenia et de jasmin. Sa base douce de patchouli et de sucre apporte une touche sucrée et élégante, parfaite pour une allure sophistiquée.",
        category: "women's parfums",
        image: "/uploads/flora.png",
        rating: {
          rate: 4.8,
          count: 400
        }
      },
      {
        title: "Bleu de Chanel",
        price: 599,
        description: "Bleu de Chanel est un parfum masculin intemporel, alliant des notes fraîches de citron et de menthe à un cœur épicé de gingembre et de poivre. Sa base boisée et sensuelle de cèdre et de santal lui confère une élégance moderne et sophistiquée.",
        category: "men's parfums",
        image: "/uploads/bleu.png",
        rating: {
          rate: 2.9,
          count: 250
        }
      },
      {
        title: "Layton - Parfums de Marly",
        price: 999.99,
        description: "Layton de Parfums de Marly est un parfum riche et élégant, combinant des notes fraîches de pomme verte et de lavande avec un cœur épicé de cannelle et de cardamome. Sa base chaleureuse de vanille, bois de santal et patchouli lui confère une profondeur sensuelle et addictive.",
        category: "men's parfums",
        image: "/uploads/layton.png©",
        rating: {
          rate: 2.2,
          count: 140
        }
      },
      {
        title: "Delina - Parfums de Marly",
        price: 56.99,
        description: "Delina de Parfums de Marly est un parfum féminin floral et fruité, mêlant des notes fraîches de rhubarbe et de litchi avec un cœur élégant de rose et de pivoine. Sa base sensuelle de musc, bois de cèdre et de vanille ajoute une touche sophistiquée et envoûtante.",
        category: "women's parfums",
        image: "/uploads/delina.png",
        rating: {
          rate: 2.6,
          count: 235
        }
      },
      {
        title: "Poison - Dior",
        price: 29.95,
        description: "Poison de Dior est un parfum oriental et audacieux, mêlant des notes épicées de coriandre et de prune avec un cœur floral de jasmin et de miel. Sa base chaude de bois de santal, de vanille et de musc lui confère une sensualité mystique et captivante.",
        category: "women's parfums",
        image: "/uploads/poison.png",
        rating: {
          rate: 2.9,
          count: 340
        }
      }
];

module.exports = Products;