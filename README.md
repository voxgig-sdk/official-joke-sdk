# OfficialJoke SDK

Grab random programmer and general jokes, or fetch by type or id, from a small community-run REST endpoint

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Official Joke API

The [Official Joke API](https://official-joke-api.appspot.com) is a small open-source service that returns short setup/punchline jokes drawn from a community-maintained corpus. It is run by [David Katz](https://github.com/15Dkatz) and the joke list is updated via pull requests to the [project repository](https://github.com/15Dkatz/official_joke_api).

What you get from the API:

- A single random joke via `/random_joke` or `/jokes/random`.
- Ten random jokes via `/random_ten` or `/jokes/ten`.
- A batch of N random jokes via `/jokes/random/<number>`.
- The list of available joke types via `/types`.
- Random or batched jokes filtered by type via `/jokes/<type>/random` and `/jokes/<type>/ten` (for example `/jokes/programming/random`).
- A specific joke by identifier via `/jokes/<id>`.

Each joke response carries a `type`, `setup`, `punchline`, and `id`. No authentication is required and CORS is enabled, so the endpoints can be called directly from a browser. The service does not document rate limits; it is hosted on Google App Engine and intended for small, casual workloads.

## Try it

**TypeScript**
```bash
npm install official-joke
```

**Python**
```bash
pip install official-joke-sdk
```

**PHP**
```bash
composer require voxgig/official-joke-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/official-joke-sdk/go
```

**Ruby**
```bash
gem install official-joke-sdk
```

**Lua**
```bash
luarocks install official-joke-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { OfficialJokeSDK } from 'official-joke'

const client = new OfficialJokeSDK({})

// List all jokes
const jokes = await client.Joke().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o official-joke-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "official-joke": {
      "command": "/abs/path/to/official-joke-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Joke** | A short setup/punchline pair with a `type` and numeric `id`, retrievable via `/random_joke`, `/jokes/random`, `/jokes/random/<number>`, `/jokes/ten`, or `/jokes/<id>`. | `/jokes/{type}/ten` |
| **Type** | A joke category such as `programming` or `general`; the full list is available at `/types`, and category-filtered jokes are fetched via `/jokes/<type>/random` and `/jokes/<type>/ten`. | `/types` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from officialjoke_sdk import OfficialJokeSDK

client = OfficialJokeSDK({})

# List all jokes
jokes, err = client.Joke(None).list(None, None)

# Load a specific joke
joke, err = client.Joke(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'officialjoke_sdk.php';

$client = new OfficialJokeSDK([]);

// List all jokes
[$jokes, $err] = $client->Joke(null)->list(null, null);

// Load a specific joke
[$joke, $err] = $client->Joke(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/official-joke-sdk/go"

client := sdk.NewOfficialJokeSDK(map[string]any{})

// List all jokes
jokes, err := client.Joke(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "OfficialJoke_sdk"

client = OfficialJokeSDK.new({})

# List all jokes
jokes, err = client.Joke(nil).list(nil, nil)

# Load a specific joke
joke, err = client.Joke(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("official-joke_sdk")

local client = sdk.new({})

-- List all jokes
local jokes, err = client:Joke(nil):list(nil, nil)

-- Load a specific joke
local joke, err = client:Joke(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = OfficialJokeSDK.test()
const result = await client.Joke().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = OfficialJokeSDK.test(None, None)
result, err = client.Joke(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = OfficialJokeSDK::test(null, null);
[$result, $err] = $client->Joke(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Joke(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = OfficialJokeSDK.test(nil, nil)
result, err = client.Joke(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Joke(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Official Joke API

- Upstream: [https://official-joke-api.appspot.com](https://official-joke-api.appspot.com)
- API docs: [https://github.com/15Dkatz/official_joke_api](https://github.com/15Dkatz/official_joke_api)

- Source code is published under the MIT licence on the [GitHub repository](https://github.com/15Dkatz/official_joke_api).
- Maintained by [David Katz (15Dkatz)](https://github.com/15Dkatz); jokes are crowd-contributed via pull requests to `jokes/index.json`.
- Free to use without authentication; please credit the upstream project when redistributing the joke corpus.

---

Generated from the Official Joke API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
