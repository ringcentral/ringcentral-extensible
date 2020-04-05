import UserResponse from './UserResponse'

class UserSearchResponse
{
    /**
     * user list
     */
    Resources: UserResponse[]

    /**
     */
    itemsPerPage: number

    /**
     */
    schemas: string[]

    /**
     */
    startIndex: number

    /**
     */
    totalResults: number
}

export default UserSearchResponse