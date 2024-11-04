export function isPalindrome(str: string): boolean {
    // código
  
    const newStr = str.split("");
    var reverseArray = newStr.reverse().join("");
  
    if (reverseArray !== str) {
      return false;
    }
    return true;
  }

  // second option
  export function isPalindrome2(str: string): boolean {
    const reversedStr = str.split("").reverse().join("");
    return reversedStr === str;
  }
  
  // thrist option
  export function isPalindrome3(str: string): boolean {
    const normalizedStr = str.toLowerCase().replace(/\s+/g, "");
    const reversedStr = normalizedStr.split("").reverse().join("");
    return reversedStr === normalizedStr;
  }
  
  console.log(isPalindrome3("A man a plan a canal Panama")); // true
  console.log(isPalindrome3("hello")); // false
  
  // fourth option
  
  const isPalindrome4 = (str: string) =>  str.split("").reverse().join("") === str;
  
  
  console.log("isPalindrome4: ",isPalindrome4("radar"));
  