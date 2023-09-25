import type AggregationResponseRecord from './AggregationResponseRecord';

/**
 * Aggregation result
 */
interface AggregationResponseData {
  /**
   * The selected grouping option
   * Required
   */
  groupedBy?:
    | 'Company'
    | 'CompanyNumbers'
    | 'Users'
    | 'Queues'
    | 'IVRs'
    | 'SharedLines'
    | 'UserGroups'
    | 'Sites'
    | 'Departments';

  /**
   * A list of call aggregations as per the grouping and filtering options specified in the request
   */
  records?: AggregationResponseRecord[];
}

export default AggregationResponseData;
