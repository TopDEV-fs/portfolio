import mongoose from 'mongoose';
/**
 * @EXPORTS
 */
export { connectWithDB };

/**
 *Instantiates connection with database
 *@function connectWithDB
 *@instantiates connection with MongoDB
 */

mongoose.set('strictQuery', true);
const connectWithDB = (): void => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  if (!process.env.MONGO_URI) {
    throw new Error('Mongo URI is not defined in environment variables');
  }
  console.log(process.env.MONGO_URI, 'mongo uri');
  mongoose.connect(process.env.MONGO_URI!, {}, (err) => {
    if (err) throw err;
    console.log('Connected to DB');
  });
};
export default connectWithDB;
