import ScimSchemaAttribute from "./ScimSchemaAttribute.js";
import ScimMeta from "./ScimMeta.js";

interface ScimSchemaResponse {
  /**
   * The unique URI of the schema
   * Required
   */
  id?: string;

  /**
   * The name of the schema
   */
  name?: string;

  /**
   * The description of the schema
   */
  description?: string;

  /** */
  attributes?: ScimSchemaAttribute[];

  /** */
  meta?: ScimMeta;
}

export default ScimSchemaResponse;
