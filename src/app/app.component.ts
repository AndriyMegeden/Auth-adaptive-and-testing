import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { FacebookLogin } from '@capacitor-community/facebook-login';
import { SplashScreen } from '@capacitor/splash-screen'
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { LocalStorageService } from '@core/auth-service/services/localstorage.service';
import { environment } from '@environments/environment';
import { LoadingController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  private currentLang: string;
  private loading: HTMLIonLoadingElement;
  public showContent: boolean = true;

  constructor(
    private platform: Platform,
    private translate: TranslateService,
    private localStorage: LocalStorageService,
    private loadingCtrl: LoadingController,
    private router: Router,
  ) {
    this.router.events.subscribe(async (data) => {
      if (data instanceof RoutesRecognized) {
        if(data.state.root.firstChild.data.loader){
          await this.initLoading();
        }
      }
    });
    this.initializeApp();
  }
  async initLanguages(){
    this.translate.addLangs(environment.languages.available);
    const platformLang = window.navigator.language.split('-')[0];
    const storageLang = await this.localStorage.getCurrentLanguage();
    environment.languages.available.forEach(lang => {
      this.translate.reloadLang(lang)
    });
    if(!storageLang){
      if(environment.languages.available.includes(platformLang)){
        this.currentLang = platformLang;
        this.translate.use(this.currentLang);
      }
      else{
        this.currentLang = environment.languages.default;
        this.translate.use(this.currentLang);
      }
    }
    else{
      this.translate.use(storageLang);
    }
  }

  initGoogle(){
    this.platform.ready().then(() => {
      GoogleAuth.initialize({
        scopes: ["profile", "email"],
        clientId: environment.googleClientId,
      })
    })
  }

  initFacebook(){
    this.platform.ready().then(async () => {
      await FacebookLogin.initialize({ appId: environment.facebookCLientId });
    })
  }

  async initLoading() {
    if(environment.production){
      this.showContent = false;
      this.loading = await this.loadingCtrl.create({
        cssClass: 'loading'
      });
      
      await this.loading.present();
      timer(300).subscribe(async () => {
        this.showContent = true;
        await this.loading.dismiss()
      })
    }
  }

  initializeApp() {
    /* To make sure we provide the fastest app loading experience
       for our users, hide the splash screen automatically
       when the app is ready to be used:

        https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
    */
    // this.initNotifications()
    this.initLanguages();
    this.initGoogle()
    this.initFacebook();
    SplashScreen.hide();
  }
}
