import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs';

import { Plant } from './models/Plant';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class PlantService {
  private plantsUrl = 'api/plants';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /** GET plants from the server */
  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.plantsUrl).pipe(
      tap((_) => this.log('fetched plants')),
      catchError(this.handleError<Plant[]>('getPlants', []))
    );
  }

  /** GET plant by id. Return `undefined` when id not found */
  getPlantNo404<Data>(id: number): Observable<Plant> {
    const url = `${this.plantsUrl}/?id=${id}`;
    return this.http.get<Plant[]>(url).pipe(
      map((plants) => plants[0]), // returns a {0|1} element array
      tap((p) => {
        const outcome = p ? 'fetched' : 'did not find';
        this.log(`${outcome} plant id=${id}`);
      }),
      catchError(this.handleError<Plant>('getPlant id=${id}'))
    );
  }

  /** GET plant by id. Will 404 if id not found */
  getPlant(id: number): Observable<Plant> {
    const url = `${this.plantsUrl}/${id}`;
    return this.http.get<Plant>(url).pipe(
      tap(_ => this.log(`fetched plant id=${id}`)),
      catchError(this.handleError<Plant>(`getPlant id=${id}`))
    );
  }

    /* GET plants whose name contains search term */

  searchPlants(term: string): Observable<Plant[]> {
    if (!term.trim()) {
      // if not search term, return empty plant array.
      return of([]);
    }
    return this.http.get<Plant[]>
    (`${this.plantsUrl}/?name=${term}`).pipe(
      tap(x => x.length           ?
        this.log(`found plants matching "${term}"`)
          : this.log(`no plants matching "${term}"`)),
      catchError(this.handleError<Plant[]>('searchPlants', []))
    );
  }
  //////// Save methods //////////

  /** POST: add a new plant to the server */
  addPlant(plant: Plant): Observable<Plant> {
    return this.http.post<Plant>(this.plantsUrl, plant, this.httpOptions).pipe(
      tap((newPlant: Plant) => this.log(`added plant w/ id=${newPlant.id}`)),
      catchError(this.handleError<Plant>('addPlant'))
    );
  }

  /** DELETE: delete the plant from the server */
  deletePlant(id: number): Observable<Plant> {
    const url = `${this.plantsUrl}/${id}`;

    return this.http.delete<Plant>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted plant id=${id}`)),
      catchError(this.handleError<Plant>('deletePlant'))
    );
  }

  /** PUT: update the plant on the server */
  updatePlant(plant: Plant): Observable<any> {
    return this.http.put(this.plantsUrl, plant, this.httpOptions).pipe(
      tap((_) => this.log(`updated plant id=${plant.id}`)),
      catchError(this.handleError<any>('updatePlant'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a PlantService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PlantService: ${message}`);
  }


}

