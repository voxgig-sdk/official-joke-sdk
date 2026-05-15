
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { OfficialJokeSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await OfficialJokeSDK.test()
    equal(null !== testsdk, true)
  })

})
