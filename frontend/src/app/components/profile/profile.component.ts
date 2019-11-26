import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user;
  constructor(private AuthService : AuthService ) { }

  ngOnInit() {

    this.AuthService.getprofile().subscribe(data => {
      if (data.success) {
           this.user = data.user;
      } else {

      }
  });

  }

}
