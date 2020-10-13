(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{425:function(e,t,s){"use strict";s.r(t);var r=s(43),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"phase-de-construction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#phase-de-construction"}},[e._v("#")]),e._v(" Phase de construction")]),e._v(" "),s("div",{staticClass:"lexique"},[s("p",{staticClass:"title"},[e._v("Lexique : Phase de construction")]),s("p",[e._v("La phase de construction consiste à implémenter techniquement le schéma de données obtenu après la phase de concertation. Pour cela, il est nécessaire de choisir un standard technique, créer les fichiers requis, les tester et les diffuser.")])]),s("p",[e._v("Durant cette phase, vous devez mobiliser des personnes possédant des compétences techniques. Cette phase consiste à transcrire les décisions prises lors de la phase de concertation pour un schéma de données.")]),e._v(" "),s("h2",{attrs:{id:"choisir-un-standard-technique-pour-la-description-de-votre-schema-de-donnees"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#choisir-un-standard-technique-pour-la-description-de-votre-schema-de-donnees"}},[e._v("#")]),e._v(" Choisir un standard technique pour la description de votre schéma de données")]),e._v(" "),s("div",{staticClass:"lexique"},[s("p",{staticClass:"title"},[e._v("Lexique : Standard")]),s("p",[e._v("On utilise les termes « normes » et « standards » pour décrire un référentiel commun et documenté destiné à harmoniser l’activité d’un secteur.")])]),s("p",[e._v("Il existe plusieurs standards techniques pour les schémas de données. Le standard est à choisir en fonction de la nature des données concernées et des habitudes de l’écosystème produisant ou réutilisant les données liées au schéma.")]),e._v(" "),s("p",[e._v("Les principaux standards techniques sont les suivants :")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://frictionlessdata.io/specs/table-schema/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Table Schema"),s("OutboundLink")],1),e._v(" : adapté pour la description de données tabulaires (sous forme de tableurs ou de CSV). Ce standard technique utilise le format JSON")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://json-schema.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Schema"),s("OutboundLink")],1),e._v(" : adapté pour la description de données avec une notion de hiérarchie. Ce standard utilise le format JSON")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.w3.org/TR/xmlschema11-1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("XML Schema Definition (XSD)"),s("OutboundLink")],1),e._v(" : adapté pour la description de données avec une notion de hiérarchie. Ce standard utilise le format XML")])]),e._v(" "),s("p",[e._v("Notez que tous ces standards techniques sont supportés par "),s("a",{attrs:{href:"https://schema.data.gouv.fr",target:"_blank",rel:"noopener noreferrer"}},[e._v("schema.data.gouv.fr"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Aller au-delà de la documentation texte")]),e._v(" "),s("p",[e._v("Un schéma de données décrit uniquement par du texte ou par un tableau se prive de nombreux avantages, notamment celui de l'interopérabilité entre différents systèmes informatiques.")]),e._v(" "),s("p",[e._v("Les schémas de données décrits par des standards techniques permettent, en plus d’une documentation textuelle ou sous forme d’un tableau, de valider que des données correspondent à un modèle de données, d’agréger des données similaires, de générer automatiquement des données respectant un schéma.")])]),e._v(" "),s("h2",{attrs:{id:"creer-votre-schema-de-donnees"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creer-votre-schema-de-donnees"}},[e._v("#")]),e._v(" Créer votre schéma de données")]),e._v(" "),s("p",[e._v("Une fois un standard technique choisi, il faudra créer les fichiers requis pour modéliser vos données. La documentation de chaque standard technique décrit le contenu des fichiers à renseigner. Reportez-vous aux documentations respectives pour tirer parti des fonctionnalités avancées offertes : types de données et contraintes sur les valeurs en particulier.")]),e._v(" "),s("p",[e._v("Il est souvent possible de vérifier qu’un fichier correspond à un standard à l’aide d’outils en ligne ou en ligne de commande. Utilisez ces outils pour vérifier que vos productions correspondent au standard.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Exemples à votre disposition")]),e._v(" "),s("p",[e._v("Pour un schéma au format Table Schema, nous mettons à votre disposition "),s("a",{attrs:{href:"https://github.com/etalab/tableschema-template",target:"_blank",rel:"noopener noreferrer"}},[e._v("un modèle de départ"),s("OutboundLink")],1),e._v(" pour créer un dépôt Git contenant un schéma au format Table Schema.")]),e._v(" "),s("p",[e._v("Pour les autres formats de schémas, nous vous recommandons de consulter les schémas et dépôts Git listés sur "),s("a",{attrs:{href:"https://schema.data.gouv.fr",target:"_blank",rel:"noopener noreferrer"}},[e._v("schema.data.gouv.fr"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"documenter-votre-schema-de-donnees"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#documenter-votre-schema-de-donnees"}},[e._v("#")]),e._v(" Documenter votre schéma de données")]),e._v(" "),s("p",[e._v("En complément du fichier du schéma de données, nous vous conseillons de rédiger a minima deux documents complémentaires :")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("une documentation générale")]),e._v(" : vous indiquerez le contexte, les modalités de production des données, le cadre juridique, la finalité, les cas d’usage etc. Ce fichier est traditionnellement rédigé en Markdown et nommé "),s("code",[e._v("README.md")]),e._v(" ;")]),e._v(" "),s("li",[s("strong",[e._v("un fichier répertoriant les changements")]),e._v(" : permettant de suivre les modifications, d’une version à une autre. Ce fichier est traditionnellement rédigé en Markdown et nommé "),s("code",[e._v("CHANGELOG.md")]),e._v(".")])]),e._v(" "),s("p",[e._v("La présence de ces fichiers représente un package complet (documentation, liste des changements et schéma de données décrit dans un standard technique), apprécié des réutilisateurs. "),s("a",{attrs:{href:"https://schema.data.gouv.fr",target:"_blank",rel:"noopener noreferrer"}},[e._v("schema.data.gouv.fr"),s("OutboundLink")],1),e._v(" se repose sur ces éléments pour intégrer votre documentation et votre liste de changements sur une page web.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Exemples à votre disposition")]),e._v(" "),s("p",[e._v("Vous pouvez consulter "),s("a",{attrs:{href:"https://github.com/etalab/schema-stationnement/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("la documentation"),s("OutboundLink")],1),e._v(" et "),s("a",{attrs:{href:"https://github.com/etalab/schema-stationnement/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("la liste des changements"),s("OutboundLink")],1),e._v(" du schéma des lieux de stationnement.")])]),e._v(" "),s("h2",{attrs:{id:"publier-et-diffuser-votre-schema-de-donnees"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publier-et-diffuser-votre-schema-de-donnees"}},[e._v("#")]),e._v(" Publier et diffuser votre schéma de données")]),e._v(" "),s("p",[e._v("Une fois votre schéma de données créé, il est nécessaire de le publier et de le diffuser pour que d’autres personnes puissent en bénéficier. Nous vous recommandons de publier vos schémas de données en tant que logiciels libres, sur votre forge de développement ou par le biais de "),s("a",{attrs:{href:"https://about.gitlab.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitLab"),s("OutboundLink")],1),e._v(" ou "),s("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Vous bénéficierez alors des avantages habituels des dépôts de code Git en ligne : historique des modifications, fonctionnalités de tickets ou de demandes de modifications. Utilisez un compte d’organisation (dédié à votre entreprise, direction, service, ministère) et non votre compte personnel afin d’assurer une URL stable dans le temps.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Exemples à votre disposition")]),e._v(" "),s("p",[e._v("Vous trouverez plusieurs dépôts Git de schémas sur "),s("a",{attrs:{href:"https://schema.data.gouv.fr",target:"_blank",rel:"noopener noreferrer"}},[e._v("schema.data.gouv.fr"),s("OutboundLink")],1),e._v(". Consultez par exemple "),s("a",{attrs:{href:"https://github.com/etalab/schema-stationnement",target:"_blank",rel:"noopener noreferrer"}},[e._v("le dépôt Git décrivant les lieux de stationnement"),s("OutboundLink")],1),e._v(" à l’aide d’un schéma TableSchema sur GitHub.")])]),e._v(" "),s("h2",{attrs:{id:"referencer-votre-schema-de-donnees-sur-schema-data-gouv-fr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#referencer-votre-schema-de-donnees-sur-schema-data-gouv-fr"}},[e._v("#")]),e._v(" Référencer votre schéma de données sur schema.data.gouv.fr")]),e._v(" "),s("p",[e._v("Pour faciliter la découverte de votre schéma de données et des données sous-jacentes, nous vous recommandons de le faire référencer sur "),s("a",{attrs:{href:"https://schema.data.gouv.fr",target:"_blank",rel:"noopener noreferrer"}},[e._v("schema.data.gouv.fr"),s("OutboundLink")],1),e._v(". Nous avons rédigé "),s("RouterLink",{attrs:{to:"/producteurs-schemas/4-integration-schema-datagouv.html"}},[e._v("une page dédiée")]),e._v(" à ce sujet décrivant les plus-values, prérequis et démarches à suivre.")],1),e._v(" "),s("h2",{attrs:{id:"faire-evoluer-votre-schema-de-donnees"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faire-evoluer-votre-schema-de-donnees"}},[e._v("#")]),e._v(" Faire évoluer votre schéma de données")]),e._v(" "),s("p",[e._v("Une fois votre schéma de données défini et implémenté, le travail ne s’arrête pas là. Au-delà du besoin de diffusion et de promotion, il est probable que vous deviez faire des modifications : clarifications de la documentation, corrections d’erreurs, évolutions du cadre réglementaire, etc. Autant de raisons où il est nécessaire de mettre en œuvre une nouvelle version.")]),e._v(" "),s("p",[e._v("Posséder un dépôt Git pour votre schéma de données vous permettra d’avoir plusieurs versions et tags. Notez que "),s("a",{attrs:{href:"https://schema.data.gouv.fr",target:"_blank",rel:"noopener noreferrer"}},[e._v("schema.data.gouv.fr"),s("OutboundLink")],1),e._v(" supporte plusieurs versions pour un même schéma de données et affiche les modifications effectuées au fur et à mesure, dès lors que ces modifications sont renseignées dans un fichier dédié.")]),e._v(" "),s("h2",{attrs:{id:"points-de-sortie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#points-de-sortie"}},[e._v("#")]),e._v(" Points de sortie")]),e._v(" "),s("p",[e._v("À l’issue de cette phase, vous devriez :")]),e._v(" "),s("ul",[s("li",[e._v("Avoir implémenté votre schéma de données dans un des standards reconnus ;")]),e._v(" "),s("li",[e._v("Avoir publié votre travail en ligne, dans un répetoire Git dédié ;")]),e._v(" "),s("li",[e._v("Avoir pris contact avec les équipes de schema.data.gouv.fr dans le but de référencer votre schéma de données si nécessaire.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);