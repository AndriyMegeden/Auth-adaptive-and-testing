import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  
  constructor(private toastController: ToastController){
    
  }

  async showSuccessToast(message: string){
    const toast = await this.toastController.create({
        message: message,
        duration: 2000, // Duration in milliseconds
        position: 'bottom', // Position: top, middle, bottom
        color: 'success', // Color: primary, secondary, success, warning, danger, light, medium, dark
        buttons: [
          {
            text: 'Close',
            role: 'cancel',
            handler: () => {
              console.log('Close clicked');
            },
          },
        ],
      });
      toast.present()
  }

  async showErrorToast(message: string){
    const toast = await this.toastController.create({
        message: message,
        duration: 2000, // Duration in milliseconds
        position: 'bottom', // Position: top, middle, bottom
        color: 'danger', // Color: primary, secondary, success, warning, danger, light, medium, dark
        buttons: [
          {
            text: 'Close',
            role: 'cancel',
            handler: () => {
              console.log('Close clicked');
            },
          },
        ],
      });
      toast.present()
  }

}
