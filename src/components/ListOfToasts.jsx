import { ListOfToastsDefaultProps, ListOfToastsPropTypes, POS } from '../propTypes/propTypes'
import { Toasty } from './Toasty'

const converterPosition = (x, y) => {
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

export const ListOfToasts = ({ toastArr, position: { x, y } }) => {
  const ToastsComponents = () => {
    return (
      toastArr.map((toast, i) =>
        <Toasty
          key={`Toast-${toast.id ?? i}`}
          label={toast.label}
          type={toast.type}
          autoClose={toast.autoClose}
          fnClose={toast.fnClose}
        />
      )
    )
  }

  return (
    <div className={`listOfToast ${converterPosition(x, y)}`}>
      {toastArr.length > 0 && (<ToastsComponents />)}
    </div>
  )
}

ListOfToasts.propTypes = ListOfToastsPropTypes
ListOfToasts.defaultProps = ListOfToastsDefaultProps
