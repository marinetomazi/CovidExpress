*1* CONTEXTE:

Nom du jeu : COVID EXPRESS

Objectif du jeu : Le personnage doit collecter un maximum de masque et de tube de gel hydroalcoolique (+ 1point/item) et limiter les contact avec le virus du COVID (-1 point/item) le temps d'un trajet entre 2 stations de metro, soit 20 secondes.
Pour sauver sa vie et gagner la partie : le score doit être supérieur a zéro.

Mouvements du personnage : ArrowLeft : déplacement sur la gauche, ArrowRight: déplacement sur la droite, Space : Saut

*2* STRUCTURE DU JEU:

Dossier COVID EXPRESS
    index.HTML
Dossier STYLE 
    style.css
Dossier JS 
    Hero.js
        Utilisation d'un Class + Méthode
    gain.js
        Utilisation de 2 Class + Méthode + fonction aléatoire
    main.js
        Définition des variables ext + fonction aléatoire
        Définition du canvas 
        Téléchargement d'images
        Définition des mouvements du héro en fonction des événements
        Définition du temps de jeu
        Fonction principale de définition du canvas (16ms)
        Définition de la boucle d'animation de lancement du jeu
        Fonction d'arrêt du jeu
        Fonction reset 
        Fonction résultat de jeu (win/lose)
        Définition des événements au click du bouton restart
    obstacles.js
        Utilisation de 2 Class + Méthode + fonction alétoire
Dossier AUDIO
Dossier IMAGES

*3* LOGIQUE DE JEU:

Page de présentation de jeu : Utilisation HTML + CSS 
Plateau de jeu : Utilisation <Canvas> + <img> 
Page de fin de jeu : Utilisation <Canvas> + <img>
