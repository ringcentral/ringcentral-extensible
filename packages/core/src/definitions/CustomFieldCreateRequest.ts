interface CustomFieldCreateRequest {
  /**
   * Object category to attach custom fields
   */
  category?: 'User';

  /**
   * Custom field display name
   */
  displayName?: string;
}

export default CustomFieldCreateRequest;
