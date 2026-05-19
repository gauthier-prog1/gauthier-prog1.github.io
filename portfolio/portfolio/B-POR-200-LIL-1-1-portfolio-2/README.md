# &lt;Lebrun /&gt; — Portfolio Personnel

Portfolio web de **LEBRUN Gauthier**, développeur web front-end en 1ère année de Bachelor à Epitech.

## 🚀 Aperçu

Site vitrine one-page présentant mon parcours, mes compétences, mes projets et mes informations de contact. Disponible pour un stage.

## 📁 Structure du projet

```
portfolio/
├── index.html        # Page principale (structure & styles critiques inline)
├── style.min.css     # Feuille de styles minifiée
├── main.js           # JavaScript source (lisible)
├── main.min.js       # JavaScript minifié (chargé en production)
├── photodemwa.jpg    # Photo de profil
├── cv.pdf            # Curriculum vitae téléchargeable
└── README.md         # Ce fichier
```

## ✨ Fonctionnalités

- **Barre de progression** au scroll en haut de page
- **Menu hamburger** responsive pour mobile
- **Animations fade-in** au scroll via `IntersectionObserver`
- **Barres de compétences** animées à l'apparition
- **Navigation active** mise en surbrillance selon la section visible
- **Formulaire de contact** avec validation et message de succès
- **Optimisation image hero** : recompression automatique en WebP via Canvas API
- Design sombre avec dégradés violet / bleu

## 🛠️ Technologies

| Technologie | Usage |
|---|---|
| HTML5 | Structure sémantique |
| CSS3 | Variables CSS, Flexbox, Grid, animations |
| JavaScript (Vanilla) | Interactivité, IntersectionObserver |
| Google Fonts | Space Mono + DM Sans |

## 📦 Installation & Lancement

Aucune dépendance, aucun build requis. Ouvrir directement `index.html` dans un navigateur, ou servir via un serveur statique :

```bash
# Avec Python
python -m http.server 8080

# Avec Node.js (npx)
npx serve .
```

## 🌐 Déploiement

Le site est hébergé sur **GitHub Pages**. Tout push sur la branche `main` met à jour la production automatiquement.

## 📬 Contact

- **Email** : lebrungauthier@icloud.com
- **Téléphone** : 06 07 84 46 73
- **Localisation** : Lille, France
