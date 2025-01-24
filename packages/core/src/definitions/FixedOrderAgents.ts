import type FixedOrderAgentsExtensionInfo from "./FixedOrderAgentsExtensionInfo";

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
