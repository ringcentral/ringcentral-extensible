import {RestRequestConfig} from '../../../../../../Rest';
import {
  DirectoryResource,
  SearchDirectoryEntriesRequest,
} from '../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/search`;
  }

  /**
   * Operation: Search Company Directory Entries
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/directory/entries/search
   */
  async post(
    searchDirectoryEntriesRequest: SearchDirectoryEntriesRequest,
    config?: RestRequestConfig
  ): Promise<DirectoryResource> {
    const r = await this.rc.post<DirectoryResource>(
      this.path(),
      searchDirectoryEntriesRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
