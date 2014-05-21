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

import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.QueryBuilder;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import org.mongodb.workshop.model.ResultDBObject;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;
import java.util.regex.Pattern;

@Api(value = "/creators", description = "API for the Creators")
@Path("/creators")
@Produces(MediaType.APPLICATION_JSON)
public class CreatorsService {

    public final int ITEMS_PER_PAGE = 15;

    @Named("mongodb/creators")
    @Inject
    DBCollection creatorsCollection;

    @GET
    @Path("/")
    @ApiOperation(value = "Return Creators using pagination")
    public DBObject all(@DefaultValue("1") @QueryParam("page")  int page) {
        long count = creatorsCollection.count();
        int skip = ITEMS_PER_PAGE * (page -1);
        DBCursor cursor = creatorsCollection.find().skip(skip).limit(ITEMS_PER_PAGE);
        List<DBObject> items = cursor.toArray( cursor.size() );
        ResultDBObject result = new ResultDBObject( count, ITEMS_PER_PAGE, page, items  );
        return result;
    }

    @GET
    @Path("/{id}")
    @ApiOperation(value = "Return one Comic based on his _id")
    public DBObject get(@PathParam("id") int id) {
        DBObject query = QueryBuilder.start().put("_id").is(id).get();
        return creatorsCollection.findOne( query );
    }


    @GET
    @Path("/search")
    @ApiOperation(value = "Full text search on Creators")
    public DBObject search(@DefaultValue("1") @QueryParam("page") int page,
                      @QueryParam("comicsName") String comicsName) {

        DBObject query = QueryBuilder.start()
                .put("comics.items.name")
                .regex(java.util.regex.Pattern.compile(comicsName, Pattern.CASE_INSENSITIVE))
                .get();

        long count = creatorsCollection.count(query);
        int skip = ITEMS_PER_PAGE * (page -1);
        DBCursor cursor = creatorsCollection.find(query).skip(skip).limit(ITEMS_PER_PAGE);
        List<DBObject> items = cursor.toArray( cursor.size() );
        ResultDBObject result = new ResultDBObject( count, ITEMS_PER_PAGE, page, items  );
        return result;
    }


}
