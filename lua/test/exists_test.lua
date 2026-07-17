-- OfficialJoke SDK exists test

local sdk = require("official-joke_sdk")

describe("OfficialJokeSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
