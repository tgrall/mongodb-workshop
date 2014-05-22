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
import org.mongodb.workshop.model.Story;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

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
        // TODO write some code ...
        // Must return a ResultDBObject page
        return null;
    }

    @GET
    @Path("/{id}")
    @ApiOperation(value = "Return one Character based on his _id")
    public DBObject get(@PathParam("id") int id) {
        // TODO write some code ...
        // Must return a DBObject (a character document)
        return null;
    }

    @GET
    @Path("/random")
    @ApiOperation(value = "Return one Character randomly")
    public DBObject findOneRandomly() {
        // TODO write some code ...
        // Must return a DBObject (a character document)
        return null;
    }

    @GET
    @Path("/search")
    @ApiOperation(value = "Search Character by name")
    public DBObject search( @DefaultValue("1") @QueryParam("page") int page,
                          @QueryParam("name") String name ) {
        // TODO write some code ...
        // Must return a ResultDBObject page
        // you can use a regexp using QueryBuilder
        // and  java.util.regex.Pattern.compile(name, Pattern.CASE_INSENSITIVE)
        return null;
    }


    @PUT
    @Path("/{id}/story")
    @ApiOperation(value = "Set a story related to the character")
    public WriteResult putStory( @PathParam("id") int id, Story story){
        // TODO write some code ...
        // Must return the update result

        Morphia morphia = new Morphia();
        DBObject objectToSave = morphia.toDBObject(story);

        return null;
    }


    @POST
    @Path("/")
    @ApiOperation(value = "Create a new character")
    public int insertCharacter( CharacterLight character) {
       datastore.save(character);
       return character.get_id();

    }


}
