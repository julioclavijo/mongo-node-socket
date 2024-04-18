// Configuracion del servidor
import app from './app';
import {Server as socketServer} from 'socket.io';
import http from 'http';
import sockets from './sockets';

import { connectDB } from './db';

connectDB();

const server =http.createServer(app);
const httpServer = server.listen(3000);
console.log("Server is running on port 3000");

// Se puede validar con: http://localhost:3000/socket.io/socket.io.js

const io = new socketServer(httpServer);
sockets(io);

