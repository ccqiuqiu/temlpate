// Created by 熊超超 on 2022/1/18.
import {getMessage} from '../utils'
import zh from 'element-ui/lib/locale/lang/zh-CN'

export default {
  ...getMessage(require.context('./', true, /[^(index)]\.js$/)),
  ...zh,
}
