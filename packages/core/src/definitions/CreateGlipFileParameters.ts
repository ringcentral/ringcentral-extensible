/**
 * Query parameters for operation createGlipFile
*/
interface CreateGlipFileParameters {
  /**
   * Internal identifier of a group to which the post with attachment will be added to
   * Format: int64
   */
  groupId?: number;

  /**
   * Name of a file attached
   */
  name?: string;
}

export default CreateGlipFileParameters;
