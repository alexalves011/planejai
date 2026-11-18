export function formatCurrency(value: string): string {
  const digits = value.replace(/\D/g, '')

  if (!digits) {
    return ''
  }

  const paddedDigits = digits.padStart(3, '0')
  const integerPart = paddedDigits
    .slice(0, -2)
    .replace(/^0+(?=\d)/, '')
  const decimalPart = paddedDigits.slice(-2)
  const groupedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  return `${groupedInteger},${decimalPart}`
}