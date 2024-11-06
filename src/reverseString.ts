export function reverseString(text: string) {
  return text.split(" ").reverse().join("");
}

console.log(reverseString("Ola pessoal"))