const getFun = (str) => {
  const res = []
  for (const key in str) {
    const el = str[key]
    switch (el) {
      case 'C':
        res.pop()
        break
      case 'D':
        res.push(
          res[res.length - 1] * 2
        )
        break
      case '+':
        res.push(
          res[res.length - 1] + res[res.length - 2]
        )
        break
      default:
        const integ = parseInt(el)
        res.push(integ)
    }
  }
  const v = res.reduce((acc, el) => acc + el, 0)
  return v
}


test('getFun', () => {
  expect(getFun('52CD+'.split(''))).toBe(30)
})