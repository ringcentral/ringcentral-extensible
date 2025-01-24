/**
 * Query parameters for operation listAnsweringRules
 */
interface ListAnsweringRulesParameters {
  /**
   * Filters custom call handling rules of the extension
   */
  type?: "Custom";

  /**
   * Default: Simple
   */
  view?: "Detailed" | "Simple";

  /**
   * If true, then only active call handling rules are returned
   */
  enabledOnly?: boolean;

  /**
   * The result set page number (1-indexed) to return
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 1
   * Default: 1
   */
  page?: number;

  /**
   * The number of items per page. If provided value in the request
   *  is greater than a maximum, the maximum value is applied
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 100
   * Default: 100
   */
  perPage?: number;
}

export default ListAnsweringRulesParameters;
