function reverseArrayAndDigits(arr) {
    // Step 1: Reverse the array
    let reversedArray = arr.reverse();

    // Step 2: Reverse the digits of each element in the array
    let finalArray = reversedArray.map(num => {
        let reversedNum = parseInt(num.toString().split('').reverse().join(''));
        return reversedNum;
    });

    return finalArray;
}

// Example usage
let inputArray = [698, 456];
let result = reverseArrayAndDigits(inputArray);

console.log(result); // Output: [654, 896]
