import * as dotenv from 'dotenv';
dotenv.config();
console.log("env", process.env.MONGO_HOST,process.env.MONGO_PORT,process.env.MONGO_DB_NAME)
const CONFIG = {
 MONGODB_URL: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}` }
export default CONFIG;
