var words = ["ground", "control", "to", "major", "tom"];

function map(arr, operation) {
  var result = [];
  arr.forEach(function(el) {
    result.push(operation(el));
  });
  return result;
}


var output = map(words, function(word) {
  return word.length;
});

console.log(output);

// Expected output
// [6, 7, 2, 5, 3]
