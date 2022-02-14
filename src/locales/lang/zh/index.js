// Created by 熊超超 on 2022/1/18.
import {getMessage} from '../../../../../packages/index'

export default getMessage(require.context('./', true, /[^(index)]\.js$/))
