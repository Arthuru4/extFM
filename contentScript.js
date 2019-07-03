document.addEventListener('DOMContentLoaded', function () {
    let button = document.querySelector('.play');
    let buttonConect = document.querySelector('.connect');


    buttonConect.addEventListener('click', () => {
        let socket = new WebSocket("ws://192.168.31.90:3333");

        socket.onopen = function () {

        };

        socket.onmessage = function (event) {
             chrome.runtime.sendMessage({Message: "Play"}, function (response) {

        });
        };
    });

    button.addEventListener('click', () => {
        //TODO: SEND SIGNAL FROM HERE (POPUP HTML POPUP JS)
        chrome.runtime.sendMessage({Message: "Play"}, function (response) {

        });
    })
});