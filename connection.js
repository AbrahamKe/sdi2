const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5433,
    password: "Yusra@18",
    database: "web_map"
})

module.exports = client

