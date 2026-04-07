/**
 * Flags controlling parsing result content.
*/
interface ResultContent {
    /**
   * Indicates that `results.dialingDetails` section should be returned for particular result items in the response.
   * Default: true
   */
  includeDialingDetails?: boolean;

  /**
   * Indicates that `results.numberDetails` section should be returned for particular result items in the response.
   * Example: true
   * Default: true
   */
  includeNumberDetails?: boolean;

  /**
   * Indicates that `results.formats` section should be returned for particular result items in the response.
   * Example: true
   * Default: true
   */
  includeFormats?: boolean;
}

export default ResultContent;
