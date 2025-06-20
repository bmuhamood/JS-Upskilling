/*
How do loops and iteration work in JavaScript?

Loops in programming are used to repeat a block of code multiple times.

An example of a loop would be when you are designing a program that needs to print out a list of items. You could use a loop to print out each one of the items in the list.

Another example would be when you designing a game and you want to move a character across the screen. You could use a loop to move the character a certain number of pixels each time the loop runs.

In JavaScript, there are several types of loops that you can use. In this video, we will cover the for loop. Here is the basic syntax for a for loop:

for (initialization; condition; increment or decrement) {
  // code block to be executed
}
The initialization statement is executed before the loop starts. It is typically used to initialize a counter variable. A counter variable is a variable that is used to keep track of how many times the loop has run.

The condition statement is evaluated before each iteration of the loop. An iteration is a single pass through the loop.

If the condition is true, the code block inside the loop is executed. If the condition is false, the loop stops and you move on to the next block of code.

The last part of the loop is the increment/decrement statement. This statement is executed after each iteration of the loop. It is typically used to increment or decrement the counter variable.

for (let i = 0; i < 5; i++) {
  console.log(i);
}
In the first part of the example above, we initialize a counter variable i to 0. It is common convention to use i as the counter variable in a for loop.

The next part is to check the condition. In this case, the condition is checking if i is less than 5. Since i is 0, the condition is true, and the code block inside the loop is executed.

The code block inside the loop is to log the value of i to the console. The value of i is 0, so the console will show the value of 0.

Then the increment statement is executed. In this case, we are incrementing i by 1. So i is now 1.

Then we check the condition again which is to check if i is less than 5. Since i is now 1, the condition is still true, and the code block inside the loop is executed again.

We keep repeating this process until the condition is false. In this case, when i is 5, the condition is false, and the loop stops.

When you're working with loops you should be careful not to create a condition that is always true. If you do, the loop will run forever and your program will crash. This is known as an infinite loop.

It is possible to create nested for loops. A nested loop is when you place one loop inside of another. We will see examples of when you might want to do this later on.

Loops can be beneficial in programming when you need to repeat a block of code a certain number of times. Even though working with for loops can be tricky at first, with practice you will get the hang of it.

How does the for...of loop work and when should you use it?

A for...of loop is used when you need to loop over values from an iterable. Examples of iterables would be arrays, and strings.

Here is the basic syntax for a for...of loop:

for (variable of iterable) {
  // code block to be executed
}
The variable in the example represents the current value of the iterable that is being looped over.

If you have an array of numbers, the variable would be the current number in the array. If you have a string, the variable would be the current character in the string.

Let's take a look at a few examples so you can better understand how the for...of loop works.

In this first example we have an array of numbers and we want to loop over each number and log it to the console.

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}
We have created a variable called num that will represent the current number in the array. For iteration 1, num will be 1, for iteration 2, num will be 2, and so on.

Inside the loop, we are logging the current number to the console.

Here is another example where we have a string and we want to loop over each character and log it to the console.

const str = 'freeCodeCamp';

for (let char of str) {
  console.log(char);
}
In this example, we have created a variable called char that will represent the current character in the string.

For each iteration, the loop will log the current character to the console.

It is important to note that you can use let, or const when declaring the variable in a for...of loop.

If you are going to use const though, make sure that the value of the variable does not change inside the loop. If it does, you will get an error.

Here is an example of using const that results in an error:

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
  num = num + 1; // This will cause an error
}
In this example, we are trying to change the value of num inside the loop. Since we declared num with const, we will get an error. So, if you need to change the value of the variable inside the loop, use let instead.

Let's take a look at one last example dealing with an array of objects.

const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Jim', age: 40 }
];

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}
In this example, we have an array of objects called people. Each object has a name and age property.

When we loop through the array, we create a variable called person that will represent the current object in the array.

Inside the loop, we are outputting a message to the console.

The first message will be John is 30 years old, the second message will be Jane is 25 years old, and the third message will be Jim is 40 years old.

for...of loops are really useful when you need to loop over values from an iterable like an array or a string. They are also easy to read and can make your code more concise.

What is the for...in loop and when should you use it?

A for...in loop is best used when you need to loop over the properties of an object. This loop will iterate over all enumerable properties of an object, including inherited properties and non-numeric properties.

An inherited property is a property that is inherited from the object's prototype chain. A non-numeric property is a property that is not a number or a string that can be converted to a number.

Here is the basic syntax of a for...in loop:

for (variable in object) {
  // code block to be executed
}
The variable in the example represents the current property of the object that is being looped over.

Let's take a look at a few examples so you can better understand how the for...in loop works.

In this first example we have a fruit object and we want to loop over each property and log the value to the console.

const fruit = {
  name: 'apple',
  color: 'red',
  price: 0.99
};

for (const prop in fruit) {
  console.log(fruit[prop]);
}
The prop variable represents the current property of the object. fruit[prop] is used to access the value of each property.

For the first iteration, prop will be name. For the second iteration, prop will be color, and so on.

The results logged to the console will be apple, red, and 0.99.

In this second example, we have a nested object and we want to loop over each property and log the value to the console.

const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};

for (const prop in person) {
  console.log(person[prop]);
}
The address property is an object itself. The for...in loop will also loop over the properties of the person object and log the entire address object to the console.

Here is what the result will look like in the console:

John
30
{ street: '123 Main St', city: 'Anytown', state: 'CA' }
If you want to loop over the properties of the address object, you can nest another for...in loop inside the first one.

function isObject(obj) {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}

for (const prop in person) {
  if (isObject(person[prop])) {
    for (const nestedProp in person[prop]) {
      console.log(person[prop][nestedProp]);
    }
  } else {
    console.log(person[prop]);
  }
}
In this example have a custom function isObject that checks if the value is an object.

The Array.isArray method is used to check if the value is an array. By placing the logical NOT operator (!) in front of the method, we are checking if the value is not an array.

The reason why we can't just use typeof equals 'object' is because arrays are also considered objects in JavaScript. We want to exclude arrays from the check.

Also, due to a historical bug in JavaScript, typeof null returns 'object'. So we want to also exclude null values from the check.

If the condition is true, we nest another for...in loop that will loop over the properties of the nested object and log the value to the console.

The nestedProp variable represents the current property of the nested object.

Here is what the modified result will look like in the console:

"John"
30
"123 Main St"
"Anytown"
"CA"
A for...in loop is useful when you need to loop over the properties of an object.

It is not recommended to use a for...in loop to loop over the elements of an array. Instead, use a for...of loop or other array methods like forEach, map, filter, and reduce, which you will learn about in future lessons.

What is a while loop and how does it differ from the do...while loop?

In previous lecture videos, you learned how to work with for loops, for...in loops and for...of loops. In this lecture, you will learn about the while loop and the do...while loop.

A while loop will run a block of code as long as the condition is true. Here is the basic syntax for a while loop:

while (condition) {
  // code block to be executed
}
The condition is checked before the block of code is executed. If the condition is false, the block of code will not be executed.

while loops are useful when you do not know how many times you need to run the block of code. Here is an example of using a while loop to validate user input:

let userInput = prompt("Please enter a number between 1 and 10");

while (isNaN(userInput) || Number(userInput) < 1 || Number(userInput) > 10) {
  userInput = prompt("Invalid input. Please enter a number between 1 and 10.");
}

alert("You entered a valid number!");
In this example, we are using the prompt method to ask for user input. Then, the while loop first checks if the userInput is NaN. Remember that NaN is "Not a Number". isNaN checks whether the value is NaN and that NaN is the result of an invalid number conversion because it's not a number.

So if the user types in random characters or nothing at all, then they will be prompted with the message again. The while loop is also checking if the userInput, when converted to a number, is between 1 and 10.

We are using the Number constructor here because a prompt will return a string and we want only want to be explicitly checking numbers here.

If the user input is not between 1 and 10, the while loop will continue to prompt the user to enter a number between 1 and 10.

Once the user enters a valid number, the while loop will exit and an alert will be displayed to the user.

Another loop similar to the while loop would be the do...while loop. Here is the basic syntax:

do {
  // code block to be executed
} while (condition);
One key difference between a do...while loop and a while loop is that the do...while loop will execute the block of code at least once before checking the condition.

If the condition is true, the block of code will continue to execute. If the condition is false, the block of code will stop executing.

Here is an example of using a do...while loop to validate user input:

let userInput;

do {
  userInput = prompt("Please enter a number between 1 and 10");
} while (Number(userInput) < 1 || Number(userInput) > 10);

alert("You entered a valid number!");
In this example, we have a variable called userInput and have not assigned a value to it. Then we have a do...while loop that will prompt the user to enter a number between 1 and 10.

Then the while loop will check if the user input is less than 1 or greater than 10. If the input is not between 1 and 10, the do...while loop will continue to prompt the user to enter a number between 1 and 10.

Once the user complies and enters a valid number, the do...while loop will exit and an alert will be displayed to the user.

In most cases, you will probably use the while loop more often than the do...while loop. However, it is good to know both types of loops and when to use them.

What are the break and continue statements used for in loops?

A break statement is used to exit a loop early, while a continue statement is used to skip the current iteration of a loop and move to the next one.

Here is an example of using a break statement in a for loop:

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
In the example above, the loop starts counting at 0 and while i is less then 10, the loop will continue to run.

Inside the loop, we check if i is equal to 5. If it is, we use the break statement to exit the loop early. If not, we log the value of i to the console. So the output of the code will print the numbers 0, 1, 2, 3, and 4.

The break statement is useful when you want to exit a loop early based on a certain condition. For example, if you are searching for a specific value in an array, you can use a break statement to exit the loop once you find the value.

Sometimes you may want to skip a particular iteration of a loop without exiting the loop entirely. This is where the continue statement comes in. Here is an example of using a continue statement in a for loop:

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
Just like before, we have initialized i to 0 and have a condition that will run the loop as long as i is less than 10.

Inside the loop, when i is equal to 5, we use the continue statement to skip the current iteration and move to the next one.

The output of this code will print the numbers 0, 1, 2, 3, 4, 6, 7, 8, and 9. The number 5 is skipped because of the continue statement.

Another thing you can do with both the break and continue statements is to use labels to specify which loop you want to break or continue.

This is useful when you have nested loops and you want to control the flow of the outer loop from within the inner loop.

Here is an example of using labels with the break statement:

outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop;
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
In this example, we have an outer for loop labeled outerLoop and an inner for loop labeled innerLoop.

When i is equal to 1 and j is equal to 1, we use the break statement with the outerLoop label to exit the outer loop early. This will exit both the inner and outer loops.

The output of this code will log the following to the console:

"i: 0, j: 0"
"i: 0, j: 1"
"i: 0, j: 2"
"i: 1, j: 0"
Most of the time you will not find the need to use labels with the break and continue statements, but it is good to know that you have that option if you ever need it.
*/