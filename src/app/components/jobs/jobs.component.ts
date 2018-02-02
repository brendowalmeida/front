import { Component, OnInit, ViewChild } from '@angular/core';
import { Jobs } from '../../models/jobs.model';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  public search: string;
  public listJobs: Jobs[];

  private filterOn: boolean;
  public showLoad: boolean;
  public hideTable: boolean;
  public showNoData: boolean;

  constructor(private jobsService: JobsService) {
    this.search = '';
    this.listJobs = [];
    this.filterOn = false;
    this.showLoad = false;
    this.hideTable = false;
    this.showNoData = false;
  }

  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    this.opLoading();
    this.filterOn = false;
    this.jobsService.getJobs().subscribe(data => {
      this.listJobs = data;
      this.opLoading();
    });
  }

  searchJobs() {
    if(this.hideTable) { this.noData(); }
    this.opLoading();
    this.jobsService.searchJobs(this.search).subscribe(data => {
      this.filterOn = true;
      this.listJobs = data;
      this.opLoading();
      if (this.listJobs.length < 1) {
        this.noData();
      }
    });
  }

  onChange(value) {
    if (value === '' && this.filterOn) {
      this.getJobs();
    }
  }

  onKeyPress(event) {
    if (this.search !== '' && event.keyCode === 13 || event.keyCode === 8) {
      this.searchJobs();
    }
  }

  opLoading() {
    this.hideTable = !this.hideTable;
    this.showLoad = !this.showLoad;
  }

  noData() {
    this.hideTable = !this.hideTable;
    this.showNoData = !this.showNoData;
  }

}
