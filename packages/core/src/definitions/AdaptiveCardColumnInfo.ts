import AdaptiveCardColumnItemInfo from "./AdaptiveCardColumnItemInfo";

interface AdaptiveCardColumnInfo {
  /** */
  type?: string;

  /** */
  width?: string;

  /** */
  items?: AdaptiveCardColumnItemInfo[];
}

export default AdaptiveCardColumnInfo;
