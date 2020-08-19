import {RestRequestConfig} from '../../../../../Rest';
import {
  ExtensionCallQueuePresenceList,
  ReadExtensionCallQueuePresenceParameters,
  ExtensionCallQueueUpdatePresenceList,
} from '../../../../../definitions';
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
    return `${this.parent.path()}/call-queue-presence`;
  }

  /**
   * Operation: Get Agent’s Call Queue Presence
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-queue-presence
   */
  async get(
    queryParams?: ReadExtensionCallQueuePresenceParameters,
    config?: RestRequestConfig
  ): Promise<ExtensionCallQueuePresenceList> {
    const r = await this.rc.get<ExtensionCallQueuePresenceList>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Call Queue Presence
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-queue-presence
   */
  async put(
    extensionCallQueueUpdatePresenceList: ExtensionCallQueueUpdatePresenceList,
    config?: RestRequestConfig
  ): Promise<ExtensionCallQueuePresenceList> {
    const r = await this.rc.put<ExtensionCallQueuePresenceList>(
      this.path(),
      extensionCallQueueUpdatePresenceList,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
