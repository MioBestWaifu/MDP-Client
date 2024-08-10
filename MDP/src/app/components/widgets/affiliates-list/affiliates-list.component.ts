import { Component, Input } from '@angular/core';
import { CompanyPerson } from '../../../models/companies/company-person';

@Component({
  selector: 'mdp-affiliates-list',
  templateUrl: './affiliates-list.component.html',
  styleUrl: './affiliates-list.component.scss'
})
export class AffiliatesListComponent {
  @Input() relations: CompanyPerson[] = [];
  //Por padrão, esse componente é da perspectiva da compania.
  @Input() useCompany: boolean = false;

  determineRoute(index:number):string{
    let route = '';
    if (this.useCompany){
      route = `/company/${this.relations[index]!.company!.id}`;
    } else {
      route = `/person/${this.relations[index]!.person!.id}`;
    }
    return route;
  }
}
