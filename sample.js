const client = require('./client');

async function init(){
    const result = await client.get('name:1');
    console.log('Result->', result);
}

init();