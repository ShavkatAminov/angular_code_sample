import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { AuthUtils } from 'app/core/auth/auth.utils';
import {LocalService} from "@shared/helpers/service/store/local.service";
import {User} from "@app/core/user/user.types";

@Injectable()
export class AuthService
{
    private _authenticated: boolean = false;
    AUTH_KEY  = 'access-token';
    COATO_CODE_KEY  = 'coato-code';

    /**
     * Constructor
     */
    constructor(private local: LocalService) {
        if(this.getCoatoCodeValue()) {
            this.setCoatoCode(this.getCoatoCodeValue());
        }
    }



    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string)
    {
        this.local.saveData(this.AUTH_KEY, token);
    }

    get accessToken(): string
    {
        let data = null;
        try {
            data = this.local.getData(this.AUTH_KEY);
        }
        catch (e) {
            console.log(e);
        }
        return data ?? '';
    }
    /**
     * Setter & getter for access token
     */
    _coatoCode$: BehaviorSubject<string> = new BehaviorSubject<string>("");
    setCoatoCode(value: string)
    {
        this.local.saveData(this.COATO_CODE_KEY, value);
        this._coatoCode$.next(value);
    }

    getCoatoCode(): Observable<string>
    {
        return this._coatoCode$.asObservable();
    }

    getCoatoCodeValue() {
        let data = null;
        try {
            data = this.local.getData(this.COATO_CODE_KEY);
        }
        catch (e) {
            console.log(e);
        }
        if(data) {
            return data;

        }
        return null;
    }




    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     *
     * @param email
     */
    forgotPassword(email: string): Observable<any>
    {
        return of("");
        //return this._httpClient.post('api/auth/forgot-password', email);
    }

    /**
     * Reset password
     *
     * @param password
     */
    resetPassword(password: string): Observable<any>
    {
        return of("");
        //return this._httpClient.post('api/auth/reset-password', password);
    }

    /**
     * Sign out
     */
    signOut(): Observable<any>
    {
        // Remove the access token from the local storage
        localStorage.removeItem(this.AUTH_KEY);
        localStorage.removeItem('user-information');
        localStorage.removeItem('navigation');

        // Set the authenticated flag to false
        this._authenticated = false;

        // Return the observable
        return of(true);
    }




    /**
     * Check the authentication status
     */
    check(): Observable<boolean>
    {
        // Check if the user is logged in
        if ( this._authenticated )
        {
            return of(true);
        }

        // Check the access token availability
        if ( !this.accessToken )
        {
            return of(false);
        }

        // Check the access token expire date
        if ( AuthUtils.isTokenExpired(this.accessToken) )
        {
            return of(false);
        }
        return of(true);
    }
}
