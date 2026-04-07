interface AggregationResponseOptionsTimersCallsDurationByDirection {
  /**
   * Counter aggregation type. Can be `Sum`, `Average`, `Min`, `Max` or `Percent`
   */
  aggregationType?: "Sum" | "Average" | "Max" | "Min" | "Percent";

  /**
   * Time interval which will be used for aggregation. Can be `Hour`, `Day`, `Week` or `Month`
   */
  aggregationInterval?: "Hour" | "Day" | "Week" | "Month";
}

export default AggregationResponseOptionsTimersCallsDurationByDirection;
