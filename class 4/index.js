//Array

// what is array
// an array is a special variable that can store multiple values in a single variable
// value are storedin square brackets []
// each vslue an index string from 0 number 



// var student = ["ahmed", "ali" , "anas" , "bilal" , "jawed"]

// console.log(student)
// console.log(student.length);

// console.log (student[1])


// var student = ["ahmed" , "ali" , "noor" , "bilal" , "ahad"]

// console.log(student)
// console.log(student.length)

// console.log(student [4])



// chapter 16 ..... Array adding and removing elements.....


// var student = ["ahmed", "ali" , "anas" , "bilal" , "jawed"]

//  student[4] = "noor"
// console.log (student)



// is ma hum value added kar sagta ha 



// primitive Data...

// jo change nhi hote directly
// number , string , boolean , undefined , null ,symbol , biglnt



// non-primitive Data type (referance type)
// Non-Primitive types me complex values store hoti hain, jaise objects, arrays, functions.
// change kar sagat ha
// array , objact , function , 



// javascript use in variable work


// 1 number -- integers / floats
// 2 string -- text
// 3 boolean -- true /false
// 4 undefined -- variables ka value nhi diya
// 5 null -- intentionall empty value
// 6 symbol -- unique identifier rerely use hoti hai 
// 7 Biglnt -  bohot bare number
// 8 array -- multiple value
// 9 Function – code block as value







// var arr = []

// arr [0] = "a"
// arr [1] = "b"

// console.log(arr);

// var name = "altaf"

// var names = name

// names = "change"

// console.log(name)
// console.log(names)



// var arr = ["a" , "b"]
// var newArr = arr

// newArr = ["C" , "d"]  // mutable
// // copy by reference
// // shallow copy
// console.log(arr)
// console.log(newArr)



// var arr = ["a" , "b"]
// var newArr = arr

// newArr = ["x" , "y"]

// console.log(arr)
// console.log(newArr)



// ...push ...

// var arr = [1,2,3,4,5]

// arr.push(6)            // add in last
// console.log(arr);


// ...unshift...

// var arr = [1,2,3,4,5]
// arr.push(6)    //add a last
// arr.unshift(2)     // add a start 
// console.log(arr); 


 
// // ...shift...

// var arr = [1,2,3,4]
// arr.shift ()
// arr.shift()   
// arr.shift()  
// arr.unshift(4)
// arr.push(2)
// console.log(arr);


// ..pop ....

// var arr = [1,2,3,4,5]
// arr.pop()
// arr.pop()          // remove a last 
// console.log(arr);




// ..splice....

// var arr = [1,2,3,4,5]
// console.log( arr.splice(0,6 ,"a" ));
// console.log( arr)

// // 0 means index , 1 means how many elements will remove (quantity)

// is ma jo element remove hoti ha wo show ho gye
// agar ap doser console create kare gye to jo element rhe gye thi ho os ma show ho gye


// lakin is ma jo element remove ho gya wo console ma show nhi ho gye
// var arr = [10,20,30 ,40,50]
// arr.splice(1,3)
// console.log(arr)



// var arr = [1,2,3,4,5,6]
// console.log(arr.splice(2,5))
// console.log(arr.length)





// is ma ap kahae be value add kar sagta ha
// var arr = ["apple","banana","mango"]
// arr.splice(1,0 , "Ahmed raza khan sb ")
// console.log(arr);


// slice....

// var arr = ["a", "b" , "c" , "d" , "e" , "f"]
// console.log(arr.slice(1,5))     
  
// hamesha last ma ak kam ho gye 
// b se start kare gye 4 tak yani , "b" "c" "d"
// slice make a new array
//  0 and 2 are indexes





// var arr = ["a", "b","c","d","e","f"]
// console.log(arr.slice(1,5))


//  var arr = ["a", "b",,]
//  console.log(arr.indexOf("d")); // -1 means no value includes
//  console.log(arr.includes("al"))  // includes return boolean
 
// agar array ka ander koi data na ho to ap os ko acess kar na ki kohieh kar gye to -1 he a gye 




// var myName = "Altaf"
// console.log(myName.indexOf ("l"));
// console.log(myName.includes ("a"));   // ya ma jo value ha wo value lakhe gye to true a gye agar koi or value jo is ma nhi ha false ay gye






// ES6 

// var arr = ["a" ,"b" ,"c" ,"d"]
// var newArr = ["a","b","c","d"]
// console.log(newArr);   // copy by referance




// var arr = ["a" ,"b" ,"c" ,"d"]
// var newArr = Array.from (arr)   // ES6 method  // make a shallow copy
// console.log(newArr);




//  var arr = ["a" ,"b" ,"c" ,"d"]
// var newArr = [...arr , "malik" , "altaf"]   // spread operator
// console.log(newArr);

 

/*Iska kaam hota hai array ya object ko spread (phaila) dena, yani unke andar ki values ko separate kar den ya hamesha teen dot se show kar ti hai */


// let a = [10, 20, 30];
// let b = [...a , 40];

// console.log(b);



// marge arrays

// var x = [1,2];
// var y = [3,4]

// var z = [...x, ...y];
// console.log(z);


// spread operator in object

// var obj1 = { name:"Ali", age :20};
// var obj2 = {...obj1 , city :"karachi"};
// console.log(obj2);



// var arr = [1,2,3,4,[5,6,7,8], ["a", "b" , "c" , "d"]];
// console.log(arr [5][1]); // access nested array value




// nested array 

// var arr = [
//     ["apple", "mango"],
//     ["red" , "yellow"]
// ];


// console.log(arr[0][0]); 
// console.log(arr[1][1]);




// Nested Array Example — Level 2 (Medium)

// var students = [
//     ["Ali",20],
//     ["Noor",18],
//     ["Saad", 28]
// ];

//     console.log( students[0][1]);
//     console.log( students[2][0])
    



// var data = [
//     [1,2,3],
//     [4,5,[10,20,30]],
//     [7,8, [["x","y"], 99]]
// ];
// console.log (data [0][2])
// console.log(data [1][2][1]);
// console.log(data[2][2][0][1]);
// console.log(data[2][2][0]);





// var twoDArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9,[2,"g",["c",10]]],
// ];
// console.log("twodArray",twoDArray)
// console.log("length",twoDArray.length)
// console.log(twoDArray[2][3][2][0])


// chapter 13 and 14 not read