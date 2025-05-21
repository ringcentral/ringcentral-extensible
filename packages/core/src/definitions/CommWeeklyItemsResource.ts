import CommWeeklyRangeResource from "./CommWeeklyRangeResource.js";

interface CommWeeklyItemsResource {
  /** */
  monday?: CommWeeklyRangeResource[];

  /** */
  tuesday?: CommWeeklyRangeResource[];

  /** */
  wednesday?: CommWeeklyRangeResource[];

  /** */
  thursday?: CommWeeklyRangeResource[];

  /** */
  friday?: CommWeeklyRangeResource[];

  /** */
  saturday?: CommWeeklyRangeResource[];

  /** */
  sunday?: CommWeeklyRangeResource[];
}

export default CommWeeklyItemsResource;
