// Q1) str1="abc"  str2="pqr"  result ="apbqcr"

// Q2) str1="abcdef"  str2="pqr"  result ="apbqcrdef"

//Q3) str1="abc"  str2="pqrstu"  resulet ="apbqcrstu"

function merge(str1, str2) {
    let length = Math.min(str1?.length, str2?.length)
    let res = ""
    for (let i = 0; i < length; i++) {
        res += str1[i]
        res += str2[i]
    }
    let extra
    if (str1?.length > str2?.length) {
        extra = str1.slice(length, str1?.length)
        res += extra
    } else {
        extra = str2.slice(length, str2?.length)
        res += extra
    }
    return res
}

console.log(merge("abc", "pqr"));

console.log(merge("abcdef", "pqr"));

console.log(merge("abc", "pqrstu"));