import {CallerIdBucketNumber, DateTime} from './index';

class CallerIdBucket {
  accountId?: string;

  active?: boolean;

  bucketId?: number;

  bucketName?: string;

  bwOrderId?: string;

  callerIdBucketNumbers?: CallerIdBucketNumber[];

  callerIdName?: string;

  createDate?: DateTime;

  excludedStates?: string[];

  forwardingDid?: string;

  isActive?: boolean;

  orderStatus?: string;
}

export default CallerIdBucket;
