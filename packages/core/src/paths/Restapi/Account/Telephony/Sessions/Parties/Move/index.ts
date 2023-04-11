import MovePartiesRequest from '../../../../../../../definitions/MovePartiesRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/move`;
  }

  /**
   * Either moves call parties to RCC Conference by a Secretary or moves call parties to RCV Conference
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/move
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async post(movePartiesRequest: MovePartiesRequest, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), movePartiesRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
