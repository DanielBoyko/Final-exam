console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
MyNameIs= ("Daniel Boyko");
document.getElementById("myP").innerHTML = ("200531354");

// Step 2: Create a block scoped, immutable variable that stores an empty array
const favoriteMovie = ("T-34"); 

// Step 3: Add the 3 people's names to the array
const names = ["Shaun", "Amrit", "Ivan"];

// Step 4: Remove the second array item from the array
MyArray.shift(favoriteMovie);

// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable
MyArray.map(function (item) {
    console.log(item);
});

// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";
const image =  document.querySelector('img');
image.addEventListener("click", function () {
       alert("Hello from Boo the World's Cutest Dog!");

}); 