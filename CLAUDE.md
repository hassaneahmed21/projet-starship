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
