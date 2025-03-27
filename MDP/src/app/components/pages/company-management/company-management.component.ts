import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Company } from "../../../models/companies/company";
import { CompaniesService } from "../../../services/companies.service";

@Component({
  selector: 'mdp-company-management',
  templateUrl: './company-management.component.html',
  styleUrl: './company-management.component.scss'
})

export class CompanyManagementComponent{
  companies: Company[] = [];
  searchTerm: string = '';

  constructor(private companiesService: CompaniesService, private router: Router) {}

  SearchCompanies(): void {
    this.companiesService.Search(this.searchTerm).subscribe((data) => {
      this.companies = data;
    });
  }

  NavigateToCreateCompany(): void {
    this.router.navigate(['/create-company']);
  }

  NavigateToUpdateCompany(id: number): void {
    this.router.navigate([`/update-company/${id}`]);
  }

  DeleteCompany(id: number): void {
    if (confirm('Are you sure you want to delete this company?')) {
      this.companiesService.Delete(id).subscribe(() => {
        this.companies = this.companies.filter((company) => company.id !== id);
      });
    }
  }
}
