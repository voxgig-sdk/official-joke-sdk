<?php
declare(strict_types=1);

// OfficialJoke SDK utility: prepare_body

class OfficialJokePrepareBody
{
    public static function call(OfficialJokeContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
