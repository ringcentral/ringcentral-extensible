import Attachment from './Attachment';

/**
 * Request body for operation createGlipFile
*/
interface CreateGlipFileRequest {
  /**
   * The file (binary or multipart/form-data) to upload
   * Required
   */
  body?: Attachment;
}

export default CreateGlipFileRequest;
