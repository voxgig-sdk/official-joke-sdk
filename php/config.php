<?php
declare(strict_types=1);

// OfficialJoke SDK configuration

class OfficialJokeConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "OfficialJoke",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://official-joke-api.appspot.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "joke" => [],
                    "type" => [],
                ],
            ],
            "entity" => [
        'joke' => [
          'fields' => [
            [
              'name' => 'id',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'punchline',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'setup',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'type',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 3,
            ],
          ],
          'name' => 'joke',
          'op' => [
            'list' => [
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'programming',
                        'kind' => 'param',
                        'name' => 'type',
                        'orig' => 'type',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/jokes/{type}/ten',
                  'parts' => [
                    'jokes',
                    '{type}',
                    'ten',
                  ],
                  'select' => [
                    '$action' => 'ten',
                    'exist' => [
                      'type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
                [
                  'method' => 'GET',
                  'orig' => '/jokes/ten',
                  'parts' => [
                    'jokes',
                    'ten',
                  ],
                  'select' => [
                    '$action' => 'ten',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'index$' => 1,
                ],
                [
                  'method' => 'GET',
                  'orig' => '/random_ten',
                  'parts' => [
                    'random_ten',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 2,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
            ],
            'load' => [
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 1,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/jokes/{id}',
                  'parts' => [
                    'jokes',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 5,
                        'kind' => 'param',
                        'name' => 'number',
                        'orig' => 'number',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/jokes/random/{number}',
                  'parts' => [
                    'jokes',
                    'random',
                    '{number}',
                  ],
                  'select' => [
                    'exist' => [
                      'number',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 1,
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'programming',
                        'kind' => 'param',
                        'name' => 'type',
                        'orig' => 'type',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/jokes/{type}/random',
                  'parts' => [
                    'jokes',
                    '{type}',
                    'random',
                  ],
                  'select' => [
                    '$action' => 'random',
                    'exist' => [
                      'type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 2,
                ],
                [
                  'method' => 'GET',
                  'orig' => '/jokes/random',
                  'parts' => [
                    'jokes',
                    'random',
                  ],
                  'select' => [
                    '$action' => 'random',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'index$' => 3,
                ],
                [
                  'method' => 'GET',
                  'orig' => '/random_joke',
                  'parts' => [
                    'random_joke',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 4,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'random',
              ],
              [
                'joke',
              ],
            ],
          ],
        ],
        'type' => [
          'fields' => [],
          'name' => 'type',
          'op' => [
            'list' => [
              'name' => 'list',
              'points' => [
                [
                  'method' => 'GET',
                  'orig' => '/types',
                  'parts' => [
                    'types',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return OfficialJokeFeatures::make_feature($name);
    }
}
