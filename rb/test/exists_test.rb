# OfficialJoke SDK exists test

require "minitest/autorun"
require_relative "../OfficialJoke_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = OfficialJokeSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
