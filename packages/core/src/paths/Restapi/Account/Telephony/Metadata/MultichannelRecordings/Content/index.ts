import ReadMultichannelCallRecordingContentParameters from "../../../../../../../definitions/ReadMultichannelCallRecordingContentParameters";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../../types";

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
   * Returns media content of a multichannel call recording
   *
   * **This API must be called via media API entry point, e.g. https://media.ringcentral.com**
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/metadata/multichannel-recordings/{metadataId}/content
   * Rate Limit Group: Heavy
   * App Permission: ReadCallRecording
   */
  public async get(
    queryParams?: ReadMultichannelCallRecordingContentParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.get<string>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
