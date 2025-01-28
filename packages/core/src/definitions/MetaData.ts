import MetaDataValues from "./MetaDataValues";

/**
 * Call metadata.
 */
interface MetaData {
  /**
   * Identifier of metadata category
   * Required
   */
  values?: MetaDataValues[];
}

export default MetaData;
