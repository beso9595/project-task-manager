import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { provideHttpClient } from "@angular/common/http";
import { provideEffects } from '@ngrx/effects';
import * as updateIsExpanded from "./store/app.effects";
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
    provideStore(),
    provideHttpClient(),
    provideEffects(updateIsExpanded),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
