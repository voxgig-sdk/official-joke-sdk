# OfficialJoke SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

OfficialJokeUtility.registrar = ->(u) {
  u.clean = OfficialJokeUtilities::Clean
  u.done = OfficialJokeUtilities::Done
  u.make_error = OfficialJokeUtilities::MakeError
  u.feature_add = OfficialJokeUtilities::FeatureAdd
  u.feature_hook = OfficialJokeUtilities::FeatureHook
  u.feature_init = OfficialJokeUtilities::FeatureInit
  u.fetcher = OfficialJokeUtilities::Fetcher
  u.make_fetch_def = OfficialJokeUtilities::MakeFetchDef
  u.make_context = OfficialJokeUtilities::MakeContext
  u.make_options = OfficialJokeUtilities::MakeOptions
  u.make_request = OfficialJokeUtilities::MakeRequest
  u.make_response = OfficialJokeUtilities::MakeResponse
  u.make_result = OfficialJokeUtilities::MakeResult
  u.make_point = OfficialJokeUtilities::MakePoint
  u.make_spec = OfficialJokeUtilities::MakeSpec
  u.make_url = OfficialJokeUtilities::MakeUrl
  u.param = OfficialJokeUtilities::Param
  u.prepare_auth = OfficialJokeUtilities::PrepareAuth
  u.prepare_body = OfficialJokeUtilities::PrepareBody
  u.prepare_headers = OfficialJokeUtilities::PrepareHeaders
  u.prepare_method = OfficialJokeUtilities::PrepareMethod
  u.prepare_params = OfficialJokeUtilities::PrepareParams
  u.prepare_path = OfficialJokeUtilities::PreparePath
  u.prepare_query = OfficialJokeUtilities::PrepareQuery
  u.result_basic = OfficialJokeUtilities::ResultBasic
  u.result_body = OfficialJokeUtilities::ResultBody
  u.result_headers = OfficialJokeUtilities::ResultHeaders
  u.transform_request = OfficialJokeUtilities::TransformRequest
  u.transform_response = OfficialJokeUtilities::TransformResponse
}
