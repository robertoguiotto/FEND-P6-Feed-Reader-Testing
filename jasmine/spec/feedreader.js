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
            expect(allFeeds.length).not.toEqual(0);
        } //closing anon function
        ); // closing it


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('contains feeds with URLs defined and not empty', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toEqual(0);
                }  // closing anon function
                ); // closing forEach loop
         }); // closing it
        // ********** DONE!

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */


         it('contains feeds with names defined and not empty', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toEqual(0);
                } // closing anon function
                ); // closing forEach loop
         }); // closing it
        // ********** DONE!

    }); // closing describe 'RSS Feeds'


/* TODO: Write a new test suite named "The menu" */
describe('The Menu', function () {

    beforeEach(function () {
        bodyVar = $('body');
        }); // closing beforeEach


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it ('makes sure that menu element is hidden by default', function () {
            expect(bodyVar.hasClass('menu-hidden')).toBe(true);

        }); // closing anon function


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */


          it ('makes sure that menu changes visibility once the menu icon is clicked', function () {
            menuVar = $('a.menu-icon-link');
            menuVar.trigger('click');
            expect(bodyVar.hasClass('menu-hidden')).toBe(false);

        }); // closing anon function

    }); // closing describe 'The Menu'

/* TODO: Write a new test suite named "Initial Entries" */

describe ('Initial Entries', function () {

        // makes sure that loadFeed had success
        beforeEach(function(done){
            loadFeed (0, done);
        }); // closing beforeEach

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         it ('ensures there is at least 1 .entry element within the .feed container', function () {
            var entryTest = $('.entry');
            var feedTest = $('.feed');
            expect(entryTest.length).toBeGreaterThan(0);
            expect(feedTest.length).toBeGreaterThan(0);
        //done();  // the second done is not necessary here

        }// closing anon function
        ); // closing it

    });// closing describe 'Initial Entries'

/* TODO: Write a new test suite named "New Feed Selection" */

describe ('New Feed Selection', function () {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        // declaring vars in the describe scope;
        var firstFeedH1;
        var secondFeedH1;

        // makes sure that loadFeed had success
        beforeEach(function(done){
             $('.feed').empty(); // cleaning up the DOM

             loadFeed (0, function () {
                firstFeedH1 = $('.feed').find('h1').text();
            }); // closing anon function
             done();

        }); // closing beforeEach

        it ('ensures when a new feed is loaded by loadFeed, that the content actually changes', function () {
        loadFeed(1); // loading a diffrent feed for text purposes
        secondFeedH1 = $('.feed').find('h1').text();
        expect(secondFeedH1).not.toEqual(firstFeedH1);
        //done();

        } // closing anon function

        ); // closing it

    }); // closing describe 'New Feed Selection'

}()); // closing initial $ function
