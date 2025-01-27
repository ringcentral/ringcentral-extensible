import ContractedCountryListResponseRecords from "./ContractedCountryListResponseRecords.js";

interface ContractedCountryListResponse {
  /**
   * List of countries with the country data
   * Required
   */
  records?: ContractedCountryListResponseRecords[];
}

export default ContractedCountryListResponse;
