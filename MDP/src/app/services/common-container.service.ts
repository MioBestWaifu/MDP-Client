import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Token } from '../classes/token';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonContainerService {
  user!: User;
  token!:Token;
  // Create a new Subject
  private barToggleSubject = new Subject<boolean>();
  // Expose the observable$ part of the subject (read-only)
  public barToggleEvent = this.barToggleSubject.asObservable();

  constructor() { }

  // Function to emit events
  EmitToggleBar(event: boolean) {
    console.log("Emitting toggle bar event");
    this.barToggleSubject.next(event);
  }
}
