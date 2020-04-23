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
   * Http post /restapi/v1.0/glip/cards
   */
  async post (glipMessageAttachmentInfoRequest: GlipMessageAttachmentInfoRequest, queryParams?: CreateGlipCardParameters): Promise<GlipMessageAttachmentInfo> {
    return this.rc.post(this.path(false), glipMessageAttachmentInfoRequest, queryParams)
  }

  /**
   * Operation: Get Card
   * Http get /restapi/v1.0/glip/cards/{cardId}
   */
  async get (): Promise<GlipMessageAttachmentInfo> {
    if (this.cardId === null) {
      throw new Error('cardId must be specified.')
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Card
   * Http put /restapi/v1.0/glip/cards/{cardId}
   */
  async put (glipMessageAttachmentInfoRequest: GlipMessageAttachmentInfoRequest): Promise<string> {
    if (this.cardId === null) {
      throw new Error('cardId must be specified.')
    }

    return this.rc.put(this.path(), glipMessageAttachmentInfoRequest)
  }

  /**
   * Operation: Delete Card
   * Http delete /restapi/v1.0/glip/cards/{cardId}
   */
  async delete (): Promise<string> {
    if (this.cardId === null) {
      throw new Error('cardId must be specified.')
    }

    return this.rc.delete(this.path())
  }
}

export default Cards
