function palindrome(str) {
    if (str?.length == undefined) return null
    let start = 0;
    let end = str?.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        // console.log(str[start]);
        start++;
        end--;
    }
    return true;
}

console.log(palindrome());  
