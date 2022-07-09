// Understanding protoyping  
// Whenever a object Array or a fucntion is created Js engine assigns it some hidden properties

let object  = {
    firstname : "Akshay",
    lastname : "Patil",
    printFullname : function (rVal) {
    console.log("🚀 ~ file: main.js ~ line 8 ~ rVal", rVal)
        console.log("main.js =>>",`${this.firstname} ${this.lastname}`);
    }
}


let object2 = {
    firstname : "Laxman",
}

// object2.__proto__ = object


//// Nnew Example for prototype

function getName (val)  {console.log("Test function")};

Function.prototype.chainingFunction = function (name) {
    console.log("Protoype executing sequnce check",name);
    return "Protoype executing sequnce check";
}


object.printFullname.chainingFunction("Akshay");