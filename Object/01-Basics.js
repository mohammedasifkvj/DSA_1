// Object is unordered collection key ,value pair
// Where key can only be String or symbol 
// and value can be any data type
//Object is cannot iterable using a for of loop
// An object has a prototype and may contain default keys
const obj={
    name:"Bruce",
    age:25,
    "key-three":true,
    sayMyName:function(){
        console.log(this.name); // this  reffers to the object
        
    }

}

// Can Add fields using dot or bracket notation
obj.hobby="driving"

console.log(obj.name);  // Dot notation 
console.log(obj["age"]); // Bracket notation
console.log(obj["key-three"]);
// Bracket notation is primarily used object is contains spaces or hyphon
console.log(obj);


// Delete 
delete obj.hobby
console.log(obj);
obj.sayMyName()

// Object Metods {.keys(), .values(), .entries()}


// Time Complexity 
//Insert- O(1)
//Access- O(1)
//Delete- O(1)
//Search - O(n)
//.keys() -O(n)
//.values()-O(n)
// .entries() - O(n)
