import Vue from 'vue'
import { TvToast, spawn, removeElement, containerClasses } from 'tv-toast'

import options from './options'

export default (ctx, inject) => {

  const toasts = document.createElement('div')
  containerClasses.forEach(c => toasts.classList.add(c))
  if (options.defaults && options.defaults.containerClasses) {
    options.defaults.containerClasses.forEach(c => toasts.classList.add(c))
  }
  toasts.setAttribute('id', 'toasts')
  document.body.appendChild(toasts)

  const ToastProgrammatic = {
    show (props) {
      if (typeof props === 'string') props = { message: props }
      return spawn('toasts', props, TvToast, Vue, options)
    },
    success (props) {
      return spawn('toasts', {type: 'success', message: props}, TvToast, Vue, options)
    },
    info (props) {
      return spawn('toasts', {type: 'info', message: props}, TvToast, Vue, options)
    },
    danger (props) {
      return spawn('toasts', {type: 'danger', message: props}, TvToast, Vue, options)
    },
    warning (props) {
      return spawn('toasts', {type: 'warning', message: props}, TvToast, Vue, options)
    },
    denied (props) {
      return spawn('toasts', {type: 'denied', message: props}, TvToast, Vue, options)
    },
  }
  inject('toast', ToastProgrammatic)
}
