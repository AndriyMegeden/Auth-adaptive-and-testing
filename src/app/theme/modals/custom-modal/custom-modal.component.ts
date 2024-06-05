import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CustomModalConfig, CustomModalConfigType } from '@interfaces/modal.interface';
import { LoadingController } from '@ionic/angular';
import { timer } from 'rxjs';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomModalComponent  implements OnInit {

  private loading: HTMLIonLoadingElement;
  public hidden: boolean = true;

  @Input() type: CustomModalConfigType = 'custom';
  @Input() config: CustomModalConfig | null;
  

  @Output() resolveEvent = new EventEmitter()
  @Output() rejectEvent = new EventEmitter();

  constructor(private loadingCtrl: LoadingController) {}

  async ngOnInit() {
    if(this.type === 'scanner'){
      await this.initLoading()
    }
  }

  resolve(){
    this.resolveEvent.emit()
  }

  close(){
    this.rejectEvent.emit()
  }

  onScanSuccess(event){
    const value = event[0].value;
    const parts = value.split('/');
    const code = parts[3];
    this.resolveEvent.emit(code)
  }

  async initLoading() {
      this.loading = await this.loadingCtrl.create({
        cssClass: 'loading'
      });
      
      await this.loading.present();
      timer(1500).subscribe(() => {
        this.hidden = false;
        this.loading.dismiss()
      })
  }
}
  
