import { test } from 'vitest'

test.concurrent('cur1', async () => {
    console.log(1);
})


test.concurrent('cur1', async () => {
    console.log(2);
})