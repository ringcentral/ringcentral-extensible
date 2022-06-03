import CustomFieldUpdateRequest from '../../../../definitions/CustomFieldUpdateRequest';
import CustomFieldResource from '../../../../definitions/CustomFieldResource';
import CustomFieldCreateRequest from '../../../../definitions/CustomFieldCreateRequest';
import CustomFieldsResource from '../../../../definitions/CustomFieldsResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  fieldId: string | null;

  constructor(parent: ParentInterface, fieldId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.fieldId = fieldId;
  }

  path(withParameter = true): string {
    if (withParameter && this.fieldId !== null) {
      return `${this.parent.path()}/custom-fields/${this.fieldId}`;
    }
    return `${this.parent.path()}/custom-fields`;
  }

  /**
   * Returns the list of created custom fields.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/custom-fields
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadUserInfo
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<CustomFieldsResource> {
    const r = await this.rc.get<CustomFieldsResource>(this.path(false), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Creates custom field attached to the object.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/custom-fields
   * Rate Limit Group: Light
   * App Permission: EditAccounts
   * User Permission: Users
   */
  async post(customFieldCreateRequest: CustomFieldCreateRequest, restRequestConfig?: RestRequestConfig): Promise<CustomFieldResource> {
    const r = await this.rc.post<CustomFieldResource>(this.path(false), customFieldCreateRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates custom field by ID specified in path.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/custom-fields/{fieldId}
   * Rate Limit Group: Light
   * App Permission: EditAccounts
   * User Permission: Users
   */
  async put(customFieldUpdateRequest: CustomFieldUpdateRequest, restRequestConfig?: RestRequestConfig): Promise<CustomFieldResource> {
    if (this.fieldId === null) {
      throw new Error('fieldId must be specified.');
    }
    const r = await this.rc.put<CustomFieldResource>(this.path(), customFieldUpdateRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes custom field(s) by ID(s) with the corresponding values.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/custom-fields/{fieldId}
   * Rate Limit Group: Light
   * App Permission: EditAccounts
   * User Permission: Users
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.fieldId === null) {
      throw new Error('fieldId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
