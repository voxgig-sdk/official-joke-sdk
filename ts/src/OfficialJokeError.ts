
import { Context } from './Context'


class OfficialJokeError extends Error {

  isOfficialJokeError = true

  sdk = 'OfficialJoke'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  OfficialJokeError
}

