/**
 * This grouping allows to specify the `groupBy` option by which the data in the response will be grouped
 */
interface DirectGrouping {
  /**
   * The selected grouping option
   * Required
   */
  groupBy?:
    | "Company"
    | "CompanyNumbers"
    | "Users"
    | "Queues"
    | "IVRs"
    | "SharedLines"
    | "UserGroups"
    | "Sites"
    | "Departments";

  /**
   * This field can be used to specify unique identifiers of entities selected in `groupBy` field. The response data will be limited to these entities only
   */
  keys?: string[];
}

export default DirectGrouping;
