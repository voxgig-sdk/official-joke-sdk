<?php
declare(strict_types=1);

// OfficialJoke SDK utility: feature_add

class OfficialJokeFeatureAdd
{
    public static function call(OfficialJokeContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
