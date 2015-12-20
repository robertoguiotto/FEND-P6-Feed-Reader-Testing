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

  describe('RSS Feeds', function() {

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toEqual(0);
    }); // closing it

    it('contains feeds with URLs defined and not empty', function () {
      allFeeds.forEach(function (feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toEqual(0);
      }); // closing anon function and forEach loop
    }); // closing it

    it('contains feeds with names defined and not empty', function () {
      allFeeds.forEach(function (feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toEqual(0);
      }); // closing anon function and forEach loop
    }); // closing it
  }); // closing describe 'RSS Feeds'


  describe('The Menu', function () {

    var bodyVar = $('body'),
        menuVar = $('a.menu-icon-link');

    it ('makes sure that menu element is hidden by default', function () {
      expect(bodyVar.hasClass('menu-hidden')).toBeTruthy();
    }); // closing anon function

    it ('makes sure that menu is visible once the menu icon is clicked', function () {
      menuVar = $('a.menu-icon-link');
      menuVar.trigger('click');
      expect(bodyVar.hasClass('menu-hidden')).toBeFalsy();
    }); // closing anon function

    it ('makes sure that menu is not visible once the menu icon is clicked again', function () {
      menuVar = $('a.menu-icon-link');
      menuVar.trigger('click');
      expect(bodyVar.hasClass('menu-hidden')).toBeTruthy();
    }); // closing anon function
  }); // closing describe 'The Menu'


  describe ('Initial Entries', function () {

    // makes sure that loadFeed had success
    beforeEach(function(done){
      loadFeed (0, done);
    }); // closing beforeEach

    it ('ensures there is at least 1 .entry element within the .feed container', function () {
      var entryTest = $('.entry');
      var feedTest = $('.feed');
      expect(entryTest.length).toBeGreaterThan(0);
    });// closing anon function and closing it
  });// closing describe 'Initial Entries'


  describe ('New Feed Selection', function () {

    // declaring vars in the describe scope;
    var firstFeed;
    var secondFeed;
    secondFeed = $('.feed').text();

    // makes sure that loadFeed had success
    beforeEach(function(done){
      $('.feed').empty(); // cleaning up the DOM
      loadFeed (0, function () {
        firstFeed = $('.feed').text();
        loadFeed(1, done);
      }); // closing anon function of first load feed
    }); // closing beforeEach

    it ('ensures when a new feed is loaded by loadFeed, that the content actually changes', function () {
      secondFeed = $('.feed').text();
      expect(secondFeed).not.toEqual(firstFeed);
    }); // closing anon and closing it
  }); // closing describe 'New Feed Selection'
}()); // closing initial $ function.
