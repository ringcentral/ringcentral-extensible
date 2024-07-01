/**
 * Query parameters for operation listUserMessageTemplates
 */
interface ListUserMessageTemplatesParameters {
  /**
   * Site ID(s) to filter user message templates, associated with particular sites.
   *  By default the value is all - templates with all sites will be returned
   */
  siteIds?: string[];

  /**
   * Specifies if a template is available on a user (Personal) or a company (Company) level
   */
  scope?: 'Company' | 'Personal';
}

export default ListUserMessageTemplatesParameters;
