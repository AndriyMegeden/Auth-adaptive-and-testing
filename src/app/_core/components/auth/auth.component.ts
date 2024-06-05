import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { isPlatform } from '@ionic/angular';
import { AuthService } from '@core/auth-service/services/auth.service';
import { HttpErrorService } from '@core/auth-service/services/http-error.service';

import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { FacebookLogin, FacebookLoginResponse } from '@capacitor-community/facebook-login';
import {
  SignInWithApple,
  SignInWithAppleResponse,
  SignInWithAppleOptions,
} from '@capacitor-community/apple-sign-in';

import { environment } from '@environments/environment';
import { loginSetting, registerSetting } from '@static/auth.settings';
import { AuthSettings, AuthType } from '@interfaces/auth.interface';
import { ToastService } from '@services/general/toast.service';
import { SharedModule } from '@theme/shared.module';

// type LoginType = 'local' | 'social';
// type SocialProvider = 'google' | 'facebook' | 'apple';
// type ChangeFormPages = 'forgot-password-step-1' | 'forgot-password-step-2' | 'forgot-password-step-3';

isPlatform
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [SharedModule],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {

  public page: AuthType = 'login';
  public resetEmail: string = '';
  public resetId: string = '';
  public resetSecret: string = '';
  
  public currentMode: AuthSettings;
  public form: FormGroup;

  public socials: Array<string> = ['google', 'facebook'];

  constructor(
    protected router: Router,
  ) { }

  ngOnInit() {}

  createForm() {
    const formControlsConfig = {};
    this.currentMode.fields.forEach(field => {
      formControlsConfig[field.fieldId] = new FormControl(field.value, field.validators);
    });

    if(this.currentMode.checkboxes && this.currentMode.checkboxes.length){
      this.currentMode.checkboxes.forEach(checkbox => {
        formControlsConfig[checkbox.checkboxId] = new FormControl(checkbox.checkboxValue, checkbox.validators);
      });
    }

    this.form = new FormGroup(formControlsConfig);
  }

  check(type: 'sections', id: string){
    if(type === 'sections'){
      if(this.currentMode.sections.includes(id)){
        return true;
      } else {
        return false;
      }
    }
  }

  navigate(route: string){
    this.router.navigateByUrl(route)
  }

  async signInWithGoogle() {
    let googleUser = await GoogleAuth.signIn();
    return {
      page: this.page,
      type: 'social',
      provider: 'google',
      data: googleUser,
    }
  }

  getAction(provider){
    console.log(provider);
    
  }

  async signInWithFB() {
    const result = await (<FacebookLoginResponse><unknown>(
      FacebookLogin.login({ permissions: environment.facebookPermissions })
    ));
    if (result.accessToken) {
      const accessToken = result.accessToken.token;
      console.log(`Facebook access token is ${accessToken}`);
      const facebookUser = await FacebookLogin.getProfile<{
        email: string;
      }>({ fields: ['email'] });
      console.log(facebookUser);
      return {
        page: this.page,
        type: 'social',
        provider: 'facebook',
        data: {
          accessToken: accessToken,
          ...facebookUser
        }
      }
    }
  }

  async signInWithApple(){
    let options: SignInWithAppleOptions = {
      clientId: 'bebest.petrishin.com',
      redirectURI: 'https:/localhost:8100/main',
      scopes: 'email name',
      state: '12345',
      nonce: 'nonce',
    };
    
    SignInWithApple.authorize(options)
      .then((result: SignInWithAppleResponse) => {
        console.log('success');
        console.log(result);
        return {
          page: this.page,
          type: 'social',
          provider: 'apple',
          data: {
            accessToken: result.response.identityToken,
            authorizationCode: result.response.authorizationCode,
            email: result.response.email,
            id: result.response.user
          }
        }
      })
      .catch(error => {
        console.log('error');
        console.log(error);
      });
  }

  getError(){
    if(this.form.controls.password && this.form.controls.repeatPassword){
      if(this.form.controls.password.value === this.form.controls.repeatPassword.value){
        return false
      }
      else{
        return true;
      }
    }
    else{
      false
    }
  }

  getForm(){}

}
