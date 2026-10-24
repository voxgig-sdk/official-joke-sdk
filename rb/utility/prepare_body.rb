# OfficialJoke SDK utility: prepare_body
require_relative 'media'
module OfficialJokeUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return OfficialJokeUtilities.raw_body(ctx.reqdata) if OfficialJokeUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
