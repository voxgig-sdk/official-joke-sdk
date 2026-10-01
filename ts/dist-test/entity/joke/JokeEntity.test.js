"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('JokeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OFFICIAL_JOKE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OFFICIAL_JOKE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OfficialJokeSDK.test();
        const ent = testsdk.Joke();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OFFICIAL_JOKE_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'joke.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the joke", "t": "`$INTEGER`", "key$": "id", "index$": 0 }, "punchline": { "a": true, "h": "Punchline", "n": "punchline", "r": true, "sh": "The punchline/answer part of the joke", "t": "`$STRING`", "key$": "punchline", "index$": 1 }, "setup": { "a": true, "h": "Setup", "n": "setup", "r": true, "sh": "The setup/question part of the joke", "t": "`$STRING`", "key$": "setup", "index$": 2 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "The category/type of the joke", "t": "`$STRING`", "key$": "type", "index$": 3 } }, "id": { "field": "id", "name": "id" }, "name": "joke", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /jokes/{type}/ten", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "programming", "k": "param", "n": "type", "or": "type", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/jokes/{type}/ten", "q": { "$action": "ten", "exist": ["type"] }, "r": {}, "s": [{ "lit": "jokes" }, { "var": "type" }, { "lit": "ten" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /jokes/ten", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/jokes/ten", "q": { "$action": "ten" }, "r": {}, "s": [{ "lit": "jokes" }, { "lit": "ten" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /random_ten", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/random_ten", "q": {}, "r": {}, "s": [{ "lit": "random_ten" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /jokes/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": 1, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/jokes/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "jokes" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /jokes/random/{number}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": 5, "k": "param", "n": "number", "or": "number", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/jokes/random/{number}", "q": { "exist": ["number"] }, "r": {}, "s": [{ "lit": "jokes" }, { "lit": "random" }, { "var": "number" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /jokes/{type}/random", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "programming", "k": "param", "n": "type", "or": "type", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/jokes/{type}/random", "q": { "$action": "random", "exist": ["type"] }, "r": {}, "s": [{ "lit": "jokes" }, { "var": "type" }, { "lit": "random" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "GET /jokes/random", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/jokes/random", "q": { "$action": "random" }, "r": {}, "s": [{ "lit": "jokes" }, { "lit": "random" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "GET /random_joke", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/random_joke", "q": {}, "r": {}, "s": [{ "lit": "random_joke" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "joke", "name__orig": "joke", "Name": "Joke", "name_": "joke", "name-": "joke", "NAME": "JOKE", "index$": 0 }, { "active": true, "entity": "joke", "key$": "BasicJokeFlow", "kind": "basic", "name": "BasicJokeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "joke_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "joke_ref01", "srcdatavar": "joke_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-joke_ref01" } }], "index$": 1 }] }, 'Joke', { "GET /jokes/{type}/ten": { "protocol": "http", "parameters": [{ "name": "type", "in": "path", "required": true, "description": "The type/category of jokes to retrieve", "schema": { "type": "string", "example": "programming" }, "index$": 0 }] }, "GET /jokes/ten": { "protocol": "http", "parameters": [] }, "GET /random_ten": { "protocol": "http", "parameters": [] }, "GET /jokes/{id}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "required": true, "description": "The ID of the joke to retrieve", "schema": { "type": "integer", "example": 1 }, "index$": 0 }] }, "GET /jokes/random/{number}": { "protocol": "http", "parameters": [{ "name": "number", "in": "path", "required": true, "description": "The number of random jokes to retrieve", "schema": { "type": "integer", "minimum": 1, "example": 5 }, "index$": 0 }] }, "GET /jokes/{type}/random": { "protocol": "http", "parameters": [{ "name": "type", "in": "path", "required": true, "description": "The type/category of joke to retrieve", "schema": { "type": "string", "example": "programming" }, "index$": 0 }] }, "GET /jokes/random": { "protocol": "http", "parameters": [] }, "GET /random_joke": { "protocol": "http", "parameters": [] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let joke_ref01_data = Object.values(setup.data.existing.joke)[0];
        // LIST
        const joke_ref01_ent = client.Joke();
        const joke_ref01_match = {};
        const joke_ref01_list = (await joke_ref01_ent.list(joke_ref01_match)).map((e) => e.data());
        // LOAD
        const joke_ref01_match_dt0 = {};
        joke_ref01_match_dt0.id = joke_ref01_data.id;
        const joke_ref01_data_dt0 = (await joke_ref01_ent.load(joke_ref01_match_dt0)).data();
        (0, node_assert_1.default)(joke_ref01_data_dt0.id === joke_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/joke/JokeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OfficialJokeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['joke01', 'joke02', 'joke03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OFFICIAL_JOKE_TEST_JOKE_ENTID': idmap,
        'OFFICIAL_JOKE_TEST_LIVE': 'FALSE',
        'OFFICIAL_JOKE_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['OFFICIAL_JOKE_TEST_JOKE_ENTID'];
    const live = 'TRUE' === env.OFFICIAL_JOKE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OFFICIAL_JOKE_TEST_JOKE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.OfficialJokeSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.OFFICIAL_JOKE_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=JokeEntity.test.js.map