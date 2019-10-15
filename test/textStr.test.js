const puppeteerTest = require('./puppeteerTest')
it('should return same string', async () => {
  const testStr = 'a'
  const res =
    'a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a'
  function MockData() {
    return {
      X100: new Array(100).fill(testStr).join(' '),
      X1000: new Array(1000).fill(testStr).join(' '),
      X10000: new Array(10000).fill(testStr).join(' ')
    }
  }
  const resList = await puppeteerTest(MockData())
  resList.forEach(v => {
    expect(v).toBe(res)
  })
})
