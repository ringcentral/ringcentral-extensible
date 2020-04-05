class UpdateUnifiedPresenceGlip
{
    /// <summary>
    /// Visibility setting allowing other users to see Glip presence status
    /// Enum: Visible, Invisible
    /// </summary>
    visibility: string

    /// <summary>
    /// Availability setting specifing whether to receive Glip notifications or not
    /// Enum: Available, DND
    /// </summary>
    availability: string
}

export default UpdateUnifiedPresenceGlip