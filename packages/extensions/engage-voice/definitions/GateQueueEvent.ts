import {Gate} from './index';

class GateQueueEvent {
  enableDtmf?: string;

  eventDuration?: number;

  eventId?: number;

  eventRank?: number;

  gate?: Gate;

  queueEvent?: string;
}

export default GateQueueEvent;
