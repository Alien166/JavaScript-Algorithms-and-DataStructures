const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";
  // change code below this line
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  // change code above this line
  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList);
