import { Component, Input } from '@angular/core';
import { Accessory } from '../../../models/artifacts/accessory';

@Component({
  selector: 'mdp-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrl: './genre-list.component.scss'
})
export class GenreListComponent {
  @Input() categories: Accessory[] = [];
}
