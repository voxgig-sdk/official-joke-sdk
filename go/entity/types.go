// Typed models for the OfficialJoke SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Joke is the typed data model for the joke entity.
type Joke struct {
	Id *int `json:"id,omitempty"`
	Punchline string `json:"punchline"`
	Setup string `json:"setup"`
	Type string `json:"type"`
}

// JokeLoadMatch is the typed request payload for Joke.LoadTyped.
type JokeLoadMatch struct {
	Id int `json:"id"`
	Number int `json:"number"`
	Type string `json:"type"`
}

// JokeListMatch is the typed request payload for Joke.ListTyped.
type JokeListMatch struct {
	Type string `json:"type"`
}

// Type is the typed data model for the type entity.
type Type struct {
}

// TypeListMatch mirrors the type fields as an all-optional match
// filter (Go analog of Partial<Type>).
type TypeListMatch struct {
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
