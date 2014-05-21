MongoDB Workshop
================

This repository contains sources and documents allowing your to learn MongoDB.

This application use a dataset created using the [Marver Developer API](https://developer.marvel.com/). 

## Using the Marvel Importer
The Marvel Importer is located in the *./data-importer* folder. The importer is a Node.js application that calls the Marvel API, transforms the data and insert them into MongoDB.


### How to use the importer

If you want to run the importer yourself you must create your Marvel Developer Network Keys, and insert them in the *marvel.js* file.

Import characters, comics and creators:

`node marvel.js`

Import only 1 type of documents

`node marvel.js |characters|comics|creators|series|events`

Import everything

`node marvel.js complete`


Note: [All Data provided by Marvel. © 2014 MARVEL](http://marvel.com)


## Importing the dump

If you don't want to use the Marvel importer, you can directly import a dump located in the *./data* folder.

Fisrt unzip the *comics.zip* archive and then run the `mongorestore` command :

`mongorestore -d comics ./data/comics`

You can also import the data from the *geo.zip* archive :

`mongorestore -d geo ./data/geo`


## Using the Node.js application

Prerequisites :

* [NodeJS](http://nodejs.org/)

Check your installation by running

`node -v` and `npm -v`

First of all, you need to download the application dependencies

`npm install`

To run the unit tests :

`npm test`

To run the application :

`npm start` and then go to http://localhost:3000

By default, the application uses the port 3000. You can change it by setting the PORT environment variable :

`PORT=8080 npm start`

By default, the application uses the default mongodb port (27017). You can change it by setting the MONGO_URL envirinment variable :

`MONGO_URL=mongodb://localhost:50000/comics npm start`

