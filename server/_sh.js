// Создаётся экземпляр клиента
var WebSocketClient = require('websocket').client;
var client = new WebSocketClient();

// Вешаем на него обработчик события подключения к серверу
client.on('connect', (connection) => {
    connection.sendUTF('Hi, there!');
});

// Подключаемся к нужному ресурсу
client.connect('ws://localhost:3333/');