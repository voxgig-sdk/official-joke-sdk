"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfficialJokeError = void 0;
class OfficialJokeError extends Error {
    isOfficialJokeError = true;
    sdk = 'OfficialJoke';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.OfficialJokeError = OfficialJokeError;
//# sourceMappingURL=OfficialJokeError.js.map