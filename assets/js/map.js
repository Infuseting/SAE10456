
let mapOptions = {
    center:[49.1816305,-0.3698261],
    zoom:10
}


let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let Departements = [
    ["Calvados", [49.1816305, -0.3698261], ["Calvados", "Departements Normandie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 60], ["Valide", 40]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 10], ["Valide", 90]]]], "https://www.calvados.fr/"],
    ["Eure", [49.024137, 1.150823], ["Eure", "Departements Normandie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 55], ["Valide", 45]]], ["Differenciation de salaire", [["Handicap", 50], ["Valide", 50]]], ["Temps de travail", [["Handicap", 20], ["Valide", 80]]]], "https://www.eure.fr/"],
    ["Manche", [49.633731, -1.622137], ["Manche", "Departements Normandie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 65], ["Valide", 35]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 30], ["Valide", 70]]]], "https://www.manchetourisme.com/"],
    ["Orne", [48.432942, 0.0931], ["Orne", "Departements Normandie"], [["Employé en situation d'handicap dans l'entreprise", [["Handicap", 55], ["Valide", 45]]], ["Differenciation de salaire", [["Handicap", 50], ["Valide", 50]]], ["Temps de travail", [["Handicap", 20], ["Valide", 80]]]], "https://www.orne.fr/"],
    ["Seine-Maritime", [49.443232, 1.099971], ["Seine-Maritime", "Departements Normandie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 60], ["Valide", 40]]], ["Differenciation de salaire", [["Handicap", 55], ["Valide", 45]]], ["Temps de travail", [["Handicap", 25], ["Valide", 75]]]], "https://www.seine-maritime.fr/"],
];

let City = [
    ["Caen", [49.1816305, -0.3698261], ["Caen", "Prefecture du Calvados"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 60], ["Valide", 40]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 10], ["Valide", 90]]]], "https://www.caen.fr/"],
    ["Bayeux", [49.276462, -0.702473], ["Bayeux", "Sous-prefecture du Calvados"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 55], ["Valide", 45]]], ["Differenciation de salaire", [["Handicap", 50], ["Valide", 50]]], ["Temps de travail", [["Handicap", 20], ["Valide", 80]]]], "https://www.bayeux.fr/"],
    ["Le Havre", [49.49437, 0.107929], ["Le Havre", "Prefecture de la Seine-Maritime"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 65], ["Valide", 35]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 30], ["Valide", 70]]]], "https://www.lehavre.fr/"],
    ["Rouen", [49.443232, 1.099971], ["Rouen", "Prefecture de la Seine-Maritime"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 55], ["Valide", 45]]], ["Differenciation de salaire", [["Handicap", 50], ["Valide", 50]]], ["Temps de travail", [["Handicap", 20], ["Valide", 80]]]], "https://www.rouen.fr/"],
    ["Cherbourg-en-Cotentin", [49.633731, -1.622137], ["Cherbourg-en-Cotentin", "Prefecture de la Manche"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 60], ["Valide", 40]]], ["Differenciation de salaire", [["Handicap", 55], ["Valide", 45]]], ["Temps de travail", [["Handicap", 25], ["Valide", 75]]]], "https://www.cherbourg.fr/"],
    ["Évreux", [49.024137, 1.150823], ["Évreux", "Prefecture de l'Eure"], [["Employé en situation en siiuation d'Handicap dans l'entreprise", [["Handicap", 65], ["Valide", 35]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 30], ["Valide", 70]]]], "https://www.evreux.fr/"],
    ["Dieppe", [49.922992, 1.077099], ["Dieppe", "Sous-prefecture de la Seine-Maritime"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 55], ["Valide", 45]]], ["Differenciation de salaire", [["Handicap", 50], ["Valide", 50]]], ["Temps de travail", [["Handicap", 20], ["Valide", 80]]]], "https://www.dieppe.fr/"],
    ["Sotteville-lès-Rouen", [49.405, 1.083], ["Sotteville-lès-Rouen", "Sous-prefecture de la Seine-Maritime"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 60], ["Valide", 40]]], ["Differenciation de salaire", [["Handicap", 55], ["Valide", 45]]], ["Temps de travail", [["Handicap", 25], ["Valide", 75]]]], "https://www.sotteville-les-rouen.fr/"],
    ["Montivilliers", [49.545, 0.191], ["Montivilliers", "Sous-prefecture de la Seine-Maritime"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 65], ["Valide", 35]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 30], ["Valide", 70]]]], "https://www.montivilliers.fr/"],
    ["Lisieux", [49.146721, 0.229577], ["Lisieux", "Sous-prefecture du Calvados"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 55], ["Valide", 45]]], ["Differenciation de salaire", [["Handicap", 50], ["Valide", 50]]], ["Temps de travail", [["Handicap", 20], ["Valide", 80]]]], "https://www.lisieux.fr/"],
    ["Fécamp", [49.7556, 0.3748], ["Fécamp", "Sous-prefecture de la Seine-Maritime"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 60], ["Valide", 40]]], ["Differenciation de salaire", [["Handicap", 55], ["Valide", 45]]], ["Temps de travail", [["Handicap", 25], ["Valide", 75]]]], "https://www.fecamp.fr/"],
    ["Saint-Étienne-du-Rouvray", [49.379, 1.102], ["Saint-Étienne-du-Rouvray", "Sous-prefecture de la Seine-Maritime"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 65], ["Valide", 35]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 30], ["Valide", 70]]]], "https://www.saintetiennedurouvray.fr/"],
    ["Alençon", [48.432942, 0.0931], ["Alençon", "Sous-prefecture de l'Orne"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 55], ["Valide", 45]]], ["Differenciation de salaire", [["Handicap", 50], ["Valide", 50]]], ["Temps de travail", [["Handicap", 20], ["Valide", 80]]]], "https://www.alencon.fr/"],
    ["Le Grand-Quevilly", [49.398, 1.045]],
    ["Vernon", [49.0928, 1.4632]],
    ["Le Petit-Quevilly", [49.418, 1.067]],
    ["Hérouville-Saint-Clair", [49.206, -0.34]],
    ["Lisieux", [49.146721, 0.229577]],
    ["Saint-Lô", [49.1141, -1.0909]],
    ["Mont-Saint-Aignan", [49.464, 1.087]],
    ["Fécamp", [49.7556, 0.3748]],
    ["Louviers", [49.216, 1.167]],
    ["Vire Normandie", [48.8381, -0.8897]],
    ["Elbeuf", [49.29, 1.005]],
    ["Montivilliers", [49.545, 0.191]],
    ["Flers", [48.7425, -0.5747]],
    ["Canteleu", [49.435, 1.033]],
    ["Argentan", [48.7481, -0.0209]],
    ["Bayeux", [49.276462, -0.702473]],
    ["Val-de-Reuil", [49.274, 1.209]],
    ["Bois-Guillaume", [49.465, 1.116]],
    ["Granville", [48.8372, -1.5927]],
    ["Barentin", [49.545, 0.954]],
    ["Yvetot", [49.614, 0.755]],
    ["Gisors", [49.276, 1.778]],
    ["La Hague", [49.706, -1.933]],
    ["Bolbec", [49.573, 0.474]],
    ["Ifs", [49.145, -0.356]],
    ["Oissel", [49.34, 1.093]],
    ["Maromme", [49.465, 1.045]],
    ["Caudebec-lès-Elbeuf", [49.29, 1.005]],
    ["Bernay", [49.088, 0.598]],
    ["Déville-lès-Rouen", [49.465, 1.045]],
    ["Mézidon Vallée d'Auge", [49.093, -0.073]],
    ["Grand-Couronne", [49.34, 1.033]],
    ["Port-Jérôme-sur-Seine", [49.485, 0.545]],
    ["Mondeville", [49.175, -0.317]],
    ["Darnétal", [49.45, 1.133]],
    ["Petit-Caux", [49.95, 1.267]],
    ["Gonfreville-l'Orcher", [49.505, 0.21]],
    ["Ouistreham", [49.276, -0.258]],
    ["Pont-Audemer", [49.3556, 0.5156]],
    ["Lillebonne", [49.53, 0.535]],
    ["Souleuvre en Bocage", [48.95, -0.933]],
    ["Petit-Couronne", [49.34, 1.033]],
    ["Coutances", [49.05, -1.45]],
    ["Harfleur", [49.505, 0.21]],
    ["Saint-Pierre-lès-Elbeuf", [49.29, 1.005]],
    ["Falaise", [48.895, -0.2]],
    ["Bihorel", [49.465, 1.116]],
    ["Saint-Aubin-lès-Elbeuf", [49.29, 1.005]],
    ["Verneuil d'Avre et d'Iton", [48.742, 0.929]],
    ["Les Andelys", [49.247, 1.413]],
    ["L'Aigle", [48.7621, 0.6275]],
    ["Le Mesnil-Esnard", [49.465, 1.116]],
    ["Carentan-les-Marais", [49.3, -1.25]],
    ["Saint-Pierre-en-Auge", [49.093, -0.073]],
    ["Avranches", [48.6844, -1.3567]],
    ["Honfleur", [49.4194, 0.2328]],
    ["Sainte-Adresse", [49.505, 0.1]],
    ["Notre-Dame-de-Bondeville", [49.465, 1.045]],
    ["Eu", [50.048, 1.418]],
    ["Gaillon", [49.157, 1.34]],
    ["Condé-en-Normandie", [48.85, -0.55]],
    ["Valognes", [49.507, -1.468]],
    ["Colombelles", [49.2, -0.317]],
    ["Bonsecours", [49.465, 1.116]],
    ["Livarot-Pays-d'Auge", [49.093, -0.073]],
    ["Pavilly", [49.55, 0.95]],
    ["Gournay-en-Bray", [49.48, 1.725]],
    ["Franqueville-Saint-Pierre", [49.465, 1.133]],
    ["Saint-Hilaire-du-Harcouët", [48.58, -1.083]],
    ["Vexin-sur-Epte", [49.15, 1.667]],
    ["Valdallière", [48.85, -0.883]],
    ["Bricquebec-en-Cotentin", [49.45, -1.633]],
    ["Malaunay", [49.55, 1.05]],
    ["Octeville-sur-Mer", [49.55, 0.1]],
    ["Dives-sur-Mer", [49.282, -0.11]],
    ["Saint-Sébastien-de-Morsent", [49.017, 1.083]],
    ["Blainville-sur-Orne", [49.233, -0.317]],
    ["Thue et Mue", [49.2, -0.55]],
    ["La Ferté Macé", [48.583, -0.35]],
    ["Le Val d'Hazey", [49.157, 1.34]],
    ["Troarn", [49.183, -0.183]],
    ["Douvres-la-Délivrande", [49.3, -0.383]],
    ["Le Trait", [49.483, 0.833]],
    ["Pacy-sur-Eure", [49.017, 1.383]],
    ["Cléon", [49.317, 1.033]],
    ["Saint-James", [48.55, -1.333]],
    ["Conches-en-Ouche", [49.083, 0.933]],
    ["Giberville", [49.183, -0.317]],
    ["Tinchebray-Bocage", [48.75, -0.733]],
    ["Le Tréport", [50.058, 1.383]],
    ["Montville", [49.55, 1.05]],
    ["Cormelles-le-Royal", [49.15, -0.317]],
    ["Fleury-sur-Orne", [49.15, -0.35]],
    ["Les Monts d'Aunay", [49.083, -0.717]],
    ["Neufchâtel-en-Bray", [49.733, 1.433]],
    ["Mesnil-en-Ouche", [49.083, 0.833]],
    ["Trouville-sur-Mer", [49.3667, 0.0833]],
    ["Saint-Marcel", [49.083, 1.483]],
    ["Breteuil", [48.833, 0.933]],
    ["Beuzeville", [49.35, 0.367]],
    ["Pont-l'Évêque", [49.283, 0.183]],
    ["Mesnils-sur-Iton", [48.833, 0.933]],
    ["Noues de Sienne", [48.833, -1.033]],
    ["Pontorson", [48.55, -1.5]],
    ["Torigny-les-Villes", [49.017, -0.983]],
    ["Brionne", [49.183, 0.717]],
    ["Domfront en Poiraie", [48.517, -0.65]],
    ["Athis-Val de Rouvre", [48.75, -0.367]],
    ["Duclair", [49.483, 0.85]],
    ["Sées", [48.6, 0.15]],
    ["Saint-Valery-en-Caux", [49.867, 0.733]],
    ["Pont-de-l'Arche", [49.317, 1.15]],
    ["Rives-en-Seine", [49.533, 0.75]],
    ["Courseulles-sur-Mer", [49.332, -0.451]],
    ["Le Neubourg", [49.15, 0.9]],
    ["Condé-sur-Vire", [49.083, -1.083]],
    ["Le Houlme", [49.55, 1.05]],
    ["Terres-de-Caux", [49.65, 0.55]],
    ["Saint-Romain-de-Colbosc", [49.55, 0.35]],
    ["Agneaux", [49.117, -1.1]],
    ["Saint-Pair-sur-Mer", [48.833, -1.567]],
    ["La Haye", [49.333, -1.583]],
    ["Saint-André-de-l'Eure", [49.083, 1.283]],
    ["Mortagne-au-Perche", [48.517, 0.55]],
    ["Gravigny", [49.017, 1.15]],
    ["Villedieu-les-Poêles-Rouffigny", [48.833, -1.217]],
    ["Étrépagny", [49.35, 1.616]],
    ["Forges-les-Eaux", [49.616, 1.55]],
    ["Saint-Germain-du-Corbéis", [48.433, 0.083]],
    ["Bretteville-sur-Odon", [49.167, -0.417]],
    ["Gouffern en Auge", [48.75, 0.1]],
    ["Touques", [49.35, 0.1]],
    ["Val-au-Perche", [48.333, 0.667]],
    ["Grand Bourgtheroulde", [49.317, 0.833]],
    ["Le Vaudreuil", [49.267, 1.217]],
    ["Deauville", [49.3575, 0.0792]],
    ["Argences", [49.133, -0.183]],
    ["Thury-Harcourt-le-Hom", [49.017, -0.55]],
    ["Isigny-sur-Mer", [49.317, -1.1]],
    ["Saint-Nicolas-d'Aliermont", [49.883, 1.25]],
    ["Cabourg", [49.289, -0.115]]
];

let Entreprise = [
    ["Société Générale - Caen", [49.182, -0.37], ["Société Générale - Caen", "Entreprise du secteur banquaire"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 60], ["Valide", 40]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 10], ["Valide", 90]]]], "https://www.societegenerale.fr/"],
    ["Renault - Le Havre", [49.495, 0.108], ["Renault - Le Havre", "Entreprise du secteur automobile"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 55], ["Valide", 45]]], ["Differenciation de salaire", [["Handicap", 50], ["Valide", 50]]], ["Temps de travail", [["Handicap", 20], ["Valide", 80]]]], "info_entreprise.html#RenaultHavre"],
    ["Orange - Rouen", [49.444, 1.1], ["Orange - Rouen", "Entreprise du secteur télécommunications"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 65], ["Valide", 35]]], ["Differenciation de salaire", [["Handicap", 55], ["Valide", 45]]], ["Temps de travail", [["Handicap", 25], ["Valide", 75]]]], "https://www.orange.fr/"],
    ["EDF - Cherbourg", [49.634, -1.623], ["EDF - Cherbourg", "Entreprise du secteur énergie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 60], ["Valide", 40]]], ["Differenciation de salaire", [["Handicap", 45], ["Valide", 55]]], ["Temps de travail", [["Handicap", 30], ["Valide", 70]]]], "https://www.edf.fr/"],
    ["Total - Caen", [49.183, -0.371], ["Total - Caen", "Entreprise du secteur énergie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 50], ["Valide", 50]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 15], ["Valide", 85]]]], "https://www.total.com/"],
    ["BNP Paribas - Rouen", [49.445, 1.101], ["BNP Paribas - Rouen", "Entreprise du secteur banquaire"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 55], ["Valide", 45]]], ["Differenciation de salaire", [["Handicap", 50], ["Valide", 50]]], ["Temps de travail", [["Handicap", 20], ["Valide", 80]]]], "https://www.bnpparibas.com/"],
    ["Airbus - Le Havre", [49.496, 0.109], ["Airbus - Le Havre", "Entreprise du secteur aéronautique"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 60], ["Valide", 40]]], ["Differenciation de salaire", [["Handicap", 55], ["Valide", 45]]], ["Temps de travail", [["Handicap", 25], ["Valide", 75]]]], "https://www.airbus.com/"],
    ["Thales - Caen", [49.184, -0.372], ["Thales - Caen", "Entreprise du secteur défense"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 65], ["Valide", 35]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 30], ["Valide", 70]]]], "https://www.thalesgroup.com/"],
    ["Safran - Rouen", [49.446, 1.102], ["Safran - Rouen", "Entreprise du secteur aéronautique"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 55], ["Valide", 45]]], ["Differenciation de salaire", [["Handicap", 50], ["Valide", 50]]], ["Temps de travail", [["Handicap", 20], ["Valide", 80]]]], "https://www.safran-group.com/"],
    ["L'Oréal - Le Havre", [49.497, 0.11], ["L'Oréal - Le Havre", "Entreprise du secteur cosmétique"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 60], ["Valide", 40]]], ["Differenciation de salaire", [["Handicap", 55], ["Valide", 45]]], ["Temps de travail", [["Handicap", 25], ["Valide", 75]]]], "https://www.loreal.com/"],
    ["Danone - Caen", [49.185, -0.373], ["Danone - Caen", "Entreprise du secteur alimentaire"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 65], ["Valide", 35]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 30], ["Valide", 70]]]], "https://www.danone.com/"],
    ["Sanofi - Rouen", [49.447, 1.103], ["Sanofi - Rouen", "Entreprise du secteur pharmaceutique"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 55], ["Valide", 45]]], ["Differenciation de salaire", [["Handicap", 50], ["Valide", 50]]], ["Temps de travail", [["Handicap", 20], ["Valide", 80]]]], "https://www.sanofi.com/"],
    ["Veolia - Le Havre", [49.498, 0.111], ["Veolia - Le Havre", "Entreprise du secteur environnement"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 60], ["Valide", 40]]], ["Differenciation de salaire", [["Handicap", 55], ["Valide", 45]]], ["Temps de travail", [["Handicap", 25], ["Valide", 75]]]], "https://www.veolia.com/"],
    ["Engie - Caen", [49.186, -0.374], ["Engie - Caen", "Entreprise du secteur énergie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 65], ["Valide", 35]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 30], ["Valide", 70]]]], "https://www.engie.com/"],
    ["Microsoft - Caen", [49.187, -0.375], ["Microsoft - Caen", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 60], ["Valide", 40]]], ["Differenciation de salaire", [["Handicap", 55], ["Valide", 45]]], ["Temps de travail", [["Handicap", 25], ["Valide", 75]]]], "https://www.microsoft.com/"],
    ["Google - Rouen", [49.448, 1.104], ["Google - Rouen", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 65], ["Valide", 35]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 30], ["Valide", 70]]]], "https://www.google.com/"],
    ["Amazon - Le Havre", [49.499, 0.112], ["Amazon - Le Havre", "Entreprise du secteur e-commerce"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 55], ["Valide", 45]]], ["Differenciation de salaire", [["Handicap", 50], ["Valide", 50]]], ["Temps de travail", [["Handicap", 20], ["Valide", 80]]]], "https://www.amazon.com/"],
    ["Facebook - Caen", [49.188, -0.376], ["Facebook - Caen", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 60], ["Valide", 40]]], ["Differenciation de salaire", [["Handicap", 55], ["Valide", 45]]], ["Temps de travail", [["Handicap", 25], ["Valide", 75]]]], "https://www.facebook.com/"],
    ["Apple - Rouen", [49.449, 1.105], ["Apple - Rouen", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 65], ["Valide", 35]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 30], ["Valide", 70]]]], "https://www.apple.com/"],
    ["IBM - Le Havre", [49.500, 0.113], ["IBM - Le Havre", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 55], ["Valide", 45]]], ["Differenciation de salaire", [["Handicap", 50], ["Valide", 50]]], ["Temps de travail", [["Handicap", 20], ["Valide", 80]]]], "https://www.ibm.com/"],
    ["Intel - Caen", [49.189, -0.377], ["Intel - Caen", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 60], ["Valide", 40]]], ["Differenciation de salaire", [["Handicap", 55], ["Valide", 45]]], ["Temps de travail", [["Handicap", 25], ["Valide", 75]]]], "https://www.intel.com/"],
    ["Cisco - Rouen", [49.450, 1.106], ["Cisco - Rouen", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 65], ["Valide", 35]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 30], ["Valide", 70]]]], "https://www.cisco.com/"],
    ["HP - Le Havre", [49.501, 0.114], ["HP - Le Havre", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 55], ["Valide", 45]]], ["Differenciation de salaire", [["Handicap", 50], ["Valide", 50]]], ["Temps de travail", [["Handicap", 20], ["Valide", 80]]]], "https://www.hp.com/"],
    ["Oracle - Caen", [49.190, -0.378], ["Oracle - Caen", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 60], ["Valide", 40]]], ["Differenciation de salaire", [["Handicap", 55], ["Valide", 45]]], ["Temps de travail", [["Handicap", 25], ["Valide", 75]]]], "https://www.oracle.com/"],
    ["SAP - Rouen", [49.451, 1.107], ["SAP - Rouen", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 65], ["Valide", 35]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 30], ["Valide", 70]]]], "https://www.sap.com/"],
    ["Salesforce - Le Havre", [49.502, 0.115], ["Salesforce - Le Havre", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 55], ["Valide", 45]]], ["Differenciation de salaire", [["Handicap", 50], ["Valide", 50]]], ["Temps de travail", [["Handicap", 20], ["Valide", 80]]]], "https://www.salesforce.com/"],
    ["Adobe - Caen", [49.191, -0.379], ["Adobe - Caen", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 60], ["Valide", 40]]], ["Differenciation de salaire", [["Handicap", 55], ["Valide", 45]]], ["Temps de travail", [["Handicap", 25], ["Valide", 75]]]], "https://www.adobe.com/"],
    ["VMware - Rouen", [49.452, 1.108], ["VMware - Rouen", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 65], ["Valide", 35]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 30], ["Valide", 70]]]], "https://www.vmware.com/"],
    ["NVIDIA - Le Havre", [49.503, 0.116], ["NVIDIA - Le Havre", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 55], ["Valide", 45]]], ["Differenciation de salaire", [["Handicap", 50], ["Valide", 50]]], ["Temps de travail", [["Handicap", 20], ["Valide", 80]]]], "https://www.nvidia.com/"],
    ["AMD - Caen", [49.192, -0.380], ["AMD - Caen", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 60], ["Valide", 40]]], ["Differenciation de salaire", [["Handicap", 55], ["Valide", 45]]], ["Temps de travail", [["Handicap", 25], ["Valide", 75]]]], "https://www.amd.com/"],
    ["Dell - Rouen", [49.453, 1.109], ["Dell - Rouen", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 65], ["Valide", 35]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 30], ["Valide", 70]]]], "https://www.dell.com/"],
    ["Lenovo - Le Havre", [49.504, 0.117], ["Lenovo - Le Havre", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 55], ["Valide", 45]]], ["Differenciation de salaire", [["Handicap", 50], ["Valide", 50]]], ["Temps de travail", [["Handicap", 20], ["Valide", 80]]]], "https://www.lenovo.com/"],
    ["Asus - Caen", [49.193, -0.381], ["Asus - Caen", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 60], ["Valide", 40]]], ["Differenciation de salaire", [["Handicap", 55], ["Valide", 45]]], ["Temps de travail", [["Handicap", 25], ["Valide", 75]]]], "https://www.asus.com/"],
    ["Acer - Rouen", [49.454, 1.110], ["Acer - Rouen", "Entreprise du secteur technologie"], [["Employé en situation d'Handicap dans l'entreprise", [["Handicap", 65], ["Valide", 35]]], ["Differenciation de salaire", [["Handicap", 60], ["Valide", 40]]], ["Temps de travail", [["Handicap", 30], ["Valide", 70]]]], "https://www.acer.com/"]
]
let color = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"]
const select = document.getElementById('select-content')
const content = document.getElementById('content')

Entreprise.forEach(entreprise => {
    let marker = L.marker(entreprise[1]).addTo(map);
    marker.on('click', function() {
        map.setView(entreprise[1], 15);
        setContent(entreprise);
        select.classList.add('hidden');
        content.classList.remove('hidden');
    });

});




document.getElementById('search').addEventListener('input', function(e) {
    let searchTerm = e.target.value.toLowerCase();
    let foundCity = City.find(marker => marker[0].toLowerCase() === searchTerm);
    let foundDepartement = Departements.find(marker => marker[0].toLowerCase() === searchTerm);
    let foundEntreprise = Entreprise.find(marker => marker[0].toLowerCase() === searchTerm);
    if (foundCity || foundDepartement || foundEntreprise) {
        select.classList.add('hidden');
        content.classList.remove('hidden');
    } else {
        select.classList.remove('hidden');
        content.classList.add('hidden');

    }
    if (foundCity) {
        map.setView(foundCity[1], 13);
        setContent(foundCity);
    } else if (foundDepartement) {
        map.setView(foundDepartement[1], 10);
        setContent(foundDepartement);
        
    }
    if (foundEntreprise) {
        map.setView(foundEntreprise[1], 15);
        setContent(foundEntreprise);
        
    }
});




function setContent(found) {
    document.querySelector('#content h2').innerText = found[2][0];
    document.querySelector('#content p').innerText = found[2][1];
    let ratingsHtml = '';
    found[3].forEach(rating => {
        ratingsHtml += `    <h4>${rating[0]}</h4>
        <div class="progress">`
        let count = 0;
        rating[1].forEach(progress => {
            ratingsHtml += `<div class="part text-center" style="color: white; background-color: ${color[count]};width:${progress[1]}%;"><h5>${progress[0]}</h5></div>`;
            count += 1;
        });
                        
        ratingsHtml += `</div>`;
    });
    document.querySelector('#content #info').innerHTML = ratingsHtml;
    document.querySelector('#content a').href = found[4];
}


//Nom Prenom