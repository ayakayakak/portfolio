import { NumberCardType } from 'types/myTypes'

export const APP_NAME = 'Ayaka Taniguchi'
export const APP_URL = 'https://ayakatani.com'
export const META_DESCRIPTION = APP_NAME + "'s Portfolio"

/* tagiron */
export const BLUE_NUMBER_CARDS: NumberCardType[] = [...Array(10)].map((_, index) => ({
  color: index === 5 ? 'yellow' : 'blue',
  number: index,
})) as NumberCardType[]
export const RED_NUMBER_CARDS: NumberCardType[] = [...Array(10)].map((_, index) => ({
  color: index === 5 ? 'yellow' : 'red',
  number: index,
})) as NumberCardType[]
