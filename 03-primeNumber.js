function primeNumber(n) {
    if(n < 2)return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0){
            return false
        }
    }
    return true
}

// function primeNumber(n) {
//     if(n < 2)return false;
//     for (let i = 2; i < n; i++) {
//         if(n % i === 0){
//             return false
//         }
//     }
//     return true
// }
console.log(primeNumber(1));
console.log(primeNumber(2));
console.log(primeNumber(3));
console.log(primeNumber(6));
console.log(primeNumber(7));
