// ----------------------------
// IIFE (Immediately Invoked Function Expression)
// ----------------------------

(function(){
    console.log("IIFE executed instantly!");
})();

(function(name){
    console.log(`Hello ${name} from IIFE!`);
})("KT");
