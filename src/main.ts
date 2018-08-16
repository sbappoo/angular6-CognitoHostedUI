import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Amplify from 'aws-amplify';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

Amplify.configure({
  Auth: {
    IdentityPoolId: 'eu-west-1:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    UserPoolId: 'eu-west-1_xxxxxx',
    userPoolWebClientId: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
    region: 'eu-west-1',
    oauth: {
      domain: 'xxxxxxxxxx.auth.eu-west-1.amazoncognito.com',
      redirectSignIn: 'http://localhost:4200/dash',
      redirectSignOut: 'http://localhost:4200/logout',
      scope : ['email', 'openid', 'aws.cognito.signin.user.admin'],
      responseType: 'code',
      options: {
        AdvancedSecurityDataCollectionFlag: true

      }
    }
  }
});

