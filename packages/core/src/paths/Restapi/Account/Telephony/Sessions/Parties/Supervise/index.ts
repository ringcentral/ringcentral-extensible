import PartySuperviseResponse from '../../../../../../../definitions/PartySuperviseResponse';
import PartySuperviseRequest from '../../../../../../../definitions/PartySuperviseRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/supervise`;
  }

  /**
   * Allows to monitor a call party in 'Listen' mode. Input parameters are extension number of a monitored user and internal identifier of a supervisor's device. Call session and party identifiers should be specified in path. Please note that for this method dual channel audio flow is supported, which means that you need to make one more request for monitoring the second participant of a call. And as a result of each monitoring request the client receives SIP invite with the following header `p-rc-api-monitoring-ids` containing IDs of the monitored party and session. The flow is supported for calls with no more than 2 participants. Currently this method is supported for Softphone/Hardphone only, since device IDs for WebRTC/Mobile apps cannot be obtained.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/supervise
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async post(partySuperviseRequest: PartySuperviseRequest, restRequestConfig?: RestRequestConfig): Promise<PartySuperviseResponse> {
    const r = await this.rc.post<PartySuperviseResponse>(this.path(), partySuperviseRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
