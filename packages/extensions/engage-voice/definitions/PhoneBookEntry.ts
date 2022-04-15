import { DateTime } from './index';

class PhoneBookEntry {
  accountId?: string;

  countryId?: string;

  dateCreated?: DateTime;

  destName?: string;

  destination?: string;

  entryId?: number;

  notes?: string;

  type?: string;

  typeId?: number;
}

export default PhoneBookEntry;
