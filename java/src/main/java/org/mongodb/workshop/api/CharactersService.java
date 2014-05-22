/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.mongodb.workshop.api;

import com.mongodb.*;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
import org.mongodb.workshop.model.CharacterLight;
import org.mongodb.workshop.model.ResultDBObject;
import org.mongodb.workshop.model.Story;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;
import java.util.Random;
import java.util.regex.Pattern;

@Api(value = "/characters", description = "API for the Characters")
@Path("/characters")
@Produces(MediaType.APPLICATION_JSON)
public class CharactersService {

    public final int ITEMS_PER_PAGE = 15;

    @Named("mongodb/characters")
    @Inject
    DBCollection charactersCollection;

    @Named("morphia/datastore")
    @Inject
    Datastore datastore;


    @GET
    @Path("/")
    @ApiOperation(value = "Return Characters using pagination")
    public DBObject all(@DefaultValue("1") @QueryParam("page")  int page) {
        long count = charactersCollection.count();
        int skip = ITEMS_PER_PAGE * (page -1);
        DBCursor cursor = charactersCollection.find().skip(skip).limit(ITEMS_PER_PAGE);
        List<DBObject> items = cursor.toArray( cursor.size() );
        ResultDBObject result = new ResultDBObject( count, ITEMS_PER_PAGE, page, items  );
        return result;
    }

    @GET
    @Path("/{id}")
    @ApiOperation(value = "Return one Character based on his _id")
    public DBObject get(@PathParam("id") int id) {
        DBObject query = QueryBuilder.start().put("_id").is(id).get();
        return charactersCollection.findOne(query);
    }

    @GET
    @Path("/random")
    @ApiOperation(value = "Return one Character randomly")
    public DBObject findOneRandomly() {

        // 1- Count characters
        long count = charactersCollection.count();

        // 2- Find one character randomly
        Random rand = new Random();
        int random = rand.nextInt(((int)count - 1) + 1) + 1;
        return charactersCollection.find().skip(random).limit(1).next() ;
    }

    @GET
    @Path("/search")
    @ApiOperation(value = "Search Character by name")
    public DBObject search( @DefaultValue("1") @QueryParam("page") int page,
                          @QueryParam("name") String name ) {
        DBObject query = QueryBuilder.start()
                                          .put("name")
                                                .regex( java.util.regex.Pattern.compile(name, Pattern.CASE_INSENSITIVE) )
                                          .get();

        long count = charactersCollection.count( query );
        int skip = ITEMS_PER_PAGE * (page -1);
        DBCursor cursor = charactersCollection.find(query).skip(skip).limit(ITEMS_PER_PAGE);
        List<DBObject> items = cursor.toArray( cursor.size() );
        ResultDBObject result = new ResultDBObject( count, ITEMS_PER_PAGE, page, items  );
        return result;
    }


    @PUT
    @Path("/{id}/story")
    @ApiOperation(value = "Set a story related to the character")
    public WriteResult putStory( @PathParam("id") int id, Story story){
        Morphia morphia = new Morphia();

        DBObject query = QueryBuilder.start().put("_id").is(id).get();
        DBObject update = BasicDBObjectBuilder.start()
                                    .push("$set")
                                        .add("story", morphia.toDBObject(story) )
                                    .get();

        WriteResult result = charactersCollection.update( query , update );

        return result;
    }


    @POST
    @Path("/")
    @ApiOperation(value = "Create a new character")
    public int insertCharacter( CharacterLight character) {
       datastore.save(character);
       return character.getId();

    }


}
