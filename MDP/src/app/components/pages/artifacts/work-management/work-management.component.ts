import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artifact } from '../../../../models/artifacts/artifact';
import { WorksService } from '../../../../services/works.service';

@Component({
  selector: 'mdp-work-management',
  templateUrl: './work-management.component.html',
  styleUrl: './work-management.component.scss'
})

export class WorkManagementComponent implements OnInit {
  works: Artifact[] = [];
  searchTerm: string = '';

  constructor(private worksService: WorksService, private router: Router) {}

  ngOnInit(): void {
  }

  SearchWorks(): void {
    this.worksService.Search(this.searchTerm).subscribe((data) => {
      this.works = data;
    });
  }

  NavigateToCreateWork(): void {
    this.router.navigate(['/create-work']);
  }

  NavigateToUpdateWork(id: number): void {
    this.router.navigate([`/update-work/${id}`]);
  }

  DeleteWork(id: number): void {
    if (confirm('Are you sure you want to delete this work?')) {
      this.worksService.Delete(id).subscribe(() => {
        this.works = this.works.filter((work) => work.id !== id);
      });
    }
  }
}
