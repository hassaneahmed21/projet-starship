# Mémoire de Claude pour projet-starship

Ce fichier est chargé automatiquement au début de chaque session Claude Code.
Il sert de mémoire persistante : **à lire en début de session et à mettre à jour
à chaque nouvelle demande, décision ou modification importante.**

## Préférences de l'utilisateur

- Langue : français.
- Veut que Claude garde en mémoire l'historique des conversations et s'en
  souvienne à chaque session (via ce fichier).

## Contexte du projet

- Jeu JavaScript « StarShip » : un vaisseau tire sur des soucoupes volantes.
- Stack : JavaScript (ES6 + Babel), Webpack 5, React 17 en dépendance.
- Scripts npm : `npm run build`, `npm run watch`, `npm run dev-server`.
- Sources dans `src/` :
  - `scripts/` : `main.js`, `game.js`, `StarShip.js`, `Saucer.js`, `Shoot.js`,
    `Mobile.js`, `MoveState.js`
  - `images/`, `assets/images/` : sprites (vaisseau, soucoupe, tir, ciel)
  - `index.html`, `style/style.css`
- Build généré dans `dist/`.

## Autre dépôt de l'utilisateur

- `hassaneahmed21/5MCSI_Metriques` (projet Python/Flask avec `templates/`).

## Historique des conversations

### 2026-10-17
- L'utilisateur a demandé que Claude mémorise l'historique des conversations
  pour s'en souvenir à chaque fois.
- Claude a expliqué que sa mémoire ne persiste pas d'une session à l'autre et a
  proposé de tenir un fichier de suivi.
- L'utilisateur a choisi de le placer dans `projet-starship` → création de ce
  `CLAUDE.md` sur la branche `claude/memoriser-historique-conversation-uw01bp`.
- **Projet personnel : voyage de noces.**
  - Mariage le samedi 21 novembre 2026 à Nouakchott (Mauritanie).
  - L'épouse a un visa délivré par la France ; question : doit-elle entrer ou
    sortir par un aéroport français ?
  - Envies : Italie (lac de Côme, etc.), 15 à 20 jours, départ le 21 ou le 22,
    trajet le moins fatigant possible, avec un budget raisonnable.
  - L'utilisateur a un appartement gratuit à Gran Canaria (escale possible).
  - Programme proposé par Claude (17 nuits, du 22 nov. au 9 déc.) :
    Nouakchott → Paris (4 nuits) → Nice (3) → Côme (3) → Milan (2) →
    Gran Canaria (5, appartement) → Nouakchott (Binter, vol direct).
    Logique visa : entrer dans Schengen par la France et passer en France
    plus de nuits que dans tout autre pays (7), pour que la France reste la
    destination principale. Le code des visas n'impose pas de « première
    entrée » par le pays émetteur, mais c'est l'option la plus sûre.
  - **Mise à jour :** l'utilisateur veut passer plus de nuits en Italie, entrer
    par Paris, aller facilement à Milan et rentrer par Gran Canaria.
    Nouveau programme (17 nuits, du 22 nov. au 9 déc.) : Paris (2 nuits) →
    avion vers Milan-Linate puis train vers Côme (4) → Venise (3) → Milan (3) →
    vol direct Milan → Gran Canaria (5) → Binter vers Nouakchott.
    Claude a prévenu du risque lié au visa si c'est un visa court séjour
    français et que l'Italie devient la destination principale.
  - **Mise à jour 2 :** l'utilisateur ne veut plus parler du visa. Il ne veut
    pas aller à Venise mais plutôt à Rome. Il demande le détail jour par jour
    avec les prix. Programme retenu (17 nuits) : 22 nov. Nouakchott → Paris
    (2 nuits) → 24 nov. avion vers Rome (4) → 28 nov. train vers Florence (2) →
    30 nov. Côme (3) → 3 déc. Milan (2) → 5 déc. vol direct vers Gran Canaria
    (4) → 9 déc. Binter vers Nouakchott. Budget estimé : 4 000 à 6 000 € pour
    deux.
  - **Mise à jour 3 :** l'utilisateur veut un choix précis d'hôtels et de vols,
    des taxis aéroport ↔ hôtel (bagages) et une voiture à Gran Canaria.
    Choix de Claude : Pullman Paris Tour Eiffel ; Hotel Artemide (Rome) ;
    Hotel Spadai (Florence) ; Hilton Lake Como ; Room Mate Giulia (Milan).
    Vols : Air France Nouakchott → Paris-CDG (ou Royal Air Maroc via
    Casablanca) ; Air France CDG → Rome-Fiumicino ; easyJet ou Neos
    Milan-Malpensa → Gran Canaria (ou Ryanair depuis Bergame) ; Binter
    Gran Canaria → Nouakchott. Voiture : Cicar à l'aéroport de Gran Canaria
    (tous risques sans franchise). Taxis à forfait : CDG ↔ Paris rive gauche
    65 €, Fiumicino → centre de Rome ≈ 55 €, Milan → Malpensa ≈ 114 €.
    Budget estimé : environ 4 600 à 7 100 € pour deux, hors repas et visites.
    Claude ne peut ni réserver ni voir les prix en direct : l'utilisateur
    réserve lui-même.
  - **Mise à jour 4 :** nouvelle répartition demandée par l'utilisateur :
    Paris 2 nuits, Rome 3, Milan 4, Florence + Côme 4. Ordre logique proposé :
    22–24 nov. Paris → 24–27 Rome → 27–29 Florence → 29 nov.–1er déc. Côme →
    1er–5 déc. Milan → 5–9 déc. Gran Canaria. Claude a rédigé un petit
    message romantique pour présenter le programme à sa future épouse.
  - **Mise à jour 5 :** la future épouse veut voir Rome, Venise, la Toscane,
    les Dolomites, le lac de Côme et Milan. Claude a réduit Rome, Milan et
    Gran Canaria. Programme (16 nuits, du 22 nov. au 8 déc.) : Paris 2 (22–24)
    → avion vers Rome 2 (24–26) → Florence et Toscane 2 (26–28) →
    Dolomites, base Bolzano 2 (28–30, la saison de ski ouvre le 28 nov. 2026)
    → Venise 2 (30 nov.–2 déc.) → Côme 2 (2–4) → Milan 1 (4–5) →
    Gran Canaria 3 (5–8) → Nouakchott le 8 déc.
    Hôtels : Pullman Paris Tour Eiffel, Artemide (Rome), Spadai (Florence),
    Parkhotel Laurin (Bolzano), Hotel Antiche Figure (Venise, en face de la
    gare), Hilton Lake Como, Room Mate Giulia (Milan).
    Budget estimé : ≈ 4 700 à 7 500 € pour deux, hors repas.
  - L'utilisateur a demandé comment se déplacer entre les villes italiennes.
    Claude a conseillé le train (Frecciarossa et Italo, réservés sur
    trenitalia.com et italo.it), le taxi entre la gare et l'hôtel, et de ne
    pas louer de voiture en Italie (zones ZTL et amendes).
  - À confirmer avec l'utilisateur : type de visa de l'épouse (court séjour C
    ou long séjour / titre de séjour), dates de validité, nationalité et
    documents de l'utilisateur.
