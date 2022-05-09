import { test, expect } from 'vitest'

const input = Math.sqrt(13)

test('a', () => {
    expect(input).not.to.equal(2)
})

const input2 = 2
test('b', () => {
    expect(input2).equal(3)
})

const input3 = 1
test.only('c', () => {
    expect(input3).equal(4)
})