# Test technique Front End (Vue 2 + Vuetify)

![Image de référence à reproduire](/src/assets/maquette-fanroom.png)
Créé à partir de l'image de référence ci-dessus

Projet mis en place en environ 4h30.
Points d'améliorations :

- Badges hexagonaux n'en affiche que 14 max (j'aurais aimé avoir le +X sur le dernier badges en fonction du nombre de badges acquis)
- Badges hexagonaux ne sont pas totalement hexagonaux ... J'ai modifié un morceau de code stackoverflow, mais c'est une problématique que je n'avais pas encore rencontrée. J'ai perdu un peu de temps sur ce sujet.
- Sachant que je fais appel à Lorem Picsum pour les photos, j'aurais dû implémenter un $emit à chaque composant pour vérifier qu'il est mounted. Je pars du principe que le loading se ferait lors de la requête sur le back.
- En regardant les deux filtres à la fin du projet, je me dis que j'aurais pu créer un composant pour le filtre

Valentin VIGUIER

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
