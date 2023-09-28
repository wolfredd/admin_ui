import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { faBell, faSignOut } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  className = "p-3 mx-4 text-gray-500 cursor-pointer rounded-md hover:bg-[#150050] hover:text-gray-50 transition duration-100 hover:duration-300 hover:ease-in ease-out"
  
  iconSignOut = faSignOut
  iconBell = faBell

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

}
