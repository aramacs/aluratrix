function trocarVogal(text, vowelToReplace, replacement) {
  // usando lib de Regex nativa do js para realizar a troca
  const pattern = new RegExp(vowelToReplace, "gi");

  const modifiedText = text.replace(pattern, replacement);
  return modifiedText;
}

const text = "Texto para encriptar";
const vowelToReplace = "e";
const replacement = "&&";

const modifiedText = trocarVogal(text, vowelToReplace, replacement);
console.log(modifiedText);
