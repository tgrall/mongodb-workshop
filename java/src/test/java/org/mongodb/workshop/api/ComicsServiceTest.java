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

import com.mongodb.DBObject;
import org.junit.Before;
import org.junit.Test;
import org.mongodb.workshop.WorkshopTest;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

public class ComicsServiceTest extends WorkshopTest{


    ComicsService service = new ComicsService();

    @Before
    public void setUp() throws Exception {
        service.comicsCollection = WorkshopTest.db.getCollection("comics");
    }

    @Test
    public void testGetAll() throws Exception {
        long count = service.comicsCollection.count();
        assertEquals(count, service.all(1).get("totalItems"));
    }

    @Test
    public void testGetOneComic() throws Exception {
        DBObject comic = service.get(31017);
        assertNotNull("Comic document with id 31017 should not be null", comic );
    }


    @Test
    public void testSearch() throws Exception {
        DBObject result = service.search(1, "Hulk");
        assertTrue("Search with 'Hulk' should return more than 1 document", ((Long)result.get("totalItems") > 1)   );
    }


}
