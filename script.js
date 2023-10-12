console.log("page loaded...");

let requestSpan = document.querySelector("#requests");
let connectionSpan = document.querySelector("#connections");
let userName = document.querySelector("#userName")

function accept(id) {
    let element = document.querySelector(id);
    element.remove()
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

function deny(id) {
    let element = document.querySelector(id);
    element.remove()
    requestSpan.innerText--;
}

function edit() {
    userName.innerText = "Ronald Mcdonald"
}