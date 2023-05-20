console.log("page loading...");

var buys = [0, 0, 0];
var span = [
    document.querySelector("#post"),
    document.querySelector("#post"),
    document.querySelector("#post")   
];

function buy(id) {
    buys[id]++;
    span[id].innerHTML = buys[id];
}