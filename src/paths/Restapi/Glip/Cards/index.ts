import {RestRequestConfig} from '../../../../Rest';
import {
  GlipMessageAttachmentInfo,
  GlipMessageAttachmentInfoRequest,
  CreateGlipCardParameters,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  cardId: string | null;
  parent: Parent;

  constructor(parent: Parent, cardId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.cardId = cardId;
  }

  path(withParameter = true): string {
    if (withParameter && this.cardId !== null) {
      return `${this.parent.path()}/cards/${this.cardId}`;
    }

    return `${this.parent.path()}/cards`;
  }

  /**
   * Operation: Create Card
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/cards
   */
  async post(
    glipMessageAttachmentInfoRequest: GlipMessageAttachmentInfoRequest,
    queryParams?: CreateGlipCardParameters,
    config?: RestRequestConfig
  ): Promise<GlipMessageAttachmentInfo> {
    const r = await this.rc.post<GlipMessageAttachmentInfo>(
      this.path(false),
      glipMessageAttachmentInfoRequest,
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Card
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/cards/{cardId}
   */
  async get(config?: RestRequestConfig): Promise<GlipMessageAttachmentInfo> {
    if (this.cardId === null) {
      throw new Error('cardId must be specified.');
    }

    const r = await this.rc.get<GlipMessageAttachmentInfo>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Card
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/glip/cards/{cardId}
   */
  async put(
    glipMessageAttachmentInfoRequest: GlipMessageAttachmentInfoRequest,
    config?: RestRequestConfig
  ): Promise<string> {
    if (this.cardId === null) {
      throw new Error('cardId must be specified.');
    }

    const r = await this.rc.put<string>(
      this.path(),
      glipMessageAttachmentInfoRequest,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete Card
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/glip/cards/{cardId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.cardId === null) {
      throw new Error('cardId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }
}

export default Index;
