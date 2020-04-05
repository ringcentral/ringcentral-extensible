class ValidationError
{
    /// <summary>
    /// Error code
    /// </summary>
    errorCode: string

    /// <summary>
    /// Error message
    /// </summary>
    message: string

    /// <summary>
    /// Name of invalid parameter
    /// </summary>
    parameterName: string
}

export default ValidationError