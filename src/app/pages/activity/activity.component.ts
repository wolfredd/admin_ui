import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faBell, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Activity } from 'src/app/models/Activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit{

  activities: Activity[] = []

  constructor(private activityservice: ActivityService, private router: Router) {}
  ngOnInit(): void {
    this.activityservice.getAllActivities().subscribe(value => {this.activities = value});
    console.log(this.activities);    
  }

  className = "p-3 mx-4 text-gray-500 cursor-pointer rounded-md hover:bg-[#150050] hover:text-gray-50 transition duration-100 hover:duration-300 hover:ease-in ease-out"
  
  iconSignOut = faSignOut
  iconBell = faBell

  viewActivities(userId: number) {
    console.log("Searching for user's activities...")

    // this.portfolioComponent.viewPortfolios(clientId);

    this.router.navigate([`/useractivities/${userId}`] );
    
    };

}
