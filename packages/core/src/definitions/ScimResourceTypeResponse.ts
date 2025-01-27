import ScimSchemaExtension from "./ScimSchemaExtension.js";
import ScimMeta from "./ScimMeta.js";

interface ScimResourceTypeResponse {
  /**
   * Unique resource type ID, same value as the "name" attribute
   */
  id?: string;

  /**
   * Resource type name
   * Required
   */
  name?: string;

  /**
   * The resource type's HTTP-addressable endpoint
   * Required
   */
  endpoint?: string;

  /**
   * Description of the resource type
   */
  description?: string;

  /**
   * Required
   */
  schema?: "urn:ietf:params:scim:schemas:core:2.0:User";

  /** */
  schemaExtensions?: ScimSchemaExtension[];

  /** */
  meta?: ScimMeta;
}

export default ScimResourceTypeResponse;
