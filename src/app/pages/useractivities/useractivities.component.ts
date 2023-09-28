import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/models/Stock';
import { StockService } from 'src/app/services/stock.service';
import { faBell, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Activity } from 'src/app/models/Activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-useractivities',
  templateUrl: './useractivities.component.html',
  styleUrls: ['./useractivities.component.css']
})
export class UseractivitiesComponent {

  userId:number = 0;
  activities: Activity[] = []

  constructor(private activityService: ActivityService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {console.log(params); // { orderby: "price" }
        this.userId = params['userId'];
        console.log(this.userId); // price
      }
    );
    this.activityService.getAllUsersActivities(this.userId).subscribe(value => {this.activities = value})
  }

  viewActivitiess(userId : number){
    this.activityService.getAllUsersActivities(userId).subscribe(value => {this.activities = value})
    
  }

  className = "p-3 mx-4 text-gray-500 cursor-pointer rounded-md hover:bg-[#150050] hover:text-gray-50 transition duration-100 hover:duration-300 hover:ease-in ease-out"
  
  iconSignOut = faSignOut
  iconBell = faBell

}


