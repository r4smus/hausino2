import { Component, OnInit } from '@angular/core';
import { RentalObject } from '../rental-object';
import { Hausino2Service } from '../hausino2.service';

@Component({
  selector: 'app-rental-objects',
  templateUrl: './rental-objects.component.html',
  styleUrls: ['./rental-objects.component.scss']
})
export class RentalObjectsComponent implements OnInit {

  rentalObjects: RentalObject[];

  constructor(private hausino2Service: Hausino2Service) { }

  ngOnInit() {
    this.getRentalObjects();
  }

  getRentalObjects(): void {
    this.hausino2Service.getRentalObjects()
    .subscribe(rentalObjects => this.rentalObjects = rentalObjects);
  }
}
