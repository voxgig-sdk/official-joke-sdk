package voxgigofficialjokesdk

import (
	"github.com/voxgig-sdk/official-joke-sdk/go/core"
	"github.com/voxgig-sdk/official-joke-sdk/go/entity"
	"github.com/voxgig-sdk/official-joke-sdk/go/feature"
	_ "github.com/voxgig-sdk/official-joke-sdk/go/utility"
)

// Type aliases preserve external API.
type OfficialJokeSDK = core.OfficialJokeSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type OfficialJokeEntity = core.OfficialJokeEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type OfficialJokeError = core.OfficialJokeError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewJokeEntityFunc = func(client *core.OfficialJokeSDK, entopts map[string]any) core.OfficialJokeEntity {
		return entity.NewJokeEntity(client, entopts)
	}
	core.NewTypeEntityFunc = func(client *core.OfficialJokeSDK, entopts map[string]any) core.OfficialJokeEntity {
		return entity.NewTypeEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewOfficialJokeSDK = core.NewOfficialJokeSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
