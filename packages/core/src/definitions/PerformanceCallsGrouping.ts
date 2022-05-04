/**
 * This field specifies the dimensions by which the response should be grouped and specific IDs to narrow the response. If this field is undefined or null, the response will contain one record with data aggregated by the whole company
*/
class PerformanceCallsGrouping {
  /**
   * This field describes the options by which the response should be grouped. See also [Call Aggregate reports](https://developers.ringcentral.com/guide/analytics/aggregate) or [Call Timeline reports](https://developers.ringcentral.com/guide/analytics/timeline) pages in the developer guide for more information.
   * Required
   */
  groupBy?: ('WholeCompany' | 'CompanyNumbers' | 'Users' | 'Queues' | 'IVRs' | 'SharedLines' | 'UserGroups' | 'Sites' | 'Departments' | 'DepartmentMembers' | 'UserGroupMembers' | 'QueueAgents' | 'SiteMembers');

  /**
   * This field can be used to specify unique identifiers of groups in GroupBy types
   */
  ids?: string[];
}

export default PerformanceCallsGrouping;
