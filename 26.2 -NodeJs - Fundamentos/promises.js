const { promptSimShell } = require("readline-sync");

promise1 = new Promise((resolve, reject) => {
    try {
        resolve(22);
        // throw new Error('Errrrrrrrroouu')
    } catch (error) {
        reject(error)
    }
});

// promise1
//     .then(p => console.log(p))
//     .catch(e => console.error(e.message))

promise2 = new Promise((resolve, reject) => {
    try {
        resolve(true);
        // throw new Error('Errrrrrrrroouu')
    } catch (error) {
        reject(error)
    }
});

// promise2
//     .then(p => console.log(p))
//     .catch(e => console.error(e.message))

promise3 = new Promise((resolve, reject) => {
    try {
        resolve('Trybe');
        // throw new Error('Errrrrrrrroouu')
    } catch (error) {
        reject(error)
    }
});

// promise3
//     .then(p => console.log(p))
//     .catch(e => console.error(e.message))

Promise.all([promise1, promise2, promise3])
    .then(p => console.log(p))
    .catch(e => console.error(e.message))
