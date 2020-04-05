class ReadCallSessionStatusParameters
{
    /**
     * The date and time of a call session latest change
     */
    timestamp?: string

    /**
     * The time frame of awaiting for a status change before sending the resulting one in response
     */
    timeout?: string
}

export default ReadCallSessionStatusParameters