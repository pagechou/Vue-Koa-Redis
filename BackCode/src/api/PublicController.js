import svgCaptcha from 'svg-captcha'

class PublicCtrl {
    constructor() { }
    CreateCaptcha(ctx) {
        const captcha = svgCaptcha.create({
            size: 4,
            noise: Math.floor(Math.random() * 5),
            color: true,
            width: '120',
            height: '50'
        })
        ctx.body = captcha.data
    }
}
export default new PublicCtrl