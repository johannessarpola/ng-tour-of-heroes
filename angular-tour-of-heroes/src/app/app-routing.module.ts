import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./heroes/hero-detail/hero-detail.component";
import { BadguysComponent } from "./bad-guys/bad-guys.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component: HeroDetailComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "badguys", component: BadguysComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
