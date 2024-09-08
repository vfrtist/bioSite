const main = document.querySelector('main')


fetch('./images/')
    .then((res) => {
        console.log("RESOLVED!", res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log("ERROR!", e);
    });

function make(item) { return document.createElement(item.toString()); }