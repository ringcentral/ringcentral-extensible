import type AutomaticConsentCollecting from "./AutomaticConsentCollecting.js";
import type ConsentSettingsCoverage from "./ConsentSettingsCoverage.js";

/**
 * Info about consent configuration for the TCR campaign.
 */
interface ConsentSettings {
  /**
   * Opt-in necessity for outbound communications.
   */
  optInRequired?: boolean;

  /**
   */
  coverage?: ConsentSettingsCoverage;

  /**
   */
  automaticConsentCollecting?: AutomaticConsentCollecting;
}

export default ConsentSettings;
