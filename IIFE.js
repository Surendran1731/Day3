 //A.Print odd numbers in an array
 let arr=[1,2,3,4,5,6];
 (function(arr){
     for(let i=0;i<arr.length;i++){
      if(arr[i]%2==1){
            console.log(arr[i])
        }
     }
 })(arr)

//B.Convert all the strings to title caps in a string array

let string="lorem ipsum dolor sit amet consectetur adipisicing elit";
(function(string){
    string=string.toLowerCase().split(' ');
    // console.log(string)
    for(let i=0;i<string.length-1;i++){
        string[i]=string[i].charAt(0).toUpperCase() + string[i].slice(1); 
        // console.log(string[i])
    }
   console.log(string.join(' '));
})(string)

//C.Sum of all numbers in an array
let num=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
 (function(sum){
for(let i=0;i<num.length;i++)
    sum=sum+num[i];
    console.log(sum);
})(sum);

//D.Return all the prime numbers in an array
const newArray =[1,2,3,4,5,6,7,8,9,10];
 (newArray.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
console.log(num !== 1);
}))(newArray);

//E.Return all the palindromes in an array
let str="mam";
(function(str){
    if(str===str.split('').reverse().join('')){
        console.log("It is an palindrome");
    }
    else{
        console.log("It is not an palindrome");
    }
})(str);


//F.Return median of two sorted arrays of the same size.
// let arr1=[3,4,6];
// let arr2=[1,2,5];
let arr1=[10,30,50];
let arr2=[20,40];
(function(arr1,arr2){
    let array=[...arr1,...arr2];
    array.sort((a,b)=>a-b);
   let medianIndex=Math.floor(array.length/2);
   let median=array.length%2===1?array[medianIndex]:(array[medianIndex-1]+array[medianIndex])/2;
   console.log(Math.round(median));
})(arr1,arr2);
  

//G.Remove duplicates from an array
const a = [2,3,4,5,5,4];
(function(a){
    let unique = [...new Set(a)]; 
    console.log(unique)
})(a)


//H.Rotate an array by k times
let a=[1,2,3,4,5,6,7];
let k=3;
(function(a,k){
    const removed=a.splice(0,k);
    console.log([...a,...removed]);
})(a,k)