interface DevicesSearchOrderBy {
  /**
   * The sorting field name
   */
  fieldName?: ('name' | 'phoneNumber' | 'serial' | 'extensionName' | 'site' | 'orderStatus' | 'extensionNumber');

  /**
   * Default: ASC
   */
  direction?: ('ASC' | 'DESC');
}

export default DevicesSearchOrderBy;
