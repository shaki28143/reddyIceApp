import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'issue-details',
  templateUrl: 'issueDetails.html'
})
export class IssueDetails {
	
	public event: any = {};
	constructor(public navCtrl: NavController) {
		var dd = new Date;
		this.event = {
			month: dd.getFullYear() + '-' + (dd.getMonth()+1) + '-' + dd.getDate(),
			timeStarts: dd.getHours() + ':' + dd.getMinutes()
		}
	}
}
