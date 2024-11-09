export const exVar = () => {
  console.log("before: ", prima);
  var prima = 0;
  console.log("1: ", prima);
  var testDue;
  console.log("2: ", testDue);
  testDue = 1;
  console.log("3: ", testDue);
};

export const exLet = () => {
  console.log("before: ", sec);
  let sec = 0;
  console.log("1: ", sec);
  let testDue;
  console.log("2: ", testDue);
  testDue = 1;
  console.log("2: ", testDue);
};

export const exConst = () => {
  console.log("before: ", terz);
  const terz = 0;
  console.log(terz);
  const testDue;
  console.log("2: ", testDue);
  testDue = 1;
  console.log("2: ", testDue);
};

export const exConst2 = () => {
  //console.log("before: ", terz);
  const terz = 0;
  console.log("exConst2: ", terz);
};
