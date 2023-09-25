import type ReadCallRecordingContentParameters from '../../../../../definitions/ReadCallRecordingContentParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/content`;
  }

  /**
   * Returns media content of a call recording (`audio/mpeg` or `audio/wav`)
   *
   * **This API must be called via media API entry point, e.g. https://media.ringcentral.com**
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/recording/{recordingId}/content
   * Rate Limit Group: Heavy
   * App Permission: ReadCallRecording
   */
  public async get(
    queryParams?: ReadCallRecordingContentParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<Buffer> {
    const r = await this.rc.get<Buffer>(this.path(), queryParams, {
      ...restRequestConfig,
      responseType: 'arraybuffer',
    });
    return r.data;
  }
}
export default Index;
