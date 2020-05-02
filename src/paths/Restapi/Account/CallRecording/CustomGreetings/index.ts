import {
  CallRecordingCustomGreetings,
  ListCallRecordingCustomGreetingsParameters,
} from '../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../..';

class CustomGreetings {
  rc: RestClient;
  greetingId: string | null;
  parent: Parent;

  constructor(parent: Parent, greetingId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.greetingId = greetingId;
  }

  path(withParameter = true): string {
    if (withParameter && this.greetingId !== null) {
      return `${this.parent.path()}/custom-greetings/${this.greetingId}`;
    }

    return `${this.parent.path()}/custom-greetings`;
  }

  /**
   * Operation: Get Call Recording Custom Greeting List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/call-recording/custom-greetings
   */
  async get(
    queryParams?: ListCallRecordingCustomGreetingsParameters
  ): Promise<CallRecordingCustomGreetings> {
    const r = await this.rc.get<CallRecordingCustomGreetings>(
      this.path(false),
      queryParams
    );
    return r.data;
  }

  /**
   * Operation: Delete Call Recording Custom Greeting
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/account/{accountId}/call-recording/custom-greetings/{greetingId}
   */
  async delete(): Promise<string> {
    if (this.greetingId === null) {
      throw new Error('greetingId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path());
    return r.data;
  }
}

export default CustomGreetings;
