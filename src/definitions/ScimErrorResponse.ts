class ScimErrorResponse
{
  /**
   * detail error message
   */
  detail?: string

  /**
   */
  schemas?: string[]

  /**
   * bad request type when status code is 400
   * Enum: uniqueness, tooMany, mutability, sensitive, invalidSyntax, invalidFilter, invalidPath, invalidValue, invalidVers, noTarget
   */
  scimType?: string

  /**
   * same as HTTP status code, e.g. 400, 401, etc.
   */
  status?: string
}

export default ScimErrorResponse
