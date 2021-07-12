import {RestRequestConfig} from '../../../../../../Rest';
import {
  SuperviseCallSessionRequest,
  SuperviseCallSession,
} from '../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/supervise`;
  }
  /**
   * Allows to monitor a call session in 'Listen' mode. Input parameters should contain internal identifiers of a monitored user and a supervisor's device. Call session should be specified in path. Please note that this method supports single channel audio flow, which means that audio of both call participants is mixed and delivered to the supervisor in single audio channel. Currently this method is supported for Softphone/Hardphone only, since device IDs for WebRTC/Mobile apps cannot be obtained.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/supervise
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async post(
    superviseCallSessionRequest: SuperviseCallSessionRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<SuperviseCallSession> {
    const r = await this.rc.post<SuperviseCallSession>(
      this.path(),
      superviseCallSessionRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
