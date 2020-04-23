class SearchRequest {
  /**
   * page size
   */
  count?: number

  /**
   * only support 'userName' or 'email' filter expressions for now
   */
  filter?: string

  /**
   */
  schemas?: ('urn:ietf:params:scim:api:messages:2.0:SearchRequest')[]

  /**
   * start index (1-based)
   */
  startIndex?: number
}

export default SearchRequest
