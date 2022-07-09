// Snippet for call, apply, bind starts here

let name1 = {
    firstname : "Akshay",
    lastname : "Patil"
}

let name2  = {
    firstname : "Hritik",
    lastname : "Roshan"
}

function getFullName(city, state) {
    console.log(`${this.firstname} ${this.lastname} from ${city} in ${state}`);
}

// //call method
// getFullName.call(name1, 'Mumbai', "Maharastra");
// getFullName.call(name2, 'Mumbai', "Maharastra");


// //appy method
// getFullName.apply(name1, ['Manali', "Uttrakand"]);

// // bind method starts here 
// let bindFunction = getFullName.bind(name2, 'New york city', "New york");
// bindFunction();



// Polyfill is callback function of browser
// Polyfill for bind function 

Function.prototype.polyfillForBind =  function(...args){

console.log("🚀 ~ file: index2.js ~ line 35 ~ args", args);

    let obj = this;
        params = args.slice(1);
    let innerFunction = function (...args2) {
    console.log("🚀 ~ file: index2.js ~ line 41 ~ innerFunction ~ args2", args2)
        
        obj.apply(args[0], [...params, ...args2]);
    }

    return innerFunction
}


let printMyname = getFullName.polyfillForBind(name1, "Mumbai");
printMyname("Maharastra");



// Example for bubbleing and Event delegation 
document.getElementById('input-mar').addEventListener('keyup',(e)=>{
    console.log("🚀 ~ file: index2.js ~ line 57 ~ document.getElementById ~ e", e.target.dataset)
    if(e.target.dataset.cap != undefined){
        e.target.value = e.target.value.toUpperCase()
    }
})

