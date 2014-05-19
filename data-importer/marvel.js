var api = require('marvel-api');
var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;
var charactersCollection, 
	creatorsCollection, 
	comicsCollection,
	eventsCollection,
	seriesCollection,
	storiesCollection;
	
var database = undefined;

var marvel = api.createClient({
  publicKey: 'YOUR_PUBLIC_KEY'
, privateKey: 'YOUR_PRIVATE_KEY'
});


function getIdFromURI(type, uri) {
	var commonURI = "http://gateway.marvel.com/v1/public/"+ type;
	return Number( uri.substring( commonURI.length + 1 ) );
}

function addIdToItems(types, object) {
	for (var i in types) {
		type = types[i];
		if (object[type]) {
			itemsToCheck = object[type];
			if (itemsToCheck) {
				for (var j in itemsToCheck.items) {
  	  	  	  	  var item = itemsToCheck.items[j];
		  			resourceURI = item.resourceURI;
		  			itemsToCheck.items[j].id = getIdFromURI(type, resourceURI);
    			}
			}
		}
	}
}


/*
 * return the number of page for 100 record by pages
 */
function numberOfPages(results) {
	var totalDocs = results.meta.total;
	console.log( "... ready to load "+ totalDocs +" documents." );
	return  Math.round(totalDocs / 100)+1;
}




function getDocuments( err, results, attributesToRemove, docType, db ) {
  if (err) {
    return console.error(err);
  }
  var data = results.data;
  for (var idx in results.data) {
	  var doc = data[idx];
	  // rename id
	  doc._id = doc.id;
	  delete doc.id;

  	  for (var attIdx in attributesToRemove) {
		  attribute = attributesToRemove[attIdx];
		  delete doc[attribute];
	  }

	  // convert all dates
	  if (doc.modified) {
		  doc.modified = new Date(  doc.modified );
	  }
	  if (doc.dates) {
	  	var newDates = [];
		var originalDates = doc.dates;
	  	for ( var dateIdx in originalDates ) {
	  		var entry = new Object();
	  		entry.type = originalDates[dateIdx].type;
	  		entry.date = new Date( originalDates[dateIdx].date );
	  		newDates.push(entry)
	  	}
	  	doc.dates = newDates;
	  }
	  
	  
	  var types = ["series","stories","comics", "events"];
	  addIdToItems(types, doc)
	  
	  database.collection(docType).insert( doc , function(err){ if (err){ console.log(err.code) } } );
  }
  console.log("\t.. loading "+ docType +": "+ limit );
	
}


/** == == == == ==  CHARACTERS == == == == == == **/


/*
 * insert all characters
 * using 100 characters by page
 */
function insertCharacter(numberOfPages, attributesToRemove) {
	for (var i=0; i<numberOfPages; i++ ) {
		limit = 100;
		offset = i*limit;
		marvel.characters.findAll(limit, offset, function(err, results) {
			getDocuments(err, results, attributesToRemove, "characters");
		});
	}	
}

/*
 * Import all characters
 */
function importCharacters(attributesToRemove){
	marvel.characters.findAll(1,0)
	  	.then(
			function(results) { 
				return numberOfPages(results);
		 } )
	 	  	.then( function(numberOfPages) {
			insertCharacter(numberOfPages, attributesToRemove)
		})
	  	.fail(console.error)
	  	.done();
}





/** == == == == ==  Creators == == == == == == **/

function insertCreators(numberOfPages, attributesToRemove) {
	for (var i=0; i<numberOfPages; i++ ) {
		limit = 100;
		offset = i*limit;
		marvel.creators.findAll(limit, offset, function(err, results) {
			 getDocuments(err, results, attributesToRemove, "creators");
		});
	}	
}

function importCreators(attributesToRemove) {
	marvel.creators.findAll(1,0)
	  	.then(
			function(results) {
				return numberOfPages(results);
		 } )
	 	  	.then( function(numberOfPages) {
			insertCreators(numberOfPages, attributesToRemove)
		})
	  	.fail(console.error)
	  	.done();	
}

/** == == == == == == == COMICS == == == == == == == **/

function insertComics(numberOfPages, attributesToRemove) {
	for (var i=0; i<numberOfPages; i++ ) {
		limit = 100;
		offset = i*limit;
		marvel.comics.findAll(limit, offset, function(err, results) {
			getDocuments(err, results, attributesToRemove, "comics");
		});
	}	
}


function importComics(attributesToRemove) {
	marvel.comics.findAll(1,0)
	  	.then(
			function(results) {
				return numberOfPages(results);
		 } )
	 	  	.then( function(numberOfPages) {
			insertComics(numberOfPages, attributesToRemove)
		})
	  	.fail(console.error)
	  	.done();		
	
}


/** == == == == == == == EVENTS == == == == == == == **/

function insertEvents(numberOfPages, attributesToRemove) {
	for (var i=0; i<numberOfPages; i++ ) {
		limit = 100;
		offset = i*limit;
		marvel.events.findAll(limit, offset, function(err, results) {
			getDocuments(err, results, attributesToRemove, "events");
		});
	}	
}


function importEvents(attributesToRemove) {
	marvel.events.findAll(1,0)
	  	.then(
			function(results) {
				return numberOfPages(results);
		 } )
	 	  	.then( function(numberOfPages) {
			insertEvents(numberOfPages, attributesToRemove)
		})
	  	.fail(console.error)
	  	.done();		
	
}


/** == == == == == == == SERIES == == == == == == == **/
function insertSeries(numberOfPages, attributesToRemove) {
	for (var i=0; i<numberOfPages; i++ ) {
		limit = 100;
		offset = i*limit;
		marvel.series.findAll(limit, offset, function(err, results) {
			getDocuments(err, results, attributesToRemove, "series");
		});
	}	
}

function importSeries(attributesToRemove) {
	marvel.series.findAll(1,0)
	  	.then(
			function(results) {
				return numberOfPages(results);
		 } )
	 	  	.then( function(numberOfPages) {
			insertSeries(numberOfPages,attributesToRemove)
		})
	  	.fail(console.error)
	  	.done();		
	
}


/** == == == == == == == STORIES == == == == == == == **/
function insertStories(numberOfPages, attributesToRemove) {
	for (var i=0; i<numberOfPages; i++ ) {
		limit = 100;
		offset = i*limit;
		marvel.stories.findAll(limit, offset, function(err, results) {
			getDocuments(err, results, attributesToRemove, "stories");
		});
	}	
}

function importStories(attributesToRemove) {
	marvel.stories.findAll(1,0)
	  	.then(
			function(results) {
				return numberOfPages(results);
		 } )
	 	  	.then( function(numberOfPages) {
			insertStories(numberOfPages, attributesToRemove)
		})
	  	.fail(console.error)
	  	.done();		
	
}


/** == == == == == == == MAIN == == == == == == == **/


MongoClient.connect("mongodb://localhost:27017/comics", function(err, db) {
	

	
	database = db;
	var type = process.argv[2];
	var attributesToRemove = [];
	
	if (type == undefined) {
		type = "light";
	}
	
	if (type != "complete") {
		attributesToRemove.push("events");
		attributesToRemove.push("series");
		attributesToRemove.push("stories");
	}
	
	
	if ( type == "characters" || type == "complete" || type == "light" ) {
		importCharacters(attributesToRemove);
	}
	
	if ( type == "creators" || type == "complete" || type == "light" ) {
		importCreators(attributesToRemove);
	}
	
	if ( type == "comics" || type == "complete" || type == "light" ) {
		importComics(attributesToRemove);
	}
		
	if (type == "complete") {
		eventsCollection = db.collection("events");
		importEvents(attributesToRemove);
	}
	
	if (type == "complete") {
		seriesCollection = db.collection("series");
		importSeries(attributesToRemove);
	}
	
	if (type == "complete") {
		storiesCollection = db.collection("stories");
		importStories(attributesToRemove);
	}
	
});


// marvel.characters.findAll()
//   .then(console.log)
//   .fail(console.error)
//   .done();

