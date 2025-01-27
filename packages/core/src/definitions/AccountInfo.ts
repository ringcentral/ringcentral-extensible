import PostalAddress from "./PostalAddress.js";
import ServiceInfoV2 from "./ServiceInfoV2.js";
import SystemUserContactInfo from "./SystemUserContactInfo.js";

interface AccountInfo {
  /**
   * Internal identifier of RingCentral account
   * Required
   * Example: 8000012345
   */
  id?: string;

  /**
   * External account ID. Used as a primary key to link accounts between
   *  RingCentral and partner systems.
   * Example: acme-us-12345
   */
  externalAccountId?: string;

  /**
   * Phone number in e.164 format (with '+' prefix)
   * Example: +16501234567
   */
  mainNumber?: string;

  /**
   * Status of an account
   * Required
   */
  status?: "Initial" | "Unconfirmed" | "Confirmed" | "Disabled";

  /**
   * Company name
   * Example: Acme Inc.
   */
  companyName?: string;

  /** */
  companyAddress?: PostalAddress;

  /**
   * Required
   */
  serviceInfo?: ServiceInfoV2;

  /** */
  contactInfo?: SystemUserContactInfo;

  /**
   * Opportunity identifier (typically created by SalesForce)
   * Example: 0061800000DwZzJAAV
   */
  opportunityId?: string;
}

export default AccountInfo;
