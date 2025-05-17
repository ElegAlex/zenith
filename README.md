# Zenith Prompt MVP v1

Application de gestion de prompts pour IA génératives.

## Objectif du projet et fonctionnalités

- Centraliser et organiser les prompts pour l'IA
- Interface légère construite avec React
- Mise en forme via Tailwind CSS

## Prérequis

- Node.js (v16 ou supérieur recommandé)
- npm ou yarn

## Installation des dépendances

Clonez le dépôt puis installez les dépendances :

```bash
git clone <URL_DE_VOTRE_REPO_ZENITH>
cd zenith
npm install # ou yarn install
```

## Exécution en développement

```bash
npm start # ou yarn start
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir l'application dans votre navigateur.

## Construction pour la production

```bash
npm run build
```

Le résultat se trouve dans le dossier `build` généré par Create React App.

## Configuration de Tailwind

Le fichier `tailwind.config.js` définit les chemins à analyser dans `src` et `public`. La commande :

```bash
npm run build:css
```

compile `src/index.css` vers `public/tailwind.css` en mode veille pour vos modifications.

## Instructions de tests à venir

Des tests unitaires seront ajoutés avec React Testing Library. Une fois en place, ils pourront être lancés via :

```bash
npm test
```

## Technologies utilisées

- React avec Create React App
- Tailwind CSS pour la mise en forme
