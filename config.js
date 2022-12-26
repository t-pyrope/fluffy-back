require('dotenv').config()

const config = {
    mongodb: {
        uri: `mongodb+srv://fluffy-admin:${process.env.MONGO_DB_PASSWORD}@fluffy-back.mgfx43w.mongodb.net/?retryWrites=true&w=majority`,
    },
};

module.exports = config;
