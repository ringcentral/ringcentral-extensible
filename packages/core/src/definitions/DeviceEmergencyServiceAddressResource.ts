/**
 * Address for emergency cases. The same emergency address is assigned to all numbers of a single device
 */
interface DeviceEmergencyServiceAddressResource {
  /**
   * Country name
   */
  country?: string;

  /**
   * Internal identifier of a country
   */
  countryId?: string;

  /**
   * Two-letter country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format
   * Example: US
   */
  countryIsoCode?: string;

  /**
   * Full name of a country
   */
  countryName?: string;

  /**
   * City name
   */
  city?: string;

  /**
   * Customer name
   */
  customerName?: string;

  /**
   * Email of a primary contact person (receiver). Should be specified
   *  for countries except the US, Canada, the UK and Australia
   * Format: email
   */
  customerEmail?: string;

  /**
   * Email of an additional contact person. Should be specified
   *  for countries except the US, Canada, the UK and Australia
   * Format: email
   */
  additionalCustomerEmail?: string;

  /**
   * Name of an additional contact person. Should be specified for
   *  countries except the US, Canada, the UK and Australia
   */
  additionalCustomerName?: string;

  /**
   * Phone number of a primary contact person (receiver). Should
   *  be specified for countries except the US, Canada, the UK and Australia
   */
  customerPhone?: string;

  /**
   * Phone number of an additional contact person. Should be specified
   *  for countries except the US, Canada, the UK & Australia
   */
  additionalCustomerPhone?: string;

  /**
   * State/province name. Mandatory for the USA, the UK and Canada
   */
  state?: string;

  /**
   * Internal identifier of a state
   */
  stateId?: string;

  /**
   * ISO code of a state
   */
  stateIsoCode?: string;

  /**
   * Full name of a state
   */
  stateName?: string;

  /**
   * First line address
   */
  street?: string;

  /**
   * Second line address (apartment, suite, unit, building, floor,
   *  etc.)
   */
  street2?: string;

  /**
   * Street type
   */
  streetType?: string;

  /**
   * (Optional) Building name
   */
  buildingName?: string;

  /**
   * Building/street number
   */
  buildingNumber?: string;

  /**
   * Specifies if the emergency address is out of country
   */
  outOfCountry?: boolean;

  /**
   * Postal (Zip) code
   */
  zip?: string;

  /**
   * Status of a digital line provisioning
   */
  lineProvisioningStatus?: "Provisioning" | "Valid" | "Invalid";

  /**
   * Resulting status of emergency address synchronization. Returned
   *  if `syncEmergencyAddress` parameter is set to `true`
   */
  syncStatus?:
    | "Verified"
    | "Updated"
    | "Deleted"
    | "NotRequired"
    | "Unsupported"
    | "Failed";

  /**
   * Internal identifier of a tax
   */
  taxId?: string;
}

export default DeviceEmergencyServiceAddressResource;
