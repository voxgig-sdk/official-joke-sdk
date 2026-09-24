"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'OfficialJoke',
        slug: "official-joke",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://official-joke-api.appspot.com",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            joke: {},
            type: {},
        }
    };
    entity = {
        "joke": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "short": "Unique identifier for the joke"
                },
                {
                    "name": "punchline",
                    "title": "Punchline",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The punchline/answer part of the joke"
                },
                {
                    "name": "setup",
                    "title": "Setup",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The setup/question part of the joke"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The category/type of the joke"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "joke",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/jokes/{type}/ten",
                            "segments": [
                                {
                                    "lit": "jokes"
                                },
                                {
                                    "var": "type"
                                },
                                {
                                    "lit": "ten"
                                }
                            ],
                            "parts": [
                                "jokes",
                                "{type}",
                                "ten"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "programming"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "ten",
                                "exist": [
                                    "type"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/jokes/ten",
                            "segments": [
                                {
                                    "lit": "jokes"
                                },
                                {
                                    "lit": "ten"
                                }
                            ],
                            "parts": [
                                "jokes",
                                "ten"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {
                                "$action": "ten"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/random_ten",
                            "segments": [
                                {
                                    "lit": "random_ten"
                                }
                            ],
                            "parts": [
                                "random_ten"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/jokes/{id}",
                            "segments": [
                                {
                                    "lit": "jokes"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "jokes",
                                "{id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/jokes/random/{number}",
                            "segments": [
                                {
                                    "lit": "jokes"
                                },
                                {
                                    "lit": "random"
                                },
                                {
                                    "var": "number"
                                }
                            ],
                            "parts": [
                                "jokes",
                                "random",
                                "{number}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "number",
                                        "orig": "number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 5
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "number"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/jokes/{type}/random",
                            "segments": [
                                {
                                    "lit": "jokes"
                                },
                                {
                                    "var": "type"
                                },
                                {
                                    "lit": "random"
                                }
                            ],
                            "parts": [
                                "jokes",
                                "{type}",
                                "random"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "programming"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "random",
                                "exist": [
                                    "type"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/jokes/random",
                            "segments": [
                                {
                                    "lit": "jokes"
                                },
                                {
                                    "lit": "random"
                                }
                            ],
                            "parts": [
                                "jokes",
                                "random"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {
                                "$action": "random"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/random_joke",
                            "segments": [
                                {
                                    "lit": "random_joke"
                                }
                            ],
                            "parts": [
                                "random_joke"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "type": {
            "fields": [],
            "name": "type",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/types",
                            "segments": [
                                {
                                    "lit": "types"
                                }
                            ],
                            "parts": [
                                "types"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map