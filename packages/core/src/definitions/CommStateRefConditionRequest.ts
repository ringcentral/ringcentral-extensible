import CommReferenceStateResource from "./CommReferenceStateResource.js";

interface CommStateRefConditionRequest {
    /**
   * State condition type
   * Required
   */
  type?: ('Schedule' | 'State');

  /**
   * Required
   */
  state?: CommReferenceStateResource;
}

export default CommStateRefConditionRequest;
