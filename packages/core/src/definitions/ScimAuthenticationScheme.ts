interface ScimAuthenticationScheme {
  /** */
  description?: string;

  /**
   * Format: uri
   */
  documentationUri?: string;

  /** */
  name?: string;

  /**
   * Format: uri
   */
  specUri?: string;

  /** */
  primary?: boolean;
}

export default ScimAuthenticationScheme;
