import {RestRequestConfig} from '../../../../../Rest';
import {ExtensionCallerIdInfo} from '../../../../../definitions';
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
    return `${this.parent.path()}/caller-id`;
  }

  /**
   * Operation: Get Extension Caller ID
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id
   */
  async get(config?: RestRequestConfig): Promise<ExtensionCallerIdInfo> {
    const r = await this.rc.get<ExtensionCallerIdInfo>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Extension Caller ID
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id
   */
  async put(
    extensionCallerIdInfo: ExtensionCallerIdInfo,
    config?: RestRequestConfig
  ): Promise<ExtensionCallerIdInfo> {
    const r = await this.rc.put<ExtensionCallerIdInfo>(
      this.path(),
      extensionCallerIdInfo,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
