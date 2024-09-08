import fs from 'fs';

const main = document.querySelector('main');

for (let item of fs.readdir('./images/')) {
    console.log(item);
}
function make(item) { return document.createElement(item.toString()); }