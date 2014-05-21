package org.mongodb.workshop.model;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;

import java.util.List;

public class ResultDBObject extends BasicDBObject {

    public ResultDBObject(long count, int limit, int currentPage , List<DBObject> items) {
        super();

        this.put("totalItems", count);
        this.put("itemsPerPage", limit);
        this.put("currentPage", currentPage);
        this.append("items", items);

    }
}
