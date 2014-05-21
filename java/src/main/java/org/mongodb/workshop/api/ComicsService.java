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
import org.mongodb.workshop.model.ResultDBObject;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Api(value = "/comics", description = "API for the Comics")
@Path("/comics")
@Produces(MediaType.APPLICATION_JSON)
public class ComicsService {


    public final int ITEMS_PER_PAGE = 15;

    @Named("mongodb/comics")
    @Inject
    DBCollection comicsCollection;


    @GET
    @Path("/")
    @ApiOperation(value = "Return Comics using pagination")
    public DBObject all(@DefaultValue("1") @QueryParam("page")  int page) {
        long count = comicsCollection.count();
        int skip = ITEMS_PER_PAGE * (page -1);
        DBCursor cursor = comicsCollection.find().skip(skip).limit(ITEMS_PER_PAGE);
        List<DBObject> items = cursor.toArray( cursor.size() );
        ResultDBObject result = new ResultDBObject( count, ITEMS_PER_PAGE, page, items  );
        return result;
    }

    @GET
    @Path("/{id}")
    @ApiOperation(value = "Return one Comic based on his _id")
    public DBObject get(@PathParam("id") int id) {
        DBObject query = QueryBuilder.start().put("_id").is(id).get();
        return comicsCollection.findOne(query);
    }


    @GET
    @Path("/search")
    @ApiOperation(value = "Full text search on comics")
    public DBObject search(@DefaultValue("1") @QueryParam("page") int page,
                      @QueryParam("keyword") String keyword) {

        DBObject query = QueryBuilder.start()
                            .text(keyword).get();

        DBObject proj = BasicDBObjectBuilder.start()
                            .append("title", 1)
                            .append("description", 1)
                            .push("score")
                                .append("$meta", "textScore")
                            .get();

        DBObject sort = BasicDBObjectBuilder.start()
                            .push("score")
                                .append("$meta", "textScore")
                            .get();

        long count = comicsCollection.count(query);
        int skip = ITEMS_PER_PAGE * (page -1);

        DBCursor cursor = comicsCollection.find(query , proj)
                                            .sort(sort)
                                            .skip(skip)
                                            .limit(ITEMS_PER_PAGE);

        List<DBObject> items = cursor.toArray( cursor.size() );

        ResultDBObject result = new ResultDBObject( count, ITEMS_PER_PAGE, page, items  );

        return result;
    }



    @GET
    @Path("groupBy/price")
    @ApiOperation(value = "Get the number of comics per price")
    public DBObject[] aggregateByPrice() {

        DBObject step1 = new BasicDBObject( "$unwind" , "$prices" );
        DBObject step2 = BasicDBObjectBuilder.start()
                            .push("$match")
                                .add("prices.type", "printPrice")
                                .push("prices.price")
                                    .add("$gt", 0)
                            .get();

        DBObject step3 = BasicDBObjectBuilder.start()
                            .push("$group")
                            .add("_id", "$prices.price")
                            .push("total")
                                .append("$sum", 1)
                            .get();

        DBObject step4 = BasicDBObjectBuilder.start()
                            .push("$sort")
                                .add("_id", 1)
                            .get();

        List<DBObject> pipeline = Arrays.<DBObject>asList(step1, step2, step3, step4);

        AggregationOutput output = comicsCollection.aggregate(pipeline);
        List<DBObject> items = new ArrayList<DBObject>();

        for (DBObject item :  output.results()) {
            items.add(item);
        }

        return items.toArray( new DBObject[ items.size() ] );
    }



}
