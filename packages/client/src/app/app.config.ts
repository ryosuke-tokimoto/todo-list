import { HttpClient, provideHttpClient, withJsonpSupport, withFetch, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { SpinnerHttpInterceptor } from './core/interceptor/spinner.http-Interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withJsonpSupport(), withFetch()),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'ja',
        loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/locale/', '.json'),
          deps: [HttpClient],
        },
      }),
    ),
    importProvidersFrom(
      NgxsModule.forRoot([], {
        developmentMode: !environment.production,
      }),
    ),
    { provide: 'API_URL', useValue: '/api' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerHttpInterceptor,
      multi: true,
    },
  ],
};
