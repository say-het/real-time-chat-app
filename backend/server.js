import express from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js';
import userRoutes from './routes/user.routes.js';
import { app, server } from './socket/socket.js';

import { connectToMongoDb } from './db/connectToMongoDB.js';
// const app = express();
const PORT = process.env.PORT||5000; 
//    const cors = require('cors');

//    app.use(cors({
//          origin: 'http://localhost:3000' 
//      }));


config();

// app.get('/',(req,res)=>{
//     res.send('HEllo bruh 2000');
// })

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);

server.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`Server us running on port ${PORT}`)
})
