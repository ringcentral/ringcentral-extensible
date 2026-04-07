import type IvrMenuInfo from "../../../../definitions/IvrMenuInfo.js";
import type IvrMenuList from "../../../../definitions/IvrMenuList.js";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public ivrMenuId: string | null;

  public constructor(
    _parent: ParentInterface,
    ivrMenuId: string | null = null,
  ) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.ivrMenuId = ivrMenuId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.ivrMenuId !== null) {
      return `${this._parent.path()}/ivr-menus/${this.ivrMenuId}`;
    }
    return `${this._parent.path()}/ivr-menus`;
  }
  /**
   * Returns a company IVR menus.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/ivr-menus
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   */
  public async list(
    restRequestConfig?: RestRequestConfig,
  ): Promise<IvrMenuList> {
    const r = await this.rc.get<IvrMenuList>(
      this.path(false),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Creates a company IVR menu.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/ivr-menus
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: AutoReceptionist
   */
  public async post(
    ivrMenuInfo: IvrMenuInfo,
    restRequestConfig?: RestRequestConfig,
  ): Promise<IvrMenuInfo> {
    const r = await this.rc.post<IvrMenuInfo>(
      this.path(false),
      ivrMenuInfo,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns a company IVR menu by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/ivr-menus/{ivrMenuId}
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: AutoReceptionist
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<IvrMenuInfo> {
    if (this.ivrMenuId === null) {
      throw new Error("ivrMenuId must be specified.");
    }
    const r = await this.rc.get<IvrMenuInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates a company IVR menu by ID.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/ivr-menus/{ivrMenuId}
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: AutoReceptionist
   */
  public async put(
    ivrMenuInfo: IvrMenuInfo,
    restRequestConfig?: RestRequestConfig,
  ): Promise<IvrMenuInfo> {
    if (this.ivrMenuId === null) {
      throw new Error("ivrMenuId must be specified.");
    }
    const r = await this.rc.put<IvrMenuInfo>(
      this.path(),
      ivrMenuInfo,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
