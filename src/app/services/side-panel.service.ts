import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SidePanelDetails } from './model/side-panel-details.type';

@Injectable({
  providedIn: 'root'
})
export class SidePanelService {

  intialSidePanelDetails: SidePanelDetails = {
    start: 0,
    end: 10000,
    productName: "",
    rating: [1]
  };

  sidePanelSubject = new BehaviorSubject(this.intialSidePanelDetails);
  sidePanelObservable = this.sidePanelSubject.asObservable();

  updateProductDetails(details: SidePanelDetails) {
    this.sidePanelSubject.next(details);
  }
  
}
