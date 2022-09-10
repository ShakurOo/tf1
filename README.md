## TF1 Technical test

L'examin des informations disponibles pour réalisé l'exercice a débouché sur une serie de questions :

### Figma
Le Figma fourni représentant le slideshow ne montre qu'un seul état de ce dernier. Aucun design systeme n'est fourni, et aucun moyen de connaître les dimensions et marges qui composent ce carrousel.

#### General
- Aucune indication sur la responsivité du slideshow, est t-il censé s'adapté à certains viewports plus petits ?
- Doit-t-il y avoir des effets d'hovering sur les éléments qui composent les parties interactives ? (thumbnails, boutons) ?

#### Navigation (Flèches)
- Aucune indication sur le feedback visuel à adopté lorsque l'utilisateur intéragis avec les flèches
- Est-ce que les flèches de navigations sont censés disparaître lorsque l'on attend les limites du slideshow ?

#### Visuels des programmes
- Aucune indication sur le feedback visuel à adopté lorsque l'utilisateur intéragis avec les visuels
- A quoi sert le bouton [+] en bas à droite de chaque visuel ?
- Qu'est-ce qui est censé se passé lorsque l'utilisateur clique sur un visuel ?
- Que suis-je censé faire lorsqu'un des visuels ne s'affichent pas (erreur d'url par exemple) ?
  - Dois-je les supprimer de la liste ?
  - Dois-je afficher un placeholder ?
- Les programmes semblent triés par typologie (Ici en l'occurrence il s'agit certainement de visuels liés à des programmes pour enfant):
  - Est-ce volontaire ? Ou c'est simplement du au hasard ?
    - Si volontaire:
      - Dois-je absolument ne prévoir que ce cas là ? (images de programme pour enfant ?)
      - Ou dois-je prévoir plusieurs cas ?
        - SiComment suis-je censé représenté visuellement le switch des programmes ? Via une liste déroulante ? Un bouton ? Une URL dédiée ?

### Performances
- Dois-je utilisé le virtual scrolling afin de ne monter dans le DOM qu'une liste limitée d'items en même temps ?
- Dois-je limité le nombre d'items à fetcher ?
  - Si oui, dois-je utiliser la navigation de l'utilisateur pour mettre en place un système de pagination pour charger par lot les items successivement ?

### API Graphql
- Quelle est la différence entre une `image` et un `thumbnail` dans notre contexte ?
- Avec les éléments dont j'ai à ma disposition, je ne comprends pas en quoi `image`, `image_by_pk` et `program_by_pk` me sont utiles
- Dans l'hypothèse où le slideshow affiche des programmes spécifiques, je trouve la hiérarchisation des fields pas forcément évidente à comprendre de prime abord :
  - A quoi sert dans notre cas le field `image_id` dans la query `program` sachant que nous pouvons accéder à l'id et l'url du thumbnail ? j'imagine qu'il sert à récupéré une image spécique mais pour l'exercice est t-il nécessaire ?
  - Même interrogation pour les fields `created_at` et `updatedAt`
  - Je constate que dans le schema qu'il y a une boucle dans la query `program` > `thumbnail` > `programs` > `thumbnail` > `...`
    - De plus on peu constater que dans cette boucle il y a une inchoérence dans la nommenclature de `program` devenant `programs`
- Le field `name` des programmes renvoit un lorum ipsum ne correspondant pas vraiment à la signature d'un titre de programme, cela est assez perturbant car on a l'impression d'avoir une description plus qu'un nom...


### Conclusion
Au delà du manque d'informations sur l'ésthetique du slideshow, j'ai personnellement du mal à comprendre sur le Graphql ce que représente un programme et le lien hierarchique où il se situe.
Typiquement, pour moi un programme à un niveau hiérarchique au dessus d'un épisode, mais ici j'ai l'impression qu'un programme est enfaite un épisode.

Partant de ce postulat, je ne serais pas (avec ce qu'il m'est fourni) comment réalisé un slideshow basé sur une "colection" d'épisodes car le filtre `program(where: {id: {_eq: "ID"}}` ne donne rien. Je suis confûs...
