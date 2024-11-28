//Sample of reactive form
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DatepickerComponent, MatDatepickerModule, MatFormFieldModule, NgxMaskDirective,NgxMaskPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()]
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl('Afonso', Validators.required),
    lastName: new FormControl('Expedito', Validators.required),
    email: new FormControl('afonso@email.com', [Validators.required, Validators.email]),
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
    logradouro: new FormControl('', Validators.required),
  });

  constructor(){
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }

  submitApplication(){
    console.log('Submit form details.component.ts')
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '', //TODO ?? means if value is null or undefined use '' instead
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.start ?? '',
      this.applyForm.value.end ?? '',
      this.applyForm.value.cep ?? '',
    );
  }

  getCepDetails(){
    console.log('getCepDetails() call '+ this.applyForm.value.cep);
  }

}
