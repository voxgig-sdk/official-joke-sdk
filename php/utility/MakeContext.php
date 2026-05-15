<?php
declare(strict_types=1);

// OfficialJoke SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class OfficialJokeMakeContext
{
    public static function call(array $ctxmap, ?OfficialJokeContext $basectx): OfficialJokeContext
    {
        return new OfficialJokeContext($ctxmap, $basectx);
    }
}
