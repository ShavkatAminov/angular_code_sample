import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

import { Alert} from './helpers/alert';
import { AlertType } from './helpers/alert.type';
import {AlertServiceComponent} from "./services/alert.service.component";
import {fuseAnimations} from "../../../../@fuse/animations";
@Component({
  selector: 'alert',
  templateUrl: 'alerts.component.html',
  animations: fuseAnimations,
})
export class AlertsComponent implements OnInit, OnDestroy {
  @Input() id = 'default-alert';
  @Input() fade = true;
  isVisible:Boolean = false
  alerts: Alert[] = [];
  alertSubscription!: Subscription;
  routeSubscription!: Subscription;

  constructor(private router: Router, private alertService: AlertServiceComponent) { }

  ngOnInit() {
    // subscribe to new alert notifications
    this.alertSubscription = this.alertService.onAlert(this.id)
        .subscribe(alert => {
          // clear alerts when an empty alert is received
          if (!alert.message) {
            // filter out alerts without 'keepAfterRouteChange' flag
            this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);

            // remove 'keepAfterRouteChange' flag on the rest
            this.alerts.forEach(x => delete x.keepAfterRouteChange);
            return;
          }

          // add alert to array
          this.alerts.push(alert);

          // auto close alert if required
          if (alert.autoClose) {
            this.isVisible =true
            setTimeout(() => this.removeAlert(alert), 2000);
            this.isVisible = false

          }
        });

    // clear alerts on location change
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.alertService.clear(this.id);
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeAlert(alert: Alert) {
    // check if already removed to prevent error on auto close
    if (!this.alerts.includes(alert)) return;

    // fade out alert if this.fade === true
    const timeout = this.fade ? 250 : 0;
    alert.fade = this.fade;

    setTimeout(() => {
      // filter alert out of array
      this.alerts = this.alerts.filter(x => x !== alert);
    }, timeout);
  }

  cssClass(alert: Alert) {
    if (!alert) return;

    const classes = ['border-l-8 p-6 my-2 rounded-l-lg'];

    const alertTypeClass = {
      [AlertType.Success]: 'bg-green-200 border-green-500 text-green-700',
      [AlertType.Error]: 'bg-red-200 border-red-500 text-red-700',
      [AlertType.Info]: 'bg-sky-100 border-sky-500 text-sky-700',
      [AlertType.Warning]: 'bg-orange-100 border-orange-500 text-orange-700'
    }

    if (alert.type !== undefined) {
      classes.push(alertTypeClass[alert.type]);
    }

    if (alert.fade) {
      classes.push('fade');
    }

    return classes.join(' ');
  }
}
