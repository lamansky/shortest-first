'use strict'

const assert = require('assert')
const shortestFirst = require('.')

describe('shortestFirst()', function () {
  it('should sort strings in ascending order of length', function () {
    const arr = shortestFirst(['xx', 'x'])
    assert.strictEqual(arr[0], 'x')
    assert.strictEqual(arr[1], 'xx')
  })

  it('should sort objects in ascending order of length', function () {
    const arr = shortestFirst([{length: 10}, {length: 2}])
    assert.strictEqual(arr[0].length, 2)
    assert.strictEqual(arr[1].length, 10)
  })

  it('should not modify the original array', function () {
    const arr = ['xx', 'x']
    shortestFirst(arr)
    assert.strictEqual(arr[0], 'xx')
    assert.strictEqual(arr[1], 'x')
  })

  it('should support the bind operator', function () {
    const arr = shortestFirst.call(['xx', 'x'])
    assert.strictEqual(arr[0], 'x')
    assert.strictEqual(arr[1], 'xx')
  })
})
