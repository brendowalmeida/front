import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable()
export class HttpService {
    constructor() { }

    getJobsApi(): string {
        return environment.host_api;
    }
}
