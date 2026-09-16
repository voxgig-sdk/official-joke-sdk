

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { OfficialJokeSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('JokeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OFFICIAL_JOKE_TEST_LIVE=TRUE.
  afterEach(liveDelay('OFFICIAL_JOKE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OfficialJokeSDK.test()
    const ent = testsdk.Joke()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OFFICIAL_JOKE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'joke.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"short":"Unique identifier for the joke","type":"`$INTEGER`","index$":0},{"active":true,"name":"punchline","req":true,"short":"The punchline/answer part of the joke","type":"`$STRING`","index$":1},{"active":true,"name":"setup","req":true,"short":"The setup/question part of the joke","type":"`$STRING`","index$":2},{"active":true,"name":"type","req":true,"short":"The category/type of the joke","type":"`$STRING`","index$":3}],"id":{"field":"id","name":"id"},"name":"joke","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":"programming","kind":"param","name":"type","orig":"type","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"GET /jokes/{type}/ten","json":"{\"operationId\":\"getTenRandomJokesByType\",\"parameters\":[{\"description\":\"The type/category of jokes to retrieve\",\"in\":\"path\",\"name\":\"type\",\"required\":true,\"schema\":{\"example\":\"programming\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the joke\",\"example\":1,\"type\":\"integer\"},\"punchline\":{\"description\":\"The punchline/answer part of the joke\",\"example\":\"Even if you're wrong, you're only off by a bit.\",\"type\":\"string\"},\"setup\":{\"description\":\"The setup/question part of the joke\",\"example\":\"What's the best thing about a Boolean?\",\"type\":\"string\"},\"type\":{\"description\":\"The category/type of the joke\",\"example\":\"programming\",\"type\":\"string\"}},\"required\":[\"type\",\"setup\",\"punchline\"],\"type\":\"object\"},\"maxItems\":10,\"minItems\":10,\"type\":\"array\"}}},\"description\":\"Ten random jokes of the specified type\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/jokes/{type}/ten","segments":[{"lit":"jokes"},{"var":"type"},{"lit":"ten"}],"select":{"$action":"ten","exist":["type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"GET /jokes/ten","json":"{\"operationId\":\"getTenRandomJokesAlt\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the joke\",\"example\":1,\"type\":\"integer\"},\"punchline\":{\"description\":\"The punchline/answer part of the joke\",\"example\":\"Even if you're wrong, you're only off by a bit.\",\"type\":\"string\"},\"setup\":{\"description\":\"The setup/question part of the joke\",\"example\":\"What's the best thing about a Boolean?\",\"type\":\"string\"},\"type\":{\"description\":\"The category/type of the joke\",\"example\":\"programming\",\"type\":\"string\"}},\"required\":[\"type\",\"setup\",\"punchline\"],\"type\":\"object\"},\"maxItems\":10,\"minItems\":10,\"type\":\"array\"}}},\"description\":\"Ten random jokes\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/jokes/ten","segments":[{"lit":"jokes"},{"lit":"ten"}],"select":{"$action":"ten"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{},"contract":{"id":"GET /random_ten","json":"{\"operationId\":\"getTenRandomJokes\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the joke\",\"example\":1,\"type\":\"integer\"},\"punchline\":{\"description\":\"The punchline/answer part of the joke\",\"example\":\"Even if you're wrong, you're only off by a bit.\",\"type\":\"string\"},\"setup\":{\"description\":\"The setup/question part of the joke\",\"example\":\"What's the best thing about a Boolean?\",\"type\":\"string\"},\"type\":{\"description\":\"The category/type of the joke\",\"example\":\"programming\",\"type\":\"string\"}},\"required\":[\"type\",\"setup\",\"punchline\"],\"type\":\"object\"},\"maxItems\":10,\"minItems\":10,\"type\":\"array\"}}},\"description\":\"Ten random jokes\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/random_ten","segments":[{"lit":"random_ten"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":1,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /jokes/{id}","json":"{\"operationId\":\"getJokeById\",\"parameters\":[{\"description\":\"The ID of the joke to retrieve\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"id\":1,\"punchline\":\"Even if you're wrong, you're only off by a bit.\",\"setup\":\"What's the best thing about a Boolean?\",\"type\":\"programming\"},\"schema\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the joke\",\"example\":1,\"type\":\"integer\"},\"punchline\":{\"description\":\"The punchline/answer part of the joke\",\"example\":\"Even if you're wrong, you're only off by a bit.\",\"type\":\"string\"},\"setup\":{\"description\":\"The setup/question part of the joke\",\"example\":\"What's the best thing about a Boolean?\",\"type\":\"string\"},\"type\":{\"description\":\"The category/type of the joke\",\"example\":\"programming\",\"type\":\"string\"}},\"required\":[\"type\",\"setup\",\"punchline\"],\"type\":\"object\"}}},\"description\":\"A joke with the specified ID\"},\"404\":{\"description\":\"Joke not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/jokes/{id}","segments":[{"lit":"jokes"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":5,"kind":"param","name":"number","orig":"number","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /jokes/random/{number}","json":"{\"operationId\":\"getRandomJokesNumber\",\"parameters\":[{\"description\":\"The number of random jokes to retrieve\",\"in\":\"path\",\"name\":\"number\",\"required\":true,\"schema\":{\"example\":5,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the joke\",\"example\":1,\"type\":\"integer\"},\"punchline\":{\"description\":\"The punchline/answer part of the joke\",\"example\":\"Even if you're wrong, you're only off by a bit.\",\"type\":\"string\"},\"setup\":{\"description\":\"The setup/question part of the joke\",\"example\":\"What's the best thing about a Boolean?\",\"type\":\"string\"},\"type\":{\"description\":\"The category/type of the joke\",\"example\":\"programming\",\"type\":\"string\"}},\"required\":[\"type\",\"setup\",\"punchline\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Specified number of random jokes\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/jokes/random/{number}","segments":[{"lit":"jokes"},{"lit":"random"},{"var":"number"}],"select":{"exist":["number"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"example":"programming","kind":"param","name":"type","orig":"type","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"GET /jokes/{type}/random","json":"{\"operationId\":\"getRandomJokeByType\",\"parameters\":[{\"description\":\"The type/category of joke to retrieve\",\"in\":\"path\",\"name\":\"type\",\"required\":true,\"schema\":{\"example\":\"programming\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"id\":1,\"punchline\":\"Even if you're wrong, you're only off by a bit.\",\"setup\":\"What's the best thing about a Boolean?\",\"type\":\"programming\"},\"schema\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the joke\",\"example\":1,\"type\":\"integer\"},\"punchline\":{\"description\":\"The punchline/answer part of the joke\",\"example\":\"Even if you're wrong, you're only off by a bit.\",\"type\":\"string\"},\"setup\":{\"description\":\"The setup/question part of the joke\",\"example\":\"What's the best thing about a Boolean?\",\"type\":\"string\"},\"type\":{\"description\":\"The category/type of the joke\",\"example\":\"programming\",\"type\":\"string\"}},\"required\":[\"type\",\"setup\",\"punchline\"],\"type\":\"object\"}}},\"description\":\"A random joke of the specified type\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/jokes/{type}/random","segments":[{"lit":"jokes"},{"var":"type"},{"lit":"random"}],"select":{"$action":"random","exist":["type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2},{"active":true,"args":{},"contract":{"id":"GET /jokes/random","json":"{\"operationId\":\"getRandomJokeAlt\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"id\":1,\"punchline\":\"Even if you're wrong, you're only off by a bit.\",\"setup\":\"What's the best thing about a Boolean?\",\"type\":\"programming\"},\"schema\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the joke\",\"example\":1,\"type\":\"integer\"},\"punchline\":{\"description\":\"The punchline/answer part of the joke\",\"example\":\"Even if you're wrong, you're only off by a bit.\",\"type\":\"string\"},\"setup\":{\"description\":\"The setup/question part of the joke\",\"example\":\"What's the best thing about a Boolean?\",\"type\":\"string\"},\"type\":{\"description\":\"The category/type of the joke\",\"example\":\"programming\",\"type\":\"string\"}},\"required\":[\"type\",\"setup\",\"punchline\"],\"type\":\"object\"}}},\"description\":\"A random joke\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/jokes/random","segments":[{"lit":"jokes"},{"lit":"random"}],"select":{"$action":"random"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":3},{"active":true,"args":{},"contract":{"id":"GET /random_joke","json":"{\"operationId\":\"getRandomJoke\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"id\":1,\"punchline\":\"Even if you're wrong, you're only off by a bit.\",\"setup\":\"What's the best thing about a Boolean?\",\"type\":\"programming\"},\"schema\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the joke\",\"example\":1,\"type\":\"integer\"},\"punchline\":{\"description\":\"The punchline/answer part of the joke\",\"example\":\"Even if you're wrong, you're only off by a bit.\",\"type\":\"string\"},\"setup\":{\"description\":\"The setup/question part of the joke\",\"example\":\"What's the best thing about a Boolean?\",\"type\":\"string\"},\"type\":{\"description\":\"The category/type of the joke\",\"example\":\"programming\",\"type\":\"string\"}},\"required\":[\"type\",\"setup\",\"punchline\"],\"type\":\"object\"}}},\"description\":\"A random joke\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/random_joke","segments":[{"lit":"random_joke"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"load"}},"relations":{"ancestors":[["random"],["joke"]]},"key$":"joke","name__orig":"joke","Name":"Joke","name_":"joke","name-":"joke","NAME":"JOKE","index$":0}, {"active":true,"entity":"joke","key$":"BasicJokeFlow","kind":"basic","name":"BasicJokeFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"joke_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"joke_ref01","srcdatavar":"joke_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-joke_ref01"}}],"index$":1}]}, 'Joke')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let joke_ref01_data = Object.values(setup.data.existing.joke)[0] as any

    // LIST
    const joke_ref01_ent = client.Joke()
    const joke_ref01_match: any = {}

    const joke_ref01_list = (await joke_ref01_ent.list(joke_ref01_match)).map((e: any) => e.data())


    // LOAD
    const joke_ref01_match_dt0: any = {}
    joke_ref01_match_dt0.id = joke_ref01_data.id
    const joke_ref01_data_dt0 = (await joke_ref01_ent.load(joke_ref01_match_dt0)).data()
    assert(joke_ref01_data_dt0.id === joke_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/joke/JokeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = OfficialJokeSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['joke01','joke02','joke03','random01','random02','random03','joke01','joke02','joke03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OFFICIAL_JOKE_TEST_JOKE_ENTID': idmap,
    'OFFICIAL_JOKE_TEST_LIVE': 'FALSE',
    'OFFICIAL_JOKE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['OFFICIAL_JOKE_TEST_JOKE_ENTID']

  const live = 'TRUE' === env.OFFICIAL_JOKE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OFFICIAL_JOKE_TEST_JOKE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new OfficialJokeSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.OFFICIAL_JOKE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
