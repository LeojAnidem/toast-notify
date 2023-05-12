import { POS } from '../propTypes/propTypes'

export const converterPosition = (x, y) => {
  const allPos = [...POS.X, ...POS.Y]
  if (!allPos.includes(x) || !allPos.includes(y) || y === 'CENTER') {
    return ''
  }

  const toTwClass = (posXorY) => allPos.includes(posXorY)
    ? `${posXorY.toLowerCase()}`
    : ''

  const twVal = x === 'CENTER'
    ? 'left-1/2 transform -translate-x-1/2'
    : `${toTwClass(x)}-2`

  const classTw = `absolute ${twVal} ${toTwClass(y)}-2`
  return classTw
}
