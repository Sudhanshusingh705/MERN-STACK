//function are reusable block of code which can be 
//called anywhere in program

function addNums(a,b){
    //var only work for functionss
    console.log(a,b);
    var c  = a+b;
    console.log(c);

}
//if parametar r not given it will pass undefined
addNums(534,856);
//console.log(c);

console.log('---secound type function---')
const prodNums = function(x,y){
    console.log(x*y);
    return x*y;
    console.log('this  will not be  printed');
}

const res = prodNums(36,56);
console.log(res);

//sum and product function---- es6website....(ecma6)----
console.log('---sum and product---')
const sumProd = (a,b)  => {                   
    const sum  = a+b;
    const prod =a*b;

    return [sum,prod];
}

const [s,p]  = sumProd(2345,345);
console.log(s,p);