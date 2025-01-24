import type ActionCardBody from "./ActionCardBody";

interface ActionAdaptiveCardInfo {
  /** */
  type?: "AdaptiveCard";

  /** */
  body?: ActionCardBody[];
}

export default ActionAdaptiveCardInfo;
