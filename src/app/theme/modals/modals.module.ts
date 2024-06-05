import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgxTranslateModule } from "@core/plugins/ngx-translate/ngx-translate.module";
import { CustomModalComponent } from "./custom-modal/custom-modal.component";
import { NgxScannerQrcodeModule } from "ngx-scanner-qrcode";

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      IonicModule,
      NgxTranslateModule,
      NgxScannerQrcodeModule,
    ],
    declarations: [
        CustomModalComponent
    ],
    exports: [
        CustomModalComponent
    ]
})
export class ModalsModule {}
  