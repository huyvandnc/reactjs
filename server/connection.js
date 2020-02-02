import { connect, connection } from 'mongoose'
import configs from './configs'

const connectToDatabase = async () =>
    await connect(configs.mongo_url || '', {
        useUnifiedTopology: true,
        useFindAndModify: false,
        autoIndex: false,
        bufferMaxEntries: 0,
        useNewUrlParser: true
    })

export { connectToDatabase, connection }