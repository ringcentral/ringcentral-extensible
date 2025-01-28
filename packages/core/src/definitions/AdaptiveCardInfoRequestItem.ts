import AdaptiveCardColumnInfo from "./AdaptiveCardColumnInfo";

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
