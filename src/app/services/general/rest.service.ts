import { Injectable } from "@angular/core";
import { RestApiService } from "@core/auth-service/services/rest-api.service";

@Injectable({
    providedIn: 'root'
})
export class RestService extends RestApiService {

    protected getQrCodeRequest = '/qr-code/';
    protected assignQrCodeRequest = '/assign/';

    getQrCode(id: number, resFn, errFn){
        this.get(true, `${this.getQrCodeRequest}/${id}/png`, {}, {}, resFn, errFn)
    }

    assignQrCode(id: number, resFn, errFn){
        this.post(true, this.assignQrCodeRequest, {}, {qr_code: id}, resFn, errFn)
    }

}