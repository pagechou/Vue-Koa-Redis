import { Validator } from 'vee-validate'
const dictionary = {
    'zh-CN': {
        // attributes and messages
        messages: {
            required: field => '请输入' + field,
            email: _ => '请输入正确的邮箱格式'
        },
        attributes: {
            email: '邮箱',
            password: '密码',
            name: '账号'
            // attributes and messages
        }
    }

}

Validator.localize('zh-CN', dictionary)