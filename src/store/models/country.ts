export interface Country {
  _id: string
  name: string
  nativeName: string
  population: string
  regin: string
  subRegin: string
  capital: string
  topLevelDomain: string
  currencies: string
  languages: Language
  flag: string
  borderCountries: BorderCountry
}

export interface Language {
  id: string
  iso639_1: string
  iso639_2: string
  name: string
  nativeName: string
}

export interface BorderCountry {
  id: string
  code: string
  name: string
}
