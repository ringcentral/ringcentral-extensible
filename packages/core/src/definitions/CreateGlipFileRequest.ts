import { Attachment } from './index';

/**
 * Request body for operation createGlipFile
*/
class CreateGlipFileRequest {
  /**
   * The file (binary or multipart/form-data) to upload
   * Required
   */
  body?: Attachment;
}
export default CreateGlipFileRequest;
