import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgxTranslateModule } from "@core/plugins/ngx-translate/ngx-translate.module";
import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";
import { MenuLayoutComponent } from "./menu-layout/menu-layout.component";
import { CardLayoutComponent } from "./card-layout/card-layout.component";

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      IonicModule,
      NgxTranslateModule,
    ],
    declarations: [
      AuthLayoutComponent,
      MenuLayoutComponent,
      CardLayoutComponent
    ],
    exports: [
      AuthLayoutComponent,
      MenuLayoutComponent,
      CardLayoutComponent
    ]
})
export class LayoutsModule {}
  