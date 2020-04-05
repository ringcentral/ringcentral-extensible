// Returned if *Glip* feature is switched on
class UnifiedPresenceGlip
{
    /// <summary>
    /// Glip connection status calculated from all user's apps. Returned always for the requester's extension; returned for another users if their glip visibility is set to 'Visible'
    /// Enum: Offline, Online
    /// </summary>
    status: string

    /// <summary>
    /// Visibility setting allowing other users to see the user's Glip presence status; returned only for requester's extension
    /// Enum: Visible, Invisible
    /// </summary>
    visibility: string

    /// <summary>
    /// Shows whether user wants to receive Glip notifications or not.
    /// Enum: Available, DND
    /// </summary>
    availability: string
}

export default UnifiedPresenceGlip