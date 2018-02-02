import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class JobsService {
    private api: string;
    private searchTag: string;
    private filterTag: string;
    constructor(private http: Http, private httpService: HttpService) {
        this.api = httpService.getJobsApi() + '/search.json';
        this.searchTag = '?query=';
        this.filterTag = '+jobs=';
    }

    getJobs() {
        return this.http.get(this.api)
            .map(res => {
                return res.json();
            });
    }

    searchJobs(search: string) {
        return this.http.get(this.api + this.searchTag + search + this.filterTag)
            .map(res => {
                return res.json();
            });
    }
}
