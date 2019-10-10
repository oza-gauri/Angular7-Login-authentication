import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any;
  constructor(private authService: AuthService, private router: Router, private dataService: DataService) { }
// Method to fetch data
  ngOnInit() {
    this.dataService.getUsers().subscribe((data:any) => {             
      this.users = data            
    });
  }
  // Logout Function
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
