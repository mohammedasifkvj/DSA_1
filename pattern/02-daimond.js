function printDiamond(n) {
    // Upper half of the diamond (including the middle)
    for (let star = 1; star <= n; star++) {
      let spaces = n - star;
      console.log(" ".repeat(spaces) + "* ".repeat(star));
    }
  
    // Lower half of the diamond
    for (let star = n - 1; star > 0; star--) {
      let spaces = n - star;
      console.log(" ".repeat(spaces) + "* ".repeat(star));
    }
  }
  
  
  printDiamond(4);
  