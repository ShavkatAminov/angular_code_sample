import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private router: Router) {
    if(!localStorage.getItem("hesh-map-added")) {
      localStorage.setItem("hesh-map-added", "222");
      this.router.navigate(['sign-out']);
    }
  }
  key = "12353513153CDCD313D1C3";

  public saveData(key: string, value: string) {
    localStorage.setItem(key, this.encrypt(value));
  }

  public getData(key: string) {
    if(!localStorage.getItem(key)) {
      return null;
    }
    let data = localStorage.getItem(key);
    return this.decrypt(data);
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }
}
