import * as sst from '@serverless-stack/resources'

export default class Api extends sst.Stack {
  constructor (scope, id, props) {
    super(scope, id, props)

    // HTTP API
    const api = new sst.Api(this, 'http', {
      defaultFunctionProps: {
        environment: {
          TABLE_NAME: props.table.tableName,
          DEBUG: `${scope.name}:*`,
          PROJECT_NAME: scope.name,
          STAGE: props.stage
        }
      },
      routes: {
        'GET /health-check': 'src/lambdas.healthCheck'
      }
    })

    this.addOutputs({
      ApiEndpoint: api.url
    })
  }
}
