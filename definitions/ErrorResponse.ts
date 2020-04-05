import Error from './Error'

    // Format of response in case that any error occured during request processing
class ErrorResponse
{
    /**
     * Collection of all gathered errors
     */
    errors: Error[]
}

export default ErrorResponse