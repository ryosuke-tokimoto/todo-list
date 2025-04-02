import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerFacade } from '@domains/spinner/spinner.facade';

@Injectable()
export class SpinnerHttpInterceptor implements HttpInterceptor {
  constructor(private spinnerFacade: SpinnerFacade) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    if (req.method !== 'POST' || !req.url?.startsWith('/api')) {
      return next.handle(req);
    }

    this.spinnerFacade.show();
    return next.handle(req).pipe(
      finalize(() => {
        this.spinnerFacade.hide();
      }),
    );
  }
}
