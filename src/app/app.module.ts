import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AboutComponent } from './about/about.component';
import { PortFoComponent } from './port-fo/port-fo.component';
import { ExperinceComponent } from './experince/experince.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContacComponent } from './contac/contac.component';
import { LandingComponent } from './landing/landing.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { NgxGaugeModule } from 'ngx-gauge';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [AppComponent, SideNavComponent, AboutComponent, PortFoComponent, ExperinceComponent, ProjectsComponent, ContacComponent, LandingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,
    NgxGaugeModule,
    MatProgressBarModule,
    NgxChartsModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
