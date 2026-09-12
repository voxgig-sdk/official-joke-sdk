import { OfficialJokeEntityBase } from '../OfficialJokeEntityBase';
import type { OfficialJokeSDK } from '../OfficialJokeSDK';
import type { Control } from '../types';
import type { Type, TypeListMatch } from '../OfficialJokeTypes';
declare class TypeEntity extends OfficialJokeEntityBase<Type> {
    constructor(client: OfficialJokeSDK, entopts: any);
    make(this: TypeEntity): TypeEntity;
    list(this: any, reqmatch?: TypeListMatch, ctrl?: Control): Promise<TypeEntity[]>;
}
export { TypeEntity };
