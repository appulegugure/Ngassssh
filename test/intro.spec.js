// const { iterator } = require("core-js/fn/symbol")


describe('Jestの基本',() =>{
  beforeEach(()=>{
    console.log(new Date().toLocaleString())
  })

  it('1+1 テスト',()=>{
    expect(1+1).toBe(2)
  })

  it('not テスト',()=>{
    expect(1+1).not.toBe(3)
  })
})