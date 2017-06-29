var students = [
  { id: 1, name: "alec",    age: 40 },
  { id: 2, name: "brian",  age: 22 },
  { id: 3, name: "alec",     age: 12 },
  { id: 4, name: "john",     age: 42 }
];

function customCompare(a, b) {
  if(a.name < b.name) {
    return -1;
  }
  if(a.name > b.name) {
    return 1;
  }
  return b.age - a.age;
}

var sortedArray = students.sort(customCompare);
console.log(sortedArray);



// Basic numerically sorting
/* var array = [10, 2, 5, 1, 9];

// array.sort(function(a, b) {
//   return b - a;
// });

console.log(array); */