/**
 * Query parameters for operation listUserTemplates
*/
interface ListUserTemplatesParameters {
  /**
   * Type of a template
   */
  type?: ('UserSettings' | 'CallHandling');

  /**
   * Indicates the page number to retrieve. Only positive number values
 *  are allowed
   */
  page?: string;

  /**
   * Indicates the page size (number of items)
   */
  perPage?: string;
}

export default ListUserTemplatesParameters;
