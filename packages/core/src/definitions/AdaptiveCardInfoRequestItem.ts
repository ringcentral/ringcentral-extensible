import AdaptiveCardColumnInfo from "./AdaptiveCardColumnInfo.js";

interface AdaptiveCardInfoRequestItem {
  /** */
  type?: "TextBlock" | "ColumnSet" | "Column" | "FactSet";

  /** */
  text?: string;

  /** */
  weight?: string;

  /** */
  size?: string;

  /** */
  columns?: AdaptiveCardColumnInfo[];
}

export default AdaptiveCardInfoRequestItem;
