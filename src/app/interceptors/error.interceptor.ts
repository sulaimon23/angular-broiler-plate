import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Loading, Notify } from 'notiflix';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {
    Notify.init({
      clickToClose: true,
      cssAnimationStyle: 'from-top', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
    });
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    Loading.hourglass('Loading...');
    //
    return next.handle(request.clone({})).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          Loading.remove();
        }
      }),
      catchError((error: HttpErrorResponse) => {
        Loading.remove();
        let errorMessage =
          error?.error?.message || 'An Error Occured Try Again';
        Notify.failure(errorMessage);
        //
        return throwError(error);
      })
    );
  }
}
