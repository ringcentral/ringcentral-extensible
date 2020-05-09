import {
  CustomFieldResource,
  CustomFieldCreateRequest,
  CustomFieldsResource,
  CustomFieldUpdateRequest,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class CustomFields {
  rc: RingCentral;
  fieldId: string | null;
  parent: Parent;

  constructor(parent: Parent, fieldId: string | null = null) {
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
   * Operation: Create Custom Field
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/account/{accountId}/custom-fields
   */
  async post(
    customFieldCreateRequest: CustomFieldCreateRequest
  ): Promise<CustomFieldResource> {
    const r = await this.rc.post<CustomFieldResource>(
      this.path(false),
      customFieldCreateRequest
    );
    return r.data;
  }

  /**
   * Operation: Get Custom Field List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/custom-fields
   */
  async get(): Promise<CustomFieldsResource> {
    const r = await this.rc.get<CustomFieldsResource>(this.path(false));
    return r.data;
  }

  /**
   * Operation: Update Сustom Field
   * Rate Limit Group: Light
   * Http put /restapi/v1.0/account/{accountId}/custom-fields/{fieldId}
   */
  async put(
    customFieldUpdateRequest: CustomFieldUpdateRequest
  ): Promise<CustomFieldResource> {
    if (this.fieldId === null) {
      throw new Error('fieldId must be specified.');
    }

    const r = await this.rc.put<CustomFieldResource>(
      this.path(),
      customFieldUpdateRequest
    );
    return r.data;
  }

  /**
   * Operation: Delete Custom Field
   * Rate Limit Group: Light
   * Http delete /restapi/v1.0/account/{accountId}/custom-fields/{fieldId}
   */
  async delete(): Promise<string> {
    if (this.fieldId === null) {
      throw new Error('fieldId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path());
    return r.data;
  }
}

export default CustomFields;
