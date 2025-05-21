import Attachment from "./Attachment.js";

/**
 * Request body for operation createGlipFileNew
 */
interface CreateGlipFileNewRequest {
  /**
   * File(s) - binary or multipart/form-data - to upload
   * Required
   */
  body?: Attachment;
}

export default CreateGlipFileNewRequest;
