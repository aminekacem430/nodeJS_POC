installer nodejs version 20 de puis le site web officiel 

aprés installation vous pouvez tester la verison avec la commande dans CMD windows

node --version

pour initialiser un projet nodejs de zéro ,on peux lancer depuis le dossier racine du projet la commande: 
npm init -y 

ceci va nous créer le ficheir package.json qui contien tous les dependances avec leurs verisons.

pour installer les module/dépendances necessaire on va lancer 

npm install pg express 

pg ==>postgresql 
express=> Express.js

le fichier server.js est celui contenant les info lié au serveur qui sera lancé (c'est la page index du projet 'server entrypoint')

pour lancer le serveur node on utilise la commande 
node server.js

le fichier db.js et config.js contiennent les configs de la DB 
le fichier users.route.js contient les mapping de tous les web service rest qu'on va crée dans le controller 
le fichier user.controller.js contient tous le business logic qui est derère chaque web service rest 
le fichier callApiRest.rest est un fichier de test des api , il agit comme un raccourci pour lancer les WS à la place de POSTMAN , on peux l'ouvrir dans un editeur de code comme VSCode aprés installer le  module 'rest client' pour pouvoir lancer directement des requete http selon les WS qu'on montionne
exemple du WS qui initialise la DB (créer une base des données et une table users ) : 
http://localhost:3000/api/user/setupdb
exemple du WS qui recupère tous les utilisateurs de la table users : 
http://localhost:3000/api/user/getall
