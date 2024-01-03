import type PatchContactParameters from '../../../../../../definitions/PatchContactParameters';
import type UpdateContactParameters from '../../../../../../definitions/UpdateContactParameters';
import type PersonalContactResource from '../../../../../../definitions/PersonalContactResource';
import type CreateContactParameters from '../../../../../../definitions/CreateContactParameters';
import type PersonalContactRequest from '../../../../../../definitions/PersonalContactRequest';
import type ContactList from '../../../../../../definitions/ContactList';
import type ListContactsParameters from '../../../../../../definitions/ListContactsParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public contactId: string | null;

  public constructor(_parent: ParentInterface, contactId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.contactId = contactId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.contactId !== null) {
      return `${this._parent.path()}/contact/${this.contactId}`;
    }
    return `${this._parent.path()}/contact`;
  }
  /**
   * Returns the user personal contacts.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book/contact
   * Rate Limit Group: Heavy
   * App Permission: ReadContacts
   * User Permission: ReadPersonalContacts
   */
  public async list(queryParams?: ListContactsParameters, restRequestConfig?: RestRequestConfig): Promise<ContactList> {
    const r = await this.rc.get<ContactList>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates the user personal contact.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book/contact
   * Rate Limit Group: Heavy
   * App Permission: Contacts
   * User Permission: EditPersonalContacts
   */
  public async post(
    personalContactRequest: PersonalContactRequest,
    queryParams?: CreateContactParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<PersonalContactResource> {
    const r = await this.rc.post<PersonalContactResource>(
      this.path(false),
      personalContactRequest,
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns the user personal contact(s). Batch request syntax is supported.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}
   * Rate Limit Group: Heavy
   * App Permission: ReadContacts
   * User Permission: ReadPersonalContacts
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<PersonalContactResource> {
    if (this.contactId === null) {
      throw new Error('contactId must be specified.');
    }
    const r = await this.rc.get<PersonalContactResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates the user personal contact(s) (full resource update). Batch request syntax is supported
   *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}
   * Rate Limit Group: Heavy
   * App Permission: Contacts
   * User Permission: EditPersonalContacts
   */
  public async put(
    personalContactRequest: PersonalContactRequest,
    queryParams?: UpdateContactParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<PersonalContactResource> {
    if (this.contactId === null) {
      throw new Error('contactId must be specified.');
    }
    const r = await this.rc.put<PersonalContactResource>(
      this.path(),
      personalContactRequest,
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes the user personal contact(s). Batch request syntax is supported.
   *
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}
   * Rate Limit Group: Heavy
   * App Permission: Contacts
   * User Permission: EditPersonalContacts
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.contactId === null) {
      throw new Error('contactId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates particular values of a personal contact attributes specified in request (partial resource update). Omitted attributes will remain unchanged.
   * If any attribute is passed in request body with the null value, then this attribute value will be removed.
   *
   * HTTP Method: patch
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}
   * Rate Limit Group: Heavy
   * App Permission: Contacts
   * User Permission: EditPersonalContacts
   */
  public async patch(
    personalContactRequest: PersonalContactRequest,
    queryParams?: PatchContactParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<PersonalContactResource> {
    if (this.contactId === null) {
      throw new Error('contactId must be specified.');
    }
    const r = await this.rc.patch<PersonalContactResource>(
      this.path(),
      personalContactRequest,
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
