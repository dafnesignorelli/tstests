export function heavyTask(callback: Function) {
  setTimeout(() => {
    console.log("Heavy task finished!");
    callback();
  }, 2000);
}
