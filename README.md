## Feedreader testing with jasmine

### Project Overview

In this project I'm testing a web-based application that reads RSS feeds.
For this I need to edit the [feedreader.js](https://github.com/DevRob/Udacity-WebDev-project6/blob/master/jasmine/spec/feedreader.js) file.
[Link to project demo:](http://devrob.github.io/Udacity-WebDev-project6)

**Base tests required:**
* *RSS Feeds test suite*
 * Each feed has URL defined and that the URL is not empty.
 * Each feed has a name defined and that the name is not empty.

* *The menu test suite*
 * Check that the menu element is hidden by default.
 * The menu changes visibility when the menu icon is clicked.

* *Initial Entries test suite*
 * Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

* *New Feed Selection test suite*
 *  Check when the feed is loaded the content changes.

**Additional tests:**
* *The menu test suite*
 *  Test that we have menu items.
 *  Test that the menu items has name and it is at least 3 characters long.
 *  Test to ensure menu items not repeted.

### Sources used for this project
* [Jasmine](http://jasmine.github.io/2.0/introduction.html)
* [*<HTML*GOODIES/>](http://www.htmlgoodies.com/beyond/javascript/js-ref/testing-dom-events-using-jquery-and-jasmine-2.0.html)
* [w3schools](http://www.w3schools.com)
* [Udacity JavaScript Testing](https://www.youtube.com/watch?v=82iDVtbr7cY&list=PLAwxTw4SYaPkv4LG-0UHNfhPkKPfYacOg)

