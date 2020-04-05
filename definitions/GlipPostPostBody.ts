import GlipPostPostBodyAttachment from './GlipPostPostBodyAttachment'

class GlipPostPostBody
{
    /// <summary>
    /// Post text.
    /// Required
    /// </summary>
    text: string

    /// <summary>
    /// Identifier(s) of attachments.
    /// </summary>
    attachments: GlipPostPostBodyAttachment[]
}

export default GlipPostPostBody