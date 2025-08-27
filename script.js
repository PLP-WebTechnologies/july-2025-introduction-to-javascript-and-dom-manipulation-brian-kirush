/**********************************************
 * Part 1: Variables and Conditionals
 **********************************************/
let age = 20;
let userName = "Alex";

if (age >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

/**********************************************
 * Part 2: Functions
 **********************************************/
// Function 1: Greet the user
function greetUser(name) {
  return "Hello, " + name + "!";
}
console.log(greetUser(userName));

// Function 2: Calculate square of a number
function squareNumber(num) {
  return num * num;
}
console.log("Square of 5 is:", squareNumber(5));

/**********************************************
 * Part 3: Loops
 **********************************************/
// Example 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop count:", i);
}

// Example 2: While loop
let counter = 3;
while (counter > 0) {
  console.log("While loop countdown:", counter);
  counter--;
}

/**********************************************
 * Part 4: DOM Interactions
 **********************************************/
// DOM Interaction 1: Change text when button is clicked
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("mainTitle").textContent = "Text Changed with JavaScript!";
});

// DOM Interaction 2: Add new item to list
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item added!";
  document.getElementById("itemList").appendChild(newItem);
});

// DOM Interaction 3: Change intro paragraph style
document.getElementById("intro").style.color = "green";
