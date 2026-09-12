import { OfficialJokeEntityBase } from '../OfficialJokeEntityBase';
import type { OfficialJokeSDK } from '../OfficialJokeSDK';
import type { Control } from '../types';
import type { Joke, JokeLoadMatch, JokeListMatch } from '../OfficialJokeTypes';
declare class JokeEntity extends OfficialJokeEntityBase<Joke> {
    constructor(client: OfficialJokeSDK, entopts: any);
    make(this: JokeEntity): JokeEntity;
    load(this: any, reqmatch?: JokeLoadMatch, ctrl?: Control): Promise<JokeEntity>;
    list(this: any, reqmatch?: JokeListMatch, ctrl?: Control): Promise<JokeEntity[]>;
}
export { JokeEntity };
