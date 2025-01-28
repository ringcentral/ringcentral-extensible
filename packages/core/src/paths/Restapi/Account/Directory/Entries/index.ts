import Search from "./Search/index";
import ContactResource from "../../../../../definitions/ContactResource";
import ReadDirectoryEntryParameters from "../../../../../definitions/ReadDirectoryEntryParameters";
import DirectoryResource from "../../../../../definitions/DirectoryResource";
import ListDirectoryEntriesParameters from "../../../../../definitions/ListDirectoryEntriesParameters";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public entryId: string | null;

  public constructor(_parent: ParentInterface, entryId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.entryId = entryId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.entryId !== null) {
      return `${this._parent.path()}/entries/${this.entryId}`;
    }
    return `${this._parent.path()}/entries`;
  }
  /**
   * Returns contact information on corporate users of federated accounts. Please note: 1. `User`, `DigitalUser`, `VirtualUser` and `FaxUser` types are returned as `User` type. 2. `ApplicationExtension` type is not returned. 3. Only extensions in `Enabled`, `Disabled` and `NotActivated` state are returned.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/directory/entries
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   */
  public async list(
    queryParams?: ListDirectoryEntriesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<DirectoryResource> {
    const r = await this.rc.get<DirectoryResource>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns contact information on a particular corporate user of a federated account.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/directory/entries/{entryId}
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   */
  public async get(
    queryParams?: ReadDirectoryEntryParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ContactResource> {
    if (this.entryId === null) {
      throw new Error("entryId must be specified.");
    }
    const r = await this.rc.get<ContactResource>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  public search(): Search {
    return new Search(this);
  }
}
export default Index;
