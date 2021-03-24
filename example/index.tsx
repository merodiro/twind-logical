/* eslint-env browser */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, render } from 'preact'
import 'preact/devtools'

import { setup } from 'twind/shim'
import { teal, cyan, lightBlue } from 'twind/colors'

// eslint-disable-next-line unicorn/import-index
import twindLogical from '../src/index'

import App from './app'

setup({
  theme: {
    extend: {
      fontSize: {
        rhythmLead: ['1.25rem', '1.6'],
      },
      colors: {
        teal,
        cyan,
        lightBlue,
      },
    },
  },
  plugins: {
    ...twindLogical,
  },
})

render(<App />, document.body)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
