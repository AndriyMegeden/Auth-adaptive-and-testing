import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgxTranslateModule } from "src/app/_core/plugins/ngx-translate/ngx-translate.module";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ScrollTopButtonComponent } from "./scroll-top-button/scroll-top-button.component";
import { GoUpComponent } from "./go-up/go-up.component";
import { MobileMenuComponent } from "./mobile-menu/mobile-menu.component";
@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      IonicModule,
      NgxTranslateModule
    ],
    declarations: [
      HeaderComponent,
      FooterComponent,
      ScrollTopButtonComponent,
      GoUpComponent,
      MobileMenuComponent
    ],
    exports: [
      NgxTranslateModule,
      HeaderComponent,
      FooterComponent,
      ScrollTopButtonComponent,
      GoUpComponent,
      MobileMenuComponent
    ]
})
export class ParticalsModule {}
  