export function debounce(fn: Function, delay: number): Function {
    let time: ReturnType<typeof setTimeout>;
  
    return function (...args: any[]) {
      clearTimeout(time); 
      time = setTimeout(() => {
        fn(...args); 
      }, delay);
    };
  }
