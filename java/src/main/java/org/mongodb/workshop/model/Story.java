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

package org.mongodb.workshop.model;

import org.mongodb.morphia.annotations.Entity;

import java.util.Date;


@Entity(value = "story", noClassnameStored = true)
public class Story {

    Date modified;

    String content;

    public Story() {
        modified = new Date();
    }

    public Story(String content) {
        this();
        this.content = content;
    }

    public Date getModified() {
        return modified;
    }


    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        modified = new Date();
        this.content = content;
    }

    @Override
    public String toString() {
        return "Story{" +
                "modified=" + modified +
                ", content='" + content + '\'' +
                '}';
    }
}
