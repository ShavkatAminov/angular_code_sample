import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, Validators, FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {fuseAnimations} from '@fuse/animations';
import {FuseAlertType} from '@fuse/components/alert';
import {AuthService} from 'app/core/auth/auth.service';
import {BasicForm} from "../../../shared/helpers/form/basic/basic.form";
import {HttpClientService} from "../../../shared/helpers/service/http/http.client.service";
import {TranslocoService} from "@ngneat/transloco";
import {UserManagementFormRequest} from "../../user-management/basic/UserManagementFormRequest";
import {UserManagementApiUrls} from "../../user-management/userManagementApiUrls";
import {AlertServiceComponent} from "../../../shared/helpers/alerts/services/alert.service.component";
import {UserService} from "../../../core/user/user.service";
import { User } from 'app/core/user/user.types';

@Component({
    selector: 'auth-sign-in',
    templateUrl: './sign-in.component.html',
    animations: fuseAnimations
})
export class AuthSignInComponent extends BasicForm implements OnInit {
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    override form: FormGroup;
    showAlert: boolean = false;
    request = new UserManagementFormRequest(UserManagementApiUrls.LOGIN);

    /**
     * Constructor
     */
    constructor(
        public http: HttpClientService,
        public translate: TranslocoService,
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _userService: UserService,
        private _router: Router,
        public alert:AlertServiceComponent
    ) {
        super(http, translate,alert);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.form = new FormGroup({
            login: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void {
        // Return if the form is invalid
        if (this.form.invalid) {
            return;
        }

        this.request.body = this.form.value;
        this.form.disable();
        this.showAlert = false;

        this.http.request(this.request, 'post').subscribe(
            {
                next: (res: any) => {
                    this._authService.accessToken = res.accessToken;
                    this._userService.setToStorage(res);
                    const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
                    this._router.navigateByUrl(redirectURL);

                },
                error: () => {
                    this.form.enable();
                    this.alert.error('Wrong email or password')
                    this.showAlert = true;
                }
            },
        );
    }
}
