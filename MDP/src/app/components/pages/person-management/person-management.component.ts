import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Person } from "../../../models/persons/person";
import { PeopleService } from "../../../services/people.service";

@Component({
  selector: 'mdp-person-management',
  templateUrl: './person-management.component.html',
  styleUrls: ['./person-management.component.scss']
})

export class PersonManagementComponent implements OnInit {
  people: Person[] = [];
  searchTerm: string = '';

  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.LoadPeople();
  }

  LoadPeople(): void {
  }

  SearchPeople(): void {
    this.peopleService.Search(this.searchTerm).subscribe((data) => {
      this.people = data;
    });
  }

  NavigateToCreatePerson(): void {
    this.router.navigate(['/create-person']);
  }

  NavigateToUpdatePerson(id: number): void {
    this.router.navigate([`/update-person/${id}`]);
  }

  DeletePerson(id: number): void {
    if (confirm('Are you sure you want to delete this person?')) {
      this.peopleService.Delete(id).subscribe(() => {
        this.people = this.people.filter((person) => person.id !== id);
      });
    }
  }
}