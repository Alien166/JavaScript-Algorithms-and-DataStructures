/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
     let ans = [];
  let ansLength = 0;
  let val = new Promise((res, rej) => {
    functions.forEach(async (it, idx) => {
      try {
        let resp = await it();
        ans[idx] = resp;
        ansLength++;
        if(ansLength === functions.length){
            res(ans);
        }
      } catch (e) {
          rej(e);
      }
    });
  });
  return val;
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
