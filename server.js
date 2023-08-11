require('dotenv').config()

require('./config/database') //this only works with common js

const app = require('./app-server')

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
	console.log(`i am listening on ${PORT}. We in the house.`)
})