## TF1 Technical test

J'ai constaté quelques zones d'ombre pendant l'examin de l'exercice mais également durant le développement de ce petit composant :

### Figma

Le Figma fourni représentant le slideshow ne montre qu'un seul état de ce dernier. Aucun design systeme n'est fourni, et aucun moyen de connaître les dimensions et marges qui composent ce carrousel.

#### General

- Aucune indication sur le caractère responsif du slideshow, est t-il censé s'adapté à certains viewports plus petits ? Quels sont les différents breakpoints ?
- Doit-t-il y avoir des effets d'hovering sur les éléments qui composent les parties interactives ? (thumbnails, boutons) ?

#### Navigation (Flèches)

- Pas de consigne sur le feedback visuel à adopté lorsque l'utilisateur intéragis avec les flèches
- Est-ce que les flèches de navigations sont censés disparaître lorsque l'on attend les limites du slideshow ? Ou au contraire le slideshow doit t-il effectué une boucle ?

#### Visuels des programmes

- Pas de consigne sur le feedback visuel à adopté lorsque l'utilisateur intéragis avec les visuels
- A quoi sert le bouton [+] en bas à droite de chaque visuel ?
- Qu'est-ce qui est censé se passé lorsque l'utilisateur clique sur un visuel ?
- Que suis-je censé faire lorsqu'un des visuels ne s'affichent pas (erreur d'url par exemple) ?
  - Dois-je les supprimer de la liste ?
  - Dois-je afficher un placeholder ?
- Les programmes semblent triés par typologie (Ici en l'occurrence il s'agit certainement de visuels liés à des programmes pour enfant):
  - Est-ce volontaire ? Ou c'est simplement du au hasard ?
  - Suis-je censé trié ou prévoir un éventuel tri sur les programmes composants le slideshow ?

### Performances

- Dois-je utilisé le virtual scrolling afin de ne monter dans le DOM qu'une liste limitée d'items en même temps ?
- Dois-je limité le nombre d'items à fetcher ?
  - Si oui, dois-je utiliser la navigation de l'utilisateur pour mettre en place un système de pagination pour charger par lot les items successivement ?

### API Graphql

- Quelle est la différence entre une `image` et un `thumbnail` dans notre contexte ?
- Avec les éléments dont j'ai à ma disposition, je ne comprends pas en quoi `image`, `image_by_pk` et `program_by_pk` me sont utiles
- A quoi sert dans notre cas le field `image_id` dans la query `program` sachant que nous pouvons accéder à l'id et l'url du thumbnail ? j'imagine qu'il sert à récupéré une image spécique mais pour l'exercice est t-il nécessaire ?
- Même interrogation pour les fields `created_at` et `updatedAt`
- Je constate que dans le schema qu'il y a une boucle dans la query `program` > `thumbnail` > `programs` > `thumbnail` > `...`
    - De plus on peu constater que dans cette boucle, il y a une inchoérence dans la nomenclature de `program` qui devient `programs`
- Le field `name` des programmes renvoit un lorum ipsum ne correspondant pas vraiment à la signature d'un titre de programme, cela est assez perturbant car on a l'impression d'avoir à faire à une description plus qu'un nom
- Ici j'ai personnellement du mal à comprendre la nature d'un programme et à quel niveau hiérarchique il se situe.
J'imagine que cette catégorie fait parti d'un groupe avec une profondeur spécifique, et je m'attendais à retrouver ce systeme imbriqué (type poupée russe) dans la strucure de la query `program` (ex: `Adulte` > `Sport` > `Football` > `Ligue1` > `2022-2023` > `...` ).


### Conclusion
Je me suis permis quelques libertés mais il est évident que dans un cadre profesionnel je ne me le permettrais pas, sauf si on m'encourage à le faire.
En effet je peux être force de proposition tout en gardant une cohérence avec le design systeme existant.