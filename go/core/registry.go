package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewJokeEntityFunc func(client *OfficialJokeSDK, entopts map[string]any) OfficialJokeEntity

var NewTypeEntityFunc func(client *OfficialJokeSDK, entopts map[string]any) OfficialJokeEntity

