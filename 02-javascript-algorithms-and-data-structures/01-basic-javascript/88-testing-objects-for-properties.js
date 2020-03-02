// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  var result;
  if (myObj.hasOwnProperty(checkProp)) {
    result = myObj[checkProp];
  } else {
    result = "Not Found";
  }
  return result;
}

// Test your code by modifying these values
checkObj("gift");
console.log(checkObj("gift"));
