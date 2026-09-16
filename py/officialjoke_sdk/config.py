# OfficialJoke SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "OfficialJoke",
            "slug": "official-joke",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://official-joke-api.appspot.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "joke": {},
                "type": {},
            },
        },
        "entity": {
      "joke": {
        "fields": [
          {
            "name": "id",
            "short": "Unique identifier for the joke",
            "type": "`$INTEGER`",
          },
          {
            "name": "punchline",
            "req": True,
            "short": "The punchline/answer part of the joke",
            "type": "`$STRING`",
          },
          {
            "name": "setup",
            "req": True,
            "short": "The setup/question part of the joke",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "short": "The category/type of the joke",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/jokes/{type}/ten",
                "segments": [
                  {
                    "lit": "jokes",
                  },
                  {
                    "var": "type",
                  },
                  {
                    "lit": "ten",
                  },
                ],
                "select": {
                  "$action": "ten",
                  "exist": [
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "jokes",
                  "{type}",
                  "ten",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/jokes/ten",
                "segments": [
                  {
                    "lit": "jokes",
                  },
                  {
                    "lit": "ten",
                  },
                ],
                "select": {
                  "$action": "ten",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "jokes",
                  "ten",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/random_ten",
                "segments": [
                  {
                    "lit": "random_ten",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "random_ten",
                ],
              },
            ],
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
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/jokes/{id}",
                "segments": [
                  {
                    "lit": "jokes",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "jokes",
                  "{id}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": 5,
                      "kind": "param",
                      "name": "number",
                      "orig": "number",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/jokes/random/{number}",
                "segments": [
                  {
                    "lit": "jokes",
                  },
                  {
                    "lit": "random",
                  },
                  {
                    "var": "number",
                  },
                ],
                "select": {
                  "exist": [
                    "number",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "jokes",
                  "random",
                  "{number}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": "programming",
                      "kind": "param",
                      "name": "type",
                      "orig": "type",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/jokes/{type}/random",
                "segments": [
                  {
                    "lit": "jokes",
                  },
                  {
                    "var": "type",
                  },
                  {
                    "lit": "random",
                  },
                ],
                "select": {
                  "$action": "random",
                  "exist": [
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "jokes",
                  "{type}",
                  "random",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/jokes/random",
                "segments": [
                  {
                    "lit": "jokes",
                  },
                  {
                    "lit": "random",
                  },
                ],
                "select": {
                  "$action": "random",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "jokes",
                  "random",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/random_joke",
                "segments": [
                  {
                    "lit": "random_joke",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "random_joke",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "random",
            ],
            [
              "joke",
            ],
          ],
        },
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
                    "lit": "types",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "types",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
