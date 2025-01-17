interface TemplateInfo {
  /**
   * Link to a template
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a template
   */
  id?: string;

  /**
   * Description of a template
   */
  description?: string;

  /**
   */
  type?: 'UserSettings' | 'CallHandling' | 'LimitedExtensions';

  /**
   * Name of a template
   */
  name?: string;

  /**
   * Time of a template creation
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Time of the last template modification
   * Format: date-time
   */
  lastModifiedTime?: string;
}

export default TemplateInfo;
