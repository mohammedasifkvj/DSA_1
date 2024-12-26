// Set is a collections unique values
// Set are dynamically sized (no need of declare the size at time of creation)
// CAn contain mix of differenet data type (even object and function)
// Set do not maintain insertio order
// Sets are iterable can use for of loop 
// Searching and deleting an element is faster when compare to Array
// can pass array as an argument to set

const set =new Set([1,2,3])

// Add
set.add(4)
set.add(4) //Duplicate Ignore by set 
// Check an element is present
console.log(set.has(4));

//Length of the set
console.log(set.size);

//Delete an elelment
set.delete(3)

//Delete all element
set.clear()

for(const item of set){
    console.log(item);
    
}