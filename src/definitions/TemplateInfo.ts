class TemplateInfo
{
  /**
   * Link to a template
   */
  uri?: string

  /**
   * Internal identifier of a template
   */
  id?: string

  /**
   * Enum: UserSettings, CallHandling
   */
  type?: string

  /**
   * Name of a template
   */
  name?: string

  /**
   * Time of a template creation
   */
  creationTime?: string

  /**
   * Time of the last template modification
   */
  lastModifiedTime?: string
}

export default TemplateInfo
