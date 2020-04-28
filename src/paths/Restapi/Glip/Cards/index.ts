import { GlipMessageAttachmentInfo, GlipMessageAttachmentInfoRequest, CreateGlipCardParameters } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Cards {
  rc: RestClient
  cardId: (string | null)
  parent: Parent

  constructor (parent: Parent, cardId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.cardId = cardId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.cardId !== null) {
      return `${this.parent.path()}/cards/${this.cardId}`
    }

    return `${this.parent.path()}/cards`
  }

  /**
   * Operation: Create Card
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/cards
   */
  async post (glipMessageAttachmentInfoRequest: GlipMessageAttachmentInfoRequest, queryParams?: CreateGlipCardParameters): Promise<GlipMessageAttachmentInfo> {
    const r = await this.rc.post(this.path(false), glipMessageAttachmentInfoRequest, queryParams)
    return r.data
  }

  /**
   * Operation: Get Card
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/cards/{cardId}
   */
  async get (): Promise<GlipMessageAttachmentInfo> {
    if (this.cardId === null) {
      throw new Error('cardId must be specified.')
    }

    const r = await this.rc.get(this.path())
    return r.data
  }

  /**
   * Operation: Update Card
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/glip/cards/{cardId}
   */
  async put (glipMessageAttachmentInfoRequest: GlipMessageAttachmentInfoRequest): Promise<string> {
    if (this.cardId === null) {
      throw new Error('cardId must be specified.')
    }

    const r = await this.rc.put(this.path(), glipMessageAttachmentInfoRequest)
    return r.data
  }

  /**
   * Operation: Delete Card
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/glip/cards/{cardId}
   */
  async delete (): Promise<string> {
    if (this.cardId === null) {
      throw new Error('cardId must be specified.')
    }

    const r = await this.rc.delete(this.path())
    return r.data
  }
}

export default Cards
