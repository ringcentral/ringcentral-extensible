import Attachment from './Attachment'

class CreateIvrPromptRequest
{
    /**
     * Audio file that will be used as a prompt. Attachment cannot be empty, only audio files are supported
     */
    attachment: Attachment

    /**
     * Description of file contents.
     */
    name: string
}

export default CreateIvrPromptRequest