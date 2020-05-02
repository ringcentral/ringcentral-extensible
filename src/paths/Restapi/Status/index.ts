import Parent from '..';
import RestClient from '../../..';

class Status {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/status`;
  }

  /**
   * Operation: Get Service Status
   * Rate Limit Group: NoThrottling
   * Http get /restapi/v1.0/status
   */
  async get(): Promise<string> {
    const r = await this.rc.get<string>(this.path());
    return r.data;
  }
}

export default Status;
