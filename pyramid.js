function pyramid(char, height, isCentered) {
  let result = "\n";

  for (let i = 0; i < height; i++) {
    let level;
    if (isCentered) {
      // Inverted pyramid
      let spaces = " ".repeat(i);
      let chars = char.repeat((height - i) * 2 - 1);
      level = spaces + chars;
    } else {
      // Normal pyramid
      let spaces = " ".repeat(height - i - 1);
      let chars = char.repeat(i * 2 + 1);
      level = spaces + chars;
    }

    result += level + "\n";
  }

  return result;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));
