interface PostGlipFile {
  /**
   * Internal identifier of a file
   * Required
   */
  id?: string;

  /**
   * Link to binary content
   * Required
   */
  contentUri?: string;

  /**
   * Name of a file
   */
  name?: string;
}

export default PostGlipFile;
