import {RestRequestConfig} from '../../../../../../Rest';
import {
  ContactList,
  ListContactsParameters,
  PersonalContactResource,
  PersonalContactRequest,
  CreateContactParameters,
  UpdateContactParameters,
} from '../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../..';

class Index {
  rc: RingCentral;
  contactId: string | null;
  parent: Parent;

  constructor(parent: Parent, contactId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.contactId = contactId;
  }

  path(withParameter = true): string {
    if (withParameter && this.contactId !== null) {
      return `${this.parent.path()}/contact/${this.contactId}`;
    }

    return `${this.parent.path()}/contact`;
  }

  /**
   * Operation: Get Contact List
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact
   */
  async list(
    queryParams?: ListContactsParameters,
    config?: RestRequestConfig
  ): Promise<ContactList> {
    const r = await this.rc.get<ContactList>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Create Contact
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact
   */
  async post(
    personalContactRequest: PersonalContactRequest,
    queryParams?: CreateContactParameters,
    config?: RestRequestConfig
  ): Promise<PersonalContactResource> {
    const r = await this.rc.post<PersonalContactResource>(
      this.path(false),
      personalContactRequest,
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Contact
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}
   */
  async get(config?: RestRequestConfig): Promise<PersonalContactResource> {
    if (this.contactId === null) {
      throw new Error('contactId must be specified.');
    }

    const r = await this.rc.get<PersonalContactResource>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Contact
   * Rate Limit Group: Heavy
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}
   */
  async put(
    personalContactRequest: PersonalContactRequest,
    queryParams?: UpdateContactParameters,
    config?: RestRequestConfig
  ): Promise<PersonalContactResource> {
    if (this.contactId === null) {
      throw new Error('contactId must be specified.');
    }

    const r = await this.rc.put<PersonalContactResource>(
      this.path(),
      personalContactRequest,
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete Contact
   * Rate Limit Group: Heavy
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.contactId === null) {
      throw new Error('contactId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }
}

export default Index;
