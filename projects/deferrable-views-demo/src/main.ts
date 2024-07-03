import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';

(async () => {
  const app = createApplication(appConfig);
  const DemoAppElement = createCustomElement(AppComponent, {
    injector: (await app).injector,
  });

  customElements.define('deferred-view-demo-app', DemoAppElement);
})();
