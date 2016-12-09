import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'; //import Http, Headers , Response
import {Observable} from 'rxjs/Observable';  //import Observable
import 'rxjs/add/operator/map'; //import rxjs map
import 'rxjs/add/operator/catch'; //import rxjs catch
import 'rxjs/add/Observable/throw';

@Injectable()
export class EmployeeService {

    private _url: string = "../apidata/employeeData.json";

    constructor(private _http: Http) {}

    getEmployees(){ 
        return this._http.get(this._url)
                .map(res => res.json())
                .catch(this._errorHandler);  // catch error handler
    } 

    _errorHandler(err: Response){
        console.error(err);
        return Observable.throw(err || "Server Error");
    }

}
