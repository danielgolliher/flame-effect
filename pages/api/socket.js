import { Server } from 'socket.io';

let activeUsers = 0;

const SocketHandler = (req, res) => {
    import { Server } from 'socket.io'; let activeUsers = 0; const SocketHandler = (req, res) => { if (res.socket.server.io) { console.log('Socket is already running'); } else { console.log('Socket is initializing'); const io = new Server(res.socket.server); res.socket.server.io = io; io.on('connection', socket => { activeUsers++; io.emit('activeUsers', activeUsers); socket.on('createParticles', (data) => { socket.broadcast.emit('newParticles', data); }); socket.on('disconnect', () => { activeUsers--; io.emit('activeUsers', activeUsers); }); }); } res.end(); }; export default SocketHandler;
};

export default SocketHandler;