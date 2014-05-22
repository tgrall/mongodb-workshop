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

import com.mongodb.BasicDBObjectBuilder;
import com.mongodb.DBObject;
import com.mongodb.QueryBuilder;
import org.junit.Before;
import org.junit.Test;
import org.mongodb.workshop.WorkshopTest;
import org.mongodb.workshop.model.CharacterLight;
import org.mongodb.workshop.model.Story;
import org.mongodb.workshop.model.Thumbnail;

import static org.junit.Assert.*;

public class CharactersServiceTest extends WorkshopTest {

    CharactersService service = new CharactersService();

    @Before
    public void setUp() throws Exception {
        service.charactersCollection = WorkshopTest.db.getCollection("characters");
        service.datastore = WorkshopTest.datastore;
    }

    @Test
    public void testGetAll() throws Exception {
        long count = service.charactersCollection.count();
        assertEquals(count, service.all(1).get("totalItems"));
    }

    @Test
    public void testGetOneCharacter() throws Exception {
        DBObject character = service.get(1009718);
        assertEquals("Wolverine", character.get("name"));
        assertNotNull("comics field should not be null", character.get("comics") );
    }

    @Test
    public void testRandom() throws Exception {
        DBObject character = service.findOneRandomly();
        assertNotNull("Character should not be null when doing a random search", character);

    }

    @Test
    public void testSearch() throws Exception {
        DBObject result = service.search(1, "Hulk");
        assertTrue("Search with 'Hulk' should return more than 1 document", ((Long)result.get("totalItems") > 1)   );
    }


    @Test
    public void testAddStory() throws Exception {
        int id = 1009144;

        DBObject query = QueryBuilder.start().put("_id").is(id).get();
        DBObject unsetUpdate = BasicDBObjectBuilder.start()
                                    .push("$unset")
                                        .append("story","")
                                    .get();

        //remove the story in case it is present
        service.charactersCollection.update( query , unsetUpdate  );
        DBObject obj = service.get(1009144);
        assertNull(obj.get("story"));

        // do the update
        Story story = new Story("This is a new story for the character!");
        service.putStory( id , story  );
        obj = service.get(1009144);
        assertNotNull(obj.get("story"));

    }

    @Test
    public void testCreateNewCharacter() throws Exception {
        int id = 123;
        DBObject query = QueryBuilder.start().put("_id").is(id).get();
        service.charactersCollection.remove(query);
        CharacterLight newChar  = new CharacterLight();
        newChar.setId(id);
        newChar.setName("Breizhman");
        newChar.setDescription("This is a new super hero from Bretagne");
        service.insertCharacter(newChar);

        DBObject dbo = service.get(id);

        assertNotNull("The char 123 should be present in the DB", dbo);
        assertNull("The char 123 should have a thumbnail", dbo.get("thumbnail") );

        // insert with Thumbnail
        newChar  = new CharacterLight();
        newChar.setId(id);
        newChar.setName("Breizhman");
        newChar.setDescription("This is a new super hero from Bretagne");


        Thumbnail thumbnail = new Thumbnail();
        thumbnail.setExtension("png");
        thumbnail.setPath("http://www.mongodb.com/sites/all/themes/bonsai/logo.png");

        newChar.setThumbnail(thumbnail);

        service.insertCharacter(newChar);
        dbo = service.get(id);

        assertNotNull("The char 123 should be present in the DB", dbo );
        assertNotNull("The char 123 should have a thumbnail", dbo.get("thumbnail") );




    }
}
