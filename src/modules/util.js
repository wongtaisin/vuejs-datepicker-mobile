const mergeOptions = ($vm, options) => {
  const defaults = {}
  for (const key in $vm.$options.props) {
    if (key !== 'value') {
      defaults[key] = $vm.$options.props[key].default
    }
  }
  const _options = { ...defaults, ...options }
  for (const key in _options) {
    $vm[key] = _options[key]
  }
}

// 提取获取小数位数的公共函数
const getDecimalLength = num => {
  const numStr = num.toString()
  const decimalPart = numStr.split('.')[1]
  return decimalPart ? decimalPart.length : 0
}

// 提取转换为整数的公共函数
const toInteger = num => {
  return Number(num.toString().replace('.', ''))
}

const add = (a, b) => {
  const c = getDecimalLength(a)
  const d = getDecimalLength(b)
  const e = Math.pow(10, Math.max(c, d))
  return (mul(a, e) + mul(b, e)) / e
}

const sub = (a, b) => {
  const c = getDecimalLength(a)
  const d = getDecimalLength(b)
  const e = Math.pow(10, Math.max(c, d))
  return (mul(a, e) - mul(b, e)) / e
}

const mul = (a, b) => {
  const c = getDecimalLength(a) + getDecimalLength(b)
  return (toInteger(a) * toInteger(b)) / Math.pow(10, c)
}

const div = (a, b) => {
  const e = getDecimalLength(a)
  const f = getDecimalLength(b)
  return mul(toInteger(a) / toInteger(b), Math.pow(10, f - e))
}

// 取余
const rem = (a, b) => {
  return sub(a, mul(parseInt(div(a, b)), b))
}

const getDate = date => {
  if (date === undefined) return false
  // 分离日期和时间部分
  const [datePart, timePart] = date.toString().split(' ')
  const arr = datePart.split('-')
  const padZero = str => (str.length === 1 && Number(str) < 10 ? `0${str}` : str)
  arr[1] = padZero(arr[1])
  arr[2] = padZero(arr[2])
  // 重组日期字符串，保留时间部分
  const formattedDate = `${arr[0]}-${arr[1]}-${arr[2]}`
  return timePart ? `${formattedDate} ${timePart}` : formattedDate
}

export { add, div, getDate, mergeOptions, mul, rem, sub }
