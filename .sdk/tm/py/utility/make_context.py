# OfficialJoke SDK utility: make_context

from core.context import OfficialJokeContext


def make_context_util(ctxmap, basectx):
    return OfficialJokeContext(ctxmap, basectx)
