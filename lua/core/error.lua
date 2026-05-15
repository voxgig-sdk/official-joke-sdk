-- OfficialJoke SDK error

local OfficialJokeError = {}
OfficialJokeError.__index = OfficialJokeError


function OfficialJokeError.new(code, msg, ctx)
  local self = setmetatable({}, OfficialJokeError)
  self.is_sdk_error = true
  self.sdk = "OfficialJoke"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function OfficialJokeError:error()
  return self.msg
end


function OfficialJokeError:__tostring()
  return self.msg
end


return OfficialJokeError
