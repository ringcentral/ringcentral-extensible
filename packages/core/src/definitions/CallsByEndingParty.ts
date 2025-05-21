import CallsByEndingPartyBreakdown from "./CallsByEndingPartyBreakdown.js";

interface CallsByEndingParty {
  /**
   * Unit of the result value
   * Required
   */
  valueType?: "Percent" | "Seconds" | "Instances";

  /**
   * Required
   */
  values?: CallsByEndingPartyBreakdown;
}

export default CallsByEndingParty;
