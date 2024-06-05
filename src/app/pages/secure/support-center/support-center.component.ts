import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@theme/shared.module';

@Component({
  selector: 'app-support-center',
  templateUrl: './support-center.component.html',
  styleUrls: ['./support-center.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class SupportCenterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
