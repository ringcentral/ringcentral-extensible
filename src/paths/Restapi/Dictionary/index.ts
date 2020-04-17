import Timezone from './Timezone'
import State from './State'
import Location from './Location'
import Country from './Country'
import Language from './Language'
import Greeting from './Greeting'
import FaxCoverPage from './FaxCoverPage'
import Parent from '..'
import RestClient from '../../..'

class Dictionary {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/dictionary`
  }

  faxCoverPage(): FaxCoverPage {
    return new FaxCoverPage(this)
  }

  greeting(greetingId: string = null): Greeting {
    return new Greeting(this, greetingId)
  }

  language(languageId: string = null): Language {
    return new Language(this, languageId)
  }

  country(countryId: string = null): Country {
    return new Country(this, countryId)
  }

  location(): Location {
    return new Location(this)
  }

  state(stateId: string = null): State {
    return new State(this, stateId)
  }

  timezone(timezoneId: string = null): Timezone {
    return new Timezone(this, timezoneId)
  }
}

export default Dictionary
