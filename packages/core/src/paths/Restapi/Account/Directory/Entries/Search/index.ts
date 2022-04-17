import { RestRequestConfig } from '../../../../../../Rest';
import {
  SearchDirectoryEntriesRequest,
  DirectoryResource,
} from '../../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../../..';

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
   * Returns contact information on corporate users of federated accounts according to the specified filtering and ordering.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/directory/entries/search
   * Rate Limit Group: Heavy
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  async post(
    searchDirectoryEntriesRequest: SearchDirectoryEntriesRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<DirectoryResource> {
    const r = await this.rc.post<DirectoryResource>(
      this.path(),
      searchDirectoryEntriesRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
