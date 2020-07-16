import {UserResponse} from '.';

class UserSearchResponse {
  /**
   * user list
   */
  Resources?: UserResponse[];

  /**
   */
  itemsPerPage?: number;

  /**
   */
  schemas?: 'urn:ietf:params:scim:api:messages:2.0:ListResponse'[];

  /**
   */
  startIndex?: number;

  /**
   */
  totalResults?: number;
}

export default UserSearchResponse;
