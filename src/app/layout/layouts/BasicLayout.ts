import {ReferenceDropDownRequest} from "@app/modules/reference/basic/ReferenceDropDownRequest";
import {ReferenceApiUrls} from "@app/modules/reference/referenceApiUrls";
import {FormControl} from "@angular/forms";
import {User} from "@app/core/user/user.types";
import {Component, OnInit} from "@angular/core";
import {Subject} from "rxjs";
import {UserService} from "@app/core/user/user.service";
import {AuthService} from "@app/core/auth/auth.service";
import {FuseNavigationService} from "../../../@fuse/components/navigation";
import {
    ModalAutocompleteOpts
} from "@shared/helpers/form/components/het-modal-autocomplete/ModalAutocompleteInterfaces";
import {ReferenceListRequest} from "@app/modules/reference/basic/ReferenceListRequest";
import {UserManagementFormRequest} from "@app/modules/user-management/basic/UserManagementFormRequest";
import {UserManagementApiUrls} from "@app/modules/user-management/userManagementApiUrls";
import {HttpClientService} from "@shared/helpers/service/http/http.client.service";

@Component({
    template: '',
})
export class BasicLayout implements OnInit {
    constructor(
        protected _userService: UserService,
        protected auth: AuthService,
        protected http: HttpClientService,
        protected _fuseNavigationService: FuseNavigationService,
    )
    {
    }

    legalEntityCurrentPeriod = '';
    householdConsumerCurrentPeriod = '';

    coatoOptions: ModalAutocompleteOpts = {
        columns: [
            {
                isPrimary: true,
                isClickable: true,
                type: 'input',
                field: 'code',
                headerName: 'GENERAL.COMPANY',
            },
            {
                type: 'autocomplete',
                options: new ReferenceDropDownRequest(ReferenceApiUrls.COATO_BRANCHES_ALLOWED_COATO_REGIONS_LIST),
                field: 'regionId',
                headerName: 'GENERAL.REGION',
                isFilter: true,
            },
            {
                field: 'code',
                isTable: true,
                isFilter: false,
                headerName: 'GENERAL.CODE',
            },
            {
                field: 'name',
                isTable: true,
                type: 'input',
                headerName: 'GENERAL.NAME',
                isFilter: false,
            },
        ],
        labelWidth: 50,
        returnField: 'code',
        request: new ReferenceListRequest(ReferenceApiUrls.COATO_BRANCHES_ALLOWED_COATO_LIST)
    }

    caoteReuqest = new ReferenceDropDownRequest(ReferenceApiUrls.COATO_BRANCHES_ALLOWED_COATO_LIST)
    isScreenSmall: boolean;
    coatoControl = new FormControl();
    coatoNameControl = new FormControl();
    user: User;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    getUserName() {
        return this.user?.firstName + ' ' +  this.user?.middleName + ' ' + this.user?.lastName
    }

    onCoatoChange(data) {
        if(data) {
            this.coatoNameControl.setValue(data.name);
        } else {
            this.coatoNameControl.setValue(null);
        }
    }

    ngOnInit(): void
    {
        this.user = this._userService._user;
        this.coatoControl.valueChanges.subscribe(value => {
            if(value) {
                this.auth.setCoatoCode(value);
                this.getPeriods();
            }
        })
        this.coatoControl.setValue(this.auth.getCoatoCodeValue());
    }

    getPeriods() {
        let request = new UserManagementFormRequest(UserManagementApiUrls.CURRENT_PERIOD);
        this.http.request(request, 'get').subscribe(res => {
            this.legalEntityCurrentPeriod = res['legalEntityCurrentPeriod'];
            this.householdConsumerCurrentPeriod = res['householdConsumerCurrentPeriod'];
        })

    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
