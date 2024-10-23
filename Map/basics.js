//Map is an ordered collection of key value pairs 
// Both key and value can be any of data type
// to retrive a value can use corresponding key
// Maps are iterable using a for of loop

//Object is unordered Where map is ordered
// An object has a prototype and may contain default keys
//Map does not coantain any keys by default (map has no prototype)
// can attach functionality to an object where maps are restricted just storing data
// optionally can accept array aas an argument 

// To create map ,we use the Map constructor 

const map=new Map([['a',1],['b',2]])

//console.log(map);

// Add an new value
map.set("c",3)
map.set("d",4)

// check whether a key is exist or not
console.log(map.has("c"));

// Number of key:value pair
console.log(map.size);

// Delete a key:value pair 
map.delete("d")

// Delete all the key value pairs 
map.clear()

for(const [key,value] of map){
    console.log(`${key}:${value}`);   
}

console.log(map);
