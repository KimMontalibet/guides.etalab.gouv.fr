---
permalink: /annotation/
---

# Introduction

Le développement de solutions d'intelligence artificielle nécessite souvent de disposer de données dites **labélisées** ou **étiquetées**. Ces étiquettes ou labels servent à catégoriser les différentes données : on peut par exemple chercher à attribuer la catégorie "chien" ou "chat" à une photographie d'animal, ou encore chercher à attribuer une thématique à un article de presse : "sport", "politique", "économie", etc.

Dans beaucoup de projets, **ces ensembles de données labélisées ne sont pas consitués**. On ne dispose par exemple que de la base d'image seule, ou du corpus d'articles sans connaître leur thématique respective. Une phase d'annotation est alors nécessaire afin de construire un jeu de données labélisées, lequel permettra **d'entraîner un algorithme d'apprentissage supervisé** à effectuer cette tâche de catégorisation sur de nouveaux exemples, dont on ne connaitrait pas le label.

::: Lexique Annotation
L'annotation est la tâche manuelle (et donc humaine) qui consiste à attribuer à chaque élément d'un ensemble de données le label qui lui correspond. Les données à annoter peuvent prendre différentes formes : documents textuels, images, vidéos, fichiers audios, etc.
:::

Cette phase d'annotation, déterminante pour le succès d'un projet d'intelligence artificielle, est souvent complexe et coûteuse à mettre en place. 

## À quoi sert ce guide ?

Ce guide présente les différentes étapes d'un projet d'annotation, présente quelques outils d'annotations, et fournit des lignes directrices et recommandations pour le mener à bien. Il se concentre essentiellement sur l'annotation de documents textuels, mais beaucoup d'éléments se généraliseront facilement aux projets d'annotation d'autres types de documents. 


## À qui s'adresse ce guide ?

Ce guide s'adresse aux acteurs, publics ou privés, impliqués dans un projet d'intelligence artificielle nécessitant une phase d'annotation. Ce guide pourra intéresser aussi bien les profils non techniques tels que des chefs de projet ou assistants à maîtrise d'ouvrage que des profils techniques comme des développeurs, designers ou data scientists.

Nous le verrons dans la suite de ce guide, réussir une campagne d'annotation nécessite d'impliquer conjointement des profils techniques et des profils "métier". 


## Sommaire

Ce guide est composé de trois parties et d'un lexique :

- La [première partie](1-pourquoi-annoter.md) explicite dans quelles situations l'annotation est nécessaire et fournit quelques exemples de projets comportant une phase d'annotation. 
- La [deuxième partie](2-comment-annoter.md) détaille les différentes étapes d'un projet d'annotation et propose des lignes directrices pour la conduite d'un tel projet.
- La [troisième partie](3-les-logiciels-d'annotation.md) fournit un ensemble de critères clés pour sélectionner un logiciel d'annotation. Cette partie concerne uniquement les logiciels d'annotation de documents textuels. 
- Le [lexique proposé en annexe](4-lexique.md) propose les définitions de termes techniques utilisés de façon récurrente dans ce guide. 


## Comment contribuer ?

Ce document est un outil évolutif et ouvert. Vous pouvez contribuer à l'améliorer en proposant une modification sur [GitHub](https://github.com/etalab/guides.etalab.gouv.fr/edit/master/annotation/) ou en [contactant directement](mailto:lab-ia@data.gouv.fr) l'équipe du Lab IA d'Etalab. 

## Ressources externes 

- Un ouvrage collectif sur l'annotation lingustistique : *Handbook of Linguistic Annotation*, Springer, 2017.
- Un sondage sur les logiciels d'annotation consultable [ici](https://github.com/alvations/annotate-questionnaire).
- Un [benchmark de 78 outils d'annotation](https://academic.oup.com/bib/article/doi/10.1093/bib/bbz130/5670958#190144135 ) avec de nombreux de critères pris en compte.
