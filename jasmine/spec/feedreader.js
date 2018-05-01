/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URLs are defined and URLs are not empty', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('The name is defined and it is not empty', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });

    });


    describe('The menu', function () {
        /* This test ensures that the menu element is
         * hidden by default. 
         */
        it('The menu element is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        /* This test ensures that the menu changes
         * visibility when the menu icon is clicked. This test
         * have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('The menu element is displayed when clicked', function () {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
        });

        it('The menu element is hidden when clicked again', function () {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    describe('Initial Entries', function () {
        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous.
         */
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('There is at least a single .entry element within the .feed container', function (done) {
            let entry = $('.feed .entry');
            expect(entry).not.toBe(undefined);
            expect(entry.length).not.toBe(0);
            done();
        });
    });

    describe('New Feed Selection', function () {
        /* This test ensures that when a new feed is loaded
         * by the loadFeed function that the old content actually changes.
         * loadFeed() is asynchronous.
         */
        beforeEach(function (done) {
            loadFeed(0, function () {
                oldFeed = $('.feed').html();
                loadFeed(1, function () {
                    newFeed = $('.feed').html();
                    done();
                });
            });
        });

        it('When a new feed is loaded, the content changes', function () {
            expect(oldFeed).not.toEqual(newFeed);
        });
    });
}());
