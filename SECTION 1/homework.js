let num = 23456789;
let reverse = 0; 

while(num > 0){
    console.log(reverse);
    let r = num%10;
    reverse = reverse*10 + r;
    num  = parseInt(num/10);
}

console.log(reverse);


//(******HOME WORK********)
//1.WAP TO CHECK NUM IS PRIME ..
//2.WAP TO SQUARE ALL THE NUMBERS ANA STORE IN A NEW ARRAY-[34,6,23,67,4,7,2].
//3.WAP TO FIND ALL PERFECT SQUARE FROM 1 TO 100.
//4. WAP FILTER ALL EVEN NUM AND STORE A NEW ARRAY [34,6,23,67,4,7,2].
//5.

//QUESTION 1...
console.log('***NUMBER IS PRIME***')
var number=25, check=0;
for(i=2;i<Math.floor(Math.sqrt(number));i++)
{    if(number% i==0)
    check++;

}
if(check==0)
console.log(`number ${num} is prime`);
else
console.log(`number ${num} is not prime`); 


//QUESTION 2 .............
console.log('*****SQUARE THE ELEMENT OF ARRAY & STORE IN ARRAY*****')
var arr = [2,3,4,5,6,7,8,9,10]
arr  = arr.map((ele)=>{
    ele *=ele;
    return ele;
})
console.log(arr);


//Q3..
console.log('*****PRINT ALL PERFECT NUMBERS****')
for (let i=1;i<100;i++)
{
    let j =1,sum =0;
    while(j<i)
    {
        if(i%j ==0)
        sum += j;
        j++;
    }
    if(sum ==i)
    console.log(`${i} is perfect number`);
}


//Q4....
console.log('****FILTER ALL EVEN NUMBER & STORE IN ARRAY ****')
const array =[2,3,4,5,6,7,,8,9,10]
let evenArray;
evenArray = array.filter((ele)=>{
    return ele;
});
console.log(evenArray);



//Q5...
console.log('***FIBONACCI SERIES***')
function fibo(n)
{
    let a=0,b=1,c;
    console.log(a);
    console.log(b);
    for (let i=2;i<n;i++)
    {
        c=a+b;
        console.log(c);
        a=b;
        b=c;
    }
}
fibo(15);


