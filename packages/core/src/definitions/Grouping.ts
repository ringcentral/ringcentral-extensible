interface Grouping {
  /**
   * The selected grouping option
   */
  groupBy?: ('Company' | 'CompanyNumbers' | 'Users' | 'Queues' | 'IVRs' | 'SharedLines' | 'UserGroups' | 'Sites' | 'Departments');

  /**
   * This field can be used to further limit the users selection by specifying unique identifiers of corresponding entities. For example, providing unique queue ids along with `Queue` in `groupByMembers` field will limit the response to users that are queue agents in at least one of these queues
   */
  keys?: string[];

  /**
   * The selected data scope
   */
  groupByMembers?: ('Department' | 'UserGroup' | 'Queue' | 'Site');
}

export default Grouping;
