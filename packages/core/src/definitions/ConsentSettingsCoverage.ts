/**
 * Consent coverage setting for the TCR campaign.
 */
interface ConsentSettingsCoverage {
  /**
   * Coverage type.
   */
  optIn?:
    | "PhoneNumber"
    | "Account"
    | "Conversational"
    | "Informational"
    | "Promotional";

  /**
   * Coverage type.
   */
  optOut?:
    | "PhoneNumber"
    | "Account"
    | "Conversational"
    | "Informational"
    | "Promotional";
}

export default ConsentSettingsCoverage;
