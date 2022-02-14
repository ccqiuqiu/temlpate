/**
 * Created by 熊超超 on 2022/1/18.
 */
const messages = {}

const content = require.context('./lang', true, /^.*\/index\.js$/)
content.keys().forEach(key => {
  const langFileModule = content(key).default
  const fileName = key.replace(/^\.\//, '')
  const moduleName = fileName.split('/')[0]
  messages[moduleName] = langFileModule
})
export default messages
