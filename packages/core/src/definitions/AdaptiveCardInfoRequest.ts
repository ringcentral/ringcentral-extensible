import AdaptiveCardInfoRequestItem from "./AdaptiveCardInfoRequestItem.js";

interface AdaptiveCardInfoRequest {
  /** */
  type?: "Container";

  /** */
  items?: AdaptiveCardInfoRequestItem[];
}

export default AdaptiveCardInfoRequest;
