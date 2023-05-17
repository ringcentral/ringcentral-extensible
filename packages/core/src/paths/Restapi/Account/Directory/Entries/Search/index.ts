import DirectoryResource from '../../../../../../definitions/DirectoryResource';
import SearchDirectoryEntriesParameters from '../../../../../../definitions/SearchDirectoryEntriesParameters';
import SearchDirectoryEntriesRequest from '../../../../../../definitions/SearchDirectoryEntriesRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/search`;
  }

  /**
   * Returns contact information on corporate users of federated accounts according to the specified filtering and ordering.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/directory/entries/search
   * Rate Limit Group: Heavy
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  public async post(searchDirectoryEntriesRequest: SearchDirectoryEntriesRequest, queryParams?: SearchDirectoryEntriesParameters, restRequestConfig?: RestRequestConfig): Promise<DirectoryResource> {
    const r = await this.rc.post<DirectoryResource>(this.path(), searchDirectoryEntriesRequest, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
