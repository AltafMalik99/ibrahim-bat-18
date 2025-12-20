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


// var cityName = "this is word war 2 story of the world";
// var cityNames = cityName.length;

// for (i = 0 ; i <cityNames; i++){
//     if(cityName.slice(i, i + 12) === "word war 2" ){
//         cityName = 
//         cityName.slice(0, i) + "this scond world war 22" + cityName.slice(i, i + 12);
//         console.log("cityName =>", cityName)
//     }
// }

var cityName = "this is word war 2 story of the world";

for (var i = 0; i < cityName.length; i++) {
    if (cityName.slice(i, i + 12) === "word war 2") {
        cityName = cityName.slice(0, i) + "second world war 22" + cityName.slice(i + 12);
        break; // match mil gaya, loop ko stop karo
    }
}

console.log(cityName);
