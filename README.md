# 🌍 TimeTravel Agency --- Webapp Interactive

## Projet Final --- Intelligence Artificielle & Web Development

------------------------------------------------------------------------

## 🎯 Contexte & Objectif

TimeTravel Agency est une webapp immersive simulant une agence de voyage
temporel premium.

L'objectif du projet était de concevoir une application web interactive
combinant :

-   Design moderne et responsive\
-   Architecture full-stack avec Next.js\
-   Intégration d'un agent conversationnel basé sur un modèle LLM\
-   Personnalisation de l'expérience utilisateur

------------------------------------------------------------------------

# 🏗️ Architecture Technique

## 🖥️ Frontend

-   Next.js 16 (App Router)\
-   React 18\
-   TypeScript\
-   Tailwind CSS\
-   Architecture modulaire par composants

Organisation :

    app/
      ├── page.tsx
      ├── layout.tsx
      ├── api/chat/route.ts
    components/
      ├── header.tsx
      ├── hero.tsx
      ├── destinations.tsx
      ├── chatbot.tsx
      ├── footer.tsx

Approche choisie :

-   Mobile-first\
-   Dark mode premium\
-   Séparation claire UI / logique métier\
-   API isolée dans une route backend sécurisée

------------------------------------------------------------------------

# 🤖 Intégration Intelligence Artificielle

## Fournisseur IA

Groq API\
Modèle utilisé : `llama-3.1-8b-instant`

## Fonctionnement du Chatbot

1.  L'utilisateur envoie un message via le composant `chatbot.tsx`\
2.  Requête POST vers `/api/chat`\
3.  Appel serveur vers Groq API\
4.  Injection d'un prompt système structuré\
5.  Retour de la réponse IA au frontend\
6.  Affichage dynamique dans l'interface

------------------------------------------------------------------------

## 🧠 Prompt Engineering

Le prompt système définit :

-   Identité de l'agence\
-   Ton professionnel, passionné et élégant\
-   Connaissances des 3 destinations\
-   Prix fictifs cohérents\
-   Rôle de conseiller personnalisé

------------------------------------------------------------------------

# 🌍 Destinations Implémentées

### 🗼 Paris 1889

-   Belle Époque\
-   Exposition Universelle\
-   Inauguration de la Tour Eiffel\
-   4 500€ / 3 jours

### 🦖 Crétacé (-65M)

-   Exploration préhistorique\
-   Observation de dinosaures\
-   Expédition sécurisée\
-   9 900€ / 2 jours

### 🎨 Florence 1504

-   Renaissance italienne\
-   Michel-Ange\
-   Sculpture du David\
-   5 800€ / 3 jours

------------------------------------------------------------------------

# ✨ Fonctionnalités Clés

-   Landing page immersive\
-   Galerie interactive\
-   Chatbot IA fonctionnel\
-   Gestion des erreurs API\
-   Responsive design\
-   Variables d'environnement protégées

------------------------------------------------------------------------

# 🔐 Sécurité & Bonnes Pratiques

-   Clé API stockée dans `.env.local`\
-   Aucune clé exposée côté client\
-   Gestion des erreurs serveur (try/catch)\
-   Vérification `response.ok`\
-   Protection contre crash JSON

------------------------------------------------------------------------

# ⚙️ Installation & Lancement

## Installation

``` bash
npm install
```

## Configuration

Créer `.env.local` :

    GROQ_API_KEY=(la clef croq que je peux pas donner car confidentiel)

## Lancement

``` bash
npm run dev
```

------------------------------------------------------------------------

# 🚀 Déploiement

Plateforme recommandée : Vercel

Configuration requise :

-   Ajouter `GROQ_API_KEY` dans les variables d'environnement Vercel\**************************************************************ICI*************
-   Déploiement via GitHub

------------------------------------------------------------------------

# 📊 Compétences Mobilisées

-   React & Next.js App Router\
-   Intégration LLM via API REST\
-   Prompt Engineering\
-   Gestion d'état React\
-   UX / UI responsive\
-   Debugging backend\
-   Sécurisation des variables d'environnement

------------------------------------------------------------------------

# 📄 Licence

Projet pédagogique\
Usage académique uniquement

------------------------------------------------------------------------

# 🎓 Conclusion

Ce projet démontre l'intégration réussie :

-   d'une interface moderne\
-   d'une architecture full-stack\
-   d'un modèle d'IA conversationnel\
-   d'un prompt structuré\
-   d'une gestion robuste des erreurs

La webapp répond aux exigences fonctionnelles et techniques du brief
tout en proposant une expérience utilisateur immersive et cohérente.
