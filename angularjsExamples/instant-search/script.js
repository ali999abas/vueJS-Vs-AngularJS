// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function InstantSearchController($scope){

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.items = [
		{
			"title": "What You Need To Know About CSS Variables",
			"url": "http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
			"image": "images/1_eXIBeNlLhz4Pe6vDrYkXLQ.png"
		},
		{
			"title": "Freebie: 4 Great Looking Pricing Tables",
			"url": "http://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
			"image": "images/53e18_free-stuff-logo.jpg"
		},
		{
			"title": "20 Interesting JavaScript and CSS Libraries for February 2016",
			"url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
			"image": "images/the-best-javascript-and-css-libraries-2018.png"
		},
		{
			"title": "Quick Tip: The Easiest Way To Make Responsive Headers",
			"url": "http://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
			"image": "images/maxresdefault.jpg"
		},
		{
			"title": "Learn SQL In 20 Minutes",
			"url": "http://tutorialzine.com/2016/01/learn-sql-in-20-minutes/",
			"image": "images/sql.PNG"
		},
		{
			"title": "Creating Your First Desktop App With HTML, JS and Electron",
			"url": "http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/",
			"image": "images/desktop.png"
		}
	];


}
