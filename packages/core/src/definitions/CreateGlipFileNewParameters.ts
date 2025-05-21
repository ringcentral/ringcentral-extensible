/**
 * Query parameters for operation createGlipFileNew
 */
interface CreateGlipFileNewParameters {
  /**
   * Internal identifier of a group to which the post with attachment
   *  will be added to
   * Format: int64
   */
  groupId?: number;

  /**
   * Name of a file attached
   */
  name?: string;
}

export default CreateGlipFileNewParameters;
