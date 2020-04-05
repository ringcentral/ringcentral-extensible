class ListChatNotesParameters
{
    /// <summary>
    /// The end datetime for resulting records in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, e.g. 2019-03-10T18:23:45. The default value is Now.
    /// </summary>
    creationTimeTo: string

    /// <summary>
    /// The start datetime for resulting records in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone
    /// </summary>
    creationTimeFrom: string

    /// <summary>
    /// Internal identifier of the user that created the note. Multiple values are supported
    /// </summary>
    creatorId: string

    /// <summary>
    /// Status of notes to be fetched; if not specified all notes are fetched by default.
    /// Enum: Active, Draft
    /// </summary>
    status: string

    /// <summary>
    /// Pagination token
    /// </summary>
    pageToken: string

    /// <summary>
    /// Max number of notes to be fetched by one request; the value range is 1-250.
    /// Maximum: 250
    /// Default: 30
    /// </summary>
    recordCount: number
}

export default ListChatNotesParameters