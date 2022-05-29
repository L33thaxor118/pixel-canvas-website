export function decimalColorToRgb(color: number): string {
  if (color === 0) {
    return 'rgb(28, 49, 58)'
  }
  const r = Math.floor(color / (256*256))
  const g = Math.floor(color / 256) % 256
  const b = color % 256
  return `rgb(${r}, ${g}, ${b})`
}

export const Colors = {
  black: 0,
  white: 16777215,
  red: 16711680,
  blue: 18687,
  lightBlue: 63487,
  green: 8453888,
  pink: 15335679,
  yellow: 16768256,
  orange: 16737792,
}