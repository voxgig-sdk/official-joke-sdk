
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { OfficialJokeSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = OfficialJokeSDK.test()
    equal(testsdk instanceof OfficialJokeSDK, true,
      'OfficialJokeSDK.test() must return a client synchronously')
  })

})
