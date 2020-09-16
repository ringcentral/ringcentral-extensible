import {Chronology, DateTimeZone} from './index';

class DateTime {
  afterNow?: boolean;

  beforeNow?: boolean;

  centuryOfEra?: number;

  chronology?: Chronology;

  dayOfMonth?: number;

  dayOfWeek?: number;

  dayOfYear?: number;

  equalNow?: boolean;

  era?: number;

  hourOfDay?: number;

  millis?: number;

  millisOfDay?: number;

  millisOfSecond?: number;

  minuteOfDay?: number;

  minuteOfHour?: number;

  monthOfYear?: number;

  secondOfDay?: number;

  secondOfMinute?: number;

  weekOfWeekyear?: number;

  weekyear?: number;

  year?: number;

  yearOfCentury?: number;

  yearOfEra?: number;

  zone?: DateTimeZone;
}

export default DateTime;
