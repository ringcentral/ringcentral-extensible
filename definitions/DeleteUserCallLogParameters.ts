class DeleteUserCallLogParameters
{
    /// <summary>
    /// The end datetime for records deletion in (ISO 8601)[https://en.wikipedia.org/wiki/ISO_8601]  format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time
    /// </summary>
    dateTo: string

    /// <summary>
    /// </summary>
    phoneNumber: string

    /// <summary>
    /// </summary>
    extensionNumber: string

    /// <summary>
    /// </summary>
    type: string[]

    /// <summary>
    /// </summary>
    direction: string[]

    /// <summary>
    /// </summary>
    dateFrom: string
}

export default DeleteUserCallLogParameters