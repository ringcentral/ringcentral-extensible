class DeleteUserCallLogParameters
{
    /**
     * The end datetime for records deletion in (ISO 8601)[https://en.wikipedia.org/wiki/ISO_8601]  format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time
     */
    dateTo?: string

    /**
     */
    phoneNumber?: string

    /**
     */
    extensionNumber?: string

    /**
     */
    type?: string[]

    /**
     */
    direction?: string[]

    /**
     */
    dateFrom?: string
}

export default DeleteUserCallLogParameters