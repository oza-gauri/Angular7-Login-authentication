import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private dataService: DataService) { }
  ngOnInit() {
  }
  // Logout Function
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
