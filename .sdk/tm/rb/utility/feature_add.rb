# OfficialJoke SDK utility: feature_add
module OfficialJokeUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
