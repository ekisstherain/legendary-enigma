import {Injectable} from "@angular/core";
import {Headers, Http, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {JwtService} from "./jwt.service";

@Injectable()
export class ApiService {

    constructor(private http: Http, private jwtService: JwtService) {
    }

    private setHeaders(): Headers {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        if(this.jwtService.getToken()) {
            headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
        }

        return new Headers(headersConfig);
    }

    private handleErrors(error: any) {
        return Observable.throw(error);
    }

    get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
        return this.http.get(`${environment.api_url}${path}`, {headers: this.setHeaders(), search: params})
            .catch(this.handleErrors)
            .map((res: Response) => {
                return res.json();
            });
    }

    put(path: string, body: Object = {}): Observable<any> {
        return this.http.put(`${environment.api_url}${path}`, JSON.stringify(body), {headers: this.setHeaders()})
            .catch(this.handleErrors)
            .map((res: Response) => res.json());
    }

    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(`${environment.api_url}${path}`, JSON.stringify(body), {headers: this.setHeaders()})
            .catch(this.handleErrors)
            .map((res: Response) => res.json());
    }
}
