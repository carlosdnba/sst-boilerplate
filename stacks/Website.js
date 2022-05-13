import { Stack, ReactStaticSite } from '@serverless-stack/resources';

export default class Website extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const { url } = new ReactStaticSite(this, 'website', {
      path: 'frontend',
      environment: {
        REACT_APP_API_GATEWAY_URL: props.api.url
      }
    });

    // Show the URLs in the output
    this.addOutputs({
      SiteUrl: url,
    });
  }
}
