import {RestRequestConfig} from '../../../../Rest';
import {GlipPersonInfo} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Persons {
  rc: RingCentral;
  personId: string | null;
  parent: Parent;

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
   * Operation: Get Person
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/glip/persons/{personId}
   */
  async get(config?: RestRequestConfig): Promise<GlipPersonInfo> {
    if (this.personId === null) {
      throw new Error('personId must be specified.');
    }

    const r = await this.rc.get<GlipPersonInfo>(this.path(), undefined, config);
    return r.data;
  }
}

export default Persons;
