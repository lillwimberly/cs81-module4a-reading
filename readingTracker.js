// Weekly reading log
const readingLog = [
  { day: 'Monday', book: 'Dune', minutes: 30 },
  { day: 'Tuesday', book: '1984', minutes: 20 },
  { day: 'Wednesday', book: 'Dune', minutes: 25 },
  { day: 'Thursday', book: 'The Hobbit', minutes: 40 },
  { day: 'Friday', book: '1984', minutes: 15 },
];

// Adds a new reading entry to the log
// input is three strings
// no output but builds a new object with the input then add this object to the readingLog array
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes }; // creates new object populated with the input arguments
  readingLog.push(newEntry); // this adds the newEntry to the readingLog array
}

// Returns total minutes spent reading all week
// input is a log array
// tallies the total number of minutes from the minute property of each object
// returns this total value
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {
    //this loops over every object of the reading array
    total += entry.minutes; //with each loop, it adds the minutes from that object to the total
  }
  return total;
}

// Returns the book read most frequently
// input is a log array
// output is a string, the most read book
function mostReadBook(log) {
  const bookCounts = {};
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      // condition checking if the bookCounts object does NOT contain this book
      bookCounts[entry.book] = 1; // add it to bookCounts obj with value of 1
    } else {
      bookCounts[entry.book]++; // else increment the value there by 1
    }
  }
  // pull out this code below and store it as a seperate function, so you can reuse it later if needed
  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
    // iterates over every book in bookCounts
    if (bookCounts[book] > maxCount) {
      // check if value is greater than the current maxCount
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

// Prints a summary of minutes read per day
// inputs a log array
// no return value from this function but it prints the values each object in a formated string template
function printDailySummary(log) {
  for (let entry of log) {
    // iterates over every object of input log
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`); // prints each objects values here in format with this template string
  }
}

// Example usage
addReadBook('Saturday', 'Dune', 50);
printDailySummary(readingLog);
console.log('Total minutes read:', totalReadingMinutes(readingLog));
console.log('Most read book:', mostReadBook(readingLog));
// Test Case
addReadBook('Friday', 'The Feminine Mystique', 40);
