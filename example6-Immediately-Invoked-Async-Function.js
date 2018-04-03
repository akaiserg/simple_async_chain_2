const rp = require('request-promise');

(async function () {
    console.log(await rp("https://jsonplaceholder.typicode.com/posts/1"));
})();


(async () => {
    console.log(await rp("https://jsonplaceholder.typicode.com/posts/2"));
})();



