import UpdateContactParameters from '../../../../../../definitions/UpdateContactParameters'
import CreateContactParameters from '../../../../../../definitions/CreateContactParameters'
import PersonalContactRequest from '../../../../../../definitions/PersonalContactRequest'
import PersonalContactResource from '../../../../../../definitions/PersonalContactResource'
import ListContactsParameters from '../../../../../../definitions/ListContactsParameters'
import ContactList from '../../../../../../definitions/ContactList'
import Parent from '..'
import RestClient from '../../../../../..'

class Index {
  rc: RestClient
  contactId: string
  parent: Parent

  constructor(parent: Parent, contactId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.contactId = contactId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.contactId != null) {
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
    if (!this.contactId || this.contactId === null) {
      throw new Error("contactId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Contact
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}
   */
  async put(personalContactRequest: PersonalContactRequest, queryParams?: UpdateContactParameters): Promise<PersonalContactResource> {
    if (!this.contactId || this.contactId === null) {
      throw new Error("contactId must not be undefined or null")
    }

    return this.rc.put(this.path(), personalContactRequest, queryParams)
  }

  /**
   * Operation: Delete Contact
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}
   */
  async delete(): Promise<string> {
    if (!this.contactId || this.contactId === null) {
      throw new Error("contactId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }
}

export default Index
