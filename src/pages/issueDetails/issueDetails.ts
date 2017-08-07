import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'issue-details',
  templateUrl: 'issueDetails.html'
})
export class IssueDetails {

	public event: any = {};
	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
		var dd = new Date;
		this.event = {
			month: dd.getFullYear() + '-' + (dd.getMonth()+1) + '-' + dd.getDate(),
			timeStarts: dd.getHours() + ':' + dd.getMinutes()
		}
	}

	gotoHome(){
		this.navCtrl.pop();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Thank You!',
      subTitle: 'Your complaint has been successfully registered. Your complaint ID: 785649',
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          handler: () => {
            this.navCtrl.push(HomePage)
          }
        }
      ]
    });
    alert.present();
  }
}
