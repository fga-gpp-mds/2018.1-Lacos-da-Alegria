import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { LocalUser } from '../../models/local-user';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { RestUserProvider } from '../../providers/rest-user';
import { StorageService } from '../../providers/storage.service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = { username:'', password:''}
  constructor(public alertCtrl: AlertController, public navController: NavController,  public restProvider: RestUserProvider, public storage: StorageService) {

  }

  register(){
    this.navController.push(RegisterPage);
  }
  // userLogin(){
  //   this.restProvider.userLogin(this.user).then((result) => {
  //     console.log(result);
  //     // let header = result;
  //     // console.log(header);
  //     this.navController.push(HomePage);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }
  userLogin() {
    this.restProvider.authenticate(this.user)
      .subscribe(response => {
        //this.restProvider.successfulLogin(response.headers.get('Authorization'));
        // console.log(response.body);
        // let data: LocalUser  = {
        //   refreshToken:'',
        //   accessToken:'',
        //   username:'',
        // };
        let refreshToken = response.body.substr(11,209);
        let accessToken = response.body.substr(230,207);
        let username = this.user.username;
        console.log('refreeeeesh',refreshToken);
        console.log('acessoooooooo',accessToken);
        console.log('response',response);
        this.storage.setLocalUser(username, accessToken, refreshToken);
        // this.storage.setLocalUser(null);
        // let data2 = this.storage.getLocalUser();
        // console.log('data2 = ', data2);
        // this.navController.push(HomePage);
        this.navController.push(TabsPage);
        

      },
      error => {
        let alert = this.alertCtrl.create({
          title: 'Ops!',
          subTitle: 'Nome de usuário ou senha incorretos!'+
          ' Por favor, verifique seus dados e tente novamente.',
          buttons: ['OK']
        });
        alert.present();
      });
  }

}
