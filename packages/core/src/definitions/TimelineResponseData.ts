import TimelineResponseRecord from "./TimelineResponseRecord.js";

/**
 * A list of time-value points of call data as per the grouping and filtering options specified in the request
 */
interface TimelineResponseData {
  /**
   * The selected grouping option
   * Required
   */
  groupedBy?:
    | "Company"
    | "CompanyNumbers"
    | "Users"
    | "Queues"
    | "IVRs"
    | "IVAs"
    | "SharedLines"
    | "UserGroups"
    | "Sites"
    | "Departments";

  /**
   * List of call data as per the grouping and filtering options specified in the request
   */
  records?: TimelineResponseRecord[];
}

export default TimelineResponseData;
