# OfficialJoke SDK configuration

module OfficialJokeConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "OfficialJoke",
        "slug" => "official-joke",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://official-joke-api.appspot.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "joke" => {},
          "type" => {},
        },
      },
      "entity" => {
        "joke" => {
          "fields" => [
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$INTEGER`",
              "short" => "Unique identifier for the joke",
            },
            {
              "name" => "punchline",
              "title" => "Punchline",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The punchline/answer part of the joke",
            },
            {
              "name" => "setup",
              "title" => "Setup",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The setup/question part of the joke",
            },
            {
              "name" => "type",
              "title" => "Type",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The category/type of the joke",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "joke",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/jokes/{type}/ten",
                  "segments" => [
                    {
                      "lit" => "jokes",
                    },
                    {
                      "var" => "type",
                    },
                    {
                      "lit" => "ten",
                    },
                  ],
                  "parts" => [
                    "jokes",
                    "{type}",
                    "ten",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "programming",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "ten",
                    "exist" => [
                      "type",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/jokes/ten",
                  "segments" => [
                    {
                      "lit" => "jokes",
                    },
                    {
                      "lit" => "ten",
                    },
                  ],
                  "parts" => [
                    "jokes",
                    "ten",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "ten",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/random_ten",
                  "segments" => [
                    {
                      "lit" => "random_ten",
                    },
                  ],
                  "parts" => [
                    "random_ten",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/jokes/{id}",
                  "segments" => [
                    {
                      "lit" => "jokes",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "jokes",
                    "{id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "id",
                        "type" => "`$INTEGER`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => 1,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/jokes/random/{number}",
                  "segments" => [
                    {
                      "lit" => "jokes",
                    },
                    {
                      "lit" => "random",
                    },
                    {
                      "var" => "number",
                    },
                  ],
                  "parts" => [
                    "jokes",
                    "random",
                    "{number}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "number",
                        "orig" => "number",
                        "type" => "`$INTEGER`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => 5,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "number",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/jokes/{type}/random",
                  "segments" => [
                    {
                      "lit" => "jokes",
                    },
                    {
                      "var" => "type",
                    },
                    {
                      "lit" => "random",
                    },
                  ],
                  "parts" => [
                    "jokes",
                    "{type}",
                    "random",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "programming",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "random",
                    "exist" => [
                      "type",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/jokes/random",
                  "segments" => [
                    {
                      "lit" => "jokes",
                    },
                    {
                      "lit" => "random",
                    },
                  ],
                  "parts" => [
                    "jokes",
                    "random",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "random",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/random_joke",
                  "segments" => [
                    {
                      "lit" => "random_joke",
                    },
                  ],
                  "parts" => [
                    "random_joke",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "type" => {
          "fields" => [],
          "name" => "type",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/types",
                  "segments" => [
                    {
                      "lit" => "types",
                    },
                  ],
                  "parts" => [
                    "types",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    OfficialJokeFeatures.make_feature(name)
  end
end
