const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080});

wss.on('connection', (ws) => {
    console.log('Подключился новый клиент!');

    ws.send(JSON.stringify({
        type: 'system',
        content: 'Добро пожаловать!'
    }));
})

ws.on('message', (message) =>{
    let parseMessage;
    try {
        parseMessage = JSON.parse(message);
        console.log('Получено сообщение: ', parseMessage);
    }
    catch (e) {
        console.log('Произошла ошибка приобработке сообщения: ' + e);
        return;
    }

    wss.clients.forEach((element) =>  {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(parseMessage));
        }
    });
})

console.log('Сервер запущен на порту 8080'); /*чтобы его завершить : cntrl+c*/