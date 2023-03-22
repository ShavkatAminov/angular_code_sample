import {Injectable, OnInit} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {Alert} from "../helpers/alert";
import {filter} from "rxjs/operators";
import {AlertOptions} from "../helpers/alert.options";
import {AlertType} from "../helpers/alert.type";

@Injectable({providedIn: 'root'})
export class AlertServiceComponent {
    private subject = new Subject<Alert>();
   public defaultId = 'default-alert';

    // enable subscribing to alerts observable
    onAlert(id = this.defaultId): Observable<Alert> {
        return this.subject.asObservable().pipe(filter(x => x && x.id === id));
    }

    // convenience methods
    success(message: string, options?: AlertOptions) {
        this.alert(new Alert({...options,type: AlertType.Success, message}));
    }

     error(message: string, options?: AlertOptions) {
        this.alert(new Alert({...options, type: AlertType.Error, message}));
    }

     info(message: string, options?: AlertOptions) {
        this.alert(new Alert({...options, type: AlertType.Info, message}));
    }

     warn(message: string, options?: AlertOptions) {
        this.alert(new Alert({...options, type: AlertType.Warning, message}));
    }

    // main alert method
    alert(alert: Alert) {
        alert.autoClose =true
        alert.keepAfterRouteChange = false
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert)

    }

    // clear alerts
    clear(id = this.defaultId) {
        this.subject.next(new Alert({id}));
    }
}