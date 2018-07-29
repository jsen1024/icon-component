import Vue from 'vue'
import SvgIcon from '../components/SvgIcon.vue'

Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
// const iconMap = requireAll(req)
// console.log(iconMap)
requireAll(req)
