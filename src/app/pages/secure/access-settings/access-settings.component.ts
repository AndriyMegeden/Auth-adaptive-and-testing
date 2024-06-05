import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@theme/shared.module';

@Component({
  selector: 'app-access-settings',
  templateUrl: './access-settings.component.html',
  styleUrls: ['./access-settings.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class AccessSettingsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
