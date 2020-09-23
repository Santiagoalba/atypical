
require('dotenv').config()

const app = require('./server')
require('./database')


app.listen(app.get('port'), () => {
    console.log('listening server', app.get('port'))
    console.log('Enviroment', process.env.NODE_ENV)
} )

