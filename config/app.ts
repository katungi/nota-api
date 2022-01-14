import express, {Application, Request, Response} from 'express';
import helmet from "helmet";

export default async(app: Application) => {
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    // routes

    app.get('/', (req: Request, res: Response)=> {
        res.send('<h1>Hello from the TypeScript world!</h1>');
    });

    return app
}