package core

type OfficialJokeError struct {
	IsOfficialJokeError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewOfficialJokeError(code string, msg string, ctx *Context) *OfficialJokeError {
	return &OfficialJokeError{
		IsOfficialJokeError: true,
		Sdk:              "OfficialJoke",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *OfficialJokeError) Error() string {
	return e.Msg
}
