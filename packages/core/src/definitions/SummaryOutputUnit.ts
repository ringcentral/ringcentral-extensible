import SummaryTimingsUnit from "./SummaryTimingsUnit";

interface SummaryOutputUnit {
  /**
   * Example: AbstractiveShort
   */
  name?: "Extractive" | "AbstractiveLong" | "AbstractiveShort" | "All";

  /**
   * Summary output units sorted by their occurrence in the conversation
   */
  values?: SummaryTimingsUnit[];
}

export default SummaryOutputUnit;
