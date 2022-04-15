import { RestRequestConfig } from '../../../../../Rest';
import {
  MakeRingOutRequest,
  GetRingOutStatusResponse,
} from '../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  ringoutId: string | null;

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
   * Makes a 2-leg RingOut call.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/ring-out
   * Rate Limit Group: Heavy
   * App Permission: RingOut
   */
  async post(
    makeRingOutRequest: MakeRingOutRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetRingOutStatusResponse> {
    const r = await this.rc.post<GetRingOutStatusResponse>(
      this.path(false),
      makeRingOutRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns the status of a 2-leg RingOut call.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}
   * Rate Limit Group: Light
   * App Permission: RingOut
   */
  async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetRingOutStatusResponse> {
    if (this.ringoutId === null) {
      throw new Error('ringoutId must be specified.');
    }
    const r = await this.rc.get<GetRingOutStatusResponse>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Cancels a 2-leg RingOut call.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}
   * Rate Limit Group: Heavy
   * App Permission: RingOut
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.ringoutId === null) {
      throw new Error('ringoutId must be specified.');
    }
    const r = await this.rc.delete<string>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
