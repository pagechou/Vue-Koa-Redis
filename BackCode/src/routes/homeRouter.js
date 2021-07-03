const Router = require('koa-router')
import indexFn from '../api/HomeController'

const router = new Router()

router.get('/',indexFn)

module.exports = router