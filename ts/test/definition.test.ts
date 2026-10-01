import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "joke",
    "accessor": "Joke",
    "op": "list",
    "method": "GET",
    "path": "/jokes/{type}/ten",
    "action": "ten",
    "args": [
      {
        "name": "type",
        "wire": "type",
        "value": "programming"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "type": "programming",
        "setup": "What's the best thing about a Boolean?",
        "punchline": "Even if you're wrong, you're only off by a bit."
      }
    ],
    "idField": "id"
  },
  {
    "entity": "joke",
    "accessor": "Joke",
    "op": "list",
    "method": "GET",
    "path": "/jokes/ten",
    "action": "ten",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "type": "programming",
        "setup": "What's the best thing about a Boolean?",
        "punchline": "Even if you're wrong, you're only off by a bit."
      }
    ],
    "idField": "id"
  },
  {
    "entity": "joke",
    "accessor": "Joke",
    "op": "list",
    "method": "GET",
    "path": "/random_ten",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "type": "programming",
        "setup": "What's the best thing about a Boolean?",
        "punchline": "Even if you're wrong, you're only off by a bit."
      }
    ],
    "idField": "id"
  },
  {
    "entity": "joke",
    "accessor": "Joke",
    "op": "load",
    "method": "GET",
    "path": "/jokes/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": 1
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "type": "programming",
      "setup": "What's the best thing about a Boolean?",
      "punchline": "Even if you're wrong, you're only off by a bit."
    },
    "idField": "id"
  },
  {
    "entity": "joke",
    "accessor": "Joke",
    "op": "load",
    "method": "GET",
    "path": "/jokes/random/{number}",
    "args": [
      {
        "name": "number",
        "wire": "number",
        "value": 5
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "type": "programming",
        "setup": "What's the best thing about a Boolean?",
        "punchline": "Even if you're wrong, you're only off by a bit."
      }
    ],
    "idField": "id"
  },
  {
    "entity": "joke",
    "accessor": "Joke",
    "op": "load",
    "method": "GET",
    "path": "/jokes/{type}/random",
    "action": "random",
    "args": [
      {
        "name": "type",
        "wire": "type",
        "value": "programming"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "type": "programming",
      "setup": "What's the best thing about a Boolean?",
      "punchline": "Even if you're wrong, you're only off by a bit."
    },
    "idField": "id"
  },
  {
    "entity": "joke",
    "accessor": "Joke",
    "op": "load",
    "method": "GET",
    "path": "/jokes/random",
    "action": "random",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "type": "programming",
      "setup": "What's the best thing about a Boolean?",
      "punchline": "Even if you're wrong, you're only off by a bit."
    },
    "idField": "id"
  },
  {
    "entity": "joke",
    "accessor": "Joke",
    "op": "load",
    "method": "GET",
    "path": "/random_joke",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "type": "programming",
      "setup": "What's the best thing about a Boolean?",
      "punchline": "Even if you're wrong, you're only off by a bit."
    },
    "idField": "id"
  },
  {
    "entity": "type",
    "accessor": "Type",
    "op": "list",
    "method": "GET",
    "path": "/types",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": [
      "general",
      "programming",
      "knock-knock"
    ],
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
