/**
 * Cost center information. Applicable if Cost Center feature is enabled. The default is `root` cost center value
 */
interface CostCenterInfo {
  /**
   * Internal identifier of a cost center
   */
  id?: string;

  /**
   * Name of a cost center
   */
  name?: string;
}

export default CostCenterInfo;
