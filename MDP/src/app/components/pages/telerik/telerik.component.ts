import { Component } from '@angular/core';
import { Person } from '../../../models/persons/person';
import { Gender } from '../../../models/gender';

@Component({
  selector: 'mdp-telerik',
  templateUrl: './telerik.component.html',
  styleUrl: './telerik.component.scss'
})
export class TelerikComponent {
  people:Person[] = [];
  fullName:string = '';
  nickname:string = '';
  gender:Gender = 0;

  constructor(){
  }

  addPerson(){
  }
}
