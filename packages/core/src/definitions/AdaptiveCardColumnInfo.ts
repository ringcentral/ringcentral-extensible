import AdaptiveCardColumnItemInfo from "./AdaptiveCardColumnItemInfo.js";

interface AdaptiveCardColumnInfo {
  /** */
  type?: string;

  /** */
  width?: string;

  /** */
  items?: AdaptiveCardColumnItemInfo[];
}

export default AdaptiveCardColumnInfo;
