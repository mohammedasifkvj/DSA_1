function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===target){
            return i
        }
        
    }
    return -1 
}
// TC -- O(n)
console.log(linearSearch([5,2,5,5,4,8,6,4],55));
