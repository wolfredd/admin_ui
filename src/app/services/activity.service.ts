import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Env } from '../utilities/environment';
import parseResponse from '../utilities/helpers/response-parser';
import { Activity } from '../models/Activity';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  

  constructor(private http: HttpClient) { }

  getAllActivities(){
    const url = 'http://localhost:8083/activity/getallactivities'

    console.log(this.http.get<Activity[]>(url));

    return this.http.get<Activity[]>(url);

  }

  getAllUsersActivities(userId: number){
    const url = `http://localhost:8083/activity/viewclientsactivities/${userId}`

    console.log(this.http.get<Activity[]>(url));

    return this.http.get<Activity[]>(url);

  }

}
