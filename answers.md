git 

Quel est l'intérêt de commiter régulièrement et de manière atomique ?
Pouvoir  identifier les changements et les erreurs lors d'un projet et éventuelement revenir en arrière;

A quoi sert une branche de type feature dans un développement logiciel de type git flow ?
la branche features sert à rajouter les fonctionnalités d'un projet, par exemple un nouveau bouton sur un site web.

Quelle est la différence entre une branche main et une branche develop ?
La branche main stocke l'historique officiel des versions, et la branche develop sert de branche d'intégration des différentes features.

Quelle est la différence entre git add, git commit et git push ?
git add va rajouter des fichiers qui doivent etre commiter, ils peuvent etre écraser par un autre fit add, le git commit valide ce changements en local et le git push va stocker ses changements dans la branche en ligne sur github.

github

Quel est l'intérêt d'une protection de branche ?
Une protection de branche permet d'empecher les push qui n'ont pas remplie certaines conditions ou qui n'ont pas eu d'autorisation. elle permet de préserver certaines branches et d'empecher de push une version du projet qui ne fonctionne pas par exemple.

Quel est l'intérêt d'une pull request ?
Une pull request permet de ramener en local toutes les modification qui on été pusher dans les branches, elle permet entre autre de s'assurer que l'on est bien sur la même version du projet en local et en github en ecrasant les données locales.

versionning

Dans quel cas passer d'une version 1.0.0 à 1.0.1 ?
Après avoir résolu un bug.

Dans quel cas passer d'une version 1.0.0 à 1.1.0 ?
Après avoir éffectué une mise à jour/ amélioration du projet via plusieurs fonctionnalité, pour pouvoir faire une release de notre projet qui partira en production.

A quoi sert une version release candidate ?
c'est une version quasi finale de l'application permet de confronter le projet aux attentes de l'utilisateur.


test

Quel est l'intérêt des tests unitaires ?
Tester de manière individiuelle chaque composant de notre projet.