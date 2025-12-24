// var myName = prompt ("enter your name")

// var myNameLenght = myName.length;
// if(myNameLenght > 2){
//     var result = myName.slice(0,2);
//     console.log("result=>", result);
//     // console.log(typeof result)
// }







// var myName = prompt ("enter a number")

// var myNameLenght = myName.length;

// if(myNameLenght > 2){
    //     var  result  = myName.slice(0,2)
    //     console.log(result)
    // }





    // var names = prompt ("enter a number")

    // var name1 = names.length;

    // if(name1 > 3){
    //     var name2 = names.slice(0,2)
    //     console.log(name2)
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
// var cityNames = cityName.length

// for (i = 0; i < cityNames; i ++){
//     if( cityName.slice(i, i+2) ==="  "){
//         console.log("hey , double space not allowed")
//         break
//     }else{
//         console.log("therr is no space try again")
//     }
// }




// var cityName = prompt ("enter a text")
// var cityLenght = cityName.length;

// for(var i = 0 ; i < cityLenght; i ++){

//     if(cityName.slice(i,i + 2) === "  " ){
//         console.log("Double space not allowed")
//         break
//      }

// }



// var cityName = prompt ("enter a text")

// var cityNames = cityName.length

// for (var i = 0 ; i <cityNames ; i ++ ){
//     if(cityName.slice(i, i+2)=== "  "){
//         console.log("bouble space ");
//         break
//     }else{
//         console.log("single space")
//     }
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


// sarif yes / no batata hai ka is ma jo ap console ap ma value call kare rha ha ho wo ha ya nhi



// slice..

// var text = ("this a world war 2 stor")
// console.log(text.slice(3,22));
// console.log(text.length)
// kaha se kaha tak ka element ko dakana ha


// charAt..

// var text = ("this a world war 2 stor")
// console.log(text.charAt(5));

// var text = "this is a apple"
// console.log(text.charAt(11))


// match..

// var text = ("this a world war 2 stor")
// console.log(text.match(/this a /g));



// replace

// var text = "this a world war 2 store";

// text = text.replace("this a world war 2", " Second World War");

// console.log(text);

// is ma jo value add kar na ha or jo remove kar ne ha or is ma ap value add be kare sagta ho

//  srif pehli baar replace




// replaceAll

// var text = " this is a apple";

// text = text.replaceAll("a "," and banana ");

// console.log(text);

// jitni baar hello aayega sab replace ho jayega hi se


// .........




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

// var city = "!pakistan";

// for (i = 1; i < city.length; i++) {
//     if (city.charAt(0)) {
//         console.log(i)
//     }
// }

// var result = city.charAt()
// console.log(result);




// var result = city.charAt()
// console.log(result);
// 3