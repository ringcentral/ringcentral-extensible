import type CompanyDetails from "./CompanyDetails.js";
import type ApiErrorWithParameter from "./ApiErrorWithParameter.js";

interface TcrBrandRecord {
  /**
   * Identifier of a TCR brand
   * Format: int64
   */
  id?: number;

  /**
   * Name of a TCR brand
   */
  name?: string;

  /**
   * Country code
   */
  countryCode?: string;

  /**
   */
  status?:
    | "Created"
    | "Submitted"
    | "SubmitFailed"
    | "Verified"
    | "Unverified"
    | "UpdateRequested"
    | "DeleteRequested"
    | "Suspended"
    | "Expired"
    | "Draft"
    | "PreventFailed";

  /**
   * Registration time
   * Format: date-time
   */
  registrationTime?: string;

  /**
   * External ID
   */
  externalId?: string;

  /**
   */
  companyDetails?: CompanyDetails;

  /**
   */
  errors?: ApiErrorWithParameter[];
}

export default TcrBrandRecord;
