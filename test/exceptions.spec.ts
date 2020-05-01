/* eslint-env jest */
import RestClient from '../src/index'
import RestException from '../src/RestException'

jest.setTimeout(64000)

describe('Exceptions', () => {
  test('400', async () => {
    const rc = new RestClient({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!
    })
    await rc.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!
    })
    let exception = false
    try {
      // no to number
      await rc.restapi().account().extension().sms().post({ text: 'Hello world' })
    } catch (e) {
      exception = true
      expect(e instanceof RestException).toBeTruthy()
      expect(e.response.status).toBe(400)
    } finally {
      expect(exception).toBeTruthy()
    }
  })

  test('404', async () => {
    const rc = new RestClient({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!
    })
    await rc.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!
    })
    let exception = false
    try {
      await rc.post(rc.restapi().account().extension().path(true) + '/does-not-exist', { text: 'Hello world' })
    } catch (e) {
      exception = true
      expect(e instanceof RestException).toBeTruthy()
      expect(e.response.status).toBe(404)
    } finally {
      expect(exception).toBeTruthy()
    }
  })
})
