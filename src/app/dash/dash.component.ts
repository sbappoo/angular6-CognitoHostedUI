import { Component, OnInit } from '@angular/core';
import {Hub} from 'aws-amplify';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(private router: Router) {
    Hub.listen('auth', this, 'AuthCodelistener');
  }

  onHubCapsule(capsule) {
    console.log(capsule);
    const { channel, payload } = capsule;
    if (channel === 'auth' || payload.event === 'signIn' ) {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
  }

}
