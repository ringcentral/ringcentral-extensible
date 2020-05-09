import {
  GetRingOutStatusResponse,
  MakeRingOutRequest,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class RingOut {
  rc: RingCentral;
  ringoutId: string | null;
  parent: Parent;

  constructor(parent: Parent, ringoutId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.ringoutId = ringoutId;
  }

  path(withParameter = true): string {
    if (withParameter && this.ringoutId !== null) {
      return `${this.parent.path()}/ring-out/${this.ringoutId}`;
    }

    return `${this.parent.path()}/ring-out`;
  }

  /**
   * Operation: Make RingOut Call
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out
   */
  async post(
    makeRingOutRequest: MakeRingOutRequest
  ): Promise<GetRingOutStatusResponse> {
    const r = await this.rc.post<GetRingOutStatusResponse>(
      this.path(false),
      makeRingOutRequest
    );
    return r.data;
  }

  /**
   * Operation: Get RingOut Call Status
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}
   */
  async get(): Promise<GetRingOutStatusResponse> {
    if (this.ringoutId === null) {
      throw new Error('ringoutId must be specified.');
    }

    const r = await this.rc.get<GetRingOutStatusResponse>(this.path());
    return r.data;
  }

  /**
   * Operation: Cancel RingOut Call
   * Rate Limit Group: Heavy
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}
   */
  async delete(): Promise<string> {
    if (this.ringoutId === null) {
      throw new Error('ringoutId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path());
    return r.data;
  }
}

export default RingOut;
