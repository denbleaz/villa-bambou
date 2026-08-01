/* ==========================================================================
   VILLA BAMBOU — i18n
   Dictionnaire FR / EN / NL + application automatique via [data-i18n]
   ========================================================================== */

const TRADUCTIONS = {
fr: {
  // Navigation
  nav_accueil: "Accueil", nav_chambres: "Chambres", nav_galerie: "Galerie",
  nav_tarifs: "Tarifs", nav_contact: "Contact", nav_cta: "Nous contacter",

  // Commun / footer
  commun_badge_note: "4,42 / 5 — 31 séjours notés",
  commun_photo_label: "Photo à venir",
  footer_tagline: "Une villa provençale pour les vacances en famille, au calme du Golf de Valcros.",
  footer_nav_titre: "Navigation",
  footer_contact_titre: "Contact",
  footer_adresse_titre: "Où se trouve la villa",
  footer_adresse: "Domaine de Valcros, La Londe-les-Maures, Var (83), France",
  footer_droits: "© 2026 Villa Bambou. Tous droits réservés.",

  // Noms de chambres (partagés accueil + chambres)
  chambre1_nom: "Chambre Bleue", chambre1_cap: "2 personnes", chambre1_lits: "1 lit double",
  chambre1_texte: "Calme et lumineuse, avec vue sur le jardin.",
  chambre2_nom: "Chambre Verte", chambre2_cap: "2 personnes", chambre2_lits: "2 lits simples",
  chambre2_texte: "Fraîche et ombragée, parfaite pour deux enfants ou deux adultes.",
  chambre3_nom: "Chambre Rouge", chambre3_cap: "3 personnes", chambre3_lits: "1 lit simple + 1 lit superposé enfant",
  chambre3_texte: "Pensée pour les familles, avec de quoi loger les plus petits.",
  chambre4_nom: "Chambre Jaune", chambre4_cap: "2 personnes", chambre4_lits: "1 lit double",
  chambre4_texte: "Baignée de lumière toute la journée : une des chambres préférées des hôtes.",
  chambre5_nom: "Chambre Bateau", chambre5_cap: "2 personnes", chambre5_lits: "1 lit double",
  chambre5_texte: "Nichée sous les combles, avec un esprit cabine qui plaît aux enfants.",
  chambre6_nom: "Studio indépendant", chambre6_cap: "Jusqu'à 4 personnes", chambre6_lits: "1 canapé 2 places + 1 lit superposé enfant",
  chambre6_texte: "Un peu d'indépendance en plus, avec sa propre kitchenette.",

  // ---------- ACCUEIL ----------
  acc_hero_eyebrow: "Domaine de Valcros · La Londe-les-Maures · Var",
  acc_hero_soustitre: "Une grande maison provençale nichée dans les collines du golf de Valcros, pensée pour les vacances en famille ou entre amis : jardin ombragé sous les chênes, piscine chauffée et plages sauvages à sept kilomètres.",
  acc_hero_btn1: "Voir les chambres", acc_hero_btn2: "Nous contacter",
  acc_chiffre1_val: "13", acc_chiffre1_label: "personnes max.",
  acc_chiffre2_val: "6", acc_chiffre2_label: "chambres",
  acc_chiffre3_val: "8 × 4 m", acc_chiffre3_label: "piscine chauffée",
  acc_chiffre4_val: "7 km", acc_chiffre4_label: "des plages",

  acc_intro_eyebrow: "Bienvenue",
  acc_intro_titre: "Une maison de famille, avant tout",
  acc_intro_texte1: "La Villa Bambou n'a jamais été construite « pour la location » : c'est une maison où l'on vit, remplie de souvenirs et de petits clins d'œil aux familles et aux amis qui s'y sont succédé depuis onze ans. Nous avons simplement choisi de la partager.",
  acc_intro_texte2: "Six chambres, deux niveaux, une piscine plein sud et un grand jardin ombragé : de quoi accueillir jusqu'à treize personnes sans jamais se marcher sur les pieds — des tout-petits aux grands-parents.",

  acc_atouts_eyebrow: "Ce qui fait la villa",
  acc_atouts_titre: "Pensée pour se sentir chez soi",
  acc_atout1_titre: "Piscine chauffée", acc_atout1_texte: "8 × 4 m, chauffage solaire de mi-avril à début octobre, marches d'accès pour les enfants.",
  acc_atout2_titre: "Jardin ombragé", acc_atout2_texte: "De vieux chênes-lièges, des herbes aromatiques à profusion et des terrasses orientées aux quatre points cardinaux.",
  acc_atout3_titre: "Golf & tranquillité", acc_atout3_texte: "Nichée dans un domaine privé autour du golf de Valcros, à l'écart de l'agitation.",
  acc_atout4_titre: "Plages préservées", acc_atout4_texte: "À 7 km, les plages sauvages face aux îles d'Or et à la presqu'île de Giens.",
  acc_atout5_titre: "Pensée pour les tout-petits", acc_atout5_texte: "Équipements bébé disponibles sur demande, jardin sécurisé et rythme des vacances en famille.",
  acc_atout6_titre: "Grande capacité", acc_atout6_texte: "Jusqu'à 13 personnes réparties sur 6 chambres : idéal pour plusieurs générations réunies.",

  acc_chambres_eyebrow: "Où dormir", acc_chambres_titre: "Six chambres, chacune son caractère",
  acc_chambres_texte: "De la Chambre Bleue au Studio indépendant, chaque pièce a été pensée pour un usage précis — couples, enfants ou grands ados en quête d'un peu d'intimité.",
  acc_chambres_lien: "Découvrir les 6 chambres",

  acc_galerie_eyebrow: "En images", acc_galerie_titre: "La villa, ses terrasses et son jardin",
  acc_galerie_texte: "Nos photos sont en cours de renouvellement : la galerie complète arrive très bientôt.",
  acc_galerie_lien: "Voir la galerie",

  acc_region_eyebrow: "Les alentours", acc_region_titre: "Entre golf, forêt et îles d'Or",
  acc_region_texte1: "Le village de La Londe-les-Maures est à 7 km, avec son marché provençal du dimanche et ses commerces de proximité. Un peu plus loin, Hyères et sa vieille ville médiévale, la presqu'île de Giens et l'embarcadère pour les îles de Porquerolles, Port-Cros et du Levant.",
  acc_region_texte2: "Les amateurs de balades apprécieront le massif des Maures et le Cap Bénat ; les familles, les plages de sable de Cabasson et de l'Estagnol, dans une zone naturelle protégée.",
  acc_region_item1: "Marché provençal chaque dimanche à La Londe",
  acc_region_item2: "Îles de Porquerolles, Port-Cros et du Levant à proximité",
  acc_region_item3: "Randonnées dans le massif des Maures et autour du Cap Bénat",
  acc_region_item4: "Golf de Valcros (18 trous) à 100 m de la villa",

  acc_avis_eyebrow: "Avis des voyageurs", acc_avis_titre: "Ce qu'en disent les familles reçues",
  acc_avis_texte: "Sur la base de 31 séjours notés par nos voyageurs, quelques thèmes reviennent souvent : la piscine, l'ambiance familiale et l'accueil.",
  acc_avis_stat1_val: "4,8 / 5", acc_avis_stat1_label: "Emplacement",
  acc_avis_stat2_val: "4,7 / 5", acc_avis_stat2_label: "Communication",
  acc_avis_stat3_val: "4,7 / 5", acc_avis_stat3_label: "Arrivée",
  acc_avis_theme1: "Piscine", acc_avis_theme2: "Famille", acc_avis_theme3: "Hospitalité", acc_avis_theme4: "Emplacement",

  acc_cta_titre: "Prêt·e pour des vacances au calme ?",
  acc_cta_texte: "Racontez-nous vos dates et le nombre de voyageurs : nous vous répondons sous 24 h avec un devis personnalisé.",
  acc_cta_bouton: "Contactez-nous",

  // ---------- CHAMBRES ----------
  cha_hero_eyebrow: "6 chambres · 12 lits · jusqu'à 13 personnes",
  cha_hero_titre: "Des chambres pensées pour toute la famille",
  cha_hero_texte: "Deux niveaux, une vraie intimité pour chacun, et suffisamment de configurations pour accueillir un couple, une fratrie ou plusieurs générations réunies.",

  cha_espaces_eyebrow: "Espaces communs", cha_espaces_titre: "Au-delà des chambres",
  cha_espace1_titre: "Salon d'été", cha_espace1_texte: "Ouvert de mi-mai à mi-octobre, pour profiter de la douceur des soirées.",
  cha_espace2_titre: "Cuisine extérieure & barbecue", cha_espace2_texte: "Pour des repas en plein air, à l'ombre des chênes.",
  cha_espace3_titre: "Table de ping-pong", cha_espace3_texte: "De quoi occuper petits et grands entre deux baignades.",
  cha_espace4_titre: "Buanderie équipée", cha_espace4_texte: "Grande machine à laver et fils de séchage extérieurs.",
  cha_espace5_titre: "Wifi & espace de travail", cha_espace5_texte: "Une chambre aménagée pour télétravailler quelques heures si besoin.",
  cha_espace6_titre: "Confort toute saison", cha_espace6_texte: "Volets en bois, double vitrage et climatisation pour les fortes chaleurs.",

  cha_bebes_eyebrow: "Familles avec bébés", cha_bebes_titre: "Bien équipée pour les tout-petits",
  cha_bebes_texte: "La villa accueille régulièrement de jeunes familles. Lit bébé, chaise haute et autres équipements peuvent être mis à disposition sur demande : n'hésitez pas à nous préciser vos besoins lors de votre réservation.",

  cha_cta_titre: "Une question sur les chambres ?",
  cha_cta_texte: "Nombre de voyageurs, répartition des chambres, besoins spécifiques : parlons-en.",
  cha_cta_bouton: "Nous écrire",

  // ---------- GALERIE ----------
  gal_hero_eyebrow: "En images", gal_hero_titre: "La villa en photos",
  gal_hero_texte: "Nous renouvelons actuellement notre galerie avec de nouvelles photos. En attendant, voici un aperçu de ce qui vous attend, catégorie par catégorie.",
  gal_cat1_titre: "Piscine & jardin",
  gal_cat2_titre: "Chambres & intérieurs",
  gal_cat3_titre: "Terrasses & vie extérieure",
  gal_cat4_titre: "Vue & environs",
  gal_cap1: "Piscine chauffée 8 × 4 m", gal_cap2: "Jardin sous les chênes centenaires",
  gal_cap3: "Herbes aromatiques du jardin", gal_cap4: "Marches d'accès à la piscine",
  gal_cap5: "Chambre Bleue", gal_cap6: "Chambre Rouge", gal_cap7: "Studio indépendant", gal_cap8: "Salon principal",
  gal_cap9: "Terrasse sud, plein soleil", gal_cap10: "Salon d'été & cuisine extérieure",
  gal_cap11: "Vue sur le golf de Valcros", gal_cap12: "Vue sur les collines et les îles",

  // ---------- TARIFS ----------
  tar_hero_eyebrow: "Tarifs & conditions", tar_hero_titre: "Des séjours flexibles, à la semaine",
  tar_hero_texte: "Les tarifs varient selon la saison et le nombre de voyageurs. Les montants ci-dessous sont indicatifs : contactez-nous pour un devis précis selon vos dates.",
  tar_col1: "Saison", tar_col2: "Tarif indicatif", tar_col3: "Précisions",
  tar_row1_saison: "Basse saison (printemps, automne)", tar_row1_prix: "à partir de 120 € / nuit", tar_row1_note: "Pour un groupe jusqu'à 10 personnes",
  tar_row2_saison: "Moyenne saison (juin, septembre)", tar_row2_prix: "Sur devis", tar_row2_note: "Piscine chauffée disponible",
  tar_row3_saison: "Haute saison (juillet, août)", tar_row3_prix: "jusqu'à 290 € / nuit", tar_row3_note: "Pour 12 personnes — supplément au-delà de 10",
  tar_conditions_titre: "Bon à savoir",
  tar_condition1: "Réduction importante à partir de 2 semaines de séjour",
  tar_condition2: "Kit draps & serviettes en option (18 € / personne)",
  tar_condition3: "Piscine chauffée par énergie solaire de mi-avril à début octobre",
  tar_condition4: "Arrivée entre 17 h et 19 h — départ avant 11 h",
  tar_condition5: "Une caution est demandée à l'arrivée",
  tar_cta_titre: "Une envie de dates précises ?",
  tar_cta_texte: "Envoyez-nous vos dates et le nombre de voyageurs : nous revenons vers vous avec un tarif détaillé.",
  tar_cta_bouton: "Demander un devis",

  // ---------- CONTACT ----------
  con_hero_eyebrow: "Réservation", con_hero_titre: "Parlons de votre séjour",
  con_hero_texte: "Décrivez-nous votre projet de séjour : nous vous répondons rapidement, en français, anglais ou néerlandais.",
  con_form_nom: "Nom", con_form_email: "Email",
  con_form_arrivee: "Date d'arrivée souhaitée", con_form_depart: "Date de départ souhaitée",
  con_form_voyageurs: "Nombre de voyageurs", con_form_message: "Votre message",
  con_form_message_ph: "Parlez-nous de votre séjour : composition du groupe, dates envisagées, questions particulières…",
  con_form_bouton: "Envoyer la demande",
  con_info_titre: "Votre hôte",
  con_info_hote: "Bernard vous accueille depuis plus de onze ans et répond généralement en moins d'une journée.",
  con_info_langues: "Langues parlées : français, anglais, néerlandais",
  con_pratique_titre: "Infos pratiques",
  con_pratique_arrivee: "Arrivée : entre 17 h et 19 h",
  con_pratique_depart: "Départ : avant 11 h",
  con_pratique_adresse: "Domaine de Valcros, La Londe-les-Maures (Var)",
  con_note: "Ce formulaire ouvre votre messagerie habituelle pour nous envoyer votre demande — nous revenons vers vous avec les disponibilités et un devis.",
},

en: {
  nav_accueil: "Home", nav_chambres: "Rooms", nav_galerie: "Gallery",
  nav_tarifs: "Rates", nav_contact: "Contact", nav_cta: "Contact us",

  commun_badge_note: "4.42 / 5 — 31 rated stays",
  commun_photo_label: "Photo coming soon",
  footer_tagline: "A Provençal villa for family holidays, in the quiet of the Valcros golf estate.",
  footer_nav_titre: "Navigation",
  footer_contact_titre: "Contact",
  footer_adresse_titre: "Where the villa is",
  footer_adresse: "Domaine de Valcros, La Londe-les-Maures, Var (83), France",
  footer_droits: "© 2026 Villa Bambou. All rights reserved.",

  chambre1_nom: "Blue Room", chambre1_cap: "2 guests", chambre1_lits: "1 double bed",
  chambre1_texte: "Quiet and bright, overlooking the garden.",
  chambre2_nom: "Green Room", chambre2_cap: "2 guests", chambre2_lits: "2 single beds",
  chambre2_texte: "Cool and shaded, perfect for two children or two adults.",
  chambre3_nom: "Red Room", chambre3_cap: "3 guests", chambre3_lits: "1 single bed + 1 children's bunk bed",
  chambre3_texte: "Designed for families, with space for the little ones.",
  chambre4_nom: "Yellow Room", chambre4_cap: "2 guests", chambre4_lits: "1 double bed",
  chambre4_texte: "Bathed in light all day long — a firm guest favourite.",
  chambre5_nom: "Boat Room", chambre5_cap: "2 guests", chambre5_lits: "1 double bed",
  chambre5_texte: "Tucked under the eaves, with a cabin-like feel children love.",
  chambre6_nom: "Independent Studio", chambre6_cap: "Up to 4 guests", chambre6_lits: "1 sofa bed (2p) + 1 children's bunk bed",
  chambre6_texte: "A little extra independence, with its own kitchenette.",

  acc_hero_eyebrow: "Domaine de Valcros · La Londe-les-Maures · Var",
  acc_hero_soustitre: "A spacious Provençal home tucked into the hills of the Valcros golf estate, made for family holidays or gatherings with friends: a shaded garden under old oak trees, a heated pool, and unspoiled beaches just seven kilometres away.",
  acc_hero_btn1: "See the rooms", acc_hero_btn2: "Contact us",
  acc_chiffre1_val: "13", acc_chiffre1_label: "guests max.",
  acc_chiffre2_val: "6", acc_chiffre2_label: "bedrooms",
  acc_chiffre3_val: "8 × 4 m", acc_chiffre3_label: "heated pool",
  acc_chiffre4_val: "7 km", acc_chiffre4_label: "to the beaches",

  acc_intro_eyebrow: "Welcome",
  acc_intro_titre: "A family home, first and foremost",
  acc_intro_texte1: "Villa Bambou was never built \"for rent\": it's a lived-in home, full of memories and small nods to the families and friends who have stayed here over the past eleven years. We simply chose to share it.",
  acc_intro_texte2: "Six bedrooms, two floors, a south-facing pool and a large shaded garden: enough room for up to thirteen guests without anyone getting in each other's way — from toddlers to grandparents.",

  acc_atouts_eyebrow: "What makes it special",
  acc_atouts_titre: "Designed to feel like home",
  acc_atout1_titre: "Heated pool", acc_atout1_texte: "8 × 4 m, solar-heated from mid-April to early October, with steps for young children.",
  acc_atout2_titre: "Shaded garden", acc_atout2_texte: "Old cork oaks, an abundance of aromatic herbs, and terraces facing all four directions.",
  acc_atout3_titre: "Golf & quiet", acc_atout3_texte: "Set within a private estate around the Valcros golf course, away from the bustle.",
  acc_atout4_titre: "Unspoiled beaches", acc_atout4_texte: "7 km away, wild beaches facing the Golden Islands and the Giens peninsula.",
  acc_atout5_titre: "Toddler-friendly", acc_atout5_texte: "Baby equipment available on request, a secured garden, and a holiday pace built for families.",
  acc_atout6_titre: "Room for everyone", acc_atout6_texte: "Up to 13 guests across 6 bedrooms — ideal for several generations under one roof.",

  acc_chambres_eyebrow: "Where to sleep", acc_chambres_titre: "Six bedrooms, each with its own character",
  acc_chambres_texte: "From the Blue Room to the independent Studio, every room was designed with a purpose — couples, children, or older teens after a bit of privacy.",
  acc_chambres_lien: "Discover the 6 rooms",

  acc_galerie_eyebrow: "In pictures", acc_galerie_titre: "The villa, its terraces and its garden",
  acc_galerie_texte: "Our photos are currently being updated — the full gallery is coming very soon.",
  acc_galerie_lien: "View the gallery",

  acc_region_eyebrow: "The surroundings", acc_region_titre: "Between golf, forest and the Golden Islands",
  acc_region_texte1: "The village of La Londe-les-Maures is 7 km away, with its Sunday Provençal market and local shops. A little further, Hyères and its medieval old town, the Giens peninsula, and the ferry to the islands of Porquerolles, Port-Cros and Le Levant.",
  acc_region_texte2: "Walkers will enjoy the Maures mountains and Cap Bénat; families will love the sandy beaches of Cabasson and L'Estagnol, within a protected natural area.",
  acc_region_item1: "Provençal market every Sunday in La Londe",
  acc_region_item2: "Porquerolles, Port-Cros and Le Levant islands nearby",
  acc_region_item3: "Hikes through the Maures mountains and around Cap Bénat",
  acc_region_item4: "Valcros golf course (18 holes) 100 m from the villa",

  acc_avis_eyebrow: "Guest reviews", acc_avis_titre: "What families who've stayed say",
  acc_avis_texte: "Based on 31 rated stays, a few themes come up again and again: the pool, the family atmosphere, and the warm welcome.",
  acc_avis_stat1_val: "4.8 / 5", acc_avis_stat1_label: "Location",
  acc_avis_stat2_val: "4.7 / 5", acc_avis_stat2_label: "Communication",
  acc_avis_stat3_val: "4.7 / 5", acc_avis_stat3_label: "Check-in",
  acc_avis_theme1: "Pool", acc_avis_theme2: "Family", acc_avis_theme3: "Hospitality", acc_avis_theme4: "Location",

  acc_cta_titre: "Ready for a quiet family holiday?",
  acc_cta_texte: "Tell us your dates and how many you'll be — we'll get back to you within 24 hours with a tailored quote.",
  acc_cta_bouton: "Get in touch",

  cha_hero_eyebrow: "6 bedrooms · 12 beds · up to 13 guests",
  cha_hero_titre: "Bedrooms designed for the whole family",
  cha_hero_texte: "Two floors, real privacy for everyone, and enough configurations to host a couple, a group of siblings, or several generations together.",

  cha_espaces_eyebrow: "Shared spaces", cha_espaces_titre: "Beyond the bedrooms",
  cha_espace1_titre: "Summer lounge", cha_espace1_texte: "Open from mid-May to mid-October, to enjoy the mild evenings.",
  cha_espace2_titre: "Outdoor kitchen & barbecue", cha_espace2_texte: "For open-air meals in the shade of the oaks.",
  cha_espace3_titre: "Table tennis", cha_espace3_texte: "Something to keep everyone entertained between swims.",
  cha_espace4_titre: "Equipped laundry room", cha_espace4_texte: "A large washing machine and outdoor drying lines.",
  cha_espace5_titre: "Wifi & workspace", cha_espace5_texte: "A room set up for a few hours of remote work if needed.",
  cha_espace6_titre: "Comfort in every season", cha_espace6_texte: "Wooden shutters, double glazing, and air conditioning for hot spells.",

  cha_bebes_eyebrow: "Families with babies", cha_bebes_titre: "Well-equipped for the little ones",
  cha_bebes_texte: "The villa regularly welcomes young families. A cot, high chair and other equipment can be provided on request — just let us know your needs when booking.",

  cha_cta_titre: "Any questions about the rooms?",
  cha_cta_texte: "Number of guests, room arrangements, specific needs — let's talk it through.",
  cha_cta_bouton: "Write to us",

  gal_hero_eyebrow: "In pictures", gal_hero_titre: "The villa in photos",
  gal_hero_texte: "We're currently refreshing our photo gallery. In the meantime, here's a preview of what awaits you, category by category.",
  gal_cat1_titre: "Pool & garden",
  gal_cat2_titre: "Bedrooms & interiors",
  gal_cat3_titre: "Terraces & outdoor living",
  gal_cat4_titre: "Views & surroundings",
  gal_cap1: "8 × 4 m heated pool", gal_cap2: "Garden under century-old oak trees",
  gal_cap3: "Aromatic herbs from the garden", gal_cap4: "Pool entry steps",
  gal_cap5: "Blue Room", gal_cap6: "Red Room", gal_cap7: "Independent Studio", gal_cap8: "Main living room",
  gal_cap9: "South-facing terrace, full sun", gal_cap10: "Summer lounge & outdoor kitchen",
  gal_cap11: "View over the Valcros golf course", gal_cap12: "View over the hills and islands",

  tar_hero_eyebrow: "Rates & conditions", tar_hero_titre: "Flexible stays, by the week",
  tar_hero_texte: "Rates vary by season and number of guests. The figures below are indicative — contact us for a precise quote based on your dates.",
  tar_col1: "Season", tar_col2: "Indicative rate", tar_col3: "Details",
  tar_row1_saison: "Low season (spring, autumn)", tar_row1_prix: "from €120 / night", tar_row1_note: "For a group of up to 10 guests",
  tar_row2_saison: "Mid season (June, September)", tar_row2_prix: "On request", tar_row2_note: "Heated pool available",
  tar_row3_saison: "High season (July, August)", tar_row3_prix: "up to €290 / night", tar_row3_note: "For 12 guests — surcharge above 10",
  tar_conditions_titre: "Good to know",
  tar_condition1: "Significant discount for stays of 2 weeks or more",
  tar_condition2: "Optional linen & towel kit (€18 / person)",
  tar_condition3: "Solar-heated pool from mid-April to early October",
  tar_condition4: "Check-in between 5 pm and 7 pm — check-out before 11 am",
  tar_condition5: "A security deposit is requested on arrival",
  tar_cta_titre: "Have specific dates in mind?",
  tar_cta_texte: "Send us your dates and number of guests — we'll come back to you with a detailed rate.",
  tar_cta_bouton: "Request a quote",

  con_hero_eyebrow: "Booking", con_hero_titre: "Let's talk about your stay",
  con_hero_texte: "Tell us about your trip and we'll get back to you quickly, in French, English or Dutch.",
  con_form_nom: "Name", con_form_email: "Email",
  con_form_arrivee: "Preferred arrival date", con_form_depart: "Preferred departure date",
  con_form_voyageurs: "Number of guests", con_form_message: "Your message",
  con_form_message_ph: "Tell us about your stay: group size, preferred dates, any specific questions…",
  con_form_bouton: "Send request",
  con_info_titre: "Your host",
  con_info_hote: "Bernard has been hosting for over eleven years and usually replies within a day.",
  con_info_langues: "Languages spoken: French, English, Dutch",
  con_pratique_titre: "Practical information",
  con_pratique_arrivee: "Check-in: between 5 pm and 7 pm",
  con_pratique_depart: "Check-out: before 11 am",
  con_pratique_adresse: "Domaine de Valcros, La Londe-les-Maures (Var)",
  con_note: "This form opens your usual email app to send us your request — we'll get back to you with availability and a quote.",
},

nl: {
  nav_accueil: "Home", nav_chambres: "Kamers", nav_galerie: "Galerij",
  nav_tarifs: "Tarieven", nav_contact: "Contact", nav_cta: "Neem contact op",

  commun_badge_note: "4,42 / 5 — 31 beoordeelde verblijven",
  commun_photo_label: "Foto volgt binnenkort",
  footer_tagline: "Een Provençaalse villa voor gezinsvakanties, in alle rust op het golfdomein van Valcros.",
  footer_nav_titre: "Navigatie",
  footer_contact_titre: "Contact",
  footer_adresse_titre: "Waar de villa ligt",
  footer_adresse: "Domaine de Valcros, La Londe-les-Maures, Var (83), Frankrijk",
  footer_droits: "© 2026 Villa Bambou. Alle rechten voorbehouden.",

  chambre1_nom: "Blauwe kamer", chambre1_cap: "2 personen", chambre1_lits: "1 tweepersoonsbed",
  chambre1_texte: "Rustig en licht, met uitzicht op de tuin.",
  chambre2_nom: "Groene kamer", chambre2_cap: "2 personen", chambre2_lits: "2 eenpersoonsbedden",
  chambre2_texte: "Koel en schaduwrijk, ideaal voor twee kinderen of twee volwassenen.",
  chambre3_nom: "Rode kamer", chambre3_cap: "3 personen", chambre3_lits: "1 eenpersoonsbed + 1 stapelbed voor kinderen",
  chambre3_texte: "Speciaal ontworpen voor gezinnen, met plaats voor de kleintjes.",
  chambre4_nom: "Gele kamer", chambre4_cap: "2 personen", chambre4_lits: "1 tweepersoonsbed",
  chambre4_texte: "De hele dag vol licht — een echte favoriet bij onze gasten.",
  chambre5_nom: "Bootkamer", chambre5_cap: "2 personen", chambre5_lits: "1 tweepersoonsbed",
  chambre5_texte: "Weggestopt onder het dak, met een cabinesfeer die kinderen geweldig vinden.",
  chambre6_nom: "Onafhankelijke studio", chambre6_cap: "Tot 4 personen", chambre6_lits: "1 slaapbank (2p) + 1 stapelbed voor kinderen",
  chambre6_texte: "Net iets meer privacy, met een eigen kitchenette.",

  acc_hero_eyebrow: "Domaine de Valcros · La Londe-les-Maures · Var",
  acc_hero_soustitre: "Een ruim Provençaals huis in de heuvels van het golfdomein van Valcros, gemaakt voor gezinsvakanties of verblijven met vrienden: een schaduwrijke tuin onder oude eiken, een verwarmd zwembad en ongerepte stranden op zeven kilometer afstand.",
  acc_hero_btn1: "Bekijk de kamers", acc_hero_btn2: "Neem contact op",
  acc_chiffre1_val: "13", acc_chiffre1_label: "personen max.",
  acc_chiffre2_val: "6", acc_chiffre2_label: "slaapkamers",
  acc_chiffre3_val: "8 × 4 m", acc_chiffre3_label: "verwarmd zwembad",
  acc_chiffre4_val: "7 km", acc_chiffre4_label: "tot de stranden",

  acc_intro_eyebrow: "Welkom",
  acc_intro_titre: "Bovenal een familiehuis",
  acc_intro_texte1: "Villa Bambou is nooit gebouwd \"om te verhuren\": het is een huis waar echt geleefd wordt, vol herinneringen en kleine verwijzingen naar de families en vrienden die er de afgelopen elf jaar hebben verbleven. Wij hebben er simpelweg voor gekozen het te delen.",
  acc_intro_texte2: "Zes slaapkamers, twee verdiepingen, een zwembad op het zuiden en een grote schaduwrijke tuin: genoeg ruimte voor maximaal dertien personen zonder dat iemand elkaar in de weg loopt — van peuters tot grootouders.",

  acc_atouts_eyebrow: "Wat de villa bijzonder maakt",
  acc_atouts_titre: "Ontworpen om je thuis te voelen",
  acc_atout1_titre: "Verwarmd zwembad", acc_atout1_texte: "8 × 4 m, zonneverwarming van half april tot begin oktober, met treetjes voor jonge kinderen.",
  acc_atout2_titre: "Schaduwrijke tuin", acc_atout2_texte: "Oude kurkeiken, overvloedig veel aromatische kruiden en terrassen op alle windrichtingen.",
  acc_atout3_titre: "Golf & rust", acc_atout3_texte: "Gelegen op een privédomein rond de golfbaan van Valcros, ver van de drukte.",
  acc_atout4_titre: "Ongerepte stranden", acc_atout4_texte: "Op 7 km afstand, wilde stranden tegenover de Gouden Eilanden en het schiereiland Giens.",
  acc_atout5_titre: "Kindvriendelijk", acc_atout5_texte: "Babyspullen op aanvraag beschikbaar, een veilige tuin en het rustige ritme van een gezinsvakantie.",
  acc_atout6_titre: "Ruimte voor iedereen", acc_atout6_texte: "Tot 13 personen verdeeld over 6 slaapkamers — ideaal voor meerdere generaties onder één dak.",

  acc_chambres_eyebrow: "Waar je slaapt", acc_chambres_titre: "Zes slaapkamers, elk met een eigen karakter",
  acc_chambres_texte: "Van de Blauwe kamer tot de onafhankelijke Studio: elke kamer is ontworpen met een doel — koppels, kinderen of oudere tieners die wat privacy zoeken.",
  acc_chambres_lien: "Ontdek de 6 kamers",

  acc_galerie_eyebrow: "In beeld", acc_galerie_titre: "De villa, haar terrassen en tuin",
  acc_galerie_texte: "Onze foto's worden momenteel vernieuwd — de volledige galerij komt zeer binnenkort online.",
  acc_galerie_lien: "Bekijk de galerij",

  acc_region_eyebrow: "De omgeving", acc_region_titre: "Tussen golf, bos en de Gouden Eilanden",
  acc_region_texte1: "Het dorp La Londe-les-Maures ligt op 7 km, met zijn Provençaalse zondagmarkt en lokale winkels. Iets verder liggen Hyères met zijn middeleeuwse binnenstad, het schiereiland Giens en de veerboot naar de eilanden Porquerolles, Port-Cros en Le Levant.",
  acc_region_texte2: "Wandelaars genieten van het Maures-gebergte en Cap Bénat; gezinnen zullen houden van de zandstranden van Cabasson en L'Estagnol, in een beschermd natuurgebied.",
  acc_region_item1: "Provençaalse markt elke zondag in La Londe",
  acc_region_item2: "Eilanden Porquerolles, Port-Cros en Le Levant dichtbij",
  acc_region_item3: "Wandelingen door het Maures-gebergte en rond Cap Bénat",
  acc_region_item4: "Golfbaan van Valcros (18 holes) op 100 m van de villa",

  acc_avis_eyebrow: "Ervaringen van gasten", acc_avis_titre: "Wat gezinnen die er verbleven vertellen",
  acc_avis_texte: "Op basis van 31 beoordeelde verblijven komen enkele thema's steeds terug: het zwembad, de familiale sfeer en de gastvrijheid.",
  acc_avis_stat1_val: "4,8 / 5", acc_avis_stat1_label: "Ligging",
  acc_avis_stat2_val: "4,7 / 5", acc_avis_stat2_label: "Communicatie",
  acc_avis_stat3_val: "4,7 / 5", acc_avis_stat3_label: "Aankomst",
  acc_avis_theme1: "Zwembad", acc_avis_theme2: "Familie", acc_avis_theme3: "Gastvrijheid", acc_avis_theme4: "Ligging",

  acc_cta_titre: "Klaar voor een rustige gezinsvakantie?",
  acc_cta_texte: "Laat ons uw data en het aantal gasten weten — binnen 24 uur ontvangt u een offerte op maat.",
  acc_cta_bouton: "Neem contact op",

  cha_hero_eyebrow: "6 slaapkamers · 12 bedden · tot 13 personen",
  cha_hero_titre: "Slaapkamers ontworpen voor het hele gezin",
  cha_hero_texte: "Twee verdiepingen, echte privacy voor iedereen, en genoeg indelingen voor een koppel, een groep broers en zussen, of meerdere generaties samen.",

  cha_espaces_eyebrow: "Gemeenschappelijke ruimtes", cha_espaces_titre: "Meer dan alleen slaapkamers",
  cha_espace1_titre: "Zomersalon", cha_espace1_texte: "Open van half mei tot half oktober, om te genieten van de milde avonden.",
  cha_espace2_titre: "Buitenkeuken & barbecue", cha_espace2_texte: "Voor maaltijden in de open lucht, in de schaduw van de eiken.",
  cha_espace3_titre: "Tafeltennis", cha_espace3_texte: "Vermaak voor jong en oud tussen twee zwempartijen door.",
  cha_espace4_titre: "Uitgeruste wasruimte", cha_espace4_texte: "Een grote wasmachine en buitendrooglijnen.",
  cha_espace5_titre: "Wifi & werkplek", cha_espace5_texte: "Een kamer ingericht om, indien nodig, enkele uren op afstand te werken.",
  cha_espace6_titre: "Comfort in elk seizoen", cha_espace6_texte: "Houten luiken, dubbel glas en airconditioning bij grote hitte.",

  cha_bebes_eyebrow: "Gezinnen met baby's", cha_bebes_titre: "Goed uitgerust voor de allerkleinsten",
  cha_bebes_texte: "De villa ontvangt regelmatig jonge gezinnen. Een babybedje, kinderstoel en andere spullen kunnen op aanvraag geregeld worden — laat gerust weten wat u nodig heeft bij het boeken.",

  cha_cta_titre: "Vraag over de kamers?",
  cha_cta_texte: "Aantal gasten, kamerindeling, specifieke wensen — we bespreken het graag.",
  cha_cta_bouton: "Schrijf ons",

  gal_hero_eyebrow: "In beeld", gal_hero_titre: "De villa in foto's",
  gal_hero_texte: "We vernieuwen momenteel onze fotogalerij. In afwachting hiervan alvast een voorproefje, per categorie.",
  gal_cat1_titre: "Zwembad & tuin",
  gal_cat2_titre: "Slaapkamers & interieur",
  gal_cat3_titre: "Terrassen & buitenleven",
  gal_cat4_titre: "Uitzicht & omgeving",
  gal_cap1: "Verwarmd zwembad 8 × 4 m", gal_cap2: "Tuin onder eeuwenoude eiken",
  gal_cap3: "Aromatische kruiden uit de tuin", gal_cap4: "Trapjes naar het zwembad",
  gal_cap5: "Blauwe kamer", gal_cap6: "Rode kamer", gal_cap7: "Onafhankelijke studio", gal_cap8: "Hoofdwoonkamer",
  gal_cap9: "Terras op het zuiden, volle zon", gal_cap10: "Zomersalon & buitenkeuken",
  gal_cap11: "Uitzicht op de golfbaan van Valcros", gal_cap12: "Uitzicht op de heuvels en eilanden",

  tar_hero_eyebrow: "Tarieven & voorwaarden", tar_hero_titre: "Flexibele verblijven, per week",
  tar_hero_texte: "De tarieven variëren per seizoen en aantal gasten. Onderstaande bedragen zijn indicatief — neem contact op voor een precieze offerte voor uw data.",
  tar_col1: "Seizoen", tar_col2: "Indicatief tarief", tar_col3: "Details",
  tar_row1_saison: "Laagseizoen (lente, herfst)", tar_row1_prix: "vanaf € 120 / nacht", tar_row1_note: "Voor een groep tot 10 personen",
  tar_row2_saison: "Middenseizoen (juni, september)", tar_row2_prix: "Op aanvraag", tar_row2_note: "Verwarmd zwembad beschikbaar",
  tar_row3_saison: "Hoogseizoen (juli, augustus)", tar_row3_prix: "tot € 290 / nacht", tar_row3_note: "Voor 12 personen — toeslag boven 10",
  tar_conditions_titre: "Goed om te weten",
  tar_condition1: "Aanzienlijke korting bij verblijven vanaf 2 weken",
  tar_condition2: "Optioneel beddengoed- & handdoekenpakket (€ 18 / persoon)",
  tar_condition3: "Zonneverwarmd zwembad van half april tot begin oktober",
  tar_condition4: "Aankomst tussen 17 u en 19 u — vertrek vóór 11 u",
  tar_condition5: "Bij aankomst wordt een waarborgsom gevraagd",
  tar_cta_titre: "Al specifieke data in gedachten?",
  tar_cta_texte: "Stuur ons uw data en het aantal gasten door — wij komen terug met een gedetailleerd tarief.",
  tar_cta_bouton: "Offerte aanvragen",

  con_hero_eyebrow: "Reservering", con_hero_titre: "Laten we het over uw verblijf hebben",
  con_hero_texte: "Vertel ons over uw reis en we reageren snel, in het Frans, Engels of Nederlands.",
  con_form_nom: "Naam", con_form_email: "E-mail",
  con_form_arrivee: "Gewenste aankomstdatum", con_form_depart: "Gewenste vertrekdatum",
  con_form_voyageurs: "Aantal gasten", con_form_message: "Uw bericht",
  con_form_message_ph: "Vertel ons over uw verblijf: groepsgrootte, gewenste data, specifieke vragen…",
  con_form_bouton: "Verstuur aanvraag",
  con_info_titre: "Uw gastheer",
  con_info_hote: "Bernard verhuurt al meer dan elf jaar en antwoordt meestal binnen een dag.",
  con_info_langues: "Gesproken talen: Frans, Engels, Nederlands",
  con_pratique_titre: "Praktische informatie",
  con_pratique_arrivee: "Aankomst: tussen 17 u en 19 u",
  con_pratique_depart: "Vertrek: vóór 11 u",
  con_pratique_adresse: "Domaine de Valcros, La Londe-les-Maures (Var)",
  con_note: "Dit formulier opent uw e-mailprogramma om uw aanvraag te versturen — wij nemen contact op met de beschikbaarheid en een offerte.",
}
};

const LANGUE_DEFAUT = "fr";

function langueActuelle(){
  return localStorage.getItem("villaBambouLangue") || LANGUE_DEFAUT;
}

function appliquerTraductions(langue){
  const dico = TRADUCTIONS[langue] || TRADUCTIONS[LANGUE_DEFAUT];
  document.documentElement.setAttribute("lang", langue);
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    const cle = el.getAttribute("data-i18n");
    if(dico[cle] !== undefined){
      el.textContent = dico[cle];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function(el){
    const cle = el.getAttribute("data-i18n-placeholder");
    if(dico[cle] !== undefined){ el.setAttribute("placeholder", dico[cle]); }
  });
  document.querySelectorAll(".langues button").forEach(function(btn){
    btn.classList.toggle("actif", btn.getAttribute("data-langue") === langue);
  });
  localStorage.setItem("villaBambouLangue", langue);
}

function initLangue(){
  appliquerTraductions(langueActuelle());
  document.querySelectorAll(".langues button").forEach(function(btn){
    btn.addEventListener("click", function(){
      appliquerTraductions(btn.getAttribute("data-langue"));
    });
  });
}

document.addEventListener("DOMContentLoaded", initLangue);
