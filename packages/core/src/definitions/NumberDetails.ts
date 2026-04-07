import type CountryContext from "./CountryContext.js";
import type NumberDetailsSpecialService from "./NumberDetailsSpecialService.js";

/**
 * Absent if the request's parameter `resultContent.includeNumberDetails` value is set to `false`.
 */
interface NumberDetails {
  /**
   * Absent if the request's parameter `context.siteCode` value is set to `null`.
   * Example: 10
   */
  siteCode?: string;

  /**
   * Absent if the request's parameter `context.siteCode` value is set to `null`.
   * Example: 303
   */
  shortExtensionNumber?: string;

  /**
   * Absent for the `results.category` response's attribute values:
   *  `Unknown`, `ServiceCode`, `SpecialService`, `Regular`, `TollFree` and `ShortCode`.
   * Example: 10303
   */
  extensionNumber?: string;

  /**
   * Absent for the `results.category` response's attribute values:
   *  `Unknown`, `ServiceCode`, `Extension`, `Regular`, `TollFree`, `ShortCode` and `Ambiguous`.
   */
  specialService?: NumberDetailsSpecialService;

  /**
   */
  country?: CountryContext;

  /**
   * Absent if the response's attribute `results.originalString` value doesn't contain a national destination code.
   */
  nationalDestinationCode?: string;

  /**
   * Absent if the response's attribute `results.originalString` value doesn't contain an area code.
   * Example: 650
   */
  areaCode?: string;

  /**
   * Absent if the response's attribute `results.originalString` value doesn't contain a regional destination code.
   */
  regionalDestinationCode?: string;

  /**
   * Absent if the response's attribute `results.originalString` value doesn't contain an allocation block code.
   */
  allocationBlockCode?: string;

  /**
   * Absent for the `results.category` response's attribute values: `Unknown`, `ServiceCode` and `Extension`.
   * Example: 5558275
   */
  subscriberNumber?: string;

  /**
   * Absent if the response's attribute `results.originalString` value doesn't contain a sub-address.
   * Example: 1019
   */
  subAddress?: string;

  /**
   * Absent if the response's attribute `results.originalString` value doesn't contain a DTMF postfix.
   * Example: ,,,1,3,1,
   */
  dtmfPostfix?: string;

  /**
   * Absent if the response's attribute `results.originalString` value doesn't contain a SIP postfix.
   * Example: @sip.ringcentral.com
   */
  sipPostfix?: string;

  /**
   * Absent if the request's parameter `context.maskedPhoneNumbersAllowed` value is set to `false`.
   */
  probablyMasked?: boolean;

  /**
   * Absent for the `results.category` response's attribute values:
   *  `Unknown`, `SpecialService`, `Extension`, `TollFree`, `ShortCode` and `Ambiguous`.
   * Example: Valid
   */
  status?: "Valid" | "Possible" | "Invalid";
}

export default NumberDetails;
