// function factorial(n) {
//     let fact = 1;
//     for (let i = 2; i <=n; i++) {
//         fact= fact*i
//     }
//     return fact;
// }
//// TC-- O(n)
function factorial(n) {
    if( n<= 1){return 1} 
    return n*factorial(n-1)
}
//// TC-- O(n)
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));