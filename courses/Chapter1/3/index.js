// Map
const arrays1 = ["a", "b", "c", "d", "e"];
const arrays2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// Map
const li = arrays1.map((item) => (`<li>${item}</li>`)).join("\n");
console.log(`<ul>${li}</ul>`);

// Filter
console.log(arrays2.filter((item) => (!(item%2))));

// Reduce
console.log(arrays2.reduce((a, b) => (a+b)));