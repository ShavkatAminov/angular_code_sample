import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, ReplaySubject, tap } from 'rxjs';
import { User } from 'app/core/user/user.types';

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
    constructor(private _httpClient: HttpClient)
    {
        this._user =  <User> JSON.parse(localStorage.getItem(this.USER_KEY));
    }


    setToStorage(value: User) {
        localStorage.setItem(this.USER_KEY, JSON.stringify(value));
    }
}
