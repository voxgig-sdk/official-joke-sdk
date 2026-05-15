package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewJokeEntityFunc func(client *OfficialJokeSDK, entopts map[string]any) OfficialJokeEntity

var NewTypeEntityFunc func(client *OfficialJokeSDK, entopts map[string]any) OfficialJokeEntity

