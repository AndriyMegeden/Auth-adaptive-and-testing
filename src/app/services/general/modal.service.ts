import { EventEmitter, Injectable } from "@angular/core";
import { CustomModalConfig, CustomModalConfigType } from "@interfaces/modal.interface";
import { ModalController } from "@ionic/angular";
import { CustomModalComponent } from "@theme/modals/custom-modal/custom-modal.component";

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    
    constructor(private modalController: ModalController){}
  
    public async openCustomModal(type: CustomModalConfigType, config: CustomModalConfig | null, resolveFn, rejectEvent?){
      const eventEmitterResolve = new EventEmitter();
      const eventEmitterReject = new EventEmitter();
      const modal = await this.modalController.create({
        component: CustomModalComponent,
        cssClass: 'custom-modal',
        backdropDismiss: false,
        animated: true,
        componentProps: {
          type: type,
          config: config,
          rejectEvent: eventEmitterReject,
          resolveEvent: eventEmitterResolve
        }
      });
  
      eventEmitterResolve.subscribe(res=>{
          resolveFn(res);
          modal.dismiss();
      });
  
      eventEmitterReject.subscribe(res=>{
        if(rejectEvent){
          rejectEvent(res);
        }
        modal.dismiss();
      });
  
      modal.present();
    }
}