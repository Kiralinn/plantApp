import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainOverviewComponent } from "./main-overview/main-overview.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [AppComponent, MainOverviewComponent, PlantDetailComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
