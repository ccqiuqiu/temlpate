/**
 * Created by 熊超超 on 2018/4/20.
 */
import {request} from '../../../packages/index'

export default {
  login: (params, config) => request('post', '/login', params, config),
  captcha: (params, config) => request('get', '/sc/sc/sys/captcha', params, {responseType: 'arraybuffer'}),
}
