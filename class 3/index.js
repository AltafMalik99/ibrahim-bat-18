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

// alert (3 - "2" + "2")

// var sname = prompt ("enter your name")


// if(sname !== "saad") {
//     alert("welcome sir hasnain", sname)
// }

// var age = prompt ("enter yoyr age")

// if(age < 10){
//     console.log("you are young");
    
// }

// is ma 10 se  oper ka number do gya to chal gya wrong nhi chale gyae



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



// var uname = prompt ("enter your name")
// var absentstudent = prompt ("enter your absent students")

// if (uname === absentstudent) {
//     console.log(uname + " you are not allow");
    
// }    


// else {
//     console.log(uname +" yes allow in class")
// }



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





// peracts


// var userName = prompt ("enter you are student name")

// absentStudent = ("noor")

// if (userName === absentStudent  ) {
//     console.log ("not allow in class")
// } else{
//     console.log ("yes allow in class")
// }




// .........chapter 11 comparison operators..................



/* javascript comparion operators woh hote hain jo do value ko compare karte hain inka
resutl true ya false hota ha  */



/* 1  Equal to ( == )
Sirf value compare karta hai (type nahi).*/

// 5 == "5"   // true




/* 2 Strict Equal ( === )
Value + type dono compare karta hai.*/

// 5 === "5" //false
// 5 === 5 // true




/* 3. Not Equal ( != )
Value equal na ho to true.*/

// 5 !=3 //true
// 5 !=5





/*4. Strict Not Equal ( !== )
Value + type dono check karta hai. */


// 5 !== "5"   // true
// 5 !== 5     // false



// 5. Greater Than ( > )

// 7 > 5 //true




// var a = 10;
// var b = 5;

// console.log("a === b :", a === b);
// console.log("a == b:", a == b);
// console.log ("a === b:" ,a != b);


/*Operator	Meaning
==	Equal
===	Strict Equal
!=	Not Equal
!==	Strict Not Equal
>	Greater
<	Less
>=	Greater or Equal
<=	Less or Equal */





/* Expression	Check	Result
10 > 5	kya 10 bara hai 5 se?	true
10 < 5	kya 10 chhota hai 5 se?	false
10 == 5	kya equal hain?	false
10 != 5	kya equal nahi hain?	true
10 >= 10	kya barabar ya bara hai?	true
10 <= 5	kya chhota ya barabar hai?	false*/




// var a = 10;
// var b = 5;

// console.log("a == b :", a == b);         // false
// console.log("a === b :", a === b);       // false
// console.log("a != b :", a != b);         // true
// console.log("a !== b :", a !== b);       // true

// console.log("a > b :", a > b);           // true
// console.log("a < b :", a < b);           // false

// console.log("a >= b :", a >= b);         // true
// console.log("a <= b :", a <= b);         // false



// var num1 = 2
// var num2 = 0

// if(num2 !== num1 ) {
//     console.log( " you are right ")




// var stdage =  (prompt("enter your are name"))
// var stdage = Number (prompt("enter your are age"))

// var name = "ali"
// var age = 16;

// if (stdage === name || stdage === age){
//     console.log("you passed matric")
// }


// console.log(7 != "7");

// var a = 5;
// var b = "7";
// console.log(a <= b);
// console.log(a <= b);


// var x = 10;
// var y = 10;
// console.log(x >= y);




// 1 Equal to (==)
// sirf value check karta hai
//  type (number , string) ignore karta hao

// 5 === "5"  // true
// 10 == 10 // true

// Example 5 == "5" -> value same hai (5) string type ignore hogi  -> true




// 2 strict equal (===)

// value + type dono check karta hai

// 5 === "5"  // false (number vs string)
// 10 === 10  // true

// === me agar type alag ho  -> false ho gya





// 3 Not Equal (!=)
/*Definition
!= ka matlab hai “not equal”
Yeh operator true return karta hai agar do values barabar na hon, aur false agar barabar hon. */


/* console.log(10 != 5);      // true
console.log(10 != 10);     // false
console.log('5' != 5);     // false
console.log(0 != false);   // false
console.log('abc' != 'ABC'); // true
*/






// 4 strict Not equal (!==)

// value + type dono barabar nhi ho  - >
/* Strict Not Equal (!==)
!== ka matlab hai strict not equal.
Ye check karta hai:
Value same na ho
Type bhi same na ho
Agar value ya type dono me se koi match na kare → true return hota hai
Agar value aur type dono same hon → false return hota hai*/


// Agar type alag hai → hamesha !== true dega
// Agar type same aur value same → !== false dega


// 5 !== "5"  // true (type alag)
// 5 !== 5


// var a = "ali";
// var b = "noor";
// console.log(a !== b);




// 5 Greater Than (>)
// Check karta hai ki left side bada hai ya nahi


/* Greater Than ( > )

> ka matlab hota hai “Is se zyada?”
Agar left side wala number right side wale number se bada ho, to result true aata hai.
Agar bada na ho, to false aata hai.*/

// 5 > 3  // true
// 2 > 7  // false
// 10 > 10  // false


// 6 Less Than (<)


/* Less Than ( < )

< ka matlab hota hai “Is se chhota?”
Agar left side ka number right side se chhota ho, to true aata hai.
Agar chhota na ho, to false aata hai.*/




/*7 Greater Than or Equal (>=)
Check karta hai ki left side bada ya barabar hai 

Greater Than or Equal ( >= )
>= ka matlab hota hai:
“Left side number bada ho YA barabar ho.”
Agar value bari ho → true
Agar value barabar ho → true
Agar chhoti ho → false*/


// 5 >= 3
// 5 >= 5
// 2 >= 9
// '8' >= 6
// "b" >= "a"




/* Less Than or Equal (<=)
Check karta hai ki left side chhota ya barabar hai
Less Than or Equal ( <= )

<= ka matlab hota hai:
"Left side number chhota ho YA barabar ho."
Agar value chhoti ho → true
Agar barabar ho → true
Agar bari ho → false*/

// 3 <= 5
// 5 <= 5
// 8 <= 2
// '4' <= 10



// condition1 && condition2
// Dono conditions true honi chahiye, tabhi result true hoga.
// Agar koi bhi condition false ho → result false

/*let a = 5;
let b = 10;

console.log(a > 0 && b > 5);   // true && true → true
console.log(a > 0 && b < 5);   // true && false → false
console.log(a < 0 && b > 5);   // false && true → false
console.log(a < 0 && b < 5);   // false && false → false



true && true → true
true && false → false
false && true → false
false && false → false */



