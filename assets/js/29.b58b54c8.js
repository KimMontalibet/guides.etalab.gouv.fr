(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{407:function(e,t,n){"use strict";n.r(t);var s=n(43),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"lexique-des-termes-techniques"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lexique-des-termes-techniques"}},[e._v("#")]),e._v(" Lexique des termes techniques")]),e._v(" "),n("p",[e._v("Dans cette annexe, nous recensons les définitions des termes techniques utilisés dans ce guide.")]),e._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#active-learning"}},[e._v("Active learning")])]),n("li",[n("a",{attrs:{href:"#annotation"}},[e._v("Annotation")])]),n("li",[n("a",{attrs:{href:"#apprentissage-supervise"}},[e._v("Apprentissage supervisé")])]),n("li",[n("a",{attrs:{href:"#docker"}},[e._v("Docker")])]),n("li",[n("a",{attrs:{href:"#donnees-tabulaires"}},[e._v("Données tabulaires")])]),n("li",[n("a",{attrs:{href:"#donnees-non-structurees"}},[e._v("Données non structurées")])]),n("li",[n("a",{attrs:{href:"#format-conll"}},[e._v("Format CoNLL")])]),n("li",[n("a",{attrs:{href:"#jeu-de-donnees-d-apprentissage-et-jeu-de-donnees-de-test"}},[e._v("Jeu de données d'apprentissage et jeu de données de test")])]),n("li",[n("a",{attrs:{href:"#librairie-code"}},[e._v("Librairie (code)")])]),n("li",[n("a",{attrs:{href:"#moteur-de-regles"}},[e._v("Moteur de règles")])]),n("li",[n("a",{attrs:{href:"#pre-annotation"}},[e._v("Pré-annotation")])]),n("li",[n("a",{attrs:{href:"#pseudonymisation"}},[e._v("Pseudonymisation")])]),n("li",[n("a",{attrs:{href:"#reconnaissance-d-entites-nommees"}},[e._v("Reconnaissance d'entités nommées")])]),n("li",[n("a",{attrs:{href:"#traitement-automatique-du-langage-ou-traitement-du-langage-naturel"}},[e._v("Traitement automatique du langage ou traitement du langage naturel")])])])]),n("p"),e._v(" "),n("h3",{attrs:{id:"active-learning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#active-learning"}},[e._v("#")]),e._v(" Active learning")]),e._v(" "),n("p",[e._v("L'active learning est un champ de l'apprentissage automatique qui fait interagir l'algorithme d'apprentissage avec le système en charge de la labélisation (l'annotateur dans notre cas). Cette méthode est particulièrement utile dans les situations où l'obtention de labels est coûteuse. Au fur et à mesure de l'annotation, l'algorithme va apprendre à prioriser les documents à faire annoter afin de maximiser le gain d'information de la nouvelle donnée annotée, et ainsi permettre de minimiser le nombre de documents nécessaires pour entraîner un algorithme avec de bonnes performances.")]),e._v(" "),n("h3",{attrs:{id:"annotation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#annotation"}},[e._v("#")]),e._v(" Annotation")]),e._v(" "),n("p",[e._v("L'annotation est la tâche qui consiste à attribuer à chaque donnée le label qui lui correspond. Par exemple, à attribuer le label « chien » ou « chat » à une base de photographies d'animaux. Ou encore à attribuer le label correct entre « nom », « prénom », « adresse », « date » ou « aucun » à chacun des mots d'un document. On distinguera "),n("strong",[e._v("l'annotation manuelle")]),e._v(", lorsque cette tâche est effectuée par un humain, de "),n("strong",[e._v("l'annotation automatique")]),e._v(", lorsque cette tâche est effectuée par un programme informatique.")]),e._v(" "),n("h3",{attrs:{id:"apprentissage-supervise"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apprentissage-supervise"}},[e._v("#")]),e._v(" Apprentissage supervisé")]),e._v(" "),n("p",[e._v("L'apprentissage supervisé est une tâche d'apprentissage automatique qui consiste à partir d'exemples labélisés, à trouver une fonction permettant d'attribuer un label à chaque exemple à partir d'un ensemble de caractéristiques (variables ou "),n("em",[e._v("features")]),e._v("). Cette fonction pourra être appliquée à de nouveaux exemples non labélisés afin de leur attribuer une prédiction du label. L'apprentissage non supervisé, par opposition, a pour objectif de déterminer des structures sous-jacentes à un ensemble de données non-labélisées (regroupement d'exemples similaires ou détection d'anomalies par exemple).")]),e._v(" "),n("h3",{attrs:{id:"docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),n("OutboundLink")],1),e._v(" est un logiciel libre permettant de lancer des applications dans des conteneurs logiciels. Il permet ainsi de faciliter le déploiement d'une application sur un serveur.")]),e._v(" "),n("h3",{attrs:{id:"donnees-tabulaires"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#donnees-tabulaires"}},[e._v("#")]),e._v(" Données tabulaires")]),e._v(" "),n("p",[e._v("Un jeu de données tabulaire se présente sous forme d'un tableau dont les lignes sont des entrées et les colonnes des catégories d'information. Par exemple, un tableur CSV ou une base SQL dans lesquels chaque ligne correspond à un individu et chaque colonne à ses caractéristiques propres (nom, âge, profession, etc.). Les données tabulaires sont des données structurées.")]),e._v(" "),n("h3",{attrs:{id:"donnees-non-structurees"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#donnees-non-structurees"}},[e._v("#")]),e._v(" Données non structurées")]),e._v(" "),n("p",[e._v("À l'inverse des données tabulaires, les données non structurées sont des données qui ne sont pas stockées sous un format prédéfini et où l'information est donc plus dispersée. Cela recouvre par exemple le texte libre comme des documents administratifs, des lettres, des décisions de justice, mais aussi des images, des enregistrement sonores, des vidéos, etc.")]),e._v(" "),n("h3",{attrs:{id:"format-conll"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#format-conll"}},[e._v("#")]),e._v(" Format CoNLL")]),e._v(" "),n("p",[e._v("Le format CoNLL, pour « Conference on Natural Language Learning », est un format général, dont il existe de nombreuses versions et déclinaisons, couramment employé pour les tâches de traitement automatique du langage naturel. Il décrit des données textuelles sous forme de colonne selon un nombre d'attributs : catégorie d'entité nommée, nature grammaticale, etc. Il permet ainsi de stocker un texte "),n("a",{attrs:{href:"#annotation"}},[e._v("annoté")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"jeu-de-donnees-d-apprentissage-et-jeu-de-donnees-de-test"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jeu-de-donnees-d-apprentissage-et-jeu-de-donnees-de-test"}},[e._v("#")]),e._v(" Jeu de données d'apprentissage et jeu de données de test")]),e._v(" "),n("p",[e._v("Afin de développer un modèle d'apprentissage supervisé, un jeu de données labélisées est nécessaire. Ce jeu de données est alors divisé en deux (en général par un échantillonnage aléatoire) : un jeu de données d'apprentissage et un jeu de données de test. Le "),n("strong",[e._v("jeu d'apprentissage")]),e._v(", comme son nom l'indique, est utilisé pendant la phase d'apprentissage, afin de trouver une fonction qui permette de prédire le label à partir des variables en entrée. Afin de s'assurer que l'algorithme ait de bonnes performances sur des exemples différents de ceux utilisés lors de la phase d'apprentissage, les différentes métriques de performance de l'algorithme (justesse, précision, rappel, ...) sont calculées sur le "),n("strong",[e._v("jeu de données de test")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"librairie-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#librairie-code"}},[e._v("#")]),e._v(" Librairie (code)")]),e._v(" "),n("p",[e._v("En informatique, une librairie, aussi appelée « bibliothèque de code » ou « package », est un ensemble de code prêt à l'usage qui peut être facilement importé et réutilisé par un utilisateur pour que celui-ci n'ait besoin de réécrire ces portions de code. Par exemple, la librairie « "),n("a",{attrs:{href:"https://www.nltk.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NLTK"),n("OutboundLink")],1),e._v(" » sous Python permet d'utiliser tout un ensemble de méthode pour pré-traiter des données textuelles. Les librairies permettent ainsi un énorme gain de temps en évitant que de nombreux développeurs ne codent des portions de code identiques chacun de leur côté.")]),e._v(" "),n("h3",{attrs:{id:"moteur-de-regles"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#moteur-de-regles"}},[e._v("#")]),e._v(" Moteur de règles")]),e._v(" "),n("p",[e._v('Un moteur de règles est un ensemble de règles prédéfinies « à l\'avance ». Par exemple, une règle de pseudonymisation pourrait être « si le mot qui suit "Monsieur" ou "Madame" commence par une majuscule, alors ce mot est un prénom ». La complexité du langage naturel et la diversité des formulations qui se trouvent dans les documents fait que ce type de moteur de règles a de fortes chances de faire beaucoup d\'erreurs dans des textes complexes, ou dont la forme varie souvent.')]),e._v(" "),n("h3",{attrs:{id:"pre-annotation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pre-annotation"}},[e._v("#")]),e._v(" Pré-annotation")]),e._v(" "),n("p",[e._v("La pré-annotation consiste à annoter de façon automatique les documents, afin que l’annotateur les vérifie, en les complétant ou en les corrigeant si nécessaire.")]),e._v(" "),n("h3",{attrs:{id:"pseudonymisation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pseudonymisation"}},[e._v("#")]),e._v(" Pseudonymisation")]),e._v(" "),n("p",[e._v("Le "),n("a",{attrs:{href:"https://www.cnil.fr/fr/lanonymisation-des-donnees-un-traitement-cle-pour-lopen-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("guide de la CNIL sur l'anonymisation des données"),n("OutboundLink")],1),e._v(" définit l'anonymisation comme « un traitement de données personnelles réalisé de manière à ce qu'on ne puisse plus attribuer les données relatives à une personne physique sans avoir recours à des informations supplémentaires. En pratique la pseudonymisation consiste à remplacer les données directement identifiantes (nom, prénom, etc.) d’un jeu de données par des données indirectement identifiantes (alias, numéro dans un classement, etc.) ».")]),e._v(" "),n("h3",{attrs:{id:"reconnaissance-d-entites-nommees"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reconnaissance-d-entites-nommees"}},[e._v("#")]),e._v(" Reconnaissance d'entités nommées")]),e._v(" "),n("p",[e._v("La reconnaissance d'entités nommées, ou "),n("em",[e._v("Named Entity Recognition")]),e._v(" (NER) en anglais, est une tâche d'apprentissage supervisée où les données d'entrées sont chacun des mots d'un document et le label qu'on leur attribue est une catégorie sémantique à laquelle il se rattache : par exemple « verbe », « adjectif » ou « adverbe » dans un cas général et « nom », « prénom », « adresse », « date » pour une tâche de pseudonymisation.")]),e._v(" "),n("h3",{attrs:{id:"traitement-automatique-du-langage-ou-traitement-du-langage-naturel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#traitement-automatique-du-langage-ou-traitement-du-langage-naturel"}},[e._v("#")]),e._v(" Traitement automatique du langage ou traitement du langage naturel")]),e._v(" "),n("p",[e._v("Le traitement automatique du langage (TAL), aussi connu sous l'acronyme « NLP » pour "),n("em",[e._v("Natural Language Processing")]),e._v(", désigne le domaine de l'intelligence artificielle qui s'intéresse au texte. Il regroupe plusieurs grands types de tâches, comme la reconnaissance d'entités, les agents conversationnels, la classification de documents, le question-answering, etc.")])])}),[],!1,null,null,null);t.default=a.exports}}]);