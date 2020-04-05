class GlipTeamInfo
{
  /**
   * Internal identifier of a team
   */
  id?: string

  /**
   * Type of a chat
   * Enum: Team
   */
  type?: string

  /**
   * Team access level
   */
  public?: boolean

  /**
   * Team name
   */
  name?: string

  /**
   * Team description
   */
  description?: string

  /**
   * Team status
   * Enum: Active, Archived
   */
  status?: string

  /**
   * Team creation datetime in ISO 8601 format
   */
  creationTime?: string

  /**
   * Team last change datetime in ISO 8601 format
   */
  lastModifiedTime?: string
}

export default GlipTeamInfo
