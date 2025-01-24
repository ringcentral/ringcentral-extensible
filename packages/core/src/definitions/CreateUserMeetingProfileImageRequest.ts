import type Attachment from "./Attachment";

/**
 * Request body for operation createUserMeetingProfileImage
 */
interface CreateUserMeetingProfileImageRequest {
  /**
   * Profile image file size cannot exceed 2Mb. Supported formats are: JPG/JPEG, GIF and PNG
   * Required
   */
  profilePic?: Attachment;
}

export default CreateUserMeetingProfileImageRequest;
