import type GetTimezoneInfoResponse from '../../../../definitions/GetTimezoneInfoResponse';
import type GetTimezoneListResponse from '../../../../definitions/GetTimezoneListResponse';
import type ListTimezonesParameters from '../../../../definitions/ListTimezonesParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public timezoneId: string | null;

  public constructor(_parent: ParentInterface, timezoneId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.timezoneId = timezoneId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.timezoneId !== null) {
      return `${this._parent.path()}/timezone/${this.timezoneId}`;
    }
    return `${this._parent.path()}/timezone`;
  }
  /**
   * Returns all available timezones.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/timezone
   * Rate Limit Group: Light
   */
  public async list(
    queryParams?: ListTimezonesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetTimezoneListResponse> {
    const r = await this.rc.get<GetTimezoneListResponse>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns information on a certain timezone.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/timezone/{timezoneId}
   * Rate Limit Group: Light
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<GetTimezoneInfoResponse> {
    if (this.timezoneId === null) {
      throw new Error('timezoneId must be specified.');
    }
    const r = await this.rc.get<GetTimezoneInfoResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
