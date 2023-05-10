import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {AvailableItems} from 'app/core/navigation/navigation.types';
import {HttpClientService} from "@shared/helpers/service/http/http.client.service";
import {UserManagementFormRequest} from "@app/modules/user-management/basic/UserManagementFormRequest";
import {UserManagementApiUrls} from "@app/modules/user-management/userManagementApiUrls";
import {LocalService} from "@shared/helpers/service/store/local.service";

@Injectable({
    providedIn: 'root'
})
export class NavigationService
{
    NAVIGATION = "navigation"
    public availableItems: AvailableItems = {
        modules: [],
        resources: []
    };

    /**
     * Constructor
     */
    constructor(
        private http: HttpClientService,
        private local: LocalService)
    {
        let data = null;
        try {
            data = this.local.getData(this.NAVIGATION);
            data = JSON.parse(data);
        }
        catch (e) {
            console.log(e);
        }
        if(data) {
            this.availableItems = data;
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all navigation data
     */
    get(): Observable<any>
    {
        let request = new UserManagementFormRequest(UserManagementApiUrls.RESOURCES_AVAILABLE_RESOURCES);
        return this.http.request(request, 'get').pipe(
            tap((res: AvailableItems) => {
                this.availableItems = res;
                this.local.saveData(this.NAVIGATION, JSON.stringify(res));
            })
        );
    }
}
