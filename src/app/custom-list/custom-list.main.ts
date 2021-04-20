import { CustomListModule } from './custom-list.module';
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { environment } from "src/environments/environment";

  if (environment.production) {
    enableProdMode();
  }

  const bootstrap = () => platformBrowserDynamic().bootstrapModule(CustomListModule);
  bootstrap().catch(err => console.error(err));