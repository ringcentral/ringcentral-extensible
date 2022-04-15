import { Attachment } from './index';

/**
 * Request body for operation createIVRPrompt
 */
class CreateIVRPromptRequest {
  /**
   * Audio file that will be used as a prompt. Attachment cannot be empty, only audio files are supported
   * Required
   */
  attachment?: Attachment;

  /**
   * Description of file contents.
   */
  name?: string;
}
export default CreateIVRPromptRequest;
