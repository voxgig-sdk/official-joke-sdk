
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'OfficialJoke',
        slug: "official-joke",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
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
 retry:     {
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
 test:     {
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
 timeout:     {
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

  }


  options = {
    base: "https://official-joke-api.appspot.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        joke: {
        },
  
        type: {
        },
  
    }
  }


  entity = {
    "joke": {
      "fields": [
        {
          "name": "id",
          "short": "Unique identifier for the joke",
          "type": "`$INTEGER`"
        },
        {
          "name": "punchline",
          "req": true,
          "short": "The punchline/answer part of the joke",
          "type": "`$STRING`"
        },
        {
          "name": "setup",
          "req": true,
          "short": "The setup/question part of the joke",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "req": true,
          "short": "The category/type of the joke",
          "type": "`$STRING`"
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
              "args": {
                "params": [
                  {
                    "example": "programming",
                    "kind": "param",
                    "name": "type",
                    "orig": "type",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
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
              "select": {
                "$action": "ten",
                "exist": [
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "jokes",
                "{type}",
                "ten"
              ]
            },
            {
              "args": {},
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
              "select": {
                "$action": "ten"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "jokes",
                "ten"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/random_ten",
              "segments": [
                {
                  "lit": "random_ten"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "random_ten"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": 1,
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
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
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "jokes",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "example": 5,
                    "kind": "param",
                    "name": "number",
                    "orig": "number",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
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
              "select": {
                "exist": [
                  "number"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "jokes",
                "random",
                "{number}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "example": "programming",
                    "kind": "param",
                    "name": "type",
                    "orig": "type",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
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
              "select": {
                "$action": "random",
                "exist": [
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "jokes",
                "{type}",
                "random"
              ]
            },
            {
              "args": {},
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
              "select": {
                "$action": "random"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "jokes",
                "random"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/random_joke",
              "segments": [
                {
                  "lit": "random_joke"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "random_joke"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "random"
          ],
          [
            "joke"
          ]
        ]
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
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/types",
              "segments": [
                {
                  "lit": "types"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "types"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

