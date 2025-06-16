/*
You should have an array of objects named books where each object in the array should have a string title, another string authorName, and a number releaseYear.

Your books array should have a minimum of three objects.

You should have a callback function named sortByYear that accepts two books as parameter for sorting the array.

The sortByYear function should return -1 if the releaseYear of the first book is smaller than that of the second book.

The sortByYear function should return 1 if the releaseYear of the first book is bigger than that of the second book.

The sortByYear function should return 0 if both releaseYear values are equal.

You should filter out books written after a certain year such as 1950 from the books array and save the filtered array in a new array named filteredBooks.

You should sort the books in the filteredBooks array according to their releaseYear in ascending order. You learned in a prior lecture video that the sort() method will sort the array in place. This means the filteredBooks array will be mutated.
*/

const books = [
  {
    title: 'The Great Gatsby',
    authorName: 'F. Scott Fitzgerald',
    releaseYear: 1925,
  },
  {
    title: 'To Kill a Mockingbird',
    authorName: 'Harper Lee',
    releaseYear: 1960,
  },
  {
    title: '1984',
    authorName: 'George Orwell',
    releaseYear: 1949,
  },
];
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}
const filteredBooks = books.filter((book) => book.releaseYear <= 1950);
filteredBooks.sort(sortByYear);

console.log(filteredBooks);
// Output the filtered and sorted books

filteredBooks.forEach((book) => {
  console.log(`${book.title} by ${book.authorName}, released in ${book.releaseYear}`);
});

// Example output:
// The Great Gatsby by F. Scott Fitzgerald, released in 1925        
// 1984 by George Orwell, released in 1949
// To Kill a Mockingbird by Harper Lee, released in 1960


let numbers = [2, 4, 8, 10];

numbers.forEach(function(number) {
    console.log(number % 2);
});

const multiply = (a) => (b) => a * b;
const operations = [multiply(2), multiply(3)];
const result = operations.reduce((acc, fn) => fn(acc), 5);

console.log(result);


const numss = [1, 1, 1, 1, 1];
let sum = 0;
const forEachRes = numss.forEach(num => {
  return (sum += num);
});
const mapRes = numss.map(num => {
  return (sum += num);
});

console.log('forEach Result:', forEachRes); // Output: undefined
console.log('Map Result:', mapRes); // Output: [1, 2, 3, 4, 5]

const originalArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
const filteredArray = originalArray.filter(item => item.id > 1);
filteredArray[0].id = 4;
console.log(originalArray); // Output: [{ id: 1 }, { id: 4 }, { id: 3 }]
console.log(filteredArray); // Output: [{ id: 4 }, { id: 3 }]