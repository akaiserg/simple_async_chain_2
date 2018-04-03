
// always returns a promise
async function asyncFunc() {
    console.log('asyncFunc()'); // (A)
    return 'abc';
}
asyncFunc().
then(x => console.log(`Resolved: ${x}`)); // (B)
console.log('main'); // (C)s

// Output:
// asyncFunc()
// main
// Resolved: abc

console.info("---------------------------");

// Returned Promises are not wrapped  
async function asyncFunc() {
    return Promise.resolve(123);
}
asyncFunc()
.then(x => console.log(x)) // 123
