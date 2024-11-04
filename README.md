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

## debounce 

```ts

export function debounce(fn: Function, delay: number): Function {
    let time: ReturnType<typeof setTimeout>;
  
    return function (...args: any[]) {
      clearTimeout(time); 
      time = setTimeout(() => {
        fn(...args); 
      }, delay);
    };
  }


```
