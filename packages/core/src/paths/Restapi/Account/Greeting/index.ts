import Content from './Content';
import Utils from '../../../../Utils';
import CustomCompanyGreetingInfo from '../../../../definitions/CustomCompanyGreetingInfo';
import CreateCompanyGreetingRequest from '../../../../definitions/CreateCompanyGreetingRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/greeting`;
  }

  /**
   * Creates a custom company greeting.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/greeting
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: ReadUserInfo
   */
  public async post(createCompanyGreetingRequest: CreateCompanyGreetingRequest, restRequestConfig?: RestRequestConfig): Promise<CustomCompanyGreetingInfo> {
    const formData = await Utils.getFormData(createCompanyGreetingRequest);
    const r = await this.rc.post<CustomCompanyGreetingInfo>(this.path(), formData, undefined, restRequestConfig);
    return r.data;
  }

  public content(): Content {
    return new Content(this);
  }
}
export default Index;
