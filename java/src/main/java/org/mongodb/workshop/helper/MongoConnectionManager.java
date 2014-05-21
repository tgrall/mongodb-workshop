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

package org.mongodb.workshop.helper;

import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;
import org.glassfish.hk2.utilities.binding.AbstractBinder;
import org.glassfish.jersey.server.ResourceConfig;

import java.net.UnknownHostException;

public class MongoConnectionManager extends ResourceConfig {

    public MongoConnectionManager() {
        super();
        register(new AbstractBinder() {
            @Override
            protected void configure() {
                try {
                    DB db = new MongoClient("localhost").getDB("comics");

                    bind(db.getCollection("characters")).to(DBCollection.class).named("mongodb/characters");
                    bind(db.getCollection("comics")).to(DBCollection.class).named("mongodb/comics");
                    bind(db.getCollection("creators")).to(DBCollection.class).named("mongodb/creators");

                } catch (UnknownHostException e) {
                    throw new RuntimeException(e);
                }
            }
        });
    }


}
