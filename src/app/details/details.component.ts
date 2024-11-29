//Sample of reactive form
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule,DatepickerComponent, MatDatepickerModule, MatFormFieldModule, NgxMaskDirective,NgxMaskPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()]
})

export class DetailsComponent {
  logradouro: string = '';
  bairro: string = '';
  localidade: string = '';
  uf: string = '';
  cepService = inject(CepService);
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
    bairro: new FormControl('', Validators.required),
    localidade: new FormControl('', Validators.required),
    uf: new FormControl('', Validators.required),
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
    //getCepDetails
    if (this.applyForm.value.cep?.length == 8){
      //console.log('Lenght OK');
      this.cepService.getCepDetails(this.applyForm.value.cep).then(data => {
        console.log(data);
        if (data.logradouro == null) {
          console.log('CEP invalido');
          this.logradouro = '';
          this.bairro = '';
          this.localidade = '';
          this.uf = '';
        }else{
          this.logradouro = data.logradouro;
          this.bairro = data.bairro;
          this.localidade = data.localidade;
          this.uf = data.uf;
        }
      });
    }
  }

}
