/**
 * Query parameters for operation listCompanyMessageTemplates
 */
interface ListCompanyMessageTemplatesParameters {
  /**
   * Site ID(s) to filter company message templates, associated with particular sites
   *  By default the value is all - templates with all sites will be returned
   */
  siteIds?: string[];
}

export default ListCompanyMessageTemplatesParameters;
