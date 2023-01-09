interface ScimPatchOperation {
  /**
   * Required
   */
  op?: ('add' | 'replace' | 'remove');

  /**
   */
  path?: string;

  /**
   * Corresponding 'value' of that field specified by 'path'
   */
  value?: string;
}

export default ScimPatchOperation;
