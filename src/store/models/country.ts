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
  borderCountries: string[]
}

export interface Language {
  name: string
}
