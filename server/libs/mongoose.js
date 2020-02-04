import mongoose from 'mongoose';
import fs from 'fs';
import config from '../config';

mongoose.Promise = global.Promise;
const uri = config.mongoose.uri;
const opts = config.mongoose.options;

export async function connect() {
    try {
        await mongoose.connect(uri, opts);
        const db = mongoose.connection;
        // Events
        db.on('disconnected', (err) => {
            console.log(`MongoDB disconnected: ${uri}`);
            connect();
        });

        db.on('reconnected', (err) => {
            console.log(`MongoDB reconnected: ${uri}`);
        });
        // Success
        console.log(`MongoDB connected on ${uri}`);

        // get Models
        let models = fs.readdirSync(`${config.base}/api/models`);

        for (let i in models) {
            if (models[i].indexOf('.js') > -1) {
                require(`${config.base}/api/models/${models[i]}`)
            }
        }
    } catch (err) {
        console.log(`MongoDB-> connection error: ${uri} details->${err}`);
        process.exit(-1);
    }
}