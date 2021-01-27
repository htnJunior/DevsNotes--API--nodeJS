const mysql =   require('mysql')

const connect = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

connect.connect((error) => {
    if(error) throw error
    console.log(`Conectado ao Banco de Dados: ${process.env.DB_NAME}`)
})

module.exports = connect