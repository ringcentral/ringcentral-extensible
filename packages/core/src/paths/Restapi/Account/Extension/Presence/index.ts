import type PresenceInfoResponse from '../../../../../definitions/PresenceInfoResponse';
import type PresenceInfoRequest from '../../../../../definitions/PresenceInfoRequest';
import type GetPresenceInfo from '../../../../../definitions/GetPresenceInfo';
import type ReadUserPresenceStatusParameters from '../../../../../definitions/ReadUserPresenceStatusParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/presence`;
  }

  /**
   * Returns the presence status of an extension or several extensions
   * by their ID(s). Batch request is supported. The `presenceStatus` is returned
   * as Offline (the parameters `telephonyStatus`, `message`, `userStatus`
   * and `dndStatus` are not returned at all) for the following extension types:
   * Department/Announcement Only/Take Messages Only (Voicemail)/Fax User/Paging
   * Only Group/Shared Lines Group/IVR Menu/Application Extension/Park Location.If
   * the user requests his/her own presence status, the response contains actual
   * presence status even if the status publication is turned off. Batch request
   * is supported. For batch requests the number of extensions in one request is
   * limited to 30. If more extensions are included in the request, the error code
   * 400 Bad Request is returned with the logical error code InvalidMultipartRequest
   * and the corresponding message Extension Presence Info multipart request
   * is limited to 30 extensions.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/presence
   * Rate Limit Group: Light
   * App Permission: ReadPresence
   * User Permission: ReadPresenceStatus
   */
  public async get(
    queryParams?: ReadUserPresenceStatusParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetPresenceInfo> {
    const r = await this.rc.get<GetPresenceInfo>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Updates user-defined extension presence status, status message and DnD status by extension ID. Supported for regular User extensions only. The extension types listed do not support presence status: Department, Announcement Only, Take Messages Only (Voicemail), Fax User, Paging Only Group, Shared Lines Group, IVR Menu, Application Extension.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/presence
   * Rate Limit Group: Medium
   * App Permission: EditPresence
   */
  public async put(
    presenceInfoRequest: PresenceInfoRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<PresenceInfoResponse> {
    const r = await this.rc.put<PresenceInfoResponse>(this.path(), presenceInfoRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
