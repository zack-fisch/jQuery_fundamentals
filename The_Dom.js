// Exercises: The DOM

// EXERCISE: The Logo Hijack

// No homepage is safe from the logo bandit!

// Open up www.google.com in Chrome or Firefox, and open up the console.
// Find the Google logo and store it in a variable.
// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// Find the Google search button and store it in a variable.
// Modify the text of the button so that it says "Yahooo!" instead.

var logo = document.getElementsByTagName('img');
logo.src = 'http://www.adweek.com/files/imagecache/node-blog/blogs/yahoo-original.jpg';
var searchButton = document.getElementById('gbqfsa');
searchButton.textContent = "Yahoooo";

// EXERCISE: About Me

// Cuz every webpage needs an "About" section.

// Start with this HTML and save it as "aboutme.html":
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8"/>
//   <title>About Me</title>
// </head>
// <body>
//   <h1>About Me</h1>

//   <ul>
//     <li>Nickname: <span id="nickname"></span>
//     <li>Favorites:  <span id="favorites"></span>
//     <li>Hometown: <span id="hometown"></span>
//    </ul>

//  </body>
// </html>

// Add a script tag to the bottom.
// Change the body style so it has a font-family of "Arial, sans-serif".
// Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

<script type="text/javascript">
   document.getElementsByTagName('body')[0].style.fontFamily = "Arial, sans-serif";
 	var spans = document.getElementsByTagName('span');
 	spans[0].textContent = "Fisch";
 	spans[1].textContent = "Astronomy, Coding";
 	spans[2].textContent = "Toronto";

 	var lists = document.getElementsByTagName("li");
 	for (var i = 0; i < lists.length; i++) {
 		lists[i].className = "listitem";
 		lists[i].style.color = 'red'
 	};

 	var image = document.createElement('img');
 	image.src = 'http://m.c.lnkd.licdn.com/mpr/pub/image-L4ursOkm2o2sVFhkJBJiUuZAhFxTxKyHMPuenTvmhzK21xGuL4ue2PSmhwQCijv6JtKq/zack-fisch.jpg';

 	document.getElementsByTagName('body')[0].appendChild(image);

   </script>

 </body>
</html>

// EXERCISE: The Book List

// Keep track of which books you read and which books you want to read!

// Create a webpage with an h1 of "My Book List".
// Add a script tag to the bottom of the page, where all your JS will go.
// Copy the array of books from the previous exercise.
// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// Bonus: Use a ul and li to display the books.
// Bonus: Change the style of the book depending on whether you have read it or not.

	<script type="text/javascript">

	var Book = function(title, author, read){
	this.title = title;
	this.author = author;
	this.read = read;
}

	var arr = [];

	arr.push(new Book('The Hobbit', 'J.R.R Tolkien', false));
	arr.push(new Book('Things a Little Bird told Me', 'Biz Stone', true));
	arr.push(new Book('The Lean Startup', 'Eric Ries', true));

	var page = document.getElementsByTagName('body')[0];
	var newList = document.createElement('ul');

	for (var i = 0; i < arr.length; i++) {
		var newText = document.createTextNode(arr[i].author + " by " + arr[i].title);
		var newLi = document.createElement('li');

		if(arr[i].read === true) {
			newLi.style.color = 'red';
			newLi.appendChild(newText);
		}else {
			newLi.appendChild(newText);
		} 

		newList.appendChild(newLi)
	};
	
	page.appendChild(newList);

	</script>


