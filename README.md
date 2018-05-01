# Project Overview

This project contains a given a web-based application that reads RSS feeds. [Jasmine](http://jasmine.github.io/) is included here for testing purposes


## How to start

Clone or download the repository and open index.html file in your browser. You'll see Jasmine tests in the bottom of the page.


## The project tests:

1. **RSS Feeds** - tests the functionality of RSS feeds:
    * _defined_ - makes sure that the allFeeds variable has been defined and that it is not empty. 
    * _URLs are defined and URLs are not empty_ - ensures allFeeds object has a URL defined and that the URL is not empty.

2. **The menu** - tests the functionality of the menu:
    * _The menu element is hidden by default_ - ensures that the menu element is hidden by default.
    * _The menu element is displayed when clicked_ - ensures that the menu changes visibility when the menu icon is clicked. This test have two expectations: does the menu display when clicked and does it hide when clicked again.
3. **Initial Entries** - checks initial entries:
    * _There is at least a single .entry element within the .feed container_ - ensures that when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
4. **New Feed Selection** - checked the behaviour of the new loaded content:
    * _When a new feed is loaded, the content changes_ - ensures that when a new feed is loaded by the loadFeed function that the old content actually changes.

