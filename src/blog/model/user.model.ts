import { Document } from "mongoose";

export interface Usermodel extends Document{
    readonly name:string;
    readonly username:string;
    readonly email:string;
    readonly password:string;
}