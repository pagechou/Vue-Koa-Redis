import Router from 'koa-router'
import ctrl from '../api/PublicController'

const router = new Router()
router.prefix('/public')
router.get('/captcha',ctrl.CreateCaptcha)

module.exports = router