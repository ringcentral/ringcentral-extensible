interface ScimSchemaAttribute {
  /**
   * The name of the attribute
   * Required
   */
  name?: string;

  /**
   * Required
   */
  type?: ('string' | 'boolean' | 'decimal' | 'integer' | 'dateTime' | 'reference' | 'complex');

  /**
   */
  subAttributes?: ScimSchemaAttribute[];

  /**
   * A Boolean value indicating the attribute's plurality
   * Required
   */
  multiValued?: boolean;

  /**
   * The description of the attribute
   */
  description?: string;

  /**
   * Required
   */
  required?: boolean;

  /**
   * A collection of suggested canonical values
   */
  canonicalValues?: string[];

  /**
   */
  caseExact?: boolean;

  /**
   * Indicates the circumstances under which the value of the attribute can be (re)defined
   * Required
   */
  mutability?: ('readOnly' | 'readWrite' | 'immutable' | 'writeOnly');

  /**
   * Indicates when an attribute and associated values are returned
   * Required
   */
  returned?: ('always' | 'never' | 'default' | 'request');

  /**
   * Specifies how the service provider enforces uniqueness of attribute values
   * Required
   */
  uniqueness?: ('none' | 'server' | 'global');

  /**
   * Indicates the SCIM resource types that be referenced
   */
  referenceTypes?: string[];
}

export default ScimSchemaAttribute;
