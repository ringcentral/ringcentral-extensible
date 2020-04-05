import Attachment from './Attachment'

class CreateIvrPromptRequest
{
    /// <summary>
    /// Audio file that will be used as a prompt. Attachment cannot be empty, only audio files are supported
    /// </summary>
    attachment: Attachment

    /// <summary>
    /// Description of file contents.
    /// </summary>
    name: string
}

export default CreateIvrPromptRequest