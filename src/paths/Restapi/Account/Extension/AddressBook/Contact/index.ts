import { ContactList, ListContactsParameters, PersonalContactResource, PersonalContactRequest, CreateContactParameters, UpdateContactParameters } from '../../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../../..'

class Contact {
  rc: RestClient
  contactId: string
  parent: Parent

  constructor(parent: Parent, contactId: string) {
    this.parent = parent
    this.rc = parent.rc
    this.contactId = contactId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.contactId) {
      return `${this.parent.path()}/contact/${this.contactId}`
    }

    return `${this.parent.path()}/contact`
  }

  /**
   * Operation: Get Contact List
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact
   */
  async list(queryParams?: ListContactsParameters): Promise<ContactList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create Contact
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact
   */
  async post(personalContactRequest: PersonalContactRequest, queryParams?: CreateContactParameters): Promise<PersonalContactResource> {
    return this.rc.post(this.path(false), personalContactRequest, queryParams)
  }

  /**
   * Operation: Get Contact
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}
   */
  async get(): Promise<PersonalContactResource> {
    if (!this.contactId) {
      throw new Error('contactId must not be undefined')
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Contact
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}
   */
  async put(personalContactRequest: PersonalContactRequest, queryParams?: UpdateContactParameters): Promise<PersonalContactResource> {
    if (!this.contactId) {
      throw new Error('contactId must not be undefined')
    }

    return this.rc.put(this.path(), personalContactRequest, queryParams)
  }

  /**
   * Operation: Delete Contact
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}
   */
  async delete(): Promise<string> {
    if (!this.contactId) {
      throw new Error('contactId must not be undefined')
    }

    return this.rc.delete(this.path())
  }
}

export default Contact
