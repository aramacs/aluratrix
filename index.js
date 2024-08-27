// TODO: passar logica do regex para um dicionario contendo os valores das vogais

function trocarVogal(text, vowelToReplace, replacement) {
  // usando lib RegExp nativa do js para realizar a troca
  const pattern = new RegExp(vowelToReplace, "gi");

  const modifiedText = text.replace(pattern, replacement);
  return modifiedText;
}

// const text = "Texto para encriptar";
// const vowelToReplace = "e";
// const replacement = "&&";

// console.log(modifiedText);
// const modifiedText = trocarVogal(text, vowelToReplace, replacement);

var result = document.getElementById("result");
result.innerHTML = trocarVogal("Acoldar", "a", "@@@");
var result2 = document.getElementById("result2");
result.innerHTML = trocarVogal("Testar", "a", "@@@");
