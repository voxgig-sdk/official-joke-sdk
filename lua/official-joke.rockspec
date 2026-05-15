package = "voxgig-sdk-official-joke"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/official-joke-sdk.git"
}
description = {
  summary = "OfficialJoke SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["official-joke_sdk"] = "official-joke_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
