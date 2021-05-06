import {RestRequestConfig} from '../../../../../Rest';
import {
  ReadExtensionCallQueuePresenceParameters,
  ExtensionCallQueuePresenceList,
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
   * Returns a list of agent's call queues with the agent presence status (per queue)
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-queue-presence
   * Rate Limit Group: Light
   * App Permission: ReadPresence
   */
  async get(
    queryParams?: ReadExtensionCallQueuePresenceParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<ExtensionCallQueuePresenceList> {
    const r = await this.rc.get<ExtensionCallQueuePresenceList>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates availability of the agent for the call queues.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-queue-presence
   * Rate Limit Group: Medium
   * App Permission: EditPresence
   */
  async put(
    extensionCallQueueUpdatePresenceList: ExtensionCallQueueUpdatePresenceList,
    restRequestConfig?: RestRequestConfig
  ): Promise<ExtensionCallQueuePresenceList> {
    const r = await this.rc.put<ExtensionCallQueuePresenceList>(
      this.path(),
      extensionCallQueueUpdatePresenceList,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}

export default Index;
