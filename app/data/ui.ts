export const Colors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  QUATERNARY: 'quaternary',
  BACKGROUND: 'background',
  FOREGROUND: 'foreground',
  ACCENT: 'accent',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info',
}

export type Colors =  typeof Colors[keyof typeof Colors];

export const BaseColors = {
  RED: 'red',
  YELLOW: 'yellow',
  GREEN: 'green',
  BLUE: 'blue',
}
export type BaseColors =  typeof BaseColors[keyof typeof BaseColors];


export const AllColors = {
  ...Colors,
  ...BaseColors,
}
export type AllColors =  typeof AllColors[keyof typeof AllColors];


export const Sizes = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}
export type Sizes =  typeof Sizes[keyof typeof Sizes];
