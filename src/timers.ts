// polling
const id = setInterval(() => {
  console.log("ciao")},1000);


// delay 
setTimeout(()=>{
    clearInterval(id);
    console.log("stop");
},5000);