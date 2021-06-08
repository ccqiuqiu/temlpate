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
    const strarr = num ? num.toString().split('.') : ['0']
    const fmtarr = pattern ? pattern.split('.') : ['']
    let retstr = ''

    // 整数部分
    let str = strarr[0]
    let fmt = fmtarr[0]
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
    str = strarr.length > 1 ? strarr[1] : ''
    fmt = fmtarr.length > 1 ? fmtarr[1] : ''
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
  }
}
