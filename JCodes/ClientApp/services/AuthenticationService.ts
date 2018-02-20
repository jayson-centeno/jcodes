import axios from "axios"
import { injectable, inject, multiInject } from "inversify"

export interface IAuthData { 
    Email: string
    Password: string
}

export interface IAuthenticationService {
    getToken(Data: IAuthData): any;
    setAuthToken(token: string): void;
    getAuthToken(): string | null;
    getAuthHeader(): any;
    getCaptchaKey(): string | null;
}

@injectable()
export class AuthenticationService implements IAuthenticationService {

    constructor() { }

    getToken(Data: IAuthData): any {
        var user = {};
        user["email"] = Data.Email;
        user["password"] = Data.Password;
        return axios.post("api/token", user)
    }

    setAuthToken(token: string): void {
        let localStorage = this.getLocalStorage();
        if (localStorage)
            localStorage.setItem('jcodes_jwtToken', token);
        else { 
            let tokenElement = document.getElementById('Token') as HTMLInputElement;
            if (tokenElement != null)
                tokenElement.value = token;
        } 
    }

    getAuthToken(): string | null {

        let token: string | null = "";
        let tokenElement = document.getElementById('Token') as HTMLInputElement;

        if (tokenElement)
            token = tokenElement.value
        else {

            let localStorage = this.getLocalStorage();
            if (localStorage)
                token = localStorage.getItem('jcodes_jwtToken');
        }

        return token;
    }

    getLocalStorage(): Storage | null {
        if (typeof window !== "undefined") {
            return window.localStorage;
            //return localStorage.LocalStorage;
        } else {
            return null;
        }
    }

    getAuthHeader(): any {
        return {
            headers: {
                "Authorization": this.getAuthToken()
            }
        }
    }

    getCaptchaKey(): string | null {

        if (typeof window === 'undefined') return '';

        let captchaKeyElement = document.getElementById('CaptchaKey') as HTMLInputElement;
        if (captchaKeyElement != null)
            return captchaKeyElement.value;

        return '';

    }

}