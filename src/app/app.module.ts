import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';

// Features
import { ComponentsDemoComponent } from './features/components-demo/components-demo.component';
import { DailyIntakeComponent } from './features/daily-intake/daily-intake.component';
import { FoodMealsComponent } from './features/food-meals/food-meals.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { AddMealDialogComponent } from './features/daily-intake/dialogs/add-meal-dialog/add-meal-dialog.component';
import { SettingsComponent } from './features/set/set.component';

// Custom components
import { CcContainerComponent } from './shared/components/cc-container/cc-container.component';
import { CcBannerComponent } from './shared/components/cc-banner/cc-banner.component';
import { CcCardComponent } from './shared/components/cc-card/cc-card.component';
import { CcButtonSolidComponent } from './shared/components/cc-button/cc-button-solid/cc-button-solid.component';
import { CcButtonOutlineComponent } from './shared/components/cc-button/cc-button-outline/cc-button-outline.component';
import { CcButtonIconComponent } from './shared/components/cc-button/cc-button-icon/cc-button-icon.component';
import { CcDialogComponent } from './shared/components/cc-dialog/cc-dialog.component';
import { CcProgressBarComponent } from './shared/components/cc-progress-bar/cc-progress-bar.component';
import { CcListComponent } from './shared/components/cc-list/cc-list.component';
import { CcProgressCircleComponent } from './shared/components/cc-progress-circle/cc-progress-circle.component';
import { CcTabsComponent } from './shared/components/cc-tabs/cc-tabs.component';
import { CcToolbarComponent } from './shared/components/cc-toolbar/cc-toolbar.component';
import { CcDividerComponent } from './shared/components/cc-divider/cc-divider.component';
import { CcToggleComponent } from './shared/components/cc-toggle/cc-toggle.component';
import { DialogDemoComponent } from './features/components-demo/dialog-demo/dialog-demo.component';
import { RemoveMealDialogComponent } from './features/daily-intake/dialogs/remove-meal-dialog/remove-meal-dialog.component';
import { ShowIngredientsDialogComponent } from './features/daily-intake/dialogs/show-ingredients-dialog/show-ingredients-dialog.component';
import { EditFoodDialogComponent } from './features/food-meals/dialogs/edit-food-dialog/edit-food-dialog.component';
import { EditMealDialogComponent } from './features/food-meals/dialogs/edit-meal-dialog/edit-meal-dialog.component';
import { RemoveItemDialogComponent } from './features/food-meals/dialogs/remove-item-dialog/remove-item-dialog.component';

// Angular Material imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MtxTooltipModule } from '@ng-matero/extensions/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DailyIntakeComponent,
    AddMealDialogComponent,
    FoodMealsComponent,
    ComponentsDemoComponent,
    SettingsComponent,
    CcContainerComponent,
    CcBannerComponent,
    CcCardComponent,
    CcButtonSolidComponent,
    CcButtonOutlineComponent,
    CcButtonIconComponent,
    CcDialogComponent,
    CcProgressBarComponent,
    CcProgressCircleComponent,
    CcListComponent,
    CcTabsComponent,
    CcToolbarComponent,
    CcDividerComponent,
    CcToggleComponent,
    DialogDemoComponent,
    RemoveMealDialogComponent,
    ShowIngredientsDialogComponent,
    EditFoodDialogComponent,
    EditMealDialogComponent,
    RemoveItemDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatProgressBarModule,
    MatTooltipModule,
    MtxTooltipModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatInputModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
