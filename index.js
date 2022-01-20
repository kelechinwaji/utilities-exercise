//importing the files
const firstFile = require('./utilities/file-one');
const {sum, concat} = require('./utilities/file-two');

// Destructuring the files
const {largeNumber, cut3} = firstFile;
//const {sum, concat} = secondFile;


const arr = [1,2,3,4,5,6,7,8,9];
const arr2 = [10,11,12,14,15]


console.log(largeNumber(arr));
console.log(cut3(arr));
console.log(sum(arr));
console.log(concat(arr, arr2));

