document.getElementById("translate-btn").addEventListener("click", function () {
  var inputText = document.getElementById("input").value;
  var outputDiv = document.getElementById("output");

  var decryptDict = {
    A: "ai",
    E: "enter",
    I: "imes",
    O: "obes",
    U: "ufat",
  };

  var decryptedText = decryptVowels(inputText, decryptDict);
  outputDiv.innerText = "Decrypted text: " + decryptedText;
});

document.getElementById("undo-btn").addEventListener("click", function () {
  var inputText = document.getElementById("input").value;
  var outputDiv = document.getElementById("output");

  var decryptDict = {
    AI: "A",
    ENTER: "E",
    IMES: "I",
    OBES: "O",
    UFAT: "U",
  };

  var originalText = decryptVowels(inputText, decryptDict);
  outputDiv.innerText = "Original text: " + originalText;
});

function decryptVowels(text, dict) {
  var decryptedText = "";
  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i).toUpperCase();
    if (dict[char]) {
      decryptedText += dict[char];
    } else {
      decryptedText += text.charAt(i);
    }
  }
  return decryptedText;
}
