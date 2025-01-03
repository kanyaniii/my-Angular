import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FilingTypeComponent } from './filing-type/filing-type.component';
import { MonthComponent } from './month/month.component';
import { YearComponent } from './year/year.component';
import { SaleAmountComponent } from './sale-amount/sale-amount.component';
import { SubmitTaxComponent } from './submit-tax/submit-tax.component';
import { TaxAmountComponent } from './tax-amount/tax-amount.component';
import { TotalAmountComponent } from './total-amount/total-amount.component';
import { ReviewComponent } from './review/review.component';



@NgModule({
  declarations: [
    AppComponent,
    FilingTypeComponent,
    MonthComponent,
    YearComponent,
    SaleAmountComponent,
    SubmitTaxComponent,
    TaxAmountComponent,
    TotalAmountComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
