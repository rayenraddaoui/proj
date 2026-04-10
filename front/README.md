# Frontend PJ1

Application frontend construite avec React, TypeScript et Vite.

## Fonctionnalites

- Page de connexion
- Page d'inscription
- Page d'accueil
- Todo list
- Calculatrice

## Prerequis

- Node.js 18+
- npm

## Installation

```bash
npm install
```

## Lancement en local

```bash
npm run dev
```

Le serveur de developpement est disponible sur l'URL affichee par Vite (souvent http://localhost:5173).

## Build production

```bash
npm run build
```

Le resultat du build est genere dans le dossier dist.

## Preview locale du build

```bash
npm run preview
```

## Deploiement GitHub Pages

Le projet est configure pour GitHub Pages avec:

- base Vite: /proj/
- routage React via HashRouter (URL de type #/route)

URL de deploiement attendue:

- https://rayenraddaoui.github.io/proj/#/

Exemples de routes:

- https://rayenraddaoui.github.io/proj/#/
- https://rayenraddaoui.github.io/proj/#/about
- https://rayenraddaoui.github.io/proj/#/todo

## Scripts npm

- npm run dev: lance le serveur de developpement
- npm run build: compile TypeScript et build Vite
- npm run preview: lance un serveur local pour le build
- npm run lint: execute ESLint

## Structure simple

- src: point d'entree et configuration principale React
- compante: composants pages
- public: assets statiques

