// Returning a rejected Promise leads to the result of the async function being rejected
async function asyncFunc() {
    return Promise.reject(new Error('Problem!'));
}
asyncFunc()
.catch(err => console.error(err)); // Error: Problem

console.info("----------------------------------------------")


async function asyncFunc2() {
    return Promise.reject('error');
}
asyncFunc2()
.catch(err => console.error(err)); // error

