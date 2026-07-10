# frozen_string_literal: true

# Typed models for the OfficialJoke SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Joke entity data model.
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] punchline
#   @return [String]
#
# @!attribute [rw] setup
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
Joke = Struct.new(
  :id,
  :punchline,
  :setup,
  :type,
  keyword_init: true
)

# Request payload for Joke#load.
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] number
#   @return [Integer, nil]
JokeLoadMatch = Struct.new(
  :id,
  :number,
  keyword_init: true
)

# Request payload for Joke#list.
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] punchline
#   @return [String, nil]
#
# @!attribute [rw] setup
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
JokeListMatch = Struct.new(
  :id,
  :punchline,
  :setup,
  :type,
  keyword_init: true
)

# Type entity data model.
class Type
end

# Request payload for Type#list.
class TypeListMatch
end

