<?php
declare(strict_types=1);

// OfficialJoke SDK utility: result_headers

class OfficialJokeResultHeaders
{
    public static function call(OfficialJokeContext $ctx): ?OfficialJokeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
