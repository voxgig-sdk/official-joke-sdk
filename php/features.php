<?php
declare(strict_types=1);

// OfficialJoke SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class OfficialJokeFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new OfficialJokeBaseFeature();
            case "test":
                return new OfficialJokeTestFeature();
            default:
                return new OfficialJokeBaseFeature();
        }
    }
}
