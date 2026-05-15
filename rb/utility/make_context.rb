# OfficialJoke SDK utility: make_context
require_relative '../core/context'
module OfficialJokeUtilities
  MakeContext = ->(ctxmap, basectx) {
    OfficialJokeContext.new(ctxmap, basectx)
  }
end
