import UserResponse from './UserResponse'

class UserSearchResponse
{
    /// <summary>
    /// user list
    /// </summary>
    Resources: UserResponse[]

    /// <summary>
    /// </summary>
    itemsPerPage: number

    /// <summary>
    /// </summary>
    schemas: string[]

    /// <summary>
    /// </summary>
    startIndex: number

    /// <summary>
    /// </summary>
    totalResults: number
}

export default UserSearchResponse