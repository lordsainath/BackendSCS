const catNames1 = require("cat-names");

const { catNames, randomCatName } = catNames1;
// console.log(catNames.length)

// printing all the CatNames
for (i = 0; i < catNames.length; i++) {
  console.log(catNames[i]);
}
// Calling RandomeCatName Function
console.log(randomCatName());
