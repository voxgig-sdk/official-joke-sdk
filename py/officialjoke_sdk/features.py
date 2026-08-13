# OfficialJoke SDK feature factory

from officialjoke_sdk.feature.base_feature import OfficialJokeBaseFeature
from officialjoke_sdk.feature.test_feature import OfficialJokeTestFeature


def _make_feature(name):
    features = {
        "base": lambda: OfficialJokeBaseFeature(),
        "test": lambda: OfficialJokeTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
