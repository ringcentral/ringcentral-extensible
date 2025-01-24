/**
 * Action target object (company/extension)
 */
interface AccountHistoryRecordTarget {
  /**
   * Extension identifier of the affected entity or "0" for Company level
   * Example: 404611540004
   */
  objectId?: string;

  /**
   * Type of the entity.
   * Example: Extension
   */
  objectType?: "Extension" | "Account" | "Company" | "Template";

  /**
   * Target extension name
   * Example: Charlie Williams
   */
  name?: string;

  /**
   * Target extension (short) number  of the affected entity (if the objectType is EXTENSION).
   * Example: 103
   */
  extensionNumber?: string;

  /**
   * Target extension site identifier (if any)
   * Example: 871836004
   */
  siteId?: string;
}

export default AccountHistoryRecordTarget;
