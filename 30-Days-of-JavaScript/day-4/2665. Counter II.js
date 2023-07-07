/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    counter=init;
    return {
        increment :()=> counter +=1,
        reset     :()=> counter=init,
        decrement :()=> counter -=1,


    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
