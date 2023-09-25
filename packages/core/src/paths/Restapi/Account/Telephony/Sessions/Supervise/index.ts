import type SuperviseCallSessionResponse from '../../../../../../definitions/SuperviseCallSessionResponse';
import type SuperviseCallSessionRequest from '../../../../../../definitions/SuperviseCallSessionRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/supervise`;
  }

  /**
   * Allows to monitor a call session in 'Listen' mode. Input parameters should contain internal identifiers of a monitored user and a supervisor's device. Call session should be specified in path. Please note that this method supports single channel audio flow, which means that audio of both call participants is mixed and delivered to the supervisor in single audio channel. Currently this method is supported for Softphone/Hardphone only, since device IDs for WebRTC/Mobile apps cannot be obtained.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/supervise
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  public async post(
    superviseCallSessionRequest: SuperviseCallSessionRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<SuperviseCallSessionResponse> {
    const r = await this.rc.post<SuperviseCallSessionResponse>(
      this.path(),
      superviseCallSessionRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
