import { useMemo } from 'react'
import { ListOfToastsDefaultProps, ListOfToastsPropTypes } from '../propTypes/propTypes'
import { converterPosition } from '../utils/positionObjToClassname'
import { Toasty } from './Toasty'

export const ListOfToasts = ({ toastArr, position: { x, y } }) => {
  const toastsComponents = useMemo(() => {
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
  }, [toastArr])

  return (
    <div className={`listOfToast ${converterPosition(x, y)}`}>
      {toastArr.length > 0 && (toastsComponents)}
    </div>
  )
}

ListOfToasts.propTypes = ListOfToastsPropTypes
ListOfToasts.defaultProps = ListOfToastsDefaultProps
