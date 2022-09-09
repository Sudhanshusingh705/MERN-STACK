//Arrays contain multiple data types--
//Arrays are dynamic -can change size--
//Arrays support indexing and slicing--

console.log('***ARRAYS NUMBERS***')
const nums  = [2,3,4,5,6,true,'nice'];
console.log(nums);

/////
console.log('****ARRAYS FRUITS*****')
const fruits  = ['apple','banana','orange','grapes','mango'];
console.log(fruits);

//INDEXING-------
console.log(fruits[3]);

//THIS WILL BE UNDEFINED--
console.log(fruits[10]);

//SLICING---
console.log(fruits.slice[1,3]);
console.log(fruits.slice(1));
console.log(fruits.slice(1,10));
console.log(fruits.slice(5,1,));

//ADDING ELEMENT TO ARRAY---
fruits.push('cherry');
console.log(fruits);


//REMOVING ELEMENT FROM ARRAY
//1.POP()--
console.log(fruits.pop());
console.log(fruits);

//SPLICE()-REMOVE ELEMENT FROM ARRAY---
//console.log(fruits.splice());
fruits.splice(2,3);
console.log(fruits);

//TRAVERSE ARRAY-----------
