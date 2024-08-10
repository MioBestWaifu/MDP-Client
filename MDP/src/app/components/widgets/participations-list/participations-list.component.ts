import { Component, Input } from '@angular/core';
import { IParticipation } from '../../../models/iparticipation';

@Component({
  selector: 'mdp-participations-list',
  templateUrl: './participations-list.component.html',
  styleUrl: './participations-list.component.scss'
})
export class ParticipationsListComponent {
  @Input() participations!: IParticipation[];
  @Input() useArtifact: boolean = false;
  @Input() route!: string;

  trackBy(index: number, item: IParticipation):any{
    if (this.useArtifact){
      return item.artifact!.id;
    } else {
      return item.participant!.id;
    }
  }

  determineRoute(participation:IParticipation):string{
    let route = '';
    if (this.useArtifact){
      route = `/${participation.artifact!.media.name.toLowerCase()}/${participation.artifact!.id}`;
    } else {
      route = `/${this.route}/${participation.participant!.id}`;
    }
    return route;
  }
}
