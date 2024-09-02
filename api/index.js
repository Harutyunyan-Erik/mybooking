import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import { log } from 'console';

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
      } catch (error) {
        throw(error);
      }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});
mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
})

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);


app.listen(1111, () => {
    console.log("Connected to Backend")
});