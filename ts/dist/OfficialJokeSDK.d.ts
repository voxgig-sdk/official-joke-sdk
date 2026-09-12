import { JokeEntity } from './entity/JokeEntity';
import { TypeEntity } from './entity/TypeEntity';
export type * from './OfficialJokeTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { OfficialJokeEntityBase } from './OfficialJokeEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class OfficialJokeSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Joke(entopts?: Record<string, any>): JokeEntity;
    Type(entopts?: Record<string, any>): TypeEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): OfficialJokeSDK;
    tester(testopts?: any, sdkopts?: any): OfficialJokeSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof OfficialJokeSDK;
export { stdutil, config, BaseFeature, OfficialJokeEntityBase, OfficialJokeSDK, SDK, };
