import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import {mainMenuItems} from "../../layouts/main/menu.items";
import {FuseNavigationService} from "../../../../@fuse/components/navigation";
import { FuseNavigationItem } from '@fuse/components/navigation';
import { filter } from 'rxjs/operators'


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit{

  breadCrumbsNavigation: FuseNavigationItem[] = mainMenuItems;
  constructor(
      private router: Router,
      private _navigationService: FuseNavigationService) {
   this.createBreadCrumb(this.router.url)

  }

  createBreadCrumb(activeRouteLink: string) {
    const currentPath:number[] = this._navigationService.getPathOfActiveElement(activeRouteLink, mainMenuItems )
    // For get nested node
    let current = null

    // Need for avoid duplication of navigation
    const indexesForDelete:number[] = []

    const copyOfMenuItems = JSON.parse(JSON.stringify(mainMenuItems))

    // Get node which is required
    this.breadCrumbsNavigation = currentPath.map((item, idx): FuseNavigationItem => {
      const  currentPos = current
      indexesForDelete.push(item)
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

    //this.deleteChildDuplicate(indexesForDelete)
  }

  deleteChildDuplicate(indexesForDelete: number[]) {
    this.breadCrumbsNavigation.forEach((item, idx) => {
      if (indexesForDelete[idx] !== null && indexesForDelete[idx] !== undefined){
        item.children.splice(indexesForDelete[idx], 1)
      }
    })
  }

  ngOnInit(): void {
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd))
        .subscribe((event:NavigationEnd) => {
          this.createBreadCrumb(event.urlAfterRedirects)
        });
  }
}
