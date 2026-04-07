import NumberParserContext from "./NumberParserContext.js";
import ParsePhoneNumberResponseV2Results from "./ParsePhoneNumberResponseV2Results.js";

/**
 * Phone Number Parser service's Parse Phone Numbers API successful response schema.
*/
interface ParsePhoneNumberResponseV2 {
    /**
   */
  context?: NumberParserContext;

  /**
   */
  results?: ParsePhoneNumberResponseV2Results[];
}

export default ParsePhoneNumberResponseV2;
