import ExtensionCallQueueUpdatePresenceList from '../../../../../definitions/ExtensionCallQueueUpdatePresenceList';
import ExtensionCallQueuePresenceList from '../../../../../definitions/ExtensionCallQueuePresenceList';
import ReadExtensionCallQueuePresenceParameters from '../../../../../definitions/ReadExtensionCallQueuePresenceParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/call-queue-presence`;
  }

  /**
   * Returns a list of agent's call queues with the agent presence status (per queue).
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-queue-presence
   * Rate Limit Group: Light
   * App Permission: ReadPresence
   */
  public async get(queryParams?: ReadExtensionCallQueuePresenceParameters, restRequestConfig?: RestRequestConfig): Promise<ExtensionCallQueuePresenceList> {
    const r = await this.rc.get<ExtensionCallQueuePresenceList>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Updates availability of the agent for the call queues.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-queue-presence
   * Rate Limit Group: Medium
   * App Permission: EditPresence
   */
  public async put(extensionCallQueueUpdatePresenceList: ExtensionCallQueueUpdatePresenceList, restRequestConfig?: RestRequestConfig): Promise<ExtensionCallQueuePresenceList> {
    const r = await this.rc.put<ExtensionCallQueuePresenceList>(this.path(), extensionCallQueueUpdatePresenceList, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
