-- OfficialJoke SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "OfficialJoke",
      slug = "official-joke",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://official-joke-api.appspot.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["joke"] = {},
        ["type"] = {},
      },
    },
    entity = {
      ["joke"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the joke",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "punchline",
            ["req"] = true,
            ["short"] = "The punchline/answer part of the joke",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "setup",
            ["req"] = true,
            ["short"] = "The setup/question part of the joke",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["req"] = true,
            ["short"] = "The category/type of the joke",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "joke",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "programming",
                      ["kind"] = "param",
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/jokes/{type}/ten",
                ["segments"] = {
                  {
                    ["lit"] = "jokes",
                  },
                  {
                    ["var"] = "type",
                  },
                  {
                    ["lit"] = "ten",
                  },
                },
                ["select"] = {
                  ["$action"] = "ten",
                  ["exist"] = {
                    "type",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "jokes",
                  "{type}",
                  "ten",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/jokes/ten",
                ["segments"] = {
                  {
                    ["lit"] = "jokes",
                  },
                  {
                    ["lit"] = "ten",
                  },
                },
                ["select"] = {
                  ["$action"] = "ten",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "jokes",
                  "ten",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/random_ten",
                ["segments"] = {
                  {
                    ["lit"] = "random_ten",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "random_ten",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = 1,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/jokes/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "jokes",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "jokes",
                  "{id}",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = 5,
                      ["kind"] = "param",
                      ["name"] = "number",
                      ["orig"] = "number",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/jokes/random/{number}",
                ["segments"] = {
                  {
                    ["lit"] = "jokes",
                  },
                  {
                    ["lit"] = "random",
                  },
                  {
                    ["var"] = "number",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "number",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "jokes",
                  "random",
                  "{number}",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "programming",
                      ["kind"] = "param",
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/jokes/{type}/random",
                ["segments"] = {
                  {
                    ["lit"] = "jokes",
                  },
                  {
                    ["var"] = "type",
                  },
                  {
                    ["lit"] = "random",
                  },
                },
                ["select"] = {
                  ["$action"] = "random",
                  ["exist"] = {
                    "type",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "jokes",
                  "{type}",
                  "random",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/jokes/random",
                ["segments"] = {
                  {
                    ["lit"] = "jokes",
                  },
                  {
                    ["lit"] = "random",
                  },
                },
                ["select"] = {
                  ["$action"] = "random",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "jokes",
                  "random",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/random_joke",
                ["segments"] = {
                  {
                    ["lit"] = "random_joke",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "random_joke",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "random",
            },
            {
              "joke",
            },
          },
        },
      },
      ["type"] = {
        ["fields"] = {},
        ["name"] = "type",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/types",
                ["segments"] = {
                  {
                    ["lit"] = "types",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "types",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
