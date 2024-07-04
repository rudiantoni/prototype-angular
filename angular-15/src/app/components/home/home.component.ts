import { Component, OnInit } from '@angular/core';

interface ICity {
  name: string;
  code: string;
}

interface IPrimeNgDropdownChangeEvent {
  originalEvent: Event;
  value: any;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cities: ICity[] = [];
  selectedCity?: ICity = undefined;
  selectedCityCode?: string = undefined;
  private nonExistentCity: ICity = { name: 'Unknown', code: '' };
  private nullCity: ICity = { name: null, code: null } as any;
  private undefinedCity: ICity = { name: undefined, code: undefined } as any;

  ngOnInit(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  changedDropdown(event: IPrimeNgDropdownChangeEvent): void {
    console.log('event', event);
  }

  changedDropdownA(event: IPrimeNgDropdownChangeEvent): void {
    console.log('eventA', event);
  }

  selectFirst(): void {
    console.log('selectFirst start', '\nselectedCity', this.selectedCity,  '\nselectedCityCode', this.selectedCityCode)
    this.selectedCity = this.cities[0];
    this.selectedCityCode = this.cities[0].code;
    console.log('selectFirst end', '\nselectedCity', this.selectedCity,  '\nselectedCityCode', this.selectedCityCode)
    console.log('--------------------------------------------------')
  }

  selectLast(): void {
    console.log('selectLast start', '\nselectedCity', this.selectedCity,  '\nselectedCityCode', this.selectedCityCode)
    this.selectedCity = this.cities[this.cities.length - 1];
    this.selectedCityCode = this.cities[this.cities.length - 1].code;
    console.log('selectLast start', '\nselectedCity', this.selectedCity,  '\nselectedCityCode', this.selectedCityCode)
    console.log('--------------------------------------------------')
  }

  selectNonExistent(): void {
    console.log('selectNonExistent start', '\nselectedCity', this.selectedCity,  '\nselectedCityCode', this.selectedCityCode)
    this.selectedCity = this.nonExistentCity
    this.selectedCityCode = this.nonExistentCity.code
    console.log('selectNonExistent start', '\nselectedCity', this.selectedCity,  '\nselectedCityCode', this.selectedCityCode)
    console.log('--------------------------------------------------')
  }

  selectNull(): void {
    console.log('selectNull start', '\nselectedCity', this.selectedCity,  '\nselectedCityCode', this.selectedCityCode)
    this.selectedCity = this.nullCity
    this.selectedCityCode = this.nullCity.code
    console.log('selectNull start', '\nselectedCity', this.selectedCity,  '\nselectedCityCode', this.selectedCityCode)
    console.log('--------------------------------------------------')
  }

  selectUndefined(): void {
    console.log('selectUndefined start', '\nselectedCity', this.selectedCity,  '\nselectedCityCode', this.selectedCityCode)
    this.selectedCity = this.undefinedCity
    this.selectedCityCode = this.undefinedCity.code
    console.log('selectUndefined start', '\nselectedCity', this.selectedCity,  '\nselectedCityCode', this.selectedCityCode)
    console.log('--------------------------------------------------')
  }

  selectRandom(includeInvalid: boolean): void {
    console.log('selectRandom start', '\nselectedCity', this.selectedCity,  '\nselectedCityCode', this.selectedCityCode)
    const possibleOptions: ICity[] = [
      ...this.cities,
    ];
    if (includeInvalid) {
      possibleOptions.push(this.nonExistentCity)
      possibleOptions.push(this.nullCity)
      possibleOptions.push(this.undefinedCity)
    }
    
    const randomIdx = Math.floor(Math.random() * possibleOptions.length);
    const randomElement = possibleOptions[randomIdx];

    console.log('selectRandom element', randomElement)

    this.selectedCity = randomElement;
    this.selectedCityCode = randomElement.code;
    console.log('selectRandom start', '\nselectedCity', this.selectedCity,  '\nselectedCityCode', this.selectedCityCode)
  }

  printCurrent(): void {
    console.log('this.selectedCity', this.selectedCity);
    console.log('this.selectedCityCode', this.selectedCityCode);
  }
}
