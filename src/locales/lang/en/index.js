// Created by 熊超超 on 2022/1/18.
import {getMessage} from '../utils'
import en from 'element-ui/lib/locale/lang/en'

export default {
  ...getMessage(require.context('./', true, /[^(index)]\.js$/)),
  ...en,
}
