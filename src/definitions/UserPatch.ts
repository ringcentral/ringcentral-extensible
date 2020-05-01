import {PatchOperation} from '.';

class UserPatch {
  /**
   * patch operations list
   * Required
   */
  Operations?: PatchOperation[];

  /**
   * Required
   */
  schemas?: 'urn:ietf:params:scim:api:messages:2.0:PatchOp'[];
}

export default UserPatch;
