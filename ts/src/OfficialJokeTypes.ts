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
  id?: number
  number?: number

  // Selects a custom action instead of the plain load:
  //   'random' | 'random'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface JokeListMatch {
  id?: number
  punchline?: string
  setup?: string
  type?: string

  // Selects a custom action instead of the plain list:
  //   'ten' | 'ten'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Type {
}

export interface TypeListMatch {
}

