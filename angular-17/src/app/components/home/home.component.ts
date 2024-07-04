import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, DropdownModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cities: City[] = [];

  selectedCity?: City;

  ngOnInit(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  changedDropdown(event: DropdownChangeEvent): void {
    console.log('event', event);
  }

  selectFirst(): void {
    this.selectedCity = this.cities[0];
  }

  printCurrent(): void {
    console.log('this.selectedCity', this.selectedCity);
  }
}
