import Search from './Search';
import {RestRequestConfig} from '../../../../../Rest';
import {
  DirectoryResource,
  ListDirectoryEntriesParameters,
  ContactResource,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  entryId: string | null;
  parent: Parent;

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
   * Operation: Get Company Directory Entries
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/directory/entries
   */
  async list(
    queryParams?: ListDirectoryEntriesParameters,
    config?: RestRequestConfig
  ): Promise<DirectoryResource> {
    const r = await this.rc.get<DirectoryResource>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Corporate Directory Entry
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/directory/entries/{entryId}
   */
  async get(config?: RestRequestConfig): Promise<ContactResource> {
    if (this.entryId === null) {
      throw new Error('entryId must be specified.');
    }

    const r = await this.rc.get<ContactResource>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  search(): Search {
    return new Search(this);
  }
}

export default Index;
