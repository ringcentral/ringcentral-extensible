import type CountryContext from "./CountryContext.js";

/**
 * The manually set parsing context to override the context parameter values taken from the context source.
 */
interface NumberParserContext {
  /**
   * Internal identifier of the RingCentral brand. Brand context definition.
   *
   *  - If the value is not specified, it's taken from the context source:
   *    - `Default` -> `null`
   *    - `Account` -> brand from the request context header
   *  - Explicitly set value redefines the value taken from the context source.
   *  - Explicitly set `null` value disables brand context for parsing.
   * Example: 1210
   */
  brandId?: string;

  /**
   */
  country?: CountryContext;

  /**
   * Default area code of the caller. Provides support for the dial plan feature
   *  "[Default Area Code](https://support.ringcentral.com/article/dial-plan-default-area-code-ringcentral-mvp.html)".
   *
   *  If the value is not specified or explicitly set to `null`, the feature "Default Area Code" context is disabled for parsing.
   * Example: 650
   */
  defaultAreaCode?: string;

  /**
   * Vanity phone numbers are supported in the parsing input. Provides support for the feature
   *  "[Vanity Numbers dialing](https://support.ringcentral.com/article/Requesting-a-toll-free-vanity-number.html)".
   *
   *  - If the value is not specified, it's taken from the context source:
   *    - `Default` -> `false`
   *    - `Account` -> `true`
   *  - Explicitly set value redefines the value taken from the context source.
   * Example: true
   */
  vanityPhoneNumbersAllowed?: boolean;

  /**
   * The maximum allowed length of extension numbers on the account. Provides support for the dial plan feature
   *  "[Variable-length Extensions](https://support.ringcentral.com/article/11277-Enterprise-Dial-Plan-Max-Extension-Length.html)".
   *
   *  - If the value is not specified, it's taken from the context source:
   *    - `Default` -> _5_
   *    - `Account` -> the value from the requester's account settings
   *  - Explicitly set value redefines the value taken from the context source.
   *  - Explicitly set `null` value disables extension numbers detection.
   * Maximum: 9
   * Minimum: 1
   * Format: int32
   */
  maxExtensionNumberLength?: number;

  /**
   * Short codes are supported in the parsing input. Provides support for the feature "Shortcodes dialing".
   *
   *  - If the value is not specified, it's taken from the context source:
   *    - `Default` -> `false`
   *    - `Account` -> the value from the requester's account settings
   *  - Explicitly set value redefines the value taken from the context source.
   */
  shortCodesAllowed?: boolean;

  /**
   * The site code of caller. Together with parameter `context.shortExtensionNumberLength` provides support for the feature
   *  "[Site Codes](https://support.ringcentral.com/article/11279-Enterprise-Dial-Plan-Site-Codes.html)".
   *
   *  - If the value is not specified or explicitly set to `null`, the feature "Site Codes" context is disabled for parsing.
   * Example: 13
   */
  siteCode?: string;

  /**
   * The allowed length of short extension numbers on the account.
   *  Together with parameter `context.siteCode` provides support for the feature
   *  "[Site Codes](https://support.ringcentral.com/article/11279-Enterprise-Dial-Plan-Site-Codes.html)".
   *
   *  - The value is ignored and treated as `null` if parameter `context.siteCode` is not specified or explicitly set to `null`.
   *  - If the value is not specified, it's taken from the context source:
   *    - `Default` -> _3_
   *    - `Account` -> the value from the requester's account settings
   *  - Explicitly set value redefines the value taken from the context source.
   * Maximum: 8
   * Minimum: 1
   * Format: int32
   * Example: 4
   */
  shortExtensionNumberLength?: number;

  /**
   * Digit of outbound call prefix on the account. Provides support for the dial plan feature
   *  "[Outbound Call Prefix](https://support.ringcentral.com/article/11278-Enterprise-Dial-Plan-Outbound-Call-Prefix.html)".
   *
   *  - If the value is not specified, it's taken from the context source:
   *    - `Default` -> `null`
   *    - `Account` -> the value from the requester's account settings
   *  - Explicitly set value redefines the value taken from the context source.
   *  - Explicitly set `null` value disables outbound call prefix detection.
   * Example: 9
   */
  outboundCallPrefix?: string;

  /**
   * Masked phone numbers are supported in the the parsing input.
   *  Provides support for the feature "[Masked Numbers](https://support.ringcentral.com/article/Number-Masking-French-Numbers.html)".
   *
   *  - If the value is not specified or explicitly set to `false`, the feature "Masked Numbers" context is disabled for parsing.
   */
  maskedPhoneNumbersAllowed?: boolean;

  /**
   * A character used for masking phone numbers.
   *
   *  Absent if the request's parameter `context.maskedPhoneNumbersAllowed` value is set to `false`.
   * Example: X
   */
  maskSymbol?: string;

  /**
   * The number of last digits of the phone number which are masked.
   *
   *  Absent if the request's parameter `context.maskedPhoneNumbersAllowed` value is set to `false`.
   * Format: int32
   * Example: 4
   */
  maskLength?: number;

  /**
   * Defines the logic of conflicts resolving when it's impossible to detect whether the inputted string
   *  corresponds to an extension number or a phone number. Provides support for the feature "Smart Dial Plan Routing".
   *
   *  **Possible values**:
   *
   *  - `Default` - the ambiguous number will always be classified as an extension number;
   *  - `Client` - the ambiguous number will get `Ambiguous` category and the final decision whether the number is an extension number or a phone number should be made by the requester.
   *  - If the value is not specified, it's taken from the context source:
   *    - `Default` -> _Default_
   *    - `Client` -> the value from the requester's account settings
   *  - Explicitly set value redefines the value taken from the context source.
   * Example: Client
   * Default: Default
   */
  conflictHandling?: "Default" | "Client";
}

export default NumberParserContext;
