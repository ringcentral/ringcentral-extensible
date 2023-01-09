import Resume from './Resume';
import Pause from './Pause';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  playId: string | null;

  constructor(parent: ParentInterface, playId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.playId = playId;
  }

  path(withParameter = true): string {
    if (withParameter && this.playId !== null) {
      return `${this.parent.path()}/play/${this.playId}`;
    }
    return `${this.parent.path()}/play`;
  }

  /**
   * Stop playing audio file into a party
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/play/{playId}
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.playId === null) {
      throw new Error('playId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  pause(): Pause {
    return new Pause(this);
  }

  resume(): Resume {
    return new Resume(this);
  }
}
export default Index;
