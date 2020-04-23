/* eslint-env jest */
import RestClient from '../src/index'
import RestException from '../src/RestException'

jest.setTimeout(16000)

describe('Exceptions', () => {
  test('400', async () => {
    const rc = new RestClient(process.env.RINGCENTRAL_CLIENT_ID!, process.env.RINGCENTRAL_CLIENT_SECRET!, process.env.RINGCENTRAL_SERVER_URL!)
    await rc.authorize(process.env.RINGCENTRAL_USERNAME!, process.env.RINGCENTRAL_EXTENSION!, process.env.RINGCENTRAL_PASSWORD!)
    let exception = false
    try {
      await rc.post('/restapi/v1.0/account/~/extension/~/sms', { text: 'Hello world' })
    } catch (e) {
      exception = true
      expect(e instanceof RestException).toBeTruthy()
      expect(e.response.status).toBe(400)
    } finally {
      expect(exception).toBeTruthy()
    }
  })

  test('404', async () => {
    const rc = new RestClient(process.env.RINGCENTRAL_CLIENT_ID!, process.env.RINGCENTRAL_CLIENT_SECRET!, process.env.RINGCENTRAL_SERVER_URL!)
    await rc.authorize(process.env.RINGCENTRAL_USERNAME!, process.env.RINGCENTRAL_EXTENSION!, process.env.RINGCENTRAL_PASSWORD!!)
    let exception = false
    try {
      await rc.post('/restapi/v1.0/account/~/extension/~/does-not-exist', { text: 'Hello world' })
    } catch (e) {
      exception = true
      expect(e instanceof RestException).toBeTruthy()
      expect(e.response.status).toBe(404)
    } finally {
      expect(exception).toBeTruthy()
    }
  })
})
