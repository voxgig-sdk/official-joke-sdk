# OfficialJoke SDK feature factory

from officialjoke_sdk.feature.base_feature import OfficialJokeBaseFeature
from officialjoke_sdk.feature.ratelimit_feature import OfficialJokeRatelimitFeature
from officialjoke_sdk.feature.retry_feature import OfficialJokeRetryFeature
from officialjoke_sdk.feature.test_feature import OfficialJokeTestFeature
from officialjoke_sdk.feature.timeout_feature import OfficialJokeTimeoutFeature


_FEATURES = {
    "base": lambda: OfficialJokeBaseFeature(),
    "ratelimit": lambda: OfficialJokeRatelimitFeature(),
    "retry": lambda: OfficialJokeRetryFeature(),
    "test": lambda: OfficialJokeTestFeature(),
    "timeout": lambda: OfficialJokeTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
