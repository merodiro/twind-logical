import * as __SNOWPACK_ENV__ from './_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import {h, render} from "./_snowpack/pkg/preact.js";
import "./_snowpack/pkg/preact/devtools.js";
import {setup} from "./_snowpack/pkg/twind/shim.js";
import {teal, cyan, lightBlue} from "./_snowpack/pkg/twind/colors.js";
import twindLogical from "./_dist_/index.js";
import App from "./app.js";
setup({
  theme: {
    extend: {
      fontSize: {
        rhythmLead: ["1.25rem", "1.6"]
      },
      colors: {
        teal,
        cyan,
        lightBlue
      }
    }
  },
  plugins: {
    ...twindLogical
  }
});
render(/* @__PURE__ */ h(App, null), document.body);
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}
