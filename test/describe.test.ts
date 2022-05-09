import { test, describe, expect } from "vitest";

describe('per', () => {
    const input = 1
    test('active', () => {
        expect(input).equal(2)
    })

    test('add', () => {
        expect(input).equal(4)
    })
})