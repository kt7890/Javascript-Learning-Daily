// ----------------------------
// CALLBACK FUNCTION
// ----------------------------

function add(a,b,callback){
    let result = a+b;
    callback(result);
}

function printResult(res){
    console.log("Result from callback:", res);
}

add(5,10, printResult);

// Inline callback
add(3,6, (ans) => console.log("Inline:",ans));
