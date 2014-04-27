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
