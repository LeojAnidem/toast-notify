import PropTypes from 'prop-types'

export const ALERT_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning'
}

export const colorValueType = (alertType) => {
  if (!Object.values(ALERT_TYPES).includes(alertType)) {
    console.error('This alert type is Incorrect!')
    return ''
  }

  if (alertType === ALERT_TYPES.SUCCESS) return 'bg-green-500'
  if (alertType === ALERT_TYPES.ERROR) return 'bg-red-500'
  if (alertType === ALERT_TYPES.WARNING) return 'bg-orange-500'
}

export const POS = {
  X: ['LEFT', 'CENTER', 'RIGHT'],
  Y: ['TOP', 'CENTER', 'BOTTOM']
}

export const toastyPropTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(Object.values(ALERT_TYPES)).isRequired,
  autoClose: PropTypes.bool,
  fnClose: PropTypes.func
}

const position = {
  x: PropTypes.oneOf(POS.X).isRequired,
  y: PropTypes.oneOf(POS.Y).isRequired
}

export const ListOfToastsPropTypes = {
  toastArr: PropTypes.arrayOf(PropTypes.shape(toastyPropTypes)),
  position: PropTypes.shape(position).isRequired
}

export const toastyDefaultProps = {
  label: 'Lorem ipsum',
  type: 'success',
  autoClose: false,
  fnClose: () => console.log('Note Deleted!')
}

export const ListOfToastsDefaultProps = {
  toastArr: [
    {
      label: 'Lorem Ipsum',
      type: 'success'
    },
    {
      label: 'Lorem Ipsum',
      type: 'error'
    },
    {
      label: 'Lorem Ipsum',
      type: 'error'
    }
  ],
  position: {
    x: 'LEFT',
    y: 'TOP'
  }
}
