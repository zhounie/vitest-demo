import { test, expect } from 'vitest'


const input4 = 3
test('d', () => {
    expect(input4).equal(3)
})

const input5 = 5
test.only('e', () => {
    expect(input5).equal(5)
})