import ContractedCountryListResponseRecords from "./ContractedCountryListResponseRecords";

interface ContractedCountryListResponse {
  /**
   * List of countries with the country data
   * Required
   */
  records?: ContractedCountryListResponseRecords[];
}

export default ContractedCountryListResponse;
