export const FontSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

export type FontSize = typeof FontSize[keyof typeof FontSize]

export const ColorMode = {
  LIGHT: 'light',
  DARK: 'dark',
}

export type ColorMode = typeof ColorMode[keyof typeof ColorMode]
