class ListRecentChatsParameters
{
    /**
     * Type of chats to be fetched. By default all chat types are returned
     */
    type?: string[]

    /**
     * Max number of chats to be fetched by one request (Not more than 250).
     * Maximum: 250
     * Default: 30
     */
    recordCount?: number
}

export default ListRecentChatsParameters