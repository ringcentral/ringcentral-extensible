import BusinessAddress from "./BusinessAddress.js";
import Contact from "./Contact.js";

interface CompanyDetails {
    /**
   * Business contact email
   * Format: email
   */
  businessContactEmail?: string;

  /**
   * Company name
   */
  companyName?: string;

  /**
   * Industry category
   */
  industryCategory?: string;

  /**
   * Web site URL
   * Format: uri
   */
  webSiteUri?: string;

  /**
   */
  commercialType?: ('SoleProprietor' | 'PrivateProfit' | 'PublicProfit' | 'NonProfit' | 'Government');

  /**
   */
  businessAddress?: BusinessAddress;

  /**
   */
  contact?: Contact;
}

export default CompanyDetails;
