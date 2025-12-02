// var a = 2
// var decre = a++
// console.log(decre);


/*a = 2

a me value 2 store hai.
var decre = a++
a++ = post-increment
Post-increment ka matlab:
Pehle purani value use hoti hai → ye value decre me store ho gayi
Phir a increment hota hai → a = 3
Isliye:
decre = 2
a = 3
console.log(decre)

Ye 2 print karega, kyunki decre me original a ki value store hui thi */




/* Important:
a-- negative number nahi banata
a-- bas current value return karta hai aur phir variable ki value 1 se kam kar deta hai
Agar a = 2 ho, a-- return 2, phir a = 1
Output me -2 nahi aayega kyunki -- operator variable ke value ko modify karta hai, return value ke saath negative sign automatic nahi lagta*/



/* Pre (++a, --a) → pehle change, phir use
Post (a++, a--) → pehle use, phir change
Console me jo print hota hai → return value hoti hai, variable ka final value alag hota hai.*/



// var a = 2
// var decre = a-- - --a - --a - --a
// // console.log(a-- + a-- );
// console.log(a);


// var a = 1
// var b = 1

// console.log(a++ + b++ + a++ + b++ + a++ + a++ + a++ + a++ + a++ + a++ + b++ + b++ + b++ + b++ + b++) ;




// operators in js used to perform some operators on data

// Arithemtic operators


// in used + , - , * , / 


// var a = 5
// var b = 2
// console.log("a= ",a, "&b =" , b , );
// console.log("a + b= ", a + b)
// console.log("a - b= ", a - b)
// console.log("a * b= ", a * b)
// console.log("a / b= ", a / b)


// //modulus
// console.log("a % b= ", a % b)


// // Exponentiation

// console.log("a ** b= ", a ** b)





// unary operators



// var a = 5
// var b = 2
// console.log("a= ",a, "&b =" , b , );


// console.log(b++ + ++b) 
// console.log( b++)



/* a = 2

 a--
Post-decrement
Pehle value use hoti hai, phir a = a - 1 hota hai.
So
Use value = 2
New value = 1*/


/* --a
Pre-decrement
Pehle a = a - 1, phir value use hoti hai.
Current a = 1
After decrement: a = 0
Use value = 0*/


// Example 2

/*
Pehle value change hoti hai, phir use hoti hai.
(
var a = 5;
console.log(++a);

 Pehle a = 6
Phir console.log(6)
 Output: 6  */


 /* Pehle value use hoti hai, phir change hoti hai.
 
 var a = 5;
 console.log(a++)

 Pehle console.log(5)

Phir a = 6
Output: 5
Final value of a = 6
 */




// .........chapter ..7..........Math expressions Eliminating ambiguity...........


/*Bodmas Rules......

/*B → Brackets ( )
O → Orders (powers, squares, roots)
D → Division ÷
M → Multiplication ×
A → Addition +
S → Subtraction – */


/* Pehle Brackets
 Phir Orders
 Uske baad Division & Multiplication (left to right)
 Last me Addition & Subtraction (left to right)*/


// code example 
// 2 + 3 × 4

// 2+3 *(4-5**3) + 4



// var num = ((3*4) + 2 ) * 5
// console.log(num);






// ......chapter ...8. concatenating text strings




// var mymessage = "thank you"


// var name = " noor"
// console.log(mymessage + name + " rizvi");
// console.log(mymessage + name + " rizvi");
// console.log(mymessage + name + " rizvi");


// var num = "2" + 3 + 3 + 2 + 5 + 6 + 6
// console.log(num);


/* JavaScript Rule:
Agar pehli value string ho, to + operator string concatenate karta hai.
Matlab: baaki sab numbers ko bhi string bana deta hai.*/



/* Agar aap "-" (minus) operator use karo →
JavaScript strings ko number mein convert kar deta hai
Reason: - operator sirf numbers ke saath kaam karta hai, isliye JS "2" aur "3" ko numbers bana deta hai.*/



/* concatenate sarif + kar ta ha - nhi ha sai ha kay*/



//..................... chapter 9 prompt .....................


// alert (just for message)
//prompt ("message with user information")


// prompt ("enter your name","abc")

// var userName = "Altaf"
// var message = "you are habdsome"
// var result = prompt (userName)



// var number1 = Number(prompt("enter first number"))
// var number2 = +prompt("enter second number")

// var result = number1 + number2

// console.log(result);



// var abc = Number(prompt ("enter you number"))
// var efg = +prompt ("enter you abc")

// var result = abc + efg

// console.log (result)


// var cat = prompt ("how many dogs in your are")
// var calculate = cat + 3
// console.log("calculate=>(243)" ,calculate)



// var unerName = prompt (" enter your name", " Enter your full name");
// alert (" hello" + unerName + " ! welcome");



// var unerName = "altaf"
// var message = "you are handsome" ; 
// var result = prompt (unerName + "," + message)



/* Important Notes

prompt() hamesha string return karta hai, chahe user number type kare.
Agar user Cancel kare → null return hota hai.*/




// ..........chapter 10 ....if else..............


// if(false){
//     console.log("cond is true");
// }
// console.log ("outside card")



var uname = prompt ("enter your name")
var absentstudent = "noor"

if (uname === absentstudent) {
    console.log(uname + " you are not allow");
    
}    


else {
    console.log(uname +" yes allow in class")
}



// var uname  = prompt ("enter your name")
// var absentstudent = "ali"
// var absentstudent2 = "noor"
// var absentstudent3 = "bilal"

// if(uname === absentstudent||uname === absentstudent2 ||uname === absentstudent3) {
//     console.log(uname +" your not allow in class ");
    
// }

// else{
//     console.log ( uname +" yes allow in class")
// }






// var uname  = prompt ("enter your name")
// var absentstudent = "ali"

// if(uname == absentstudent) {
//     console.log("your not allow in class ");    
    
// }






// = assign 
//  == condition 
// === condition with type (string,number)



// var a = 5;
// var b = "5";




// var a = 10;   10 ko a mein store kar diya

// console.log( a===b)
/* = → Assignment Operator
Kaam: Variable ko value assign karta hai
Type ya comparison ka koi role nahi*/





/* var a = 5;
var b = "5";

console.log(a == b);  // true
*/

/* == → Equality Operator

Kaam: Values compare karta hai
Type ignore karta hai (type conversion hoti hai)
True agar values same ho*/





/* var a = 5;
var b = "5";
console.log(a === b);  // false
/*


/* === → Strict Equality Operator
Kaam: Value + Type dono compare karta hai
True sirf jab value aur type dono same ho
Number aur String ka type different → false*/



// video 1:19:40