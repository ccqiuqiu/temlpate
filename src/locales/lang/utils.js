import {set} from 'lodash-es'

/**
 * Created by 熊超超 on 2022/1/18.
 */
export function getMessage(content) {
  const obj = {}
  content.keys().forEach((key) => {
    const langFileModule = content(key).default
    let fileName = key.replace(/^\.\//, '')
    const lastIndex = fileName.lastIndexOf('.')
    fileName = fileName.substring(0, lastIndex)
    const keyList = fileName.split('/')
    const moduleName = keyList.shift()
    const objKey = keyList.join('.')

    if (moduleName) {
      if (objKey) {
        set(obj, moduleName, obj[moduleName] || {})
        set(obj[moduleName], objKey, langFileModule)
      } else {
        set(obj, moduleName, langFileModule || {})
      }
    }
  })
  return obj
}
