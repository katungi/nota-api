import mongoose from "mongoose";
import {DB} from "../config";

export default async() => {
    try{
        mongoose.connect(DB).then(()=> {
            console.log('DB connected successfully');
        })   .catch((err) => {
            console.log(err);
        });
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}