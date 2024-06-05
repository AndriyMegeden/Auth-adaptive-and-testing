import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { NgxTranslateModule } from "src/app/_core/plugins/ngx-translate/ngx-translate.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LayoutsModule } from "./layouts/layouts.module";
import { RouterModule } from "@angular/router";
import { ModalsModule } from "./modals/modals.module";
@NgModule({
    imports: [
      CommonModule, 
      FormsModule, 
      ReactiveFormsModule, 
      RouterModule,
      IonicModule,
      NgxTranslateModule,
      LayoutsModule,
      ModalsModule,
    ],
    exports: [
      CommonModule, 
      FormsModule, 
      ReactiveFormsModule, 
      RouterModule,
      IonicModule,
      NgxTranslateModule,
      LayoutsModule,
      ModalsModule
    ]
})
export class SharedModule {}
  