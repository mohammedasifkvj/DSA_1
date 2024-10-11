function recuBinarySearch(arr, target) {
    return search(arr, target,0, arr.length -1)
}

function search(arr, target,leftIndex,rightIndex) {

    if(leftIndex > rightIndex){
        return -1
    }

    let midIndex=Math.floor((leftIndex + rightIndex)/2)

    if(target=== arr[midIndex]){
        return midIndex
    }
    if(target< arr[midIndex]){
        return search(arr, target,leftIndex,midIndex - 1)
    }else{
       return search(arr, target,midIndex + 1,rightIndex)
    }
    
}


console.log(recuBinarySearch([1,5,6,7,9,11,13,15,18],55));
