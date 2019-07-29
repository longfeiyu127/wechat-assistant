const guid = () => {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()
}

const getInput = str => {
  if (!str) {
    return ''
  }
  if (str.length <= 20) {
    return str
  } else {
    /** q前10个字符 + q长度 + q后十个字符 */
    const length = str.length
    return str.substr(0, 10) + str.length + str.substr(length - 10, length)
  }
}

module.exports = {
  guid,
  getInput
}
