import type DialingDetails from "./DialingDetails.js";
import type NumberDetails from "./NumberDetails.js";

interface ParsePhoneNumberResponseV2Results {
  /**
   */
  dialingDetails?: DialingDetails;

  /**
   */
  numberDetails?: NumberDetails;

  /**
   * Contains several items for the `results.category` response's attribute value `Ambiguous`,
   *  where each item represents formatting for a specific category from the list of categories between which ambiguity happened,
   *  e.g. `Extension` and `Regular`, or `Extension` and `ShortCode`.
   *
   *  Absent if the request's parameter `resultContent.includeFormats` value is set to `false`.
   */
  formats?: object[];
}

export default ParsePhoneNumberResponseV2Results;
