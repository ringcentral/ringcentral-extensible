import type GetRingOutStatusResponse from '../../../../../definitions/GetRingOutStatusResponse';
import type MakeRingOutRequest from '../../../../../definitions/MakeRingOutRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public ringoutId: string | null;

  public constructor(_parent: ParentInterface, ringoutId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.ringoutId = ringoutId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.ringoutId !== null) {
      return `${this._parent.path()}/ring-out/${this.ringoutId}`;
    }
    return `${this._parent.path()}/ring-out`;
  }
  /**
   * Makes a 2-legged RingOut call.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/ring-out
   * Rate Limit Group: Heavy
   * App Permission: RingOut
   */
  public async post(
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
   * Returns a status of a 2-legged RingOut call.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}
   * Rate Limit Group: Light
   * App Permission: RingOut
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<GetRingOutStatusResponse> {
    if (this.ringoutId === null) {
      throw new Error('ringoutId must be specified.');
    }
    const r = await this.rc.get<GetRingOutStatusResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Cancels a 2-legged RingOut call.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}
   * Rate Limit Group: Heavy
   * App Permission: RingOut
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.ringoutId === null) {
      throw new Error('ringoutId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
