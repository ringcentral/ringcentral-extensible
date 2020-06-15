import Timezone from './Timezone';
import State from './State';
import Location from './Location';
import Country from './Country';
import Language from './Language';
import Greeting from './Greeting';
import FaxCoverPage from './FaxCoverPage';
import Parent from '..';
import RingCentral from '../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/dictionary`;
  }

  faxCoverPage(): FaxCoverPage {
    return new FaxCoverPage(this);
  }

  greeting(greetingId: string | null = null): Greeting {
    return new Greeting(this, greetingId);
  }

  language(languageId: string | null = null): Language {
    return new Language(this, languageId);
  }

  country(countryId: string | null = null): Country {
    return new Country(this, countryId);
  }

  location(): Location {
    return new Location(this);
  }

  state(stateId: string | null = null): State {
    return new State(this, stateId);
  }

  timezone(timezoneId: string | null = null): Timezone {
    return new Timezone(this, timezoneId);
  }
}

export default Index;
