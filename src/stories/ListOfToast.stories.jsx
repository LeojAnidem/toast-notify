import { ListOfToasts } from '../components/ListOfToasts'

export default {
  title: 'Example/ListOfToast',
  component: ListOfToasts,
  tags: ['autodocs'],
  args: {
    toastArr: [
      {
        label: 'Mensaje Correcto',
        type: 'success'
      },
      {
        label: 'Mensaje Incorrecto',
        type: 'error'
      }
    ]
  }
}

export const TopLeft = {
  args: {
    position: {
      x: 'LEFT',
      y: 'TOP'
    }
  }
}

export const TopCenter = {
  args: {
    position: {
      x: 'CENTER',
      y: 'TOP'
    }
  }
}

export const TopRight = {
  args: {
    position: {
      x: 'RIGHT',
      y: 'TOP'
    }
  }
}

export const BottomLeft = {
  args: {
    position: {
      x: 'LEFT',
      y: 'BOTTOM'
    }
  }
}

export const BottomCenter = {
  args: {
    position: {
      x: 'CENTER',
      y: 'BOTTOM'
    }
  }
}

export const BottomRight = {
  args: {
    position: {
      x: 'RIGHT',
      y: 'BOTTOM'
    }
  }
}

export const Toasts = {
  args: {
    toastArr: new Array(5).fill({})
  }
}

export const ToastLongMessage = {
  args: {
    toastArr: new Array(5).fill({
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin blandit mi et cursus imperdiet.'
    })
  }
}

export const AutoClose = {
  args: {
    toastArr: new Array(5).fill({ autoClose: true })
  }
}
