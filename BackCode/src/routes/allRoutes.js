const combineRoutes = require('koa-combine-routers')

const home = require('./homeRouter')
const pRoute = require('./publicRouter')

module.exports = combineRoutes(
    home,
    pRoute
)