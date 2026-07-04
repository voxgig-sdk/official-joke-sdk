// Typed models for the OfficialJoke SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Joke {
  id?: number
  punchline: string
  setup: string
  type: string
}

export interface JokeLoadMatch {
  id: number
  number: number
  type: string
}

export interface JokeListMatch {
  type: string
}

export interface Type {
}

export type TypeListMatch = Partial<Type>

