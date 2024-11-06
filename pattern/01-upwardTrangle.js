// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
    let stars = "";  // Initialize an empty string for stars
    for (let j = 1; j <= i; j++) {
        stars += "* ";  // Add stars to the string
    }
    console.log(stars);  // Print the string of stars after the inner loop
}


// // Second Method

// let triangle = "";  // Initialize an empty string for the whole triangle

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         triangle += "*";  // Add stars to the string
//     }
//     triangle += "\n";  // Add a newline after each row
// }

// console.log(triangle);  // Print the whole triangle at once
