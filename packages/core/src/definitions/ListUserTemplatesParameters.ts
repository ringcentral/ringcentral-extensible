/**
 * Query parameters for operation listUserTemplates
*/
interface ListUserTemplatesParameters {
  /**
   */
  type?: ('UserSettings' | 'CallHandling');

  /**
   */
  page?: string;

  /**
   */
  perPage?: string;
}

export default ListUserTemplatesParameters;
