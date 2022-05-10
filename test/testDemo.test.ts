import { test, expect, vi } from 'vitest'

const arr = ['a', 'b', 'c']
test('testContain', () => {
    expect(arr).toContain('c')
})

const arr2 = [{a: 1, c:2}]
test('testContainEqual', () => {
    expect(arr2).toContainEqual({a: 1, c:2})
})


function fn() {
    throw '你好，这是个错误'
}

test('throw', () => {
    expect(fn).toThrowError('你好，这是个错误')
})


const obj = {
    fn: (a1 = 'c', a2 = 3) => {
        console.log(a1, a2)
    }
}
test('callFn', () => {
    const buyFn = vi.spyOn(obj, 'fn')
    expect(buyFn).not.toHaveBeenCalled()
    obj.fn()
    expect(buyFn).toHaveBeenCalled()
})

test('callFnCount', () => {
    const fn = vi.spyOn(obj, 'fn')
    obj.fn()
    obj.fn()
    expect(fn).toHaveBeenCalledTimes(2)
})

test('callFnWith', () => {
    const objFn = vi.spyOn(obj, 'fn')
    obj.fn('a', 1)
    expect(objFn).toHaveBeenCalledWith('a', 1)
})