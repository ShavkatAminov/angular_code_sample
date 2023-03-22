import { Injectable, OnDestroy } from "@angular/core";
import {AbstractControl, FormArray, FormGroup, ValidationErrors} from "@angular/forms";
import { Subscription } from "rxjs";
import { OnSave } from "./interfaces/save-hook";
import {HttpClientService} from "../../service/http/http.client.service";
import {ErrorList} from "./errorList";
import {TranslocoService} from "@ngneat/transloco";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorCodes} from "../../service/http/errorCodes";
import {AlertServiceComponent} from "../../alerts/services/alert.service.component";

@Injectable()
export abstract class BasicForm implements OnDestroy, OnSave {

  form!: FormGroup;
  private subscription$: Subscription = new Subscription();
  protected errorMessages = {};

  public constructor(public http: HttpClientService, public translate: TranslocoService,public alert:AlertServiceComponent) { }


  private validateForm(): void {
    this.form.markAllAsTouched();
  }

  beforeSave(): void {
    this.request.body = this.form.value;
  }

  onValidError(): void{ }

  saveCallback(result: Object): void { }

  errorCallback(error: Object): void {
    if(error instanceof HttpErrorResponse) {
      if(error.status === ErrorCodes.BAD_REQUEST) {
        Object.keys(error.error).forEach(key => {
          this.form.get(key)?.setErrors({
            error: true,
          })
          if(!this.errorMessages.hasOwnProperty(key)) {
            this.errorMessages[key] = error.error[key];
          }
          else {
            this.errorMessages[key] += error.error[key] + ',';
          }
        })
      }
      this.alert.error(error.status+ ': ' +  error.statusText + '.\n '+error.error.detail,{
        autoClose:true,
        keepAfterRouteChange:false
      })
    }
  }

  afterSave(): void {
    if (this.request.id){
      this.alert.success('ALERT.EDIT_SUCCESS',{
        autoClose:true,
        keepAfterRouteChange:false
      })
    }else {
      this.alert.success('ALERT.SAVE_SUCCESS',{
        autoClose:true,
        keepAfterRouteChange:false
      })
    }

  }

  request: any;

  getMethod() {
    if(this.request.id) {
      return "put";
    }
    else {
      return "post";
    }
  }

  private sendRequest(): void {
    this.subscription$.add(this.http
        .request(this.request, this.getMethod())
        .subscribe({
          next: (v) => this.saveCallback(v),
          error: (e) => this.errorCallback(e),
          complete: () => this.afterSave()
        }));
  }

  public saveProcess() {

    this.beforeSave();
    this.validateForm();
    if (this.form?.valid || this.form == null) {
      this.sendRequest();
    }
    if(!this.form?.valid){
      this.onValidError();
    }
  }



  showError(formControlName: string): boolean {
    let formControl = this.form.get(formControlName);
    return formControl!.status == 'INVALID' && formControl!.touched;
  }

  errorMessage(formControlName: string) {
    let formControl = this.form.get(formControlName);
    let result = "";
    if(this.showError(formControlName)) {
      const controlErrors: ValidationErrors = formControl.errors;
      if(controlErrors) {
        Object.keys(controlErrors).forEach(key => {
          if(key === 'error') {
            result += this.errorMessages[formControlName];
          }
          else {
            result += this.translate.translate('ERROR_LIST.' + ErrorList[key], controlErrors[key]);
          }
        })
      }
    }
    return result;
  }

  getFormValidationErrors(controls: any, prefix: string = '') {
    let result: any[] = [];
    Object.keys(controls).forEach(key => {
      let control = controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) {
        result = [...result, ...this.getFormValidationErrors(control.controls, prefix + key)];
      }
      else {
        const controlErrors: any = this.form.get((prefix ? prefix + '.' : '') + key)?.errors;
        if (controlErrors) {
          Object.keys(controlErrors).forEach(keyError => {
            result.push({
              'control': key + ' - ' + prefix,
              'error': keyError,
              'value': controlErrors[keyError],
              'input_value': this
            });
          });
        }
      }
    });
    return result;
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}

export interface FormGroupControls {
  [key: string]: AbstractControl;
}
