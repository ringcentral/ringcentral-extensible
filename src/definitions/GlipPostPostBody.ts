import { GlipPostPostBodyAttachment } from '.'

class GlipPostPostBody
{
  /**
   * Post text.
   * Required
   */
  text?: string

  /**
   * Identifier(s) of attachments.
   */
  attachments?: GlipPostPostBodyAttachment[]
}

export default GlipPostPostBody
