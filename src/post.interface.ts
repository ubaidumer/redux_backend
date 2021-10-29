import { Document } from "mongoose";
export interface posts extends Document{
    userId:string,
    title:string,
    body:string
}
  
  