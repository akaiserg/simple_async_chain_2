const rp = require('request-promise');


const syncCall = async function (){

	const r1 = await rp("https://jsonplaceholder.typicode.com/posts/1");
	const r2 = await rp("https://jsonplaceholder.typicode.com/posts/2");
	console.info(r1);
	console.info(r2);	
}

syncCall();




/*
async function all() {
    const [r1, r2] = await Promise.all([
        rp("https://jsonplaceholder.typicode.com/posts/1"),
		rp("https://jsonplaceholder.typicode.com/posts/2"),
    ]);
	console.info(r1);
	console.info(r2);
}

all();

*/
