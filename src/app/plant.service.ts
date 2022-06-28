import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Plant } from './models/Plant';
import { MessageService } from './message.service';
import { environment } from 'src/environments/environment';

interface PlantsResponse {
  plants:Plant[];
  }

  interface PlantResponse {
  plant:Plant;
  }

  interface NewPlant{
name:string;
  }
const plantsEndpoint=`${environment.baseApiUrl}/plants`

const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({ providedIn: 'root' })
export class PlantService {




  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /** GET plants from the server */
 getPlants() {
    return this.http.get<PlantsResponse>(plantsEndpoint)
  }



  /** GET plant by id. Will 404 if id not found */
  getPlant(id: number) {
    const url = `${plantsEndpoint}/${id}`;
    return this.http.get<PlantResponse>(url)
  }

    /* GET plants whose name contains search term */

  searchPlants(term: string) {
    if (!term.trim()) {
      // if not search term, return empty plant array.
      return of([]);
    }
    return this.http.get<PlantsResponse>
    (`${plantsEndpoint}/?name=${term}`)
  }
  //////// Save methods //////////

  /** POST: add a new plant to the server */
  addPlant(plant: Plant) {

    return this.http.post<PlantResponse>(plantsEndpoint, plant)

  }

  /** DELETE: delete the plant from the server */
  deletePlant(id: number){
    const url = `${plantsEndpoint}/${id}`;

    return this.http.delete<PlantResponse>(url,httpOptions)
  }

  /** PUT: update the plant on the server */
  updatePlant(plant: Plant) {
    return this.http.put(plantsEndpoint, plant, httpOptions)
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

  genId(plants: Plant[]): number {
    return plants.length > 0 ? Math.max(...plants.map(plant => plant.id)) + 1 : 11;
  }
}

