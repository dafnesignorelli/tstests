export function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data obtained");
      resolve("Process completed!");
    }, 2000);
  });
}

// Use .then() to handle success value and .catch() to handle errors
fetchData()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Erro:", error);
  });

// Output:
// "Data obtained" (after 2 seconds)
// "Process completed!"
