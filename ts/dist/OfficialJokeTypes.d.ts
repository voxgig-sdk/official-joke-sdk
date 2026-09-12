export interface Joke {
    id?: number;
    punchline: string;
    setup: string;
    type: string;
}
export interface JokeLoadMatch {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface JokeListMatch {
    id?: number;
    punchline?: string;
    setup?: string;
    type?: string;
    $action?: string;
    [action: string]: any;
}
export interface Type {
}
export interface TypeListMatch {
}
