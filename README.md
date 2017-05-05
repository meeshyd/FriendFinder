# Friend Finder

## Overview

This full-stack site takes in results of users' surveys, then compares their answers with those from other users. The app then displays the name and picture of the user with the best overall match. Routing for the app is handled via Express.

[See it in action!](https://tranquil-retreat-50930.herokuapp.com/)

![picture alt](README.png "Friend Finder Home")

Friend Finder works finding the difference between current user's scores and the other users' scores, question by question. The differences are added up to calculate the total difference.

	Example:
	User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
	User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
	Total Difference: 2 + 1 + 2 = 5

The current user is then displayed the name and image of the user with the smallest total difference.

## Technologies Used:

* JavaScript
* jQuery
* Node.js
* npm Packages
	* [Express](https://www.npmjs.com/package/twitter)
	* [body-parser](https://www.npmjs.com/package/spotify)
* [Bootstrap](http://getbootstrap.com/)
* [Google Fonts API](https://fonts.google.com)