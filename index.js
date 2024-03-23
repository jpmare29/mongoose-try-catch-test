const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('connect success');
        throw new Error('Wazato');
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

main();


