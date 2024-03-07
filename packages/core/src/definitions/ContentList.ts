import type ContentModel from './ContentModel';
import type NonEnumeratedPagingModel from './NonEnumeratedPagingModel';

interface ContentList {
  /**
   * Required
   */
  records?: ContentModel[];

  /**
   * Required
   */
  paging?: NonEnumeratedPagingModel;
}

export default ContentList;
