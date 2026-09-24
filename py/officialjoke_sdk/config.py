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
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique identifier for the joke",
          },
          {
            "name": "punchline",
            "title": "Punchline",
            "type": "`$STRING`",
            "req": True,
            "short": "The punchline/answer part of the joke",
          },
          {
            "name": "setup",
            "title": "Setup",
            "type": "`$STRING`",
            "req": True,
            "short": "The setup/question part of the joke",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "req": True,
            "short": "The category/type of the joke",
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
                "parts": [
                  "jokes",
                  "{type}",
                  "ten",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "programming",
                    },
                  ],
                },
                "select": {
                  "$action": "ten",
                  "exist": [
                    "type",
                  ],
                },
              },
              {
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
                "parts": [
                  "jokes",
                  "ten",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {
                  "$action": "ten",
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/random_ten",
                "segments": [
                  {
                    "lit": "random_ten",
                  },
                ],
                "parts": [
                  "random_ten",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
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
                    "lit": "jokes",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "jokes",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
              {
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
                "parts": [
                  "jokes",
                  "random",
                  "{number}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "number",
                      "orig": "number",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                      "example": 5,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "number",
                  ],
                },
              },
              {
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
                "parts": [
                  "jokes",
                  "{type}",
                  "random",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "programming",
                    },
                  ],
                },
                "select": {
                  "$action": "random",
                  "exist": [
                    "type",
                  ],
                },
              },
              {
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
                "parts": [
                  "jokes",
                  "random",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {
                  "$action": "random",
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/random_joke",
                "segments": [
                  {
                    "lit": "random_joke",
                  },
                ],
                "parts": [
                  "random_joke",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
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
                "kind": "http",
                "method": "GET",
                "orig": "/types",
                "segments": [
                  {
                    "lit": "types",
                  },
                ],
                "parts": [
                  "types",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
