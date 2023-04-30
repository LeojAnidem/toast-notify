import { Toasty } from '../components/Toasty'

export default {
  title: 'Example/Toast',
  component: Toasty,
  tags: ['autodocs'],
  args: {
    label: 'lorem ipsum lorem ipsum',
    type: 'success',
    autoClose: false
  }
}

export const Success = {
  args: {
    type: 'success'
  }
}

export const Error = {
  args: {
    type: 'error'
  }
}

export const collapse = {
  args: {
    label: 'lorem ipsum atmirate et itsum comsnt lorem ipsum atmirate et itsum comsnt lorem'
  }
}

export const autoClose = {
  args: {
    autoClose: true
  }
}
