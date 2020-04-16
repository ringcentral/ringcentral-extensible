/* eslint-env jest */
import RestClient from '../src/index'

jest.setTimeout(16000)

describe('fax cover pages', () => {
  test('fax cover pages', async () => {
    const rc = new RestClient(process.env.RINGCENTRAL_CLIENT_ID, process.env.RINGCENTRAL_CLIENT_SECRET, process.env.RINGCENTRAL_SERVER_URL)
    await rc.authorize(process.env.RINGCENTRAL_USERNAME, process.env.RINGCENTRAL_EXTENSION, process.env.RINGCENTRAL_PASSWORD)
    const faxCoverPages = await rc.restapi().dictionary().faxCoverPage().get()
    expect(faxCoverPages.records.length).toBeGreaterThan(0)
    expect(faxCoverPages.records[0].name).toBe('None')
  })
})
