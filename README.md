## TF1 Technical test

En gros le figma qu'ils fournissent ne correspond qu'à une seule vue. Le visuel représentant un slideshow étant suffisamment affordant, on constate qu'il y a des points d'interactions censé faire évoluer l'UI de ce dernier.
Exemple: Le bouton [+] à quoi sert t-il ? A ouvrir la page du programme ? A ouvrir une tooltip avec un détails sur le programme ?

Ensuite, encore sur le figma, je constate que les visuels ont l'air d'être triés par typologie de programme (Ici en l'occurrence il s'agit certainement de visuels liés à des programmes pour enfant).

- Est-ce volontaire ? Ou c'est simplement du au hasard ?
  - Si volontaire:
    - Dois-je absolument ne prévoir que ce cas là ? (images de programme pour enfant ?)
    - Ou dois-je prévoir plusieurs cas ? Comment suis-je censé représenté visuellement le switch de programmes ? Via une liste déroulante ? Un bouton ? Une URL dédiée ?

En ce qui concerne les performances:

- Dois-je utilisé le virtual scrolling afin de ne monter dans le DOM qu'une liste limitée d'items en même temps ?
- Dois-je limité le nombre d'items à fetcher ? En ce sens dois-je utiliser la navigation de l'utilisateur pour mettre en place un système de pagination pour charger par lot les items successivement ?

- En ce qui concerne GraphQL, je suis loin d'être un spécialiste mais je dénote selon moi plusieurs problèmes :
  - Qu'elle est la différence entre une image et un thumbnail dans notre contexte ?
  - Avec les éléments dont j'ai à ma disposition, je ne sais pas en quoi les champs image, image_by_pk et program_by_pk me sont utiles
  - Dans l'hypothèse où les slideshows affichent des programmes spécifiques, je trouve la hiérarchisation des fields pas forcément évidente à comprendre de prime abord :
    - A quoi sert dans notre cas le field image_id dans program sachant que nous pouvons accéder à l'id et l'url de thumbnail ?
    - Je constate dans le schema une boucle program > thumbnail > programs > thumbnail > ...
      - De plus on peu constater que le field duppliqué programs se trouvant dans thumbnail est au pluriel, cela manque de cohérence vs (image, program)
  - Le field name des programmes renvoient un lorum ipsum ne correspondant pas vraiment à la signature d'un titre de programmes, cela est perturbant.
