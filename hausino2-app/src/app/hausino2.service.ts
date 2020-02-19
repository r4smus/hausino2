import { Injectable } from '@angular/core';
import { RentalObject } from './rental-object';
import { Observable, of } from 'rxjs';
import { RENTAL_OBJECTS } from './mock-rental-objects'

@Injectable({
  providedIn: 'root'
})
export class Hausino2Service {


  /** GET heroes from the server */
  getRentalObjects (): Observable<RentalObject[]> {
    return of(RENTAL_OBJECTS);
  }

}
