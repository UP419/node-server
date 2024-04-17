const _ = require('lodash');

const num = _.random(1,20);
console.log(num);


const print = _.once(() => {
    console.log('Hello, World');
})

//function will only run once

print();
print();
print();