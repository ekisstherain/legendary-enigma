import {Injectable} from '@angular/core';

export const JSON_WEB_TOKEN = "JSON_WEB_TOKEN";

@Injectable()
export class JwtService {

    constructor() {
    }

    getToken(): string {
        return localStorage.getItem(JSON_WEB_TOKEN);
    }

    saveToken(token: string) {
        localStorage.setItem(JSON_WEB_TOKEN, token);
    }

    destroyToken() {
        localStorage.removeItem(JSON_WEB_TOKEN);
    }
}
