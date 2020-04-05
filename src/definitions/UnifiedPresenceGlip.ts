// Returned if *Glip* feature is switched on
class UnifiedPresenceGlip
{
  /**
   * Glip connection status calculated from all user's apps. Returned always for the requester's extension; returned for another users if their glip visibility is set to 'Visible'
   * Enum: Offline, Online
   */
  status?: string

  /**
   * Visibility setting allowing other users to see the user's Glip presence status; returned only for requester's extension
   * Enum: Visible, Invisible
   */
  visibility?: string

  /**
   * Shows whether user wants to receive Glip notifications or not.
   * Enum: Available, DND
   */
  availability?: string
}

export default UnifiedPresenceGlip
