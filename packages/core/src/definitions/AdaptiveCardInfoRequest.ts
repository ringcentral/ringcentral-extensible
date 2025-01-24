import type AdaptiveCardInfoRequestItem from "./AdaptiveCardInfoRequestItem";

interface AdaptiveCardInfoRequest {
  /** */
  type?: "Container";

  /** */
  items?: AdaptiveCardInfoRequestItem[];
}

export default AdaptiveCardInfoRequest;
