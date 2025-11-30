//String se pehle space allowed hota hai, string ke baad space bhi allowed hota hai.
// JavaScript space ko ignore kar deta hai, jab tak wo quotes ke andar na ho.

// agar string ka ander JavaScript unhe save karta hai, unka meaning hota hai.

// Quotes ke bahar space ka koi meaning nahi hota
// ";" ke baad space ho → koi farq nahi


// String ke andar space = important
// String ke bahar space = ignored (no effect)



// keep in mind
// 1.All are fundamentals
// c , java , c# , phyton , javascript (variable)



// website name peractic
// programiz javascript





// ..................chapter 2... variable for string...........



/*Variable of String

A string variable wo variable hota hai jisme text type data store hota hai.
JavaScript me string hamesha quotes ke andar likhi jati hai, jaise " ", ' ', ya ` `.

String variable banane ke liye var, let, ya const keyword ka use hota hai. */




// define ak martabe use or variable har jag use kare gyae

// var name = "Mark"

// is ma var keyword ha or name variable ka name

// variable -> very --> (changable)
// variable is like a container you can use it everywhere


// javascript line by line chalti ha
// javascript ma ak line ma error a gya to baki ka code nhi chal gya


// javascrip ka file ka ander top pa sarif variable jati ha variable ka value nhi 


// JavaScript me agar error aata hai, to uske baad ki lines execute nahi hoti

// var name ="Altaf"
// console.log(myName);
// console.log(myName);
// console.log(name);


// var myName ="noor";
// console.log(myName);


// var aur let → value update ho sakti hai
// const → value update nahi ho sakti (constant)


// js ma hamesha last wala updated value show ho gye



// important point

/*Declaration = variable ka naam batana, value optional
Agar value nahi di → JavaScript me value undefined hoti hai
var → function scoped
let → block scoped
const → block scoped, value change nahi hoti*/



// first initialize

// const myName = "ali";

// myName ="noor"
// //reassign (just change variable string)

// //reinitialze (also create with var keybword)
// let myName = "bilal";
// console.log(myName);





/* Assign = variable ko pehli baar value dena

Reassign = variable ki purani value ko badal dena

let / var = reassign allowed

const = reassign allowed nahi*/



/* let name = "Ali";
Yahan "Ali" → assign ki gayi value hai.
Isse initial value / initial assignment bhi bolte hain.*/




/* Reassign (value badalna)

Jab tum same variable ki value change karte ho → isse reassign kehte hain.*/


/*let name = "Ali";   // assign
name = "Noor";      // reassign
Yahan "Noor" → purani value ko replace kar raha hai → ye reassign hai. */


// age = 20 ;
// console.log(age);



// var sent2 = "i don't care"
// var sent = 2
// console.log(sent2);

// alert(sent2)

// jab be kise ki type check kar na na ho to (typeof)
//  se check kar sagta ha or agar blue color console ma a rha ho to number ho gya agar black to wo sting ho gya

// js left to right chalti ha




// javascritp ma sarif (_) or (&) sig use kar sagta ha is la alav or koi be sig use nhi kar sagta 

// example code

// let name = 'john';
// let _private = 'secret';
// let $element = 'div'


// valid example 


// let userName = 'Altaf'
// let total_count = 100
// let price$USD = 50



// invaild example


// let user-name = 'Altaf'
// let total count = 100;
// let price@USD = 50;





/* Variable kya hota?
Jis box me value store hoti ho → woh variable.*/


// example in variable in js

// let city = "karachi"

// is ma (let) keyword ha or (city) variable  ha or (karachi) os ki value ha 






//...................... chapter 3 variable of Number...................


/* Variable of Number

A number variable wo variable hota hai jisme numeric data (numbers) store kiya jata hai.
JavaScript me numbers quotes ke bina likhe jate hain — ye integers, decimals, ya negative numbers ho sakte hain.

Number variable banane ke liye hum var, let, ya const keyword use karte hain.*/



/*+ operator agar kisi operand ke sath string ho → wo concatenate (join) kar deta hai, add nahi karta.
Iska matlab hai numbers bhi string me convert ho jate hain aur jodne ki bajaye join ho jate hain. */



/* -, *, /, % Operators

Agar string me number ho, JS string ko number me convert karke calculate karta hai*/



// var age = "40";
//  var newAge = 30;
//  var totalAge = age - newAge
// concatenate
//  console.log(totalAge);
 

 





//......... capter 4 ................. variable names legal and illegal............


/* Note: Reserved Keywords in JavaScript
Reserved Keywords wo words hote hain jo JavaScript language ke liye already use ho chuke hain.
Inhe variable, function, ya identifier ke naam ke liye use nahi kar sakte.

Agar use karoge → syntax error aayega.*/





// case sensitive
// js is a ase sensitive


// var name
// console.log(Name);



// camel case

// var myfaterfirstname =""
// var myFaterfirstName =""



// pascal case

/* Har word ka first letter capital
Mostly classes ke liye use hota hai*/

// class StudentDetails {}
// let NewStudent = new studentDetails ();




// snake case 
/* Words ko underscore (_) se separate karte hain
Mostly old code ya constants me use hota hai*/


// let my_name = "ALI"
// const MAX_SCORE = 100;



// kebab-case

/*Words ko hyphen (-) se separate karte hain

Mostly CSS classes or IDs me use hota hai, JavaScript me variables ke liye use nahi hota */

// .my-class-name {color:red}






// .....chapter 5............. Math expressions Familiar operators


// equation : any sentence which have include = and number alphabets called expre
// expression : any sentence which have include numbe and alphabets called expre


// var sum = 2+2;
// console.log(sum);


// var divide = 10 / 2
// console.log(divide);



// var reminder = 10 % 3
// console.log(reminder);


// var tMarks = 600
// var marks = 300

// var percentage = ( marks / tMarks ) * 100
// console.log( percentage +"%");

// Unfamilliar operators


// agar console ma number ka sat percentage ka sig show kar wa na ho ta console.log(percentage +"%");ya lakhi de


// var number = 10;
// // var newNumber = number + 1;
// // console.log(newNumber)


// var newNumber = number ++;   // post increment
// var newNumber = ++number;
// console.log(newNumber)              

// console.log(number++);




// console.log(++number);

// console.log(number)

// var number = 10;


// var number = 10;
// var newNumber = number++
// console.log(newNumber);
// console.log(number);




// var a = 1;
// // b = 4
// // console.log(num++)


// var test = a++  + a++ + ++a  + 
//        // 2   +   2    +  3  
// console.log(test);




// var a = 5;
// // b = 4
// var test = a++ + ++a + ++a + ++a
// console.log(test);







/*++number → pehle value ko 1 se increment karega, fir use console me show karega
Initial number = 10
++number → number = number + 1 → number = 11
Fir console me 11 print hota hai */


/* number ab already 11 ho chuka hai (pre-increment ne change kar diya)
Isliye output → 11*/



/* pre-increment 
  pre incement -> pehle + 1 fir use  */


/* post-increment -> pehle use fir + 1 */



/* ++number -> pehle increment karega fir return*/
/* number++ -> pehle return karega , fir increment */

