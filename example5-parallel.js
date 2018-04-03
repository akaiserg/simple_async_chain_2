const rp = require('request-promise');

async function logContent(urls) {
    await Promise.all(urls.map(
        async url => {
            const content = await rp(url);
            console.log(content);            
        }));
}

const list = ["https://jsonplaceholder.typicode.com/posts/1","https://jsonplaceholder.typicode.com/posts/2","https://jsonplaceholder.typicode.com/posts/3"];


logContent(list);
