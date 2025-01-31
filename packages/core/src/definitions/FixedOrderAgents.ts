import FixedOrderAgentsExtensionInfo from "./FixedOrderAgentsExtensionInfo.js";

interface FixedOrderAgents {
  /** */
  extension?: FixedOrderAgentsExtensionInfo;

  /**
   * Ordinal of an agent (call queue member)
   * Format: int32
   */
  index?: number;
}

export default FixedOrderAgents;
