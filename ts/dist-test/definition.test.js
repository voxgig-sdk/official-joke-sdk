"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
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
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
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
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
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
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
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
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
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
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
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
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
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
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
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
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
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
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": [
            "general",
            "programming",
            "knock-knock"
        ],
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map