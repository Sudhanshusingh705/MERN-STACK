for(let i=0; i<20; i++){
    console.log(i);
}

// wap  to print even number from 1 to 100 

for (let j=1; j<=100; j++){
    if(j % 2 == 0)
    console.log(j);
}

for(let i=2;i<100;i+=2){
    console.log(i);
}
// temp variable !!
nums = [5,45,67,23,89,90,43,67];

console.log('for of loops\n')

for(let n of nums){
    console.log(n);
}

//while loop example---
console.log('----while loop----')
a = 1;

while(a<10){
    console.log(a);
    a++;
}

//do while loop--------
console.log('---DO WHILE LOOP---')
n = 10;
do{
    console.log(n);
    n++;
}while(n<10);

//factorial-----
console.log('---Factorial number---')
  let z = 6;
  let f  = 1;
 
  for(let i =2;i<=z;i++){
    console.log(f);
    f = f*i;
  }
  console.log(f);

////
console.log('***TRAVERSE ARRAYS***')
const numbers = [45,23,67,89,90,43,73];
//TRAVERSING ARRAYS----

for (let i=0; i<numbers.length; i++){
console.log(numbers[i]);
}

for(let n of numbers){
console.log(n);
}

//foreach fuction--
console.log('***FOR EACH***');
numbers.forEach( (a,i)  => {console.log(a,i)});