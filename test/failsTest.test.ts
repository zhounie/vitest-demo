import { expect, test } from 'vitest'

const input = 4
test.fails('fa', () => {
    expect(input).equal(4)
})