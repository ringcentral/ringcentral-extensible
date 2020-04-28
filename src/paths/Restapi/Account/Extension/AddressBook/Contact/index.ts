import { ContactList, ListContactsParameters, PersonalContactResource, PersonalContactRequest, CreateContactParameters, UpdateContactParameters } from '../../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../../..'

class Contact {
  rc: RestClient
  contactId: (string | null)
  parent: Parent

  constructor (parent: Parent, contactId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.contactId = contactId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.contactId !== null) {
      return `${this.parent.path()}/contact/${this.contactId}`
    }

    return `${this.parent.path()}/contact`
  }

  /**
   * Operation: Get Contact List
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact
   */
  async list (queryParams?: ListContactsParameters): Promise<ContactList> {
    const r = await this.rc.get(this.path(false), queryParams)
    return r.data
  }

  /**
   * Operation: Create Contact
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact
   */
  async post (personalContactRequest: PersonalContactRequest, queryParams?: CreateContactParameters): Promise<PersonalContactResource> {
    const r = await this.rc.post(this.path(false), personalContactRequest, queryParams)
    return r.data
  }

  /**
   * Operation: Get Contact
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}
   */
  async get (): Promise<PersonalContactResource> {
    if (this.contactId === null) {
      throw new Error('contactId must be specified.')
    }

    const r = await this.rc.get(this.path())
    return r.data
  }

  /**
   * Operation: Update Contact
   * Rate Limit Group: Heavy
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}
   */
  async put (personalContactRequest: PersonalContactRequest, queryParams?: UpdateContactParameters): Promise<PersonalContactResource> {
    if (this.contactId === null) {
      throw new Error('contactId must be specified.')
    }

    const r = await this.rc.put(this.path(), personalContactRequest, queryParams)
    return r.data
  }

  /**
   * Operation: Delete Contact
   * Rate Limit Group: Heavy
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}
   */
  async delete (): Promise<string> {
    if (this.contactId === null) {
      throw new Error('contactId must be specified.')
    }

    const r = await this.rc.delete(this.path())
    return r.data
  }
}

export default Contact
