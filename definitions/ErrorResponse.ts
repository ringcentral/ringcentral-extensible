import Error from './Error'

    // Format of response in case that any error occured during request processing
class ErrorResponse
{
    /// <summary>
    /// Collection of all gathered errors
    /// </summary>
    errors: Error[]
}

export default ErrorResponse