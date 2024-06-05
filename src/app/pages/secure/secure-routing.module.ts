import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurePage } from './secure.page';
import { MyQrCenterComponent } from './my-qr-center/my-qr-center.component';
import { MyArchiveComponent } from './my-archive/my-archive.component';
import { AccessSettingsComponent } from './access-settings/access-settings.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { SupportCenterComponent } from './support-center/support-center.component';

const routes: Routes = [
  {
    path: '',
    component: SecurePage,
    children: [
      {
        path: 'my-archive',
        component: MyArchiveComponent
      },
      {
        path: 'access-settings',
        component: AccessSettingsComponent
      },
      {
        path: 'my-qr-center',
        component: MyQrCenterComponent
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent
      },
      {
        path: 'support-center',
        component: SupportCenterComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurePageRoutingModule {}
