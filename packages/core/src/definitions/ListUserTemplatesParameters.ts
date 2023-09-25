/**
 * Query parameters for operation listUserTemplates
 */
interface ListUserTemplatesParameters {
  /**
   * Type of a template
   */
  type?: 'UserSettings' | 'CallHandling';

  /**
   * Indicates a page number to retrieve. Only positive number values
   *  are allowed. Default value is '1'
   * Format: int32
   * Default: 1
   */
  page?: number;

  /**
   * Indicates a page size (number of items). If not specified, the value is '100' by default
   * Format: int32
   * Default: 100
   */
  perPage?: number;
}

export default ListUserTemplatesParameters;
