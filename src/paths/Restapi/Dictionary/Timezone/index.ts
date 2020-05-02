import {
  GetTimezoneListResponse,
  ListTimezonesParameters,
  GetTimezoneInfoResponse,
  ReadTimezoneParameters,
} from '../../../../definitions';
import Parent from '..';
import RestClient from '../../../..';

class Timezone {
  rc: RestClient;
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
    queryParams?: ListTimezonesParameters
  ): Promise<GetTimezoneListResponse> {
    const r = await this.rc.get<GetTimezoneListResponse>(
      this.path(false),
      queryParams
    );
    return r.data;
  }

  /**
   * Operation: Get Timezone
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/dictionary/timezone/{timezoneId}
   */
  async get(
    queryParams?: ReadTimezoneParameters
  ): Promise<GetTimezoneInfoResponse> {
    if (this.timezoneId === null) {
      throw new Error('timezoneId must be specified.');
    }

    const r = await this.rc.get<GetTimezoneInfoResponse>(
      this.path(),
      queryParams
    );
    return r.data;
  }
}

export default Timezone;
