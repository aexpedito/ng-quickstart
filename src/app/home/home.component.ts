import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, HousingLocationComponent ],
  styleUrl: './home.component.css',
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
