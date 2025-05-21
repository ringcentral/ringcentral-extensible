interface CommStateUpdateRequest {
  /**
   * Specifies if a state is enabled or not. *Work Hours* and *After Hours* states cannot be disabled
   */
  enabled?: boolean;

  /** */
  conditions?: object[];
}

export default CommStateUpdateRequest;
