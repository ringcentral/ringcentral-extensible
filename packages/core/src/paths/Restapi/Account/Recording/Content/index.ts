import { RestRequestConfig } from '../../../../../Rest';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/content`;
  }

  /**
   * Returns media content of a call recording.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/recording/{recordingId}/content
   * Rate Limit Group: Heavy
   * App Permission: ReadCallRecording
   * User Permission: ReadCallRecording
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<Buffer> {
    const r = await this.rc.get<Buffer>(this.path(), undefined, { ...restRequestConfig, responseType: 'arraybuffer' });
    return r.data;
  }
}
export default Index;
