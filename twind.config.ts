import twindLogical from './src/index'
import * as colors from 'twind/colors'

/** @type {import('twind').Configuration} */
export default {
  theme: {
    extend: {
      fontSize: {
        rhythmLead: ['1.25rem', '1.6'],
      },
      colors: {
        ...colors,
      },
    },
  },
  plugins: twindLogical,
}
