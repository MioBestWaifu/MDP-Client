import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'mdp-badge-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './badge-list.component.html',
  styleUrl: './badge-list.component.scss'
})
export class BadgeListComponent {
  @Input() itens: [] = [];
}
