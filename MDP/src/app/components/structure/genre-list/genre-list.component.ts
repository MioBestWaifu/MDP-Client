import { Component, Input } from '@angular/core';
import { Category } from '../../../models/accessory/category';

@Component({
  selector: 'mdp-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrl: './genre-list.component.scss'
})
export class GenreListComponent {
  @Input() categories: Category[] = [];
}
