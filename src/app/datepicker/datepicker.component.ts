import { FormGroup } from '@angular/forms';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [MatDatepickerModule, MatFormFieldModule],
  template: `
<mat-form-field>
  <mat-label>Enter a date range</mat-label>
  <mat-date-range-input [rangePicker]="picker">
    <input matStartDate placeholder="Start date">
    <input matEndDate placeholder="End date">
  </mat-date-range-input>
  <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-date-range-picker #picker></mat-date-range-picker>
</mat-form-field>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()]
})
export class DatepickerComponent {

}
