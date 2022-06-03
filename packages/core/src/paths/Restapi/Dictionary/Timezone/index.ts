import GetTimezoneInfoResponse from '../../../../definitions/GetTimezoneInfoResponse';
import ReadTimezoneParameters from '../../../../definitions/ReadTimezoneParameters';
import GetTimezoneListResponse from '../../../../definitions/GetTimezoneListResponse';
import ListTimezonesParameters from '../../../../definitions/ListTimezonesParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  timezoneId: string | null;

  constructor(parent: ParentInterface, timezoneId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.timezoneId = timezoneId;
  }

  path(withParameter = true): string {
    if (withParameter && this.timezoneId !== null) {
      return `${this.parent.path()}/timezone/${this.timezoneId}`;
    }
    return `${this.parent.path()}/timezone`;
  }

  /**
   * Returns all available timezones.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/timezone
   * Rate Limit Group: Light
   */
  async list(queryParams?: ListTimezonesParameters, restRequestConfig?: RestRequestConfig): Promise<GetTimezoneListResponse> {
    const r = await this.rc.get<GetTimezoneListResponse>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns the information on a certain timezone.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/timezone/{timezoneId}
   * Rate Limit Group: Light
   */
  async get(queryParams?: ReadTimezoneParameters, restRequestConfig?: RestRequestConfig): Promise<GetTimezoneInfoResponse> {
    if (this.timezoneId === null) {
      throw new Error('timezoneId must be specified.');
    }
    const r = await this.rc.get<GetTimezoneInfoResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
