console.log("***OBJECT***")
let a = 20;
let arr = [200,4,5,7,8];
//let student = [raju,5,7890];

let stu = {name: 'singh', age: 5 , roll:7890};

console.log(stu);
console.log(stu.name);
console.log(stu['roll']);
console.log(stu['age']);

console.log(stu.address);

stu.address = 'Mumbai';
stu.age = 30;
console.log(stu);


const product = {
    name : 'laptop',
    price : 50000,
    colors : ['Black','white','green','Blue'],
}
    console.log(product.colors[1]);

 const orders = [
    {id: 1456, product: 'laptop', price: 40000},
    {id: 2563, product: 'mobile', price: 30000},
    {id: 13845, product: 'Tablet', price: 20000},
 ]
 //2nd order product name
 console.log(orders[1].product);
 console.log(orders[1].price);
 console.log(orders[1].id);


 const { age, address,sname } = stu;

 console.log(age,address,sname);
//rollNo
//thisIsCalledcamelCase


console.log('***____******')

const brand = 'Apple';
const price = 120000;
const model = '13_ProMax';
const rating = 9.9;

const mobile = { brand, price,model,rating };

console.log(brand);
console.log(price);
console.log(model);
console.log(rating);

console.log(Object.keys(mobile));
console.log(Object.values(mobile));
console.log(Object.entries(mobile));

//1st method total price adding-----
console.log('***Adding total price****')
let s =  0;
for (let temp of orders){
    //console.log(temp.price);
    s+=temp.price;
};
console.log(s);

//2nd method adding total price----- 
let prices = orders.map(ord => ord.price)
console.log(prices);
const sum = prices.reduce( (p1, p2) => {return p1 + p2 })
console.log (sum);