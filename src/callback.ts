export function fetchData(callback: any) {
    setTimeout(() => {
      console.log("Data obtained");
      callback(); // all the callback function after getting the data
    }, 2000);
  }
  
  function showMessage() {
    console.log("Process completed!");
  }
  
  // Call fetchData and pass showMessage as callback
  fetchData(showMessage);
  
  // output:
  // "Data obtained" (after 2 seconds)
  // "Process completed!"


  //  Callback

  /**
   * A callback is a function that is passed as an argument to another function and is called when the asynchronous operation completes. 
   * Callbacks are used to define what should happen after a task completes, but they can be difficult to manage when there are multiple asynchronous operations.
   * 
   */
  