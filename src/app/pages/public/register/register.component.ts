import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Langs } from '@core/auth-service/dto/user.dto';
import { AuthService } from '@core/auth-service/services/auth.service';
import { HttpErrorService } from '@core/auth-service/services/http-error.service';
import { AuthComponent } from '@core/components/auth/auth.component';
import { AuthType } from '@interfaces/auth.interface';
import { TranslateService } from '@ngx-translate/core';
import { ModalService } from '@services/general/modal.service';
import { ToastService } from '@services/general/toast.service';
import { registerSetting } from '@static/auth.settings';
import { registerModal } from '@static/modal.settings';
import { SharedModule } from '@theme/shared.module';

@Component({
  selector: 'app-register',
  templateUrl: '../../../_core/components/auth/auth.component.html',
  styleUrls: ['../../../_core/components/auth/auth.component.scss'],
  standalone: true,
  imports: [SharedModule],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent extends AuthComponent implements OnInit {

  public page: AuthType = 'register';

  constructor(
    protected router: Router,
    private authService: AuthService,
    private httpErrorService: HttpErrorService,
    private toastService: ToastService,
    private translate: TranslateService,
    private modalService: ModalService
    ) {
    super(router);
  }

  async ngOnInit() {
    this.page = 'register';
    this.currentMode = registerSetting;
    this.createForm();
  }

  async getForm(){
    const data = {
      type: 'local',
      provider: null,
      values: this.form.value
    }
    this.authService.createUser({
      email: data.values.email,
      password: data.values.password,
      lang: this.translate.currentLang as Langs,
    }, 
    async (result) => {
      await this.modalService.openCustomModal('custom', registerModal, ()=> {
        this.router.navigateByUrl('/login')
      }, 
      () => {
        this.router.navigateByUrl('/login')
      })
  
    }, 
    async (error) => {
      console.log(error.error);
      // const statusCode = error.error.error.statusCode;
      // await this.toastService.showErrorToast(await this.httpErrorService.getError(statusCode));
      // await this.toastService.showErrorToast(await this.httpErrorService.getError(500));
      await this.toastService.showErrorToast(error.error.email);
      
    })
  }

  
}
