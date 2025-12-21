// var myName = prompt ("enter your name")

// var myNameLenght = myName.length;
// if(myNameLenght > 3){
//     var result = myName.slice(0,3);
//     console.log("result=>", result);
//     console.log(typeof result)
// }



// var cityName = prompt("enter a text")

// if (cityName.includes("  ")){
//     console.log("hey, double space not allowed");
    
// } else{
//     console.log("no double space")
// }





// var cityName = prompt ("enter a text");
// var cityNames =  cityName.length;

// for (i = 0; i < cityNames; i++){
//     if( cityName.slice(i, i+2)==="  ") {
//         console.log("hey , double space not allow");
//         break
//     } else {
//         console.log("there is no space try again")
//     }
//     } 
    



// var cityName = prompt ("enter a text")
// var cityLenght = cityName.length;

// for(var i = 0 ; i < cityLenght; i ++){

//     if(cityName.slice(i,i + 2) === "  " ){
//         console.log("Double space not allowed")
//         break
//      }
// }



//..... chapter 23, strings finding segments......


/* finding ka matlab haoi string ke ander se kise chhote hiss ( word / part / segment ) koi dhoodhn ya nikalna */



// indexOf...

// var text = "this is word war 2 stor";
// console.log(text.indexOf("word"));  // output 8

// matlab "word" index 8 sae start ho rha ha agar na mile to _1 deta hai




// includes..

// var text = ("this a world war 2 stor")
// console.log(text.includes("war 2 "));

// sarif yes / no batata hai



// slice..

// var text = ("this a world war 2 stor")
// console.log(text.slice(3,22));
// console.log(text.length)



// charAt..

// var text = ("this a world war 2 stor")
// console.log(text.charAt(5));



// match..

// var text = ("this a world war 2 stor")
// console.log(text.match(/this a /g));




// replace

// var text = "this a world war 2 stor";

// text = text.replace("world war 2", "Second World War");

// console.log(text);

//  srif pehli baar replace





// replaceAll 

// var text = "hello  hello";

// text = text.replaceAll("hello", "hi");

// console.log(text);

// jitni baar hello aayega sab replace ho jayega hi se




// var text = "hello hello hello";

// text = text.replace(/hello/g, "hi");
// console.log(text);

//  /hello/ -> jo dhoondhna hai g global sab jagah



// var text = prompt ("enter text");

// text = text.replace(/hello/g, "hi");
// console.log(text);



// var name = "altaf"
// var check = name.indexOf("a")
// console.log(check);






// var cityName = "this is word war 2 story of the world";
// var cityNames = cityName.length;

// for (i = 0 ; i <cityNames; i++){
//     if(cityName.slice(i, i + 12) === "word war 2" ){
//         cityName = 
//         cityName.slice(0, i) + "this scond world war 22" + cityName.slice(i, i + 12);
//         console.log("cityName =>", cityName)
//     }
// }

// var cityName = "this is word war 2 story of the world";

// for (var i = 0; i < cityName.length; i++) {
//     if (cityName.slice(i, i + 12) === "word war 2") {
//         cityName = cityName.slice(0, i) + "second world war 22" + cityName.slice(i + 12);
//         break; // match mil gaya, loop ko stop karo
//     }
// }

// console.log(cityName);




// short cut  code ...

// var cityName = prompt ("enter a text")
// var cityName = "this is word war 2 store of the world"

// cityName = cityName.replace("word war 2 ","second world war 22 ")

// console.log(cityName);


// replace.....

// var text = "I love apple";

// text = text.replace("apple", "banana");

// console.log(text);




// chapter 24, strings finding characters at a location .......


// var name = "alt";
// var names = name.charAt(name.lenght - 1);

// if(names == "al") {
//     var upper = names.toUpperCaes();
//     console.log(upper, "found");
    
// }else{
//     console.log("not found")
// }


// var name = "alt";
// var names = name.charAt(0);

// if(names=="A") {
//     var upper = names.toUpperCase();
//     console.log(upper,"found");
    
// }
// else{
//     console.log("not found")
// }