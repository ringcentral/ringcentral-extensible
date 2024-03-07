import type SessionInfoResponse from '../../../../definitions/SessionInfoResponse';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/session-info`;
  }
  /**
   * Returns information about current OAuth session
   *
   * HTTP Method: get
   * Endpoint: /restapi/oauth/session-info
   * Rate Limit Group: Auth
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<SessionInfoResponse> {
    const r = await this.rc.get<SessionInfoResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
