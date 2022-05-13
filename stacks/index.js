import { RemovalPolicy } from 'aws-cdk-lib';
import Api from './Api';
import Storage from './Storage';
import Website from './Website';
import { buildEnvVarObject, defaultEnvs, vars } from './helpers/env';

export default function main (app) {
  // Remove all resources when the dev stage is removed
  if (app.stage !== 'live') {
    app.setDefaultRemovalPolicy(RemovalPolicy.DESTROY);
  }

  const { table } = new Storage(app, 'storage');

  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    timeout: 30,
    runtime: 'nodejs14.x',
    environment: {
      ...buildEnvVarObject(vars),
      ...defaultEnvs(app),
    }
  });
  app.addDefaultFunctionPermissions([table]);

  const { api } = new Api(app, 'api', { table });
  new Website(app, 'www', { api });
}
