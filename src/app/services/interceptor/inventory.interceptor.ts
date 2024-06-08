import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, tap } from 'rxjs';
import { SpinnerService } from '../spinner.service';

@Injectable()
export class InventoryInterceptor implements HttpInterceptor {
  
  constructor(private spinner: SpinnerService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    this.spinner.loadingSubject.next(true);
    return next.handle(request)
      .pipe(
        // delay(2000),  //simulating delay for loader
        map((event: HttpEvent<any>)=> {
          this.spinner.loadingSubject.next(false);
          return event;
        }),
        catchError(error => {
         this.spinner.loadingSubject.next(false);
         return error;
      }));
  }
};
