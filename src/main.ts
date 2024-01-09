import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AngularSubComponent } from './app/app.component';

bootstrapApplication(AngularSubComponent, appConfig)
  .catch((err) => console.error(err));
