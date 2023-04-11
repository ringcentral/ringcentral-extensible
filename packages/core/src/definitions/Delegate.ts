interface Delegate {
  /**
   * Delegate id (equal as extension id of delegate)
   */
  id?: string;

  /**
   * Delegate name
   */
  name?: string;

  /**
   * Delegate account id
   */
  accountId?: string;

  /**
   * Delegate extension id
   * Required
   */
  extensionId?: string;
}

export default Delegate;
