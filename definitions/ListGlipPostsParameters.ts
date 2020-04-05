class ListGlipPostsParameters
{
    /**
     * Identifier of a group to filter posts
     */
    groupId: string

    /**
     * Token of a page to be returned
     */
    pageToken: string

    /**
     * Number of records to be returned. The maximum value is 250, by default - 30
     * Maximum: 250
     * Default: 30
     */
    recordCount: number
}

export default ListGlipPostsParameters