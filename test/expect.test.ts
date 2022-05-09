import { test, expect } from 'vitest'


const obj = {
    a: 1,
    b: 2
}
var b = obj

test('aaa', () => {
    expect(obj).toBe(b)
})

var input = undefined
test('bbb', () => {
    expect(input).toBeDefined()
})

test('ffff', () => {
    expect(input).toBeTruthy()
})