import http from 'http';
import SocketIO from 'socket.io';

const validNick = (nickname) => {
    var regex = /^\w*$/;
    return regex.exec(nickname) !== null;
}

const findIndex = (arr, id) => {
    var len = arr.length;
    while (len--) {
        if (arr[len].id === id) {
            return len;
        }
    }
    return -1;
}

const sanitizeString = (message) => {
    return message.replace(/(<([^>]+)>)/ig, '').substring(0, 35);
}

export function index(app) {
    return Promise.resolve(() => {
        let users = [];
        let sockets = {};
        let server = http.Server(app);
        let io = new SocketIO(server);
        io.on('connection', (socket) => {
            let nick = socket.handshake.query.nick;
            let currentUser = {
                id: socket.id,
                nick: nick
            };
        });

        if (findIndex(users, currentUser.id) > -1) {
            console.log('[INFO] User ID is already connected, kicking.');
            socket.disconnect();
        } else if (!validNick(currentUser.nick)) {
            socket.disconnect();
        } else {
            console.log('[INFO] User ' + currentUser.nick + ' connected!');
            sockets[currentUser.id] = socket;
            users.push(currentUser);
            io.emit('userJoin', { nick: currentUser.nick });
            console.log('[INFO] Total users: ' + users.length);
        }

        socket.on('ding', () => {
            socket.emit('dong');
        });

        socket.on('disconnect', () => {
            if (findIndex(users, currentUser.id) > -1) users.splice(findIndex(users, currentUser.id), 1);
            console.log('[INFO] User ' + currentUser.nick + ' disconnected!');
            socket.broadcast.emit('userDisconnect', { nick: currentUser.nick });
        });

        socket.on('userChat', (data) => {
            let _nick = sanitizeString(data.nick);
            let _message = sanitizeString(data.message);
            let date = new Date();
            let time = ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2);

            console.log('[CHAT] [' + time + '] ' + _nick + ': ' + _message);
            socket.broadcast.emit('serverSendUserChat', { nick: _nick, message: _message });
        });
    });
};