<?php
declare(strict_types=1);

// OfficialJoke SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

OfficialJokeUtility::setRegistrar(function (OfficialJokeUtility $u): void {
    $u->clean = [OfficialJokeClean::class, 'call'];
    $u->done = [OfficialJokeDone::class, 'call'];
    $u->make_error = [OfficialJokeMakeError::class, 'call'];
    $u->feature_add = [OfficialJokeFeatureAdd::class, 'call'];
    $u->feature_hook = [OfficialJokeFeatureHook::class, 'call'];
    $u->feature_init = [OfficialJokeFeatureInit::class, 'call'];
    $u->fetcher = [OfficialJokeFetcher::class, 'call'];
    $u->make_fetch_def = [OfficialJokeMakeFetchDef::class, 'call'];
    $u->make_context = [OfficialJokeMakeContext::class, 'call'];
    $u->make_options = [OfficialJokeMakeOptions::class, 'call'];
    $u->make_request = [OfficialJokeMakeRequest::class, 'call'];
    $u->make_response = [OfficialJokeMakeResponse::class, 'call'];
    $u->make_result = [OfficialJokeMakeResult::class, 'call'];
    $u->make_point = [OfficialJokeMakePoint::class, 'call'];
    $u->make_spec = [OfficialJokeMakeSpec::class, 'call'];
    $u->make_url = [OfficialJokeMakeUrl::class, 'call'];
    $u->param = [OfficialJokeParam::class, 'call'];
    $u->prepare_auth = [OfficialJokePrepareAuth::class, 'call'];
    $u->prepare_body = [OfficialJokePrepareBody::class, 'call'];
    $u->prepare_headers = [OfficialJokePrepareHeaders::class, 'call'];
    $u->prepare_method = [OfficialJokePrepareMethod::class, 'call'];
    $u->prepare_params = [OfficialJokePrepareParams::class, 'call'];
    $u->prepare_path = [OfficialJokePreparePath::class, 'call'];
    $u->prepare_query = [OfficialJokePrepareQuery::class, 'call'];
    $u->result_basic = [OfficialJokeResultBasic::class, 'call'];
    $u->result_body = [OfficialJokeResultBody::class, 'call'];
    $u->result_headers = [OfficialJokeResultHeaders::class, 'call'];
    $u->transform_request = [OfficialJokeTransformRequest::class, 'call'];
    $u->transform_response = [OfficialJokeTransformResponse::class, 'call'];
});
