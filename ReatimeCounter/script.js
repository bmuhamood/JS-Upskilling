document.getElementById("text-input").addEventListener("input", function () {
  let textInput = document.getElementById("text-input");
  let charCount = textInput.value.length;
  if (charCount > 50) {
    textInput.value = textInput.value.substring(0, 50);
    charCount = 50;
  }
  let charCountDisplay = document.getElementById("char-count");
  charCountDisplay.innerHTML = "Character Count: ".concat(charCount, "/50");
  if (charCount === 50) {
    charCountDisplay.style.color = "red";
  }
});

