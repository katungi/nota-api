import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import {PORT} from './config';
import App from './config/app';
import dbConnection from './www';
import * as mongoose from "mongoose";

dotenv.config();

const startServer = async () => {
    const app: Express = express();
    // setup app configs
    await App(app);
    // setup db
    await dbConnection();
    // run the server !
    app.listen(PORT, ()=> console.log(`Running on ${PORT} ⚡`));
}
startServer();