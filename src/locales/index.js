/**
 * Created by 熊超超 on 2022/1/18.
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {}

const content = require.context('./lang', true, /^.*\/index\.js$/)
content.keys().forEach(key => {
  const langFileModule = content(key).default
  const fileName = key.replace(/^\.\//, '')
  const moduleName = fileName.split('/')[0]
  messages[moduleName] = langFileModule
})
export const i18n = new VueI18n({
  locale: 'zh',
  messages,
})

export function changeLocale(locale) {
  i18n.locale = locale
}
