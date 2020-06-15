import {RestRequestConfig} from '../../../../Rest';
import {
  GetTimezoneListResponse,
  ListTimezonesParameters,
  GetTimezoneInfoResponse,
  ReadTimezoneParameters,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  timezoneId: string | null;
  parent: Parent;

  constructor(parent: Parent, timezoneId: string | null = null) {
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
   * Operation: Get Timezone List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/dictionary/timezone
   */
  async list(
    queryParams?: ListTimezonesParameters,
    config?: RestRequestConfig
  ): Promise<GetTimezoneListResponse> {
    const r = await this.rc.get<GetTimezoneListResponse>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Timezone
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/dictionary/timezone/{timezoneId}
   */
  async get(
    queryParams?: ReadTimezoneParameters,
    config?: RestRequestConfig
  ): Promise<GetTimezoneInfoResponse> {
    if (this.timezoneId === null) {
      throw new Error('timezoneId must be specified.');
    }

    const r = await this.rc.get<GetTimezoneInfoResponse>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default Index;
