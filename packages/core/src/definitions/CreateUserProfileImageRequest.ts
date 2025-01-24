import type Attachment from "./Attachment";

/**
 * Request body for operation createUserProfileImage
 */
interface CreateUserProfileImageRequest {
  /**
   * Required
   */
  image?: Attachment;
}

export default CreateUserProfileImageRequest;
