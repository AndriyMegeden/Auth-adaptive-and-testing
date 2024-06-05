import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorService } from '@core/auth-service/services/http-error.service';
import { ModalService } from '@services/general/modal.service';
import { RestService } from '@services/general/rest.service';
import { ToastService } from '@services/general/toast.service';
import { SharedModule } from '@theme/shared.module';
import { LOAD_WASM, NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

LOAD_WASM().subscribe();

@Component({
  selector: 'app-my-qr-center',
  templateUrl: './my-qr-center.component.html',
  styleUrls: ['./my-qr-center.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class MyQrCenterComponent  implements OnInit {

  public form: FormGroup;

  constructor(
    private rest: RestService,
    private httpErrorService: HttpErrorService,
    private toastService: ToastService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      qrCode: new FormControl('', [Validators.required])
    })
  }

  ionViewWillEnter(){}

  async scanQr(){
    await this.modalService.openCustomModal('scanner', null, (code)=> {
      this.form.get('qrCode').setValue(code);
    })
  }

  getForm(){
    this.rest.assignQrCode(this.form.value.qrCode, async (res) => {
      console.log(res);

      await this.toastService.showSuccessToast(res.message);

    }, 
    async (error) => {
      console.log(error);
      // const statusCode = error.error.error.statusCode;
      // await this.toastService.showErrorToast(await this.httpErrorService.getError(statusCode));
      // await this.toastService.showErrorToast(await this.httpErrorService.getError(500));
      await this.toastService.showErrorToast(error.error.error);
    })
  }

}
