//A.Print odd numbers in an array
let num=[1,2,3,4,5,6,7,8,9,10]
let odd_even=function(){
    for(let i=0;i<num.length-1;i++)
        if(num[i]%2==1)
        console.log(num[i]);
}
odd_even(num);

//B.Convert all the strings to title caps in a string array

let string="lorem ipsum dolor sit amet consectetur adipisicing elit";
let str_array=function(){
    string=string.toLowerCase().split(' ');
    // console.log(string)
    for(let i=0;i<string.length-1;i++){
        string[i]=string[i].charAt(0).toUpperCase() + string[i].slice(1); 
        // console.log(string[i])
    }
    return string.join(' ');
}
//  str_array(string)
console.log(str_array(string))

//C.Sum of all numbers in an array
let num=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
let sum_num=function(){
for(let i=0;i<num.length;i++)
    sum=sum+num[i];
    return sum;
}
// sum_num(num);
console.log(sum_num(sum));

//D.Return all the prime numbers in an array
const newArray =[1,2,3,4,5,6,7,8,9,10];
const myPrimeArray = newArray.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(myPrimeArray);.

//E.Return all the palindromes in an array
let str="noon";
let palindrome=function(){
    if(str===str.split('').reverse().join('')){
        console.log("It is an palindrome");
    }
    else{
        console.log("It is not an palindrome");
    }
}
palindrome(str);

//F.Return median of two sorted arrays of the same size.
// let arr1=[3,4,6];
// let arr2=[1,2,5];
let arr1=[10,30,50];
let arr2=[20,40];
let medianArray=function(arr1,arr2){
    let array=[...arr1,...arr2];
    array.sort((a,b)=>a-b);
    //   console.log(array);
    let medianIndex=Math.floor(array.length/2);
    return median=array.length%2===1?array[medianIndex]:(array[medianIndex-1]+array[medianIndex])/2;
}
 medianArray(arr1,arr2);
 console.log( medianArray(arr1,arr2));


//G.Remove duplicates from an array
//  const a = [2,3,4,5,5,4];
const a=["rose","hello","jasmine","rose","mango","hello"]
let removeDuplicates=function(){
    let unique = [...new Set(a)]; 
    console.log(unique)
}
removeDuplicates(a)



//H.Rotate an array by k times
let a=[1,2,3,4,5,6,7];
let k=3;
let rowLeft=function(a,k){
    const removed=a.splice(0,k);
    return [...a,...removed]
}
console.log(rowLeft(a,k))