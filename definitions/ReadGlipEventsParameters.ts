class ReadGlipEventsParameters
{
    /// <summary>
    /// Number of groups to be fetched by one request. The maximum value is 250, by default - 30.
    /// Maximum: 250
    /// Default: 30
    /// </summary>
    recordCount: number

    /// <summary>
    /// Token of a page to be returned
    /// </summary>
    pageToken: string
}

export default ReadGlipEventsParameters