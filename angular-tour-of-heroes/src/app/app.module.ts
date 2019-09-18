import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { MessagesComponent } from "./messages/messages.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { HeroSearchComponent } from "./hero-search/hero-search.component";
import { BadguysModule } from "./bad-guys/bad-guys.module";
import { LifecycleComponent } from "./lifecycle/lifecycle.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    LifecycleComponent
  ], // declarations: The components, directives, and pipes that belong to this NgModule.
  exports: [], // exports: The subset of declarations that should be visible and usable in the
  // component templates of other NgModules.
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BadguysModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    ReactiveFormsModule
  ],
  providers: [], // providers: Creators of services that this NgModule contributes to the global collection of services;
  // they become accessible in all parts of the app. (You can also specify providers at the component level,
  // which is often preferred.)

  /*
  When you register a provider with a specific NgModule, the same instance of a service is
   available to all components in that NgModule. To register at this level,
   use the providers property of the @NgModule() decorator
  */
  bootstrap: [AppComponent]
})
export class AppModule {}
