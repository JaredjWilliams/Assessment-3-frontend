import { Component, OnInit } from '@angular/core';
import UserInfo from '../models/UserInfo';
import { CompanyService } from '../services/company/company.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddUserComponent } from '../overlays/add-user/add-user.component';

@Component({
  selector: 'app-user-registry',
  templateUrl: './user-registry.component.html',
  styleUrls: ['./user-registry.component.css']
})
export class UserRegistryComponent implements OnInit {

  displayColumns: string[] = ['Name', 'Email', 'Active', 'Admin', 'Status']

  users : UserInfo[] = [];

  constructor (
    private companyService: CompanyService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.users = this.companyService.getUsersFromCompany2Mock()
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '600px';
    dialogConfig.height = '750px';
    this.matDialog.open(AddUserComponent, dialogConfig)
  }

}
