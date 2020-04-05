import PronouncedNamePromptInfo from './PronouncedNamePromptInfo'

class PronouncedNameInfo
{
    /// <summary>
    /// Voice name type. 'Default' - default extension name; first name and last name specified in user profile; 'TextToSpeech' - custom text; user name spelled the way it sounds and specified by user; 'Recorded' - custom audio, user name recorded in user's own voice (supported only for extension retrieval)
    /// Enum: Default, TextToSpeech, Recorded
    /// </summary>
    type: string

    /// <summary>
    /// Custom text
    /// </summary>
    text: string

    /// <summary>
    /// </summary>
    prompt: PronouncedNamePromptInfo
}

export default PronouncedNameInfo