function fibnacci(n) {
    const fib=[0,1];
    for(let i=2;i<n ; i++){
    fib[i]=fib[i-1]+fib[i-2]
    }
    return fib ;
}
////// O(n)
function recurFibnacci(n) {
    if(n < 2) return n;
    return recurFibnacci(n-1)+recurFibnacci(n-2)
}
//// // O(2^n)
0,1,1,2,3,5,8,13,21,34,55
console.log(recurFibnacci(2))
console.log(recurFibnacci(3))
console.log(recurFibnacci(5))

0,1,1,2,3,5,8,13,21,34,55
console.log(fibnacci(2))
console.log(fibnacci(3))
console.log(fibnacci(6))
console.log(fibnacci(7))
console.log(fibnacci(10))

// Method 3- Using Binets formula TC- O(1) (Not suitable for large numbers
function fib(n) {
    const sqrt5=Math.sqrt(5)
    const phi=(sqrt5+1)/2
    const psi=(1-sqrt5)/2

    return Math.round((Math.pow(phi,n) - Math.pow(psi,n))/sqrt5)
}
0,1,1,2,3,5,8,13,21,34,55
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));

function fibn(n) {
    let dp = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      let newFib = dp[i - 2] + dp[i - 1];
      dp.push(newFib);
    }
    return dp[n];
  }
  0,1,1,2,3,5,8,13,21,34,55
 console.log(fibn(15));