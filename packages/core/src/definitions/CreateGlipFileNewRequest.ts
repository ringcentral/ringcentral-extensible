import Attachment from "./Attachment.js";

/**
 * Request body for operation createGlipFileNew
 */
interface CreateGlipFileNewRequest {
  /**
   * The file (binary or multipart/form-data) to upload
   * Required
   */
  body?: Attachment;
}

export default CreateGlipFileNewRequest;
