/*
JavaScript Loops Review
Working with Loops
for Loop: This type of loop is used to repeat a block of code a certain number of times. This loop is broken up into three parts: the initialization statement, the condition, and the increment/decrement statement. The initialization statement is executed before the loop starts. It is typically used to initialize a counter variable. The condition is evaluated before each iteration of the loop. An iteration is a single pass through the loop. If the condition is true, the code block inside the loop is executed. If the condition is false, the loop stops and you move on to the next block of code. The increment/decrement statement is executed after each iteration of the loop. It is typically used to increment or decrement the counter variable.
for (let i = 0; i < 5; i++) {
  console.log(i);
}
for...of Loop: This type of loop is used when you need to loop over values from an iterable. Examples of iterables are arrays and strings.
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}
for...in Loop: This type of loop is best used when you need to loop over the properties of an object. This loop will iterate over all enumerable properties of an object, including inherited properties and non-numeric properties.
const fruit = {
  name: 'apple',
  color: 'red',
  price: 0.99
};

for (const prop in fruit) {
  console.log(fruit[prop]);
}
while Loop: This type of loop will run a block of code as long as the condition is true.
let i = 5;

while (i > 0) {
  console.log(i);
  i--;
}
do...while Loop: This type of loop will execute the block of code at least once before checking the condition.
let userInput;

do {
  userInput = prompt("Please enter a number between 1 and 10");
} while (Number(userInput) < 1 || Number(userInput) > 10);

alert("You entered a valid number!");
break and continue Statements
Definition: A break statement is used to exit a loop early, while a continue statement is used to skip the current iteration of a loop and move to the next one.
// Example of break statement
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// Output: 0, 1, 2, 3, and 4

// Example of continue statement 
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Output: 0, 1, 2, 3, 4, 6, 7, 8, and 9
What is the toString() method and how does it work?

The toString() method is a fundamental feature in JavaScript that converts a value to its string representation. It's a method you can use for numbers, booleans, arrays, and objects. One of the most common uses of toString() is to convert a number to its string representation. Here's an example:

const num = 10;
console.log(num.toString()); // "10"
This method accepts an optional radix which is a number from 2 to 36. This radix represents the base, such as base 2 for binary or base 8 for octal. If the radix is not specified it defaults to base 10, which is decimal. Here's an example of passing 2 as an argument to the toString() method:

const num = 10;
console.log(num.toString(2)); // "1010"
The result will be 1010 which is the binary representation for the decimal number 10.

You can also use the toString() method to convert arrays and objects to strings. Arrays have a custom implementation of toString() that converts each element to a string and joins them with commas. Here's an example:

const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
In this example all the elements of the array are joined together to form the string 1,2,3.

When toString() method is used with objects, the result will not be a stringified version of the object properties.

const person = {
  name: "John",
  age: 30,
  isStudent: true
},

console.log(person.toString()); // "[object Object]"
In this example, the result will be the default string representation for the object which is [object Object]. To get a stringified version of the person object properties you'll need to use JSON.stringify() which you will learn about more in the future lecture videos.

In conclusion, the toString() method is used for converting values to strings. Understanding how it works with different data types and how to customize it for your own objects can greatly advance your ability to manipulate and display data in your JavaScript applications.

What is the Number() constructor and how does it work for type coercion?

The Number() constructor is used to create a number object. The number object contains a few helpful properties and methods like the isNaN and the toFix method. Here's an example using the Number() constructor with the new keyword:

const myNum = new Number("34");
console.log(typeof myNum); // "object" 
In this example we pass in a string literal to the Number() constructor and the return type is of type object instead of a string.

When the Number() constructor is called as a function without the new keyword, then the return value will be the primitive number type. Most of the time you will be using the Number() constructor to convert other data types to the number data type. Here's an example of converting a string to a number:

const myNum = Number("100");
console.log(myNum); // 100

console.log(typeof myNum); // number
This is helpful when you are getting input from the user and you need to convert that string input to a number so you can perform mathematical calculations.

If you try to call the Number() constructor through an empty string then the result will be the number 0:

const num = Number("");
console.log(num); // 0
This is because JavaScript will try to parse the string and since it doesn't contain any digits, the result will be zero.

If you try to pass in a string with random characters then the result will be NaN or "Not a Number".

const num = Number("random");
console.log(num); // NaN
When working with booleans, true returns 1 because true gets converted to one and false returns 0 because false is converted to zero.

const boolTrue = Number(true);
const boolFalse = Number(false);

console.log(boolTrue); // 1
console.log(boolFalse); // 0
If you pass in null, the result will be 0 and if you pass undefined, the result will be NaN.

const undefinedNum = Number(undefined);
const nullNum = Number(null);

console.log(undefinedNum); // NaN
console.log(nullNum); // 0
When working with arrays there are a few things to consider, an empty array will return 0, an array with a single number will return that number, an array with multiple numbers returns NaN, and an array with strings will return undefined.

const obj1 = Number({});
const obj2 = Number({2: 2});
const obj3 = Number({key: "val"});
const obj4 = Number({key: true});

console.log(obj1); // NaN
console.log(obj2); // NaN
console.log(obj3); // NaN
console.log(obj4); // NaN
When working with objects, the result is always NaN.

In conclusion, you'll mostly use the Number() constructor for type conversion more than creating a number or a number object.

*/

`
What are some common practices for naming variables and functions?

Naming variables and functions is an important aspect of writing clean, readable and maintainable code. Good naming practices makes your code self-documenting reducing the need for extensive comments and making it easier for other developers including your future self to understand your code.

Let's start with general naming conventions in JavaScript. In previous lecture videos you learned about using camel case for variable names. For boolean variables, it's a common practice to use prefixes such as is, has, or can. This immediately tells the reader that the variable is a boolean:

let isLoading = true;
let hasPermission = false;
let canEdit = true;
For functions the name should clearly indicate what the function does. It's often helpful to start with a verb:

function getUserData(){
  /* ... */
}

function calculateTotal(){
  /* ... */
}

function validateInput(){
  /* ... */
}
For functions that return a boolean often called predicates, you can use the same is, has, or can prefixes:

function isValidEmail(email) {
  /* ... */
}

function hasRequiredFields(form) {
  /* ... */
}
When you have functions that retrieve data it's common to start with the word get:

function getProductDetails(productId) {
  /* ... */
}

function getUserProfile(userId) {
  /* ... */
}
When you have functions that set data it's common to start with the word set:

function setUserPreferences(preferences) {
  /* ... */
}

function setPageTitle(title) {
  /* ... */
}
For event handler functions, you might prefix with handle or suffix with handler:

function handleClick(){
  /* ... */
}

function onSubmit(){
  /* ... */
}

function keyPressHandler(){
  /* ... */
}
An event handler is an action that happens after an event has happened like a button click. You will learn about that in future lecture videos.

When naming iterator variables and loops, it's common to use single letters like i, j, or k, but for nested loops or more complex iterations more descriptive names can be helpful:

for (let i = 0; i < array.length; i++) {
  /* ... */
}

for (let studentIndex = 0; studentIndex < students.length; studentIndex++) {
  /* ... */
}
For array names consider using plural nouns to indicate that the variable contains multiple items:

const colors = ['red', 'green', 'blue'];
const userNames = ['Alice', 'Bob', 'Charlie'];
Remember the goal is to make your code as self explanatory as possible. A good rule of thumb is that if you need to add a comment to explain what a variable or function does, you might want to consider renaming it to something more descriptive.

Lastly, be consistent with your codebase or team. If your team has established naming conventions, stick to them. Consistency makes the code more readable and maintainable for everyone involved.

`

`
How do you get the length for an array, and how can you create an empty array of fixed length?

In prior lecture videos you were first introduced to the length property, this property returns the number of elements in an array. So here is a quick reminder on how it works:

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.length); // 3
It's possible to have arrays with empty slots. Empty slots are defined as slots with nothing in them. This is different than an array with the value of undefined. These types of arrays are known as sparse arrays. Here is an example:

const sparseArray = [1, , , 4];
console.log(sparseArray.length); // 4
In this case even though we only have two defined elements, 1 and 4. The length is 4 because the highest index (3) plus 1 gives us a length of 4.

Now let's discuss how to create an empty array of fixed length. There are few ways to do this in JavaScript but one common method is to use the Array() constructor with a numeric argument. The Array() constructor can be used with the new keyword to create a new array. Here is an example:

const emptyArray = new Array(5);
console.log(emptyArray.length); // 5
console.log(emptyArray); // [,,,,]
In this example, we create a new array using the Array(5). This creates a sparse array with a length of 5 where all the slots are empty.

Another way to create an empty array of fixed length is to use the Array.from() method with a length argument. This method creates an array of the specified length with all elements initialized to undefined:

const fixedLengthArray = Array.from({ length: 5 });
console.log(fixedLengthArray.length); // 5

// [undefined, undefined, undefined, undefined, undefined]
console.log(fixedLengthArray);
If you want to create an array of specific length and fill it with a default value, you can use the Array.fill() method:

const filledArray = new Array(3).fill(0);
console.log(filledArray); // [0, 0, 0]
This creates an array of length three and fills all elements with the value 0.

Understanding how to get the length of an array and create arrays of fixed length is important for many programming tasks especially when you need to initialize arrays for specific algorithms or data structures.

Questions
`