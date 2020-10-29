import { Component } from '@angular/core';
import { CheckForUpdateService } from './services/check-for-update.service';
import { LogUpdateService } from './services/log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CompoundInterest';
  constructor() {
    // check the service worker for updates
  }
}
