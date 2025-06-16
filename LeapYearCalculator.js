// Step 1: Define the function
function isLeapYear(year) {
  // Step 2: Apply the leap year conditions
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

// Step 3: Declare the year to check
const year = 2000;

// Step 4: Call the function and assign to result
const result = isLeapYear(year);

// Step 5: Output the result
console.log(result);
