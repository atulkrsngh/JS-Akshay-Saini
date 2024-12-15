const obj = {
    counter: 0,
    getData() {
        console.log("Fetching Data...", this.counter++); // Relies on `this` pointing to `obj`
    }
};

const debounce = function (fn, delay) {
    let timer;
    return function () {
        // If context is not preserved, `this` will not refer to the original `obj`
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(); // `this` is lost here
        }, delay);
    };
};

const debouncedGetData = debounce(obj.getData, 300);
debouncedGetData(); // Error or incorrect behavior because `this` is not `obj`
/*

const debounce = function (fn, delay) {
    let timer;
    return function () {
        let context = this; // Capture `this`
        let args = arguments; // Capture arguments
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args); // Preserve context and arguments
        }, delay);
    };
};

const obj = {
    counter: 0,
    getData() {
        console.log("Fetching Data...", this.counter++);
    }
};

const debouncedGetData = debounce(obj.getData, 300);
debouncedGetData(); // Correctly prints: "Fetching Data... 0"

*/
