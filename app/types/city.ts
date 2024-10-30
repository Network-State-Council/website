export interface City {
  name: string;
  code: string;
  cities: string[];
}

export interface ContinentData {
  countries: City[];
}

export interface CitiesData {
  [key: string]: ContinentData;
}
