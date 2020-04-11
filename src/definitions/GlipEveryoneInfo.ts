class GlipEveryoneInfo
{
  /**
   * Internal identifier of a chat
   */
  id?: string

  /**
   * Type of a chat
   */
  type?: ('Everyone')

  /**
   * Chat name
   */
  name?: string

  /**
   * Chat description
   */
  description?: string

  /**
   * Chat creation datetime in ISO 8601 format
   */
  creationTime?: string

  /**
   * Chat last change datetime in ISO 8601 format
   */
  lastModifiedTime?: string
}

export default GlipEveryoneInfo
