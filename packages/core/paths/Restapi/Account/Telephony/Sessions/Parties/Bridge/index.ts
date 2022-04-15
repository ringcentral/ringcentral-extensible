import { RestRequestConfig } from '../../../../../../../Rest';
import { BridgeTargetRequest, CallParty } from '../../../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/bridge`;
  }

  /**
   * Allows the user to connect multiple call session participants over a conference call bridge. The current active call session ID and party ID of the user within this session should be specified in path; the bridged call session ID and party ID of the user within that session should be specified in request body. Thus the user connects participants of two sessions into one conference call using his/her own party IDs from both sessions.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/bridge
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async post(
    bridgeTargetRequest: BridgeTargetRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallParty> {
    const r = await this.rc.post<CallParty>(
      this.path(),
      bridgeTargetRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
