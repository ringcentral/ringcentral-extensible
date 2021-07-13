import Search from './Search';
import {RestRequestConfig} from '../../../../../Rest';
import {
  ListDirectoryEntriesParameters,
  DirectoryResource,
  ContactResource,
} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  entryId: string | null;

  constructor(parent: Parent, entryId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.entryId = entryId;
  }
  path(withParameter = true): string {
    if (withParameter && this.entryId !== null) {
      return `${this.parent.path()}/entries/${this.entryId}`;
    }
    return `${this.parent.path()}/entries`;
  }
  /**
   * Returns contact information on corporate users of federated accounts. Please note: 1. `User`, `DigitalUser`, `VirtualUser` and `FaxUser` types are returned as `User` type. 2. `ApplicationExtension` type is not returned. 3. Only extensions in `Enabled`, `Disabled` and `NotActivated` state are returned.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/directory/entries
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   */
  async list(
    queryParams?: ListDirectoryEntriesParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<DirectoryResource> {
    const r = await this.rc.get<DirectoryResource>(
      this.path(false),
      queryParams,
      restRequestConfig
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
  async get(restRequestConfig?: RestRequestConfig): Promise<ContactResource> {
    if (this.entryId === null) {
      throw new Error('entryId must be specified.');
    }
    const r = await this.rc.get<ContactResource>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  search(): Search {
    return new Search(this);
  }
}
export default Index;
