# typescript tests

## Palindrome string

```ts

export function isPalindrome(str: string): boolean {
    // código
  
    const newStr = str.split("");
    var reverseArray = newStr.reverse().join("");
  
    if (reverseArray !== str) {
      return false;
    }
    return true;
  }

```
