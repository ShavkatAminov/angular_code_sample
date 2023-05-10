import {Injectable} from '@angular/core';
import { User } from 'app/core/user/user.types';
import {UserManagementFormRequest} from "@app/modules/user-management/basic/UserManagementFormRequest";
import {UserManagementApiUrls} from "@app/modules/user-management/userManagementApiUrls";
import {HttpClientService} from "@shared/helpers/service/http/http.client.service";
import {Router} from "@angular/router";
import {AuthService} from "@app/core/auth/auth.service";
import {LocalService} from "@shared/helpers/service/store/local.service";

@Injectable({
    providedIn: 'root'
})
export class UserService
{
    USER_KEY = "user-information"
    public _user: User;

    /**
     * Constructor
     */
    constructor(private router: Router,
                private http: HttpClientService,
                private auth: AuthService,
                private local: LocalService
    )
    {
        let data = null;
        try {
            data = <User> JSON.parse(this.local.getData(this.USER_KEY) ?? '{}');
        }
        catch (e) {
            console.log(e);
        }
        if(data) {
            this._user = data;
            if(this._user.loggedIn) {
                this.setTokenExpire();
                this.auth.coatoCode = this._user.coatoCode;
            }
        }
    }

    setTokenExpire() {
        let time = this._user.expiresIn * 1000 - (new Date().getTime() - this._user.loggedIn);
        setTimeout(() => {
            this.refreshToken();
        }, time);
    }


    setUser(value: User) {
        value.loggedIn = new Date().getTime();
        this._user = value;
        this.local.saveData(this.USER_KEY, JSON.stringify(value));
        this.auth.accessToken = value.accessToken;
    }

    refreshToken() {
        let request: UserManagementFormRequest = new UserManagementFormRequest(UserManagementApiUrls.REFRESH_TOKEN);
        request.body = {
            refreshToken: this._user.refreshToken,
        }
        this.http.request(request, 'post').subscribe({
            next: (res) => {
                this._user = {...this._user, ...res};
                this.setUser(this._user);
                this.setTokenExpire();
            },
            error: () => {
                this.router.navigate(['sign-out']);
            },
        });
    }

}
