import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MatButtonModule, MatInputModule, MatTooltipModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobsService } from './services/jobs.service';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { JobsComponent } from './components/jobs/jobs.component';
import { FormsModule } from '@angular/forms';
import { HttpService } from './services/http.service';
import { TruncatePipe } from './utils/pipes/truncate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JobsComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([]),
    routing,
  ],
  providers: [HttpService, JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
