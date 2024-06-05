import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SecurePageRoutingModule } from './secure-routing.module';

import { SecurePage } from './secure.page';
import { ParticalsModule } from '@theme/particals/particals.module';
import { LayoutsModule } from '@theme/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecurePageRoutingModule,
    ParticalsModule,
    LayoutsModule
  ],
  declarations: [SecurePage]
})
export class SecurePageModule {}
