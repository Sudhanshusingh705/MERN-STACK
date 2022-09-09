console.log('HELLO JAVASCRIPT!');

b  = "some string "

console.log(b);

age =  (30);

console.log(age);

console.log(typeof(age));

if(age>18){
    console.log('you are eligible for DL');
    g = "this should be global";
    let x = "this should be local";
    const y ="this should be local &  cnstant";
    var z ="this work for function";
  //  y = "some other value";

    console.log(x);
}else{
    console.log('not eligible');
}

console.log(g);
//console.log(x);
//console.log(y);
console.log(z);


//wap to check if a number is divisible by 7 and 11
no = 77;
//divi by 7 and 11
// divi by 7 not 11
// divi by 11 not 7

if(no%7==0 && no%11==0){
    console.log('it is divisible');
}else{
    console.log('it is not divisible');
}

var num = 70;
if (num%7==0 && num%11==0)
{
    console.log("Divisible by 7 and 11");
}else if(num%7==0 && ! (num%11==0)){
    console.log("Divisible by 7 and not 11");
}else if (!(num%7==0) && (num%11==0)){
    console.log("Divisible by 11 and not 7");
}else{
    console.log("Neither Divisible by 7 not by 11");
}
