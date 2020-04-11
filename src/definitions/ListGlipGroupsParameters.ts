class ListGlipGroupsParameters
{
  /**
   * Type of groups to be fetched (by default all type of groups will be fetched)
   */
  type?: ('Group' | 'Team' | 'PrivateChat' | 'PersonalChat')

  /**
   * Number of groups to be fetched by one request. The maximum value is 250, by default - 30
   * Maximum: 250
   * Default: 30
   */
  recordCount?: number

  /**
   * Pagination token.
   */
  pageToken?: string
}

export default ListGlipGroupsParameters
