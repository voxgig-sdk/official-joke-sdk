<?php
declare(strict_types=1);

// OfficialJoke SDK utility: result_body

class OfficialJokeResultBody
{
    public static function call(OfficialJokeContext $ctx): ?OfficialJokeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
