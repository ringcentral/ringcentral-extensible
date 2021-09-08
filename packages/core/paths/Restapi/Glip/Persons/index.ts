import {RestRequestConfig} from '../../../../Rest';
import {GlipPersonInfo} from '../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  personId: string | null;

  constructor(parent: Parent, personId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.personId = personId;
  }
  path(withParameter = true): string {
    if (withParameter && this.personId !== null) {
      return `${this.parent.path()}/persons/${this.personId}`;
    }
    return `${this.parent.path()}/persons`;
  }
  /**
   * Returns a user or multiple users by their ID(s). Batch request is supported.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/persons/{personId}
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GlipPersonInfo> {
    if (this.personId === null) {
      throw new Error('personId must be specified.');
    }
    const r = await this.rc.get<GlipPersonInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
