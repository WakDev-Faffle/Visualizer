# Document of the specified data structure (FR)

Ce document à pour but de définir et d'explique la structuration de donnée servant à structurer et simplifier les opérations de code javaScript permettant à faciliter, ou du moins, à mettre au point une traitement des donnèes plus stable et dynamique.

## Table des matières

- [Liste-d'élèment](#Liste-d'élèment)

## Liste d'élèment
- ## Définition :
  La Liste d'élèment permet de répertorier tout élèment qui doit apparraitre dans le DOM.  
  Sa particularité est qu'elle stocke les élèments en valeur textuelle sous un syntaxe spécifique.

- ## Exemples
  Ceci est une représentation d'une balise HTML sous la forme textuelle indiqué :<br>

      "div#id-unique.classe-commun>body"
    Cette chaîne de caractère interprète une balise `div`, enfant de la balise `body` , d'identifiant `id-unique` et de classe `classe-commun`.<br>

    Ces détails sont indiqués par des sélecteurs à motifs courtes pour permet une lisibilité simple rapide.<br>

    > [!NOTE]
    > Il s'agit d'un exemple utilisant une partie des sélecteurs disponibles. D'autres existes ou sont attendus pour une prochainement mise à jours.
- ## Liste de sélecteurs à motifs courtes

  **Sélecteurs de type :** Indique un nom d'élèment, natif ou non, HTML pour nommer le noeud à créer et à ajouter.<br>

  **Sélecteurs d'Id :** Représentés par un `#` suivi du nom de l'Id. ils permettent d'ajouter un seul par élèment.<br>

  **Sélecteurs de classes :** Représentés par un `.` suivi d'un nom, ils permettent d'ajouter un ou plusieurs classes par élèment.

  **Sélecteur `>` :** Indique le noeud parent dont lequel l'élèment cible sera ajouté.
  > [!NOTE]
  > l'élèment cible peut être ajouté que si un noeud existe ou a été précédemment. Par défaut, il sera ajouté à `<body>`

  **Sélecteurs d'attribut :** Représentès par deux crochets qui entourent le nom de l'attribut, un opérateur `=` et une valeur ; Ils permettent d'ajouter un ou plusieurs attributs. Il existe une liste de nom d'attribut raccourcie permettant une lisibilité plus courte :<br>
  
    | Noms raccourcies | élèments concernées | Définition
    | :-: | - | - 
    | `s` | Tous les élèments | Applique les déclarations CSS à l'èlèment :<br>`"[s=background:orangered;]..."`<br> <!--il n'est pas nécessaire d'englober les déclarations des guillemets `''`, `""` et ` `` `.-->
    | `w` et `h` | `<canvas>1`, `<embed>1`, `<iframe>1`, `<img>1`, `<input>1`, `<object>1`, `<video>1` | Définit la largeur et la hauteur occupé par l'élèment.<br> `"[w=300;h=150]..."`