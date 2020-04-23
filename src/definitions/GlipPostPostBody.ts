import { GlipAttachmentInfoRequest } from '.'

class GlipPostPostBody {
  /**
   * Post text.
   * Required
   */
  text?: string

  /**
   * Identifier(s) of attachments.
   */
  attachments?: GlipAttachmentInfoRequest[]
}

export default GlipPostPostBody
