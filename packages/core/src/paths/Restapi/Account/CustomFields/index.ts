import type CustomFieldUpdateRequest from '../../../../definitions/CustomFieldUpdateRequest';
import type CustomFieldModel from '../../../../definitions/CustomFieldModel';
import type CustomFieldCreateRequest from '../../../../definitions/CustomFieldCreateRequest';
import type CustomFieldList from '../../../../definitions/CustomFieldList';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public fieldId: string | null;

  public constructor(_parent: ParentInterface, fieldId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.fieldId = fieldId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.fieldId !== null) {
      return `${this._parent.path()}/custom-fields/${this.fieldId}`;
    }
    return `${this._parent.path()}/custom-fields`;
  }
  /**
   * Returns the list of created custom fields.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/custom-fields
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadUserInfo
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<CustomFieldList> {
    const r = await this.rc.get<CustomFieldList>(this.path(false), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Creates custom field attached to the object.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/custom-fields
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: Users
   */
  public async post(
    customFieldCreateRequest: CustomFieldCreateRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CustomFieldModel> {
    const r = await this.rc.post<CustomFieldModel>(
      this.path(false),
      customFieldCreateRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates custom field by ID specified in path.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/custom-fields/{fieldId}
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: Users
   */
  public async put(
    customFieldUpdateRequest: CustomFieldUpdateRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CustomFieldModel> {
    if (this.fieldId === null) {
      throw new Error('fieldId must be specified.');
    }
    const r = await this.rc.put<CustomFieldModel>(this.path(), customFieldUpdateRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes custom field(s) by ID(s) with the corresponding values.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/custom-fields/{fieldId}
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: Users
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.fieldId === null) {
      throw new Error('fieldId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), {}, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
