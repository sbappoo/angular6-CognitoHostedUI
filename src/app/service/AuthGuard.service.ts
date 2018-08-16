import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AmplifyService} from 'aws-amplify-angular';
import Amplify from 'aws-amplify';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private amplifySvc: AmplifyService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.amplifySvc.auth().currentSession().catch((errors) => {
      this.redirectToLogin();
    });
  }

  redirectToLogin() {
    const config = Amplify.Auth.configure();
    const {
      domain,
      redirectSignIn,
      responseType
    } = config.oauth;
    const clientId = config.userPoolWebClientId;
    const url = 'https://' + domain + '/login?redirect_uri=' + redirectSignIn + '&response_type=' + responseType + '&client_id=' + clientId;
    window.location.assign(url);
  }
}
