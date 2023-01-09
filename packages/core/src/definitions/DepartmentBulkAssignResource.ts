import BulkAssignItem from './BulkAssignItem';

/**
 * Please note that legacy 'Department' extension type corresponds to
 * 'Call Queue' extensions in modern RingCentral product terminology
 *
*/
interface DepartmentBulkAssignResource {
  /**
   */
  items?: BulkAssignItem[];
}

export default DepartmentBulkAssignResource;
