import { Context } from './Context';
declare class OfficialJokeError extends Error {
    isOfficialJokeError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { OfficialJokeError };
