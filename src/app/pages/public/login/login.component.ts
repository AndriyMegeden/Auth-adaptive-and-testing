import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/auth-service/services/auth.service';
import { HttpErrorService } from '@core/auth-service/services/http-error.service';
import { AuthComponent } from '@core/components/auth/auth.component';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from '@services/general/toast.service';
import { loginSetting } from '@static/auth.settings';
import { SharedModule } from '@theme/shared.module';

@Component({
  selector: 'app-login',
  templateUrl: '../../../_core/components/auth/auth.component.html',
  styleUrls: ['../../../_core/components/auth/auth.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class LoginComponent extends AuthComponent  implements OnInit {
  
  constructor(
    protected router: Router,
    private authService: AuthService,
    private httpErrorService: HttpErrorService,
    private toastService: ToastService,
    private translateService: TranslateService,
    ) {
    super(router);
  }

  ngOnInit() {
    this.page = 'login';
    this.currentMode = loginSetting;
    this.createForm();
  }

  async getForm(){
    const data = {
      type: 'local',
      provider: null,
      values: this.form.value
    }
    this.authService.login({
      username: data.values.email,
      password: data.values.password,
    }, 
    async (result) => {
      this.router.navigateByUrl('/cabinet/my-qr-center')
    }, 
    async (error) => {
      console.log(error);
      // const statusCode = error.error.error.statusCode;
      // await this.toastService.showErrorToast(await this.httpErrorService.getError(statusCode));
      // await this.toastService.showErrorToast(await this.httpErrorService.getError(500));
      await this.toastService.showErrorToast(error.error.error_description);
    })
  }

}
