<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MongoDB Workshop</title>

    <!-- Bootstrap -->
    <link href="./assets/css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>


    <div class="container">

    <div class="jumbotron">
      <h1>MongoDB Workshop</h1>
      <p>Discover MongoDB, execute queries in the shell, build an app!</p>
    </div>



    <h1>MongoDB Basic Operations</h1>
	  <section id="installation">
	      <h2>MongoDB Installation</h2>

        In this section you will learn how to install MongoDB and start it.

	  	  <ul style="list-style: decimal;">
            <li>Decompress MongoDB, or run the installer<br/></li>
            <li>Go to the MongoDB bin directory or put in your $PATH<br/></li>
	  	  		<li>Create a data directory to store the data files
	  	  		<div><code>mkdir -p ./data/db</code></div>
            <i>(Adapt to your environment)</i>
            <br/></li>
	  	  		<li>Start MongoDB server using the <code>mongod</code> executable<br/></li>
	  	  		<code>mongod --dbpath ./data/db</code>
	  	  </ul>
	  </section>


	  <section id="shell-intro">
	      <h2>Introduction to MongoDB Shell</h2>

        <div>
        The mongo shell is an interactive JavaScript shell for MongoDB.
        In this section you will learn how to launc the mongo shell and connect to your MongoDB instance, running on localhost with the default port (27017).
        Go in your MongoDB installation dir if it is not in your path.
        </div>


	  	  <ul style="list-style: decimal;">
	  	  		<li>Start the shell
              <div><code>./bin/mongo</code></div>
              <i>(be sure you keep the mongod process running)</i>
            <br/></li>

            <li>
              You are by default connected to the default database named 'test' and assigned to the variable db. Type the following commands in your shell:
              <pre>db

db.help()
              </pre>

            <br/>
            </li>


            <li>
              Switch to a new database:
              <pre>use workshop</pre>
            <br/>
            </li>


          <li>
            Insert a new document in the collection 'users'. (A collection contains many documents, this is the equivalent of an RDBMS table.)
            <pre>db.users.insert( {  "firstName" : "John" , "lastName" : "Doe" , "age" : 35    } );</pre>
          <br/>
          </li>


          <li>
            Find one document in the 'users' collection.
          <pre>db.users.findOne();</pre>
          As you can see the document has been created in the collection, with all the fields you have specified. The system (client/shell) automatically created an  <code>_id</code> field.
          The _id must be unique in the collection. You can manually specify it.
          <br/><br/>
          </li>



          <li>
          Create another document with the following attibutes<br/>
          _id : dsmith<br/>
          firstName : David<br/>
          lastName : Smith<br/>
          age : 45<br/><br/>

            <div><button class="button" onclick="$('#shell-sol-1').toggle();">Show/Hide Solution</button></div>
            <div id="shell-sol-1" style="display:none;" >
            <pre>db.users.insert( {"_id" : "dsmith", "firstName" : "David" , "lastName" : "Smith" , "age" : 45    } );</pre>
            </div>
            <br/>
            You can execute this insert multiple time to see how the database reacts when you are trying to insert multiple time the same <code>_id</code>.<br/>

          <br/>
          </li>


          <li>
          The mongo shell is a Javascript interpreter, this mean you can use any Javascript code to manipulate data.<br/><br/>
          <pre>
var user = db.users.findOne();

var message = "Hello, my name is " + user.firstName +" and I am "+ user.age;

message
          </pre>

          <br/>
          </li>

	  </section>



    <section id="installation">
      <h2>CRUD Operations</h2>

      In the previous section we have created 2 users and print one with the findOne() method, let's now do more with the data.<br/><br/>

      <ul style="list-style: decimal;">

      <li>Find by document id <br/>
        The find() method accepts 2 parameters, the first one is the criteria ('filter'), the second a projection of the fields.
        <pre>db.users.find( { "_id" : "dsmith" } );</pre>

        For example if you want to return only the lastName.
        <pre>db.users.find( { "_id" : "dsmith" } , {  "_id" : 0 , "lastName" : 1  });</pre>

      <br/><br/>

      </li>


      <li>Other queries <br/>
        You know how to query by <code>_id</code>, you just need to put the following document in the filter <code>{ "_id" : [value] }</code>.
        <br/><br/>

        How to find all the users with the first name equals to "John".
        <div><button class="button" onclick="$('#crud-sol-1').toggle();">Show/Hide Solution</button></div>
        <div id="crud-sol-1" style="display:none;" >
        <pre>db.users.find( { "firstName" : "John" }  );</pre>
        </div>

        <br/><br/>

        How to find all the users younger than 40. You need to use the <code>$lte</code> (less than or equal to ie &lt=) operator on the age field
        <div><button class="button" onclick="$('#crud-sol-2').toggle();">Show/Hide Solution</button></div>
        <div id="crud-sol-2" style="display:none;" >
        <pre>db.users.find( { "age" : { "$lte" : 40 } }  );</pre>
        </div>

      <br/><br/>

      </li>



      <li>Delete<br/>
        Remove some documents:
        <pre>db.users.remove( { "firstName" : "David" }  );</pre>
        Delete the collection:
        <pre>db.users.drop();</pre>
        <br/><br/>

      </li>



      <li>Create sample data <br/>
        Let's use Javascrip to create more data.
        <pre>
for (var i = 1 ; i <= 100 ; i++) {
  db.users.insert( { "firstName" : "First"+ i , "lastName" : "Last"+ i, "age" : (Math.floor(Math.random() * 50) + 20)    }   );
}
        </pre>
        <br/><br/>

      </li>


    <li>Update<br/>
      The update() method allows you to update document.
      <pre>db.users.update( { "age" : { "$gte" : 40 } } , { "$set" : { "category" : "Master" } } , {"multi" : true}  );</pre>

      As you can see we have updated a subset of the documents, and add a field to these documents. MongoDB with its documents is
      using a flexible schema approach. This mean you can change the number of attributes, and not all the document should have the same attributes.

      <br/><br/>
    </li>

    <li>Update : Labs<br/>
      Execute an update that takes all the users that are less then 26 and set them to the category "Junior" and add a list of skills to ["Java", "HTML", "CSS"]
      <div><button class="button" onclick="$('#crud-sol-3').toggle();">Show/Hide Solution</button></div>
      <div id="crud-sol-3" style="display:none;" >
        <pre>db.users.update( { "age" : { "$lte" : 25 } } , { "$set" : { "category" : "Junior" , "skills" : ["Java", "HTML", "CSS"]  } } , {"multi" : true}  );  </pre>
      </div>
      <br/>

      Find "Junior" look at the document, it should look like:
      <pre>
db.users.findOne( { category : "Junior" }  );
{
	"_id" : ObjectId("53788589e7e31ce53920da82"),
	"firstName" : "First3",
	"lastName" : "Last1",
	"age" : 23,
	"category" : "Junior",
	"skills" : [
		"Java",
		"HTML",
		"CSS"
	]
}
      </pre>


        <br/><br/>
    </li>

      </ul>

    </section>

    <section id="arrays">
      <h2>MongoDB and Arrays</h2>

	  One of the benefits of MongoDB is the fact that it is possible to embed complex data, arrays into a document.
	  For example in the users documents you can see we haved added the attribute <code>skills</code> with an array of String.<br/><br/>

      <ul style="list-style: decimal;">

		  <li>Query arrays values:<br/>
			  Find all users that have Java skill.
      			<div><button class="button" onclick="$('#array-sol-1').toggle();">Show/Hide Solution</button></div>
      		  	<div id="array-sol-1" style="display:none;" >
        			<pre>db.users.find( { "skills" : "Java"  } );  </pre>
      		  </div>
				<br/>
		  </li>


		  <li>Add new values to an array<br/>
			  Using the update method and $push add "oop" to all people having the "Java" skill
      			<div><button class="button" onclick="$('#array-sol-2').toggle();">Show/Hide Solution</button></div>
      		  	<div id="array-sol-2" style="display:none;" >
        			<pre>db.users.update( { "skills" : "Java"  } , { "$push" : { "skills" : "oop" } } , {"multi" : true}  );
					</pre>
      		  </div>
				<br/>
		  </li>


		  <li>Add new values (more)<br/>
			  Take the user named "First10", "Last10" and add reset the skills to "Cobol","Javascript", using the following command:
			  <pre>db.users.update( {"firstName" : "First10" , "lastName" : "Last10" } , { "$set" : {"skills": ["Cobol","Javascript"] }   }   );</pre>

			  Let's now add to the same user a new skill : "iOS" using the following command:
			  <pre>db.users.update( {"firstName" : "First10" , "lastName" : "Last10" } , { "$push" : { "skills" : "ios" }  }   );</pre>

			  Look at the result using a find
  			 <pre>db.users.find( {"firstName" : "First10" , "lastName" : "Last10" }  ).pretty();</pre>

			  What happens if you run the following command multiple time?
			  <pre>db.users.update( {"firstName" : "First10" , "lastName" : "Last10" } , { "$push" : { "skills" : "ios" }  }   );</pre>


			  The <code>$push</code> add new item in the Javascript array, if you want to be sure that you add an element only if it does not exist
			  already you must use the <code>$addToSet</code> for example try again with:
  			 <pre>db.users.update( {"firstName" : "First10" , "lastName" : "Last10" } , { "$addToSet" : { "skills" : "Android" }  }   );</pre>
				<br/>
		  </li>


		  <li>Remove items from an array<br/>
			  How to remove the "ios" from the document?
			  <br/>Look at the <code>$pull</code> operator
      			<div><button class="button" onclick="$('#array-sol-3').toggle();">Show/Hide Solution</button></div>
      		  	<div id="array-sol-3" style="display:none;" >
			  	  <pre>db.users.update( {"firstName" : "First10" , "lastName" : "Last10" } , { "$pull" : { "skills" : "ios" }  }   );</pre>
				  </pre>
      		  	</div>
				<br/>
		  </li>



		  <li>Sort elements in an array<br/>
			  Find the command to update all the documents and sort the skills in an alphabetical order in the array.<br/>
			  See the $each and $sort
      			<div><button class="button" onclick="$('#array-sol-4').toggle();">Show/Hide Solution</button></div>
      		  	<div id="array-sol-4" style="display:none;" >
			  	  <pre>db.users.update( {  "skills" : { "$exists" : true } } , {$push : { "skills" : {"$each" : [], "$sort" : 1  }   } } , {"multi":true} );</pre>
				  </pre>

				  This command takes only the document where the skills attribute exists, then do an "empty push" with the $sort to sort existing data.

				<br/>
      		  	</div>

		  </li>

	  </ul>


	</section>


	<h1>The Marvel Comics Database</h1>

    <section id="comics-intro">
	<div>
		For this workshop we have created a dataset using the Marvel API ( <a href="https://developer.marvel.com/" target="_blank">https://developer.marvel.com/</a> ). This data set contains:
		<ul>
			<li>Characters</li>
			<li>Authors</li>
			<li>Comics</li>
		</ul>

		<h4>Character Fields</h4>
		<dl class="dl-horizontal">
			<dt>_id</dt>
			<dd>The unique ID of the character resource.</dd>
			<dt>name</dt>
			<dd>The name of the character.</dd>
			<dt>description</dt>
			<dd>A short bio or description of the character.</dd>
			<dt>modified</dt>
			<dd>The date the resource was most recently modified.</dd>
			<dt>resourceURI</dt>
			<dd>The canonical URL identifier for this resource.</dd>
			<dt>urls</dt>
			<dd>A set of public web site URLs for the resource.</dd>
			<dt>thumbnail</dt>
			<dd>The representative image for this character.</dd>
			<dt>comics</dt>
			<dd>A resource list containing comics which feature this character.</dd>
		</dl>


		<h4>Comic Fields</h4>
		<dl class="dl-horizontal">
			<dt>_id</dt>
			<dd>The unique ID of the comic resource.</dd>
			<dt>digitalId</dt>
			<dd>The ID of the digital comic representation of this comic. Will be 0 if the comic is not available digitally.</dd>
			<dt>title</dt>
			<dd>The canonical title of the comic.</dd>
			<dt>issueNumber</dt>
			<dd>The number of the issue in the series (will generally be 0 for collection formats)</dd>
			<dt>variantDescription</dt>
			<dd>If the issue is a variant (e.g. an alternate cover, second printing, or director’s cut), a text description of the variant</dd>
			<dt>description</dt>
			<dd>The preferred description of the comic</dd>
			<dt>modified</dt>
			<dd>The date the resource was most recently modified</dd>
			<dt>isbn</dt>
			<dd>The ISBN for the comic (generally only populated for collection formats)</dd>
			<dt>upc</dt>
			<dd>The UPC barcode number for the comic (generally only populated for periodical formats)</dd>
			<dt>diamondCode</dt>
			<dd>The Diamond code for the comic</dd>
			<dt>ean</dt>
			<dd>The EAN barcode for the comic</dd>
			<dt>issn</dt>
			<dd>The ISSN barcode for the comic</dd>
			<dt>format</dt>
			<dd>The publication format of the comic e.g. comic, hardcover, trade paperback</dd>
			<dt>pageCount</dt>
			<dd>The number of story pages in the comic</dd>
			<dt>textObjects</dt>
			<dd>A set of descriptive text blurbs for the comic</dd>
			<dt>resourceURI</dt>
			<dd>The canonical URL identifier for this resource</dd>
			<dt>urls</dt>
			<dd>A set of public web site URLs for the resource</dd>
			<dt>series</dt>
			<dd>A summary representation of the series to which this comic belongs</dd>
			<dt>variants</dt>
			<dd>A list of variant issues for this comic (includes the "original" issue if the current issue is a variant)</dd>
			<dt>collections</dt>
			<dd>A list of collections which include this comic (will generally be empty if the comic's format is a collection)</dd>
			<dt>collectedIssues</dt>
			<dd>A list of issues collected in this comic (will generally be empty for periodical formats such as "comic" or "magazine")</dd>
			<dt>dates</dt>
			<dd>A list of key dates for this comic</dd>
			<dt>prices</dt>
			<dd>A list of prices for this comic</dd>
			<dt>thumbnail</dt>
			<dd>The representative image for this comic</dd>
			<dt>images</dt>
			<dd>A list of promotional images associated with this comic</dd>
			<dt>creators</dt>
			<dd>A resource list containing the creators associated with this comic</dd>
			<dt>characters</dt>
			<dd>A resource list containing the characters which appear in this comic</dd>
		</dl>


		<h4>Creators Fields</h4>
		<dl class="dl-horizontal">
			<dt>_id</dt>
			<dd>The unique ID of the creator resource</dd>
			<dt>firstName</dt>
			<dd>The first name of the creator</dd>
			<dt>middleName</dt>
			<dd>The middle name of the creator</dd>
			<dt>lastName</dt>
			<dd>The last name of the creator</dd>
			<dt>suffix</dt>
			<dd>The suffix or honorific for the creator</dd>
			<dt>fullName</dt>
			<dd>The full name of the creator (a space-separated concatenation of the above four fields)</dd>
			<dt>modified</dt>
			<dd>The date the resource was most recently modified</dd>
			<dt>resourceURI</dt>
			<dd>The canonical URL identifier for this resource</dd>
			<dt>urls</dt>
			<dd>A set of public web site URLs for the resource</dd>
			<dt>thumbnail</dt>
			<dd>The representative image for this creator</dd>
			<dt>comics</dt>
			<dd>A resource list containing the comics which feature work by this creator</dd>
		</dl>
	</section>


    <section id="comics-query">

        <ul style="list-style: decimal;">

  		  <li>Import Data<br/>
  			  	The Comics database has been exported from an existing one, you can import the data using the following command
          		<pre>
unzip $WORKSHOP_HOME/data/comics.zip

mongorestore -d comics $WORKSHOP_HOME/data/comics
              </pre>
 				<br/>

				You have now a new comics database, look into it using the following commands:
          		<pre>
use comics

show collections
          		</pre>

  		  </li>


  		  <li>Find the following characters : Spider-Man , Captain America, Iron Man.<br/>
				Tip: use the <code>$in</code> operator
      			<div><button class="button" onclick="$('#comics-sol-1').toggle();">Show/Hide Solution</button></div>
      		  	<div id="comics-sol-1" style="display:none;" >
			  	  <pre>db.characters.find( { "name" : { "$in" : ["Spider-Man" , "Captain America", "Iron Man"]  }  }   ).pretty();</pre>
				  </pre>
      		  	</div>
				<br/>
  		  </li>


  		  <li>List the titles of the Comics with Wolverine character<br/>
      			<div><button class="button" onclick="$('#comics-sol-2').toggle();">Show/Hide Solution</button></div>
      		  	<div id="comics-sol-2" style="display:none;" >
				  You can use the Character ID ( 1009718 ) or the name since it has been including in all comic characters
			  	  <pre>db.comics.find(  {  "characters.items.id" : 1009718    } , { "title" : 1  }   )</pre>
				  or
			  	  <pre>db.comics.find(  {  "characters.items.name" : "Wolverine"    } , { "title" : 1  }   )</pre>
				  </pre>
          <br/>
          Add the explain() to the command.
          <pre>db.comics.find(  {  "characters.items.id" : 1009718    } , { "title" : 1  }   ).explain()</pre>
          You can see that the query is doing a full collection read. To avoid that you must create an index using the following command:
          <pre>db.comics.ensureIndex( { "characters.items.id" : 1 }  );</pre>
          Run the explain again and you will see the difference. (if you want to drop the index use db.comics.dropIndexes())
        </pre>
      		  	</div>
				<br/>
  		  </li>


		  <li>
			  Find the 3 most expensive comics.
			  Tip:  Use the <code>sort()</code> and <code>limit()</code> methods
  			  <div><button class="button" onclick="$('#comics-sol-3').toggle();">Show/Hide Solution</button></div>
    		  <div id="comics-sol-3" style="display:none;" >
			  	You can use the Character ID ( 1009718 ) or the name since it has been including in all comic characters
		  	  	<pre>db.comics.find( {} , {"title" : 1 , "prices" : 1} ).sort(  { "prices.price" : -1  } ).limit(3)</pre>
			  </pre>
    		  </div>
				<br/>
		  </li>


      <li>How many comics cost more than $100?<br/>
        Tip: use the <code>$gte</code> operator
          <div><button class="button" onclick="$('#comics-sol-4').toggle();">Show/Hide Solution</button></div>
          <div id="comics-sol-4" style="display:none;" >
            <pre>db.comics.count( { "prices.price" : { "$gte" : 150 }  } )</pre>
        </pre>
          </div>
        <br/>
      </li>


		 </ul>


      <div>
        So as you can see you have many options to do queries. When you do it always look at the explain plan to see how the index will improve the query.
      </div>

	 </section>


	<h1>Data Analysis with MongoDB Aggregation Framework</h1>
	<section id="agg-fwk">
		<div>
			Since MongoDB 2.2, the Aggregation Framework allows real time analysis of your data. The Aggregation Framework uses the native operators
		 	(not like the MongoDB MapReduce that use Javascript V8 engine, and not covered in this workshop)<br/><br/>
	 	</div>

	 	<div>
			The Aggregation Framework use the <code>db.collection.aggregate( [ {operation1} , {operation2} , {operation3} ]  )</code> method and returns a cursor (new in 2.6).<br/><br/>
 		</div>


        <ul style="list-style: decimal;">

			<li>
				Group Comics by "format":<br>
				<pre>db.comics.aggregate( [ { "$group" : { "_id" : "$format" } } ] );</pre>
				<code>$group</code> : Group operator <br/>
				<code>{ "_id" : "$format" }</code> : selection of the attribute on which the group should be done, in this case we will group based on the value of the format attribute. We use $attribute to indicate that we want the value of the field (and not the simple string "format").
				<br/>
				<br/>
			</li>

			<li>
				Count the number of "Comics" by "Format":<br>
				<pre>db.comics.aggregate( [ { "$group" : { "_id" : "$format" , "count" : { "$sum" : 1 } } } ] );</pre>
				Here you just need to add a new field to the group. This field named "count", is based on the $sum of 1 (so a count) for each found document.
				<br/>
				<br/>
			</li>


			<li>
				Find the three most used format for comics<br>
				For this you need to add 2 operations to the aggregation pipepline, sort, then limit
  			  	<div><button class="button" onclick="$('#aggfwk-sol-1').toggle();">Show/Hide Solution</button></div>
    		  	<div id="aggfwk-sol-1" style="display:none;" >
		  	  	<pre>
db.comics.aggregate(
[
   { "$group" : { "_id" : "$format" , "count" : { "$sum" : 1 } } }
  ,{ "$sort" : { "count" : -1 } }
  ,{ "$limit" : 3 }
] );</pre>
    		  </div>
				<br/>
				<br/>
			</li>



			<li>
				Using the previous command, rename the "_id" field to "format" in the result<br>
				For this you have to use a projection in the pipeline using <code>$project</code>
				<div><button class="button" onclick="$('#aggfwk-sol-2').toggle();">Show/Hide Solution</button></div>
    		  	<div id="aggfwk-sol-2" style="display:none;" >
		  	  	<pre>
db.comics.aggregate(
[
   { "$group" : { "_id" : "$format" , "count" : { "$sum" : 1 } } }
  ,{ "$sort" : { "count" : -1 } }
  ,{ "$limit" : 3 }
  ,{ "$project" : { "_id" : 0 , "format" : "$_id" , "count" : 1  } }
] );				</pre>
			  	</pre>
    		  </div>
				<br/>
				<br/>
			</li>




				<li>
					Find the top three Characters in the comics database, and show their id, name and the number of comics with them.<br/>
					Since the Characters are in an array of the comics document you muse start with the <code>$unwind</code> operator,
					to virtually create one document for each value of the array.<br/>
					The top three Characters are:
					<ol>
						<li>Spider-Man</li>
						<li>X-Men</li>
						<li>Iron Man</li>
					</ol>
					<div><button class="button" onclick="$('#aggfwk-sol-3').toggle();">Show/Hide Solution</button></div>
	    		  	<div id="aggfwk-sol-3" style="display:none;" >
			  	  	<pre>
db.comics.aggregate(
[
   { "$unwind" : "$characters.items" }
  ,{ "$group" : { "_id" : { "id" : "$characters.items.id" ,  "name" : "$characters.items.name"  } , "count" : { "$sum" : 1 } } }
  ,{ "$project" : { "_id" : 0, "character" : "$_id", "count" : 1  } }
  ,{ "$sort" : { "count" : -1 } }
  ,{ "$limit" : 3}
] );
				  	</pre>
	    		  </div>
					<br/>
					<br/>
				</li>

		</ul>
	 </section>


	<h1>Full Text Search</h1>
	<section id="agg-fwk">
		Full Text Search is one of the new features of MongoDB 2.6.

    	<ul style="list-style: decimal;">

			<li>Create a full text index on the comics database
				<pre>
db.comics.ensureIndex( { "title" : "text", "description" : "text"  } );

db.characters.ensureIndex( { "name" : "text", "description" : "text"  } );

				</pre>
				<br/>
			</li>

			<li>Search all comics related to "Firebird"
				<pre>db.comics.find( { "$text" : { "$search" : "firebird "  }   } , { "title" : 1} );
				</pre>
        The full text feature is case insentive so you can search FIREBIRB, Firebird, firebird and it will return the same result.
        But also independently of the singular or plural, you can for example test with firebirds
				<br/>
			</li>


      <li>Search all comics related to "Firebird" or "Wolverine"
        <pre>db.comics.find( { "$text" : { "$search" : "firebird wolverine"  }   } , { "title" : 1 } );
        </pre>
        <br/>
      </li>


      <li>Search all comics related to "Firebird" or "Wolverine" but not related to "punisher"
        <pre>db.comics.find( { "$text" : { "$search" : "firebird wolverine -punisher"  }   } , { "title" : 1 } );
        </pre>
        The query will not return the document that contains punisher in the title or description (based on the index).
        Note that the $text operator matches on the complete stemmed word, this means that you can for example test with
         punish, punishment and you'll have the same result.
        <br/>
      </li>


      <li>Drop full text search (fts) index.<br/>
          For the this type of index you cannot use the definition but you must the the key of the index.
        <pre>
// list all indexes
db.system.indexes.find();

// then use the key
db.characters.dropIndex({ "_fts" : "text", "_ftsx" : 1 });
        </pre>
        <br/>
      </li>


		</ul>




	</section>



	<h1>Geospatcial Queries</h1>
	<section id="agg-fwk">
		First you must import the Geo database using the following command:



    <pre>
unzip $WORKSHOP_HOME/data/geo.zip

mongorestore -d airports $WORKSHOP_HOME/data/geo
    </pre>
		This database contains 3 collections:
		<ul>
			<li>airports : US Airport name, type and location</li>
			<li>states : US states with name, code and location (region)</li>
      <li>cities : US Cities</li>
		</ul>

    <ul style="list-style: decimal;">

    <li>Create Geospacial indexes.<br>
       The thre collections have an attribute "loc" that contains a GeoJSON definition, a Point for the cities and aiports, a Polygon for the states.
       Let's create new indexes to allow and improve the query efficiency :
       <pre>
use airports

db.states.createIndex( { "loc" : "2dsphere" } );

db.airports.createIndex( { "loc" : "2dsphere" } );

db.cities.createIndex( { "loc" : "2dsphere" } );
       </pre>

      You can drop the index using the following command:
      <pre>
db.airports.dropIndex( { "loc" : "2dsphere" });  // one single index by its definition

db.airports.dropIndexes(); // drop all indexes of this collection, except _id
      </pre>

      You can test the following queries with and without indexes, and using the <code>.explain()</code> method call to see the execution plan.
      <br/><br/>
    </li>

		<li>
			Find all the states around California<br>
			For this you need to:
			<ul>
				<li>Find the "location/region" of the California ( "code"" : "CA" )</li>
				<li>Do a Geo query using the <code>$geoIntersects</code> that are not California. The $geoIntersects operator queries for locations that intersect a specified GeoJSON object. A location intersects the object if the intersection is non-empty. This includes documents that have a shared edge.</li>
			</ul>
			<div><button class="button" onclick="$('#geo-sol-1').toggle();">Show/Hide Solution</button></div>
	    	<div id="geo-sol-1" style="display:none;" >
			<pre>
var state = db.states.findOne( { "code" : "CA"}  );

db.states.find( { "code" : { "$ne" :  "CA" } ,  "loc" : {  $geoIntersects : { $geometry : state.loc }  }  }
   , { name : 1 , code : 1, "_id" : 0 }  ).sort( { "name" : 1}  );
			</pre>
	    	 </div>
			<br/>
			<br/>
		</li>



		<li>Find all the airports of Massachussets<br>
			For this you have to use the <code>$geoWithin</code> operator. The $geoWithin operator queries for location data found within a GeoJSON polygon. Your location data must be stored in GeoJSON forma
			<div><button class="button" onclick="$('#geo-sol-2').toggle();">Show/Hide Solution</button></div>
	    	<div id="geo-sol-2" style="display:none;" >
			<pre>
var state = db.states.findOne( { "code" : "MA"}  );

 db.airports.find(
  { "loc" :
    { "$geoWithin" :
	  { "$geometry" : state.loc }
    }
   }
   ,
   { "name" : 1 , "type" : 1, "code" : 1 }
 );
			</pre>
	    	 </div>
			<br/>
			<br/>
		</li>

		<li>Find all "international" aiports located at less than 50km from JFK <br>
			For this you have to use the <code>$near</code> operator. The $geoWithin operator queries for location data found within a GeoJSON polygon. Your location data must be stored in GeoJSON format.
			<div><button class="button" onclick="$('#geo-sol-3').toggle();">Show/Hide Solution</button></div>
    	<div id="geo-sol-3" style="display:none;" >
			<pre>
var airport = db.airports.findOne( { "code" : "JFK" }  );

db.airports.find(
  { "code" :  {"$ne" : "JFK"} ,
    "type" : "International",
    "loc" :   { "$near" :
	     { "$geometry" : airport.loc,   "$maxDistance" : 50000 }  }  }
, {  code : 1 , name : 1 }
);
			</pre>
	    	 </div>
			<br/>
			<br/>
		</li>

	</ul>

  <div>
    <p>
    So you see that for some operatros (eg <code>$near</code>) you need to have a Geospatial index defined, for some not.
    But like for any query you need to look in detail if not having an index is a good idea. (full collection scan).
    </p>
    <p>
      You can also use the Geospatial opetors in any Aggregation Pipeline.
    </p>
  </div>
  </section>



	</div>


    </div>


    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="assets/js//jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="assets/js/bootstrap.min.js"></script>
  </body>
</html>
