import * as sst from '@serverless-stack/resources';

export default class Api extends sst.Stack {
  constructor (scope, id, props) {
    super(scope, id, props);

    // HTTP API
    const api = new sst.Api(this, 'http', {
      defaultFunctionProps: {
        environment: {
          TABLE_NAME: props.table.tableName
        }
      },
      routes: {
        'GET /health-check': 'backend/lambdas.healthCheck'
      }
    });

    this.api = api;

    this.addOutputs({
      ApiEndpoint: api.url
    });
  }
}
