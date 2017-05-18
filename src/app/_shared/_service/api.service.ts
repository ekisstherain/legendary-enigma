import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class ApiService {

    constructor(private http: Http) { }

    private setHeaders(): Headers {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        return new Headers(headersConfig);
    }

    private handleErrors(error: any) {
        return Observable.throw(error);
    }

    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(`${environment.api_url}${path}`, JSON.stringify(body), {headers: this.setHeaders()})
            .catch(this.handleErrors)
            .map((res: Response) => res.json());
    }
}
