/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /**
         * Loops through each feed in the allFeeds object and
         *    ensures it has a URL defined and that the URL is not empty.
         */
         it('URL defined and not empty', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           })
         });

        /**
         * Loops through each feed in the allFeeds object and
         *    ensures it has a name defined and that the name is not empty.
         */
         it('has a name and not empty', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           })
         });
    });

    /**
     * Test suite for checking funcionality of The menu.
     */
    describe('The menu', function() {
      var body = $('body');

      /**
       * Ensures the menu element is hidden by default.
       */
     it('is hidden by default', function() {
       expect(body.hasClass('menu-hidden')).toBeTruthy();
     });

     /**
      * This test ensures the menu changes visibility
      *    when the menu icon is clicked.
      */
      describe('When menu icon clicked', function() {
        beforeEach(function() {
          $('.menu-icon-link').trigger('click');
        });

        /**
         * Test to check if the menu drawer appeared
         *    after clicking the icon.
         */
        it('the menu is showed', function() {
          expect(body.hasClass('menu-hidden')).toBeFalsy();
        });

        /**
         * Test to check if the menu is hidden again
         *    after clicking the menu icon.
         */
        it('the menu is hidden', function() {
          expect(body.hasClass('menu-hidden')).toBeTruthy();
        });
      });

      /**
      * Additional suite to test menu items.
      */
      describe('Menu items', function() {
        var menuItems = [];

        for (var i = 0, len = $('.feed-list a').length; i < len; i++) {
          menuItems.push($('.feed-list a')[i]);
        }

        /**
        * Test that we have menu items.
        */
        it('has loaded', function() {
            expect(menuItems.length).toBeGreaterThan(0);
        });

        /**
        * Test that the menu items has text = "name"
        *    and it is longer than 3 character
        */
        it('has a name and at least 3 characters', function() {

          menuItems.forEach(function(item) {
            expect(item.text).toBeDefined();
            expect(item.text.length).toBeGreaterThan(3);
          });
        });

        /**
        * Test to ensure menu items not repeted using underscore
        *    _.contains() to check if item is in list.
        */
        it('has not been repeted', function() {
          var item = null;

          for (var i = 0, len = menuItems.length; i < len + 1; i++ ) {
            item = menuItems.pop();
            expect(_.contains(menuItems, item)).toBeFalsy();
          }
        });
      });
    });

     /**
      * The feedElement is outside the describe block,
      *     because I use it in the "New Feed Selection" as well.
      */
    var feedElement = $('.feed');
    /**
     * Test suite named "Initial Entries"
     */
    describe('Initial Entries', function() {

      /**
       * Call loadFeed() for initial entries than
       *    loadFeed() calls done() when it's completed.
       */
      beforeEach(function(done) {
        loadFeed(0, done);
      });

      /**
       * Test that there is at least a single .entry element
       *    within the .feed container.
       */
      it('loadFeed completed.', function() {
        expect(feedElement.children().length).toBeGreaterThan(0);
      });
    });

    /**
     * Test suite named "New Feed Selection"
     */
     describe('New Feed Selection', function() {
       var entryStore = null;

       /**
        * Store initial content than calls loadFeed() again
        *    with a different id
        */
       beforeEach(function(done) {
         loadFeed(0, function() {
           entryStore = feedElement.find('h2').text();
           loadFeed(1, function () {
             done();
           });
         });
       });

       /**
        * Test to check that content is changed upon new feed loaded.
        */
       it('Content changes after new feed loaded', function(done) {
          expect(feedElement.find('h2').text()).not.toBe(entryStore);
          done();
       });
     });
}());
