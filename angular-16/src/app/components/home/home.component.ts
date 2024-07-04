import { Component } from '@angular/core';
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cities: City[] = [];
  selectedCity?: City = undefined;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  selectCustom(): void {
    this.selectedCity = this.cities[0];
  }

  printCurrent(): void {
    console.log('this.selectedCity', this.selectedCity);
  }
}
