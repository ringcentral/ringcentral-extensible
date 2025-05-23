import ScimPatchOperation from "./ScimPatchOperation.js";

interface ScimUserPatch {
  /**
   * Patch operations list
   * Required
   */
  Operations?: ScimPatchOperation[];

  /**
   * Required
   */
  schemas?: ("urn:ietf:params:scim:api:messages:2.0:PatchOp")[];
}

export default ScimUserPatch;
