import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import {mainMenuItems} from "../../layouts/main/menu.items";
import {FuseNavigationService} from "../../../../@fuse/components/navigation";
import { FuseNavigationItem } from '@fuse/components/navigation';
import { filter } from 'rxjs/operators'
import {NavigationService} from "@app/core/navigation/navigation.service";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit{

  breadCrumbsNavigation: FuseNavigationItem[] = mainMenuItems;
  constructor(
      private router: Router,
      private _fuseNavigationService: FuseNavigationService,
      private navigationService: NavigationService
  ) {
    if(environment.production) {
      //this.hideNotAvailableItems(this.breadCrumbsNavigation);
    }
    this.createBreadCrumb(this.router.url)
  }

  hideNotAvailableItems(items: FuseNavigationItem[]): boolean {
    let hidden = true;
    items.forEach(item => {
      if(item.children && this.hideNotAvailableItems(item.children)) {
        item.hidden = true;
      }
      if(item.link && item.link !== '/sign-out') {
        if(!this.navigationService.availableItems.resources.includes(item.link)) {
          item.hidden = true;
        }
        else {
          hidden = false;
        }
      }
      else {
        hidden = false;
      }
    });
    return hidden;
  }

  createBreadCrumb(activeRouteLink: string) {
    const currentPath:number[] = this._fuseNavigationService.getPathOfActiveElement(activeRouteLink, mainMenuItems )
    // For get nested node
    let current = null


    const copyOfMenuItems = JSON.parse(JSON.stringify(mainMenuItems))

    // Get node which is required
    this.breadCrumbsNavigation = currentPath.map((item, idx): FuseNavigationItem => {
      const  currentPos = current
      if (idx === 0) {
        current = copyOfMenuItems[item]
        current.isBreadCrumbs = true
        return current
      } else {
        current = currentPos.children[item]
        currentPos.children[item].isBreadCrumbs = true
        currentPos.children[item].isActive = true
        return currentPos.children[item]
      }
    });

    this.breadCrumbsNavigation = [{
      title: "MENU.MENU",
      type: "collapsable",
      isBreadCrumbs: true,
      children: copyOfMenuItems,
    }, ...this.breadCrumbsNavigation]

  }

  ngOnInit(): void {
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd))
        .subscribe((event:NavigationEnd) => {
          this.createBreadCrumb(event.urlAfterRedirects)
        });
  }
}
