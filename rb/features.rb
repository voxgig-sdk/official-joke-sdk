# OfficialJoke SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module OfficialJokeFeatures
  def self.make_feature(name)
    case name
    when "base"
      OfficialJokeBaseFeature.new
    when "test"
      OfficialJokeTestFeature.new
    else
      OfficialJokeBaseFeature.new
    end
  end
end
