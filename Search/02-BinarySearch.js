function binarySearch(arr, target) {
    let leftIndex=0
    let rightIndex=arr.length-1

    while(leftIndex <= rightIndex){
        let midIndex=Math.floor((leftIndex + rightIndex)/2)
        if(target=== arr[midIndex]){
            console.log(`value find at index ${midIndex}`);
            return midIndex;
        }
        if(target< arr[midIndex]){
            rightIndex=midIndex -1
        }else{
            leftIndex=midIndex + 1
        }
    }
    console.log(`value not found in Array`);
    return -1
}

console.log(binarySearch([1,5,6,7,9,11,13,15,18],18));
