import CustomFieldUpdateRequest from '../../../../definitions/CustomFieldUpdateRequest'
import CustomFieldsResource from '../../../../definitions/CustomFieldsResource'
import CustomFieldCreateRequest from '../../../../definitions/CustomFieldCreateRequest'
import CustomFieldResource from '../../../../definitions/CustomFieldResource'
import Parent from '..'
import RestClient from '../../../..'

class CustomFields {
  rc: RestClient
  fieldId: string
  parent: Parent

  constructor(parent: Parent, fieldId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.fieldId = fieldId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.fieldId !== null) {
      return `${this.parent.path()}/custom-fields/${this.fieldId}`
    }

    return `${this.parent.path()}/custom-fields`
  }

  /**
   * Operation: Create Custom Field
   * Http post /restapi/v1.0/account/{accountId}/custom-fields
   */
  async post(customFieldCreateRequest: CustomFieldCreateRequest): Promise<CustomFieldResource> {
    return this.rc.post(this.path(false), customFieldCreateRequest)
  }

  /**
   * Operation: Get Custom Field List
   * Http get /restapi/v1.0/account/{accountId}/custom-fields
   */
  async get(): Promise<CustomFieldsResource> {
    return this.rc.get(this.path(false))
  }

  /**
   * Operation: Update Сustom Field
   * Http put /restapi/v1.0/account/{accountId}/custom-fields/{fieldId}
   */
  async put(customFieldUpdateRequest: CustomFieldUpdateRequest): Promise<CustomFieldResource> {
    if (this.fieldId === undefined || this.fieldId === null) {
      throw new Error("fieldId must not be undefined or null")
    }

    return this.rc.put(this.path(), customFieldUpdateRequest)
  }

  /**
   * Operation: Delete Custom Field
   * Http delete /restapi/v1.0/account/{accountId}/custom-fields/{fieldId}
   */
  async delete(): Promise<string> {
    if (this.fieldId === undefined || this.fieldId === null) {
      throw new Error("fieldId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }
}

export default CustomFields
