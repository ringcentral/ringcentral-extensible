class ScimErrorResponse
{
    /// <summary>
    /// detail error message
    /// </summary>
    detail: string

    /// <summary>
    /// </summary>
    schemas: string[]

    /// <summary>
    /// bad request type when status code is 400
    /// Enum: uniqueness, tooMany, mutability, sensitive, invalidSyntax, invalidFilter, invalidPath, invalidValue, invalidVers, noTarget
    /// </summary>
    scimType: string

    /// <summary>
    /// same as HTTP status code, e.g. 400, 401, etc.
    /// </summary>
    status: string
}

export default ScimErrorResponse