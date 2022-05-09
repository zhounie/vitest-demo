import { expect, test } from "vitest";


test.each([
    [1,2,2],
    [1,1,1],
])('add(%i, %i) -> %i', (a, b, expected) => {
    expect(a * b).toBe(expected)
})