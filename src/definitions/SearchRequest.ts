class SearchRequest
{
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
  schemas?: string[]

  /**
   * start index (1-based)
   */
  startIndex?: number
}

export default SearchRequest
