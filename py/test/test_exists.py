# ProjectName SDK exists test

import pytest
from officialjoke_sdk import OfficialJokeSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = OfficialJokeSDK.test(None, None)
        assert testsdk is not None
