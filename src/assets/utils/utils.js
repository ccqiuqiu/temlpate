/**
 * Created by 熊超超 on 2020/6/23.
 */
export default {
  /**
   * 格式化数字显示方式
   * 用法
   * formatNumber(12345.999,'#,##0.00');
   * formatNumber(12345.999,'#,##0.##');
   * formatNumber(123,'000000');
   * @param num
   * @param pattern
   */
  formatNumber: (num, pattern) => {
    const strArr = num ? num.toString().split('.') : ['0']
    const fmtArr = pattern ? pattern.split('.') : ['']
    let retstr = ''

    // 整数部分
    let str = strArr[0]
    let fmt = fmtArr[0]
    let i = str.length - 1
    let comma = false
    for (let f = fmt.length - 1; f >= 0; f--) {
      switch (fmt.substr(f, 1)) {
        case '#':
          if (i >= 0) retstr = str.substr(i--, 1) + retstr
          break
        case '0':
          if (i >= 0) retstr = str.substr(i--, 1) + retstr
          else retstr = '0' + retstr
          break
        case ',':
          comma = true
          retstr = ',' + retstr
          break
      }
    }
    if (i >= 0) {
      if (comma) {
        const l = str.length
        for (; i >= 0; i--) {
          retstr = str.substr(i, 1) + retstr
          if (i > 0 && ((l - i) % 3) === 0) retstr = ',' + retstr
        }
      } else retstr = str.substr(0, i + 1) + retstr
    }

    retstr = retstr + '.'
    // 处理小数部分
    str = strArr.length > 1 ? strArr[1] : ''
    fmt = fmtArr.length > 1 ? fmtArr[1] : ''
    i = 0
    for (let f = 0; f < fmt.length; f++) {
      switch (fmt.substr(f, 1)) {
        case '#':
          if (i < str.length) retstr += str.substr(i++, 1)
          break
        case '0':
          if (i < str.length) retstr += str.substr(i++, 1)
          else retstr += '0'
          break
      }
    }
    return retstr.replace(/^,+/, '').replace(/\.$/, '')
  },
  formatDate (date = new Date(), fmt = 'yyyy-MM-dd') {
    const o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      S: this.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  }
}
