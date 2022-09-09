const nums  = [34,6,23,67,4,7,2];

//map is function of array that returns a new array
console.log('***USING MAP FUNCTION***')
const newNums = nums.map((n) => {return n**2} )
console.log(newNums);

//WAP TO GENERATE ARRAY LIKE THIS :
// 

console.log('***rs ****')
const prices = nums.map ((n)  => {return '₹'+n } );
console.log(prices);

//create a new array where if number is even,it is divisible by 2
//if number is odd,it is multiple by 2

console.log('***EVEN NUMEBR DIVISIBLE BYY 2 ***')
const number= nums.map ((n) =>{
    if (n%2===0) return n/2;
    else return n*2;
})
console.log(number);


const numberv2= nums.map ((n) =>{(n%2 == 0 ? n/2 : n*2) ;
});
console.log(numberv2);
console.log(nums);

//filter is function of array that returns a new array
const filnumEven = nums.filter( (n) => {return n%2 ==0} );
const filnumOdd = nums.filter( (n) => {return n%2 !=0} );

console.log('filnumsEven,filnumsOdd');


//wap to filter num grater than 100 : [985,25,52,67,25,774,233]

//const filnum = nums.filter((n) => {return n<=100} );
//console.log(filnums);



//console.log('rs985',substring (1));
//console.log(100 <'rs985');


let pricesArr = ['₹985','₹25','₹52','₹67','₹25','₹774','₹233'];

const filprice = pricesArr.filter( (p) => {return p.substring(1) > 100 } );
console.log(filprice);

let brands  = ['Asus','Leneno','Dell','Apple','microsoft'];
let search  = "Asus";
const filbrands = brands.filter((ele) =>{return search == ele}); 

console.log(filbrands);
console.log("mr singh",filbrands);
console.log("singh",filbrands);
