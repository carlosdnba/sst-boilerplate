import { debug } from './core'

export const healthCheck = async event => {
  debug('health-check')('event %o', event)
  return {
    statusCode: 200,
    body: JSON.stringify({
      healthy: true
    })
  }
}
