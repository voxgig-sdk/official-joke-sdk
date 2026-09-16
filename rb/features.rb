# OfficialJoke SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module OfficialJokeFeatures
  def self.make_feature(name)
    case name
    when "base"
      OfficialJokeBaseFeature.new
    when "ratelimit"
      OfficialJokeRatelimitFeature.new
    when "retry"
      OfficialJokeRetryFeature.new
    when "test"
      OfficialJokeTestFeature.new
    when "timeout"
      OfficialJokeTimeoutFeature.new
    else
      OfficialJokeBaseFeature.new
    end
  end
end
