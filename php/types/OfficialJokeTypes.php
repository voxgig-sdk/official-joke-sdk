<?php
declare(strict_types=1);

// Typed models for the OfficialJoke SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Joke entity data model. */
class Joke
{
    public ?int $id = null;
    public string $punchline;
    public string $setup;
    public string $type;
}

/** Request payload for Joke#load. */
class JokeLoadMatch
{
    public ?int $id = null;
    public ?int $number = null;
}

/** Request payload for Joke#list. */
class JokeListMatch
{
    public ?int $id = null;
    public ?string $punchline = null;
    public ?string $setup = null;
    public ?string $type = null;
}

/** Type entity data model. */
class Type
{
}

/** Request payload for Type#list. */
class TypeListMatch
{
}

