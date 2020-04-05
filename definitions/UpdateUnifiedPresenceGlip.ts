class UpdateUnifiedPresenceGlip
{
    /**
     * Visibility setting allowing other users to see Glip presence status
     * Enum: Visible, Invisible
     */
    visibility: string

    /**
     * Availability setting specifing whether to receive Glip notifications or not
     * Enum: Available, DND
     */
    availability: string
}

export default UpdateUnifiedPresenceGlip