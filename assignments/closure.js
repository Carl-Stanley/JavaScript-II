// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const adapt = 'change';

function evolve() {

  return adapt; 

}

console.log(evolve());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {

  

  let count =0;
// Return a function that when invoked increments and returns a counter variable.
  return function() {
    count = count + 1;
    return count;
  }

};

// Example usage: const newCounter = counter();
const newCounter = counter();

// newCounter(); // 1
// newCounter(); // 2
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
