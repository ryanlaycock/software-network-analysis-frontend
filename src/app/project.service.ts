import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Observable, of, throwError} from 'rxjs';
import {catchError, takeUntil, takeWhile} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  getProjectMetrics(projectOwner: string, projectName: string): Observable<any> {
    return this.http.get<any>( environment.snaUrl + '/projects/' + projectOwner + '/' + projectName + '/metrics').pipe(
      catchError(this.handlerError<any>())
    );
  }

  getArtifacts(projectOwner: string, projectName: string): Observable<any> {
    return this.http.get<any>( environment.snaUrl + '/artifacts/' + projectOwner + '/' + projectName + '/metrics').pipe(
      catchError(this.handlerError<any>())
    );
  }

  // Snippet adapted from https://stackoverflow.com/a/13627586/6640820
  getOrdinalSuffix(i: number): string {
    let j = i % 10;
    let k = i % 100;
    if (j === 1 && k !== 11) {
      return i + 'st';
    }
    if (j === 2 && k !== 12) {
      return i + 'nd';
    }
    if (j === 3 && k !== 13) {
      return i + 'rd';
    }
    return i + 'th';
}

  private handlerError<T>(result?: T) {
    return (error: any): Observable<T> => {
      if (error.status === 401) {
        console.log('Wrong username or password.');
      } else if (error.status === 404) {
        console.log('Not found.');
        return of(error as T);
        // return throwError(error);
      } else {
        if (!!error.error) {
          for (const key in error.error.messages) {
            if (key in error.error.messages) {
              console.log(key + ': ' + error.error.messages[key]);
            }
          }
        } else {
          console.log(error);
        }
      }
      return of(result as T);
    };
  }
}
