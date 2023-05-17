import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsDemoComponent } from './features/components-demo/components-demo.component';
import { DailyIntakeComponent } from './features/daily-intake/daily-intake.component';
import { FoodMealsComponent } from './features/food-meals/food-meals.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { SettingsComponent } from './features/set/set.component';

const routes: Routes = [
  { path: '', redirectTo: 'daily-intake', pathMatch: 'full' },
  { path: 'daily-intake', component: DailyIntakeComponent },
  { path: 'food-meals', component: FoodMealsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'components-demo', component: ComponentsDemoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'daily-intake' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
