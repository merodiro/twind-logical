import {useState} from "./_snowpack/pkg/preact/hooks.js";
import {h} from "./_snowpack/pkg/preact.js";
export default function App() {
  const [dir, setDir] = useState("ltr");
  return /* @__PURE__ */ h("div", {
    class: "bg-fixed bg-gradient-to-tr from-teal-300 via-cyan-400 to-lightBlue-400",
    dir
  }, /* @__PURE__ */ h("div", {
    class: "bg-white max-is-7xl mli-auto pli-4 md:pli-8 xl:pli-12"
  }, /* @__PURE__ */ h("div", {
    class: "lg:gap-x-8 lg:grid lg:grid-cols-4 xl:gap-x-12"
  }, /* @__PURE__ */ h("div", {
    class: "pbs-8 lg:pbe-12"
  }, /* @__PURE__ */ h("div", {
    class: "block-start-8 sticky"
  }, /* @__PURE__ */ h("div", {
    class: "flex flex-col"
  }, /* @__PURE__ */ h("h1", {
    class: "text-center"
  }, /* @__PURE__ */ h("span", {
    class: "block plb-0.5 text-6xl"
  }, "🖖"), " ", /* @__PURE__ */ h("span", {
    class: "font-bold leading-8 text-xl"
  }, "tailwindcss-logical")), /* @__PURE__ */ h("div", {
    class: "flex justify-center"
  }, /* @__PURE__ */ h("button", {
    onClick: () => setDir(dir === "rtl" ? "ltr" : "rtl"),
    id: "switch-alignment",
    class: "appearance-none bg-gradient-to-br block bs-12 flex-1 font-medium from-cyan-100 mlb-6 rounded shadow-sm text-cyan-700 to-cyan-200 hover:from-cyan-100 hover:text-cyan-900 hover:to-cyan-300 sm:flex-none sm:pli-12 lg:flex-1 lg:pli-0"
  }, "Switch Text Direction"))), /* @__PURE__ */ h("nav", {
    class: "hidden lg:block"
  }, /* @__PURE__ */ h("ol", {
    class: "font-light leading-loose text-gray-500"
  }, /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "block pli-4 rounded hover:bg-gray-100 hover:text-black",
    href: "#block-size"
  }, "Block Size")), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "block pli-4 rounded hover:bg-gray-100 hover:text-black",
    href: "#border-radius"
  }, "Border Radius")), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "block pli-4 rounded hover:bg-gray-100 hover:text-black",
    href: "#border-width"
  }, "Border Width")), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "block pli-4 rounded hover:bg-gray-100 hover:text-black",
    href: "#divide-width"
  }, "Divide Width")), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "block pli-4 rounded hover:bg-gray-100 hover:text-black",
    href: "#float-and-clear"
  }, "Float and Clear")), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "block pli-4 rounded hover:bg-gray-100 hover:text-black",
    href: "#inline-size"
  }, "Inline Size")), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "block pli-4 rounded hover:bg-gray-100 hover:text-black",
    href: "#inset"
  }, "Inset")), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "block pli-4 rounded hover:bg-gray-100 hover:text-black",
    href: "#margin"
  }, "Margin")), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "block pli-4 rounded hover:bg-gray-100 hover:text-black",
    href: "#overscroll-behavior"
  }, "Overscroll Behavior")), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "block pli-4 rounded hover:bg-gray-100 hover:text-black",
    href: "#padding"
  }, "Padding")), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "block pli-4 rounded hover:bg-gray-100 hover:text-black",
    href: "#resize"
  }, "Resize")), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "block pli-4 rounded hover:bg-gray-100 hover:text-black",
    href: "#space-between"
  }, "Space Between")), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "block pli-4 rounded hover:bg-gray-100 hover:text-black",
    href: "#text-align"
  }, "Text Align")))))), /* @__PURE__ */ h("main", {
    class: "col-span-3 pbe-24 pbs-4 space-b-12 lg:pbs-12"
  }, /* @__PURE__ */ h("section", {
    id: "introduction",
    class: "font-light max-is-prose space-b-6 text-gray-700 text-rhythmLead"
  }, /* @__PURE__ */ h("p", null, "The following is an demonstration of every type of utility provided by tailwindcss-logical. You can read about installation, configuration, and more in", " ", /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://github.com/stevecochrane/tailwindcss-logical/#tailwindcss-logical"
  }, "the project's README"), "."), /* @__PURE__ */ h("p", null, "This page is entirely styled with Tailwind classes, from", " ", /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://github.com/stevecochrane/tailwindcss-logical/blob/master/docs/tailwind.config.js"
  }, "a mostly unmodified Tailwind config file"), ". To achieve better browser support, tailwindcss-logical's styles are run through some additional PostCSS plugins.", " ", /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://github.com/stevecochrane/tailwindcss-logical#browser-compatibility"
  }, "Read more about browser compatibility"), "."), /* @__PURE__ */ h("p", null, "To see how these utilities enable multi-directional layouts, click the Switch Text Direction button! All it does is flip the ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "dir"), " ", "attribute on the ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "<html>"), " element from", " ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, '"ltr"'), " to ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, '"rtl"'), " ", "and back again, and the rest is handled through the magic of logical properties and values.")), /* @__PURE__ */ h("section", {
    id: "block-size"
  }, /* @__PURE__ */ h("h2", {
    class: "font-bold text-2xl"
  }, "Block Size"), /* @__PURE__ */ h("ul", {
    class: "mbs-2"
  }, /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_block-size"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "block-size"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_min-block-size"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "min-block-size"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_max-block-size"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "max-block-size")))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 gap-4 grid grid-cols-4 mbs-4 p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white bs-12 p-2 rounded shadow text-sm md:text-base"
  }, "bs-12"), /* @__PURE__ */ h("div", {
    class: "bg-white bs-24 p-2 rounded shadow text-sm md:text-base"
  }, "bs-24"), /* @__PURE__ */ h("div", {
    class: "bg-white bs-36 p-2 rounded shadow text-sm md:text-base"
  }, "bs-36")), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 bs-48 gap-4 grid grid-cols-4 mbs-4 p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white bs-12 min-bs-0 p-2 rounded shadow text-sm md:text-base"
  }, "min-bs-0"), /* @__PURE__ */ h("div", {
    class: "bg-white bs-12 min-bs-full p-2 rounded shadow text-sm md:text-base"
  }, "min-bs-full")), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 bs-24 gap-4 grid grid-cols-4 grid-rows-1 mbs-4 p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white bs-36 max-bs-full p-2 rounded shadow text-sm md:text-base"
  }, "max-bs-full"))), /* @__PURE__ */ h("section", {
    id: "border-radius"
  }, /* @__PURE__ */ h("h2", {
    class: "font-bold text-2xl"
  }, "Border Radius"), /* @__PURE__ */ h("ul", {
    class: "mbs-2"
  }, /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_border-start-start-radius"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "border-start-start-radius"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_border-start-end-radius"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "border-start-end-radius"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_border-end-start-radius"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "border-end-start-radius"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_border-end-end-radius"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "border-end-end-radius")))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 gap-4 grid grid-cols-4 mbs-4 p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 p-2 rounded-bs-xl shadow text-sm md:text-base"
  }, "rounded-bs-xl"), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 p-2 rounded-be-xl shadow text-sm md:text-base"
  }, "rounded-be-xl"), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 p-2 rounded-is-xl shadow text-sm md:text-base"
  }, "rounded-is-xl"), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 p-2 rounded-ie-xl shadow text-sm md:text-base"
  }, "rounded-ie-xl"), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 p-2 rounded-ss-xl shadow text-sm md:text-base"
  }, "rounded-ss-xl"), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 p-2 rounded-se-xl shadow text-sm md:text-base"
  }, "rounded-se-xl"), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 p-2 rounded-es-xl shadow text-sm md:text-base"
  }, "rounded-es-xl"), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 p-2 rounded-ee-xl shadow text-sm md:text-base"
  }, "rounded-ee-xl"))), /* @__PURE__ */ h("section", {
    id: "border-width"
  }, /* @__PURE__ */ h("h2", {
    class: "font-bold text-2xl"
  }, "Border Width"), /* @__PURE__ */ h("ul", {
    class: "mbs-2"
  }, /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_border-block-start"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "border-block-start"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_border-block-end"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "border-block-end"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_border-inline-start"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "border-inline-start"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_border-inline-end"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "border-inline-end")))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 gap-4 grid grid-cols-4 mbs-4 p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-blue-400 border-bs-8 border-solid bs-16 p-2 rounded shadow text-sm md:text-base"
  }, "border-bs-8"), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-be-8 border-blue-400 border-solid bs-16 p-2 rounded shadow text-sm md:text-base"
  }, "border-be-8"), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-blue-400 border-is-8 border-solid bs-16 p-2 rounded shadow text-sm md:text-base"
  }, "border-is-8"), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-blue-400 border-ie-8 border-solid bs-16 p-2 rounded shadow text-sm md:text-base"
  }, "border-ie-8"))), /* @__PURE__ */ h("section", {
    id: "divide-width"
  }, /* @__PURE__ */ h("h2", {
    class: "font-bold text-2xl"
  }, "Divide Width"), /* @__PURE__ */ h("p", {
    class: "mbs-2"
  }, "These use the Flow-relative Border Width properties. See", " ", /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "#border-width"
  }, "Border Width Utilities"), " ", "for browser support details."), /* @__PURE__ */ h("div", {
    class: "space-b-4 mbs-4"
  }, /* @__PURE__ */ h("div", {
    class: "bg-gray-300 p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("p", {
    class: "mbe-2 text-sm md:text-base"
  }, "divide-i"), /* @__PURE__ */ h("div", {
    class: "flex divide-i"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("p", {
    class: "mbe-2 text-sm md:text-base"
  }, "divide-i-4"), /* @__PURE__ */ h("div", {
    class: "flex divide-i-4"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("p", {
    class: "mbe-2 text-sm md:text-base"
  }, "divide-i-4 + divide-i-reverse (with flex-row-reverse)"), /* @__PURE__ */ h("div", {
    class: "divide-i-4 divide-i-reverse flex flex-row-reverse"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }))), /* @__PURE__ */ h("div", {
    class: "flex space-i-4"
  }, /* @__PURE__ */ h("div", {
    class: "bg-gray-300 flex-1 p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("p", {
    class: "mbe-2 text-sm md:text-base"
  }, "divide-b"), /* @__PURE__ */ h("div", {
    class: "divide-b flex flex-col"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 flex-1 p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("p", {
    class: "mbe-2 text-sm md:text-base"
  }, "divide-b-4"), /* @__PURE__ */ h("div", {
    class: "divide-b-4 flex flex-col"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 flex-1 p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("p", {
    class: "mbe-2 text-sm md:text-base"
  }, "divide-b-4 + divide-b-reverse (plus flex-col-reverse)"), /* @__PURE__ */ h("div", {
    class: "divide-b-4 divide-b-reverse flex flex-col flex-col-reverse"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white border-0 border-solid border-yellow-400 bs-16 is-16"
  })))))), /* @__PURE__ */ h("section", {
    id: "float-and-clear"
  }, /* @__PURE__ */ h("h2", {
    class: "font-bold text-2xl"
  }, "Float and Clear"), /* @__PURE__ */ h("ul", {
    class: "mbs-2"
  }, /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_float_flow_relative_values"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "float: inline-start"), " and", " ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "float: inline-end"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_clear_flow_relative_values"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "clear: inline-start"), " and", " ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "clear: inline-end")))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 flow-root mbs-4 p-4 rounded shadow-inner space-b-4"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 float-start is-1/4 p-2 rounded shadow text-sm md:text-base"
  }, "float-start"), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 clear-start is-1/4 p-2 rounded shadow text-sm md:text-base"
  }, "clear-start"), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 float-end is-1/4 p-2 rounded shadow text-sm md:text-base"
  }, "float-end"), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 clear-end is-1/4 p-2 rounded shadow text-sm md:text-base"
  }, "clear-end"))), /* @__PURE__ */ h("section", {
    id: "inline-size"
  }, /* @__PURE__ */ h("h2", {
    class: "font-bold text-2xl"
  }, "Inline Size"), /* @__PURE__ */ h("ul", {
    class: "mbs-2"
  }, /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_inline-size"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "inline-size"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_min-inline-size"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "min-inline-size"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_max-inline-size"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "max-inline-size")))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 flex mbs-4 p-4 rounded shadow-inner space-i-4"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 p-2 rounded shadow text-sm md:text-base"
  }, "is-16"), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-32 p-2 rounded shadow text-sm md:text-base"
  }, "is-32"), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-48 p-2 rounded shadow text-sm md:text-base"
  }, "is-48")), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 flow-root mbs-4 p-4 rounded shadow-inner space-b-4"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 clear-start float-start min-is-0 p-2 rounded shadow text-sm md:text-base"
  }, "min-is-0"), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 clear-start float-start min-is-full p-2 rounded shadow text-sm md:text-base"
  }, "min-is-full")), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 flow-root mbs-4 p-4 rounded shadow-inner space-b-4"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 clear-start float-start is-32 is-full max-is-sm p-2 rounded shadow text-sm md:text-base"
  }, "max-is-sm"), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 clear-start float-start is-32 is-full max-is-md p-2 rounded shadow text-sm md:text-base"
  }, "max-is-md"), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 clear-start float-start is-32 is-full max-is-lg p-2 rounded shadow text-sm md:text-base"
  }, "max-is-lg"))), /* @__PURE__ */ h("section", {
    id: "inset"
  }, /* @__PURE__ */ h("h2", {
    class: "font-bold text-2xl"
  }, "Inset"), /* @__PURE__ */ h("ul", {
    class: "mbs-2"
  }, /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_inset-block"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "inset-block"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_inset-inline"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "inset-inline"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_inset-block-start"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "inset-block-start"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_inset-block-end"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "inset-block-end"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_inset-inline-start"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "inset-inline-start"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_inset-inline-end"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "inset-inline-end")))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 bs-32 mbs-4 p-4 relative rounded shadow-inner"
  }, /* @__PURE__ */ h("div", {
    class: "absolute bg-white bs-16 inline-start-4 is-1/4 p-2 rounded shadow text-sm md:text-base"
  }, "inline-start-4"), /* @__PURE__ */ h("div", {
    class: "absolute bg-white bs-16 inline-end-4 is-1/4 p-2 rounded shadow text-sm md:text-base"
  }, "inline-end-4")), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 bs-32 mbs-4 p-4 relative rounded shadow-inner"
  }, /* @__PURE__ */ h("div", {
    class: "absolute bg-white bs-16 inset-inline-4 p-2 rounded shadow text-sm md:text-base"
  }, "inset-inline-4")), /* @__PURE__ */ h("div", {
    class: "flex space-i-4"
  }, /* @__PURE__ */ h("div", {
    class: "bg-gray-300 bs-64 flex-1 mbs-4 p-4 relative rounded shadow-inner"
  }, /* @__PURE__ */ h("div", {
    class: "absolute bg-white bs-16 block-start-4 is-1/3 p-2 rounded shadow text-sm md:text-base"
  }, "block-start-4"), /* @__PURE__ */ h("div", {
    class: "absolute bg-white bs-16 block-end-4 is-1/3 p-2 rounded shadow text-sm md:text-base"
  }, "block-end-4")), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 bs-64 flex-1 mbs-4 p-4 relative rounded shadow-inner"
  }, /* @__PURE__ */ h("div", {
    class: "absolute bg-white inset-block-4 is-1/3 p-2 rounded shadow text-sm md:text-base"
  }, "inset-block-4")))), /* @__PURE__ */ h("section", {
    id: "margin"
  }, /* @__PURE__ */ h("h2", {
    class: "font-bold text-2xl"
  }, "Margin"), /* @__PURE__ */ h("ul", {
    class: "mbs-2"
  }, /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_margin-block"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "margin-block"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_margin-inline"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "margin-inline"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_margin-block-start"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "margin-block-start"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_margin-block-end"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "margin-block-end"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_margin-inline-start"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "margin-inline-start"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_margin-inline-end"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "margin-inline-end")))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 flex flex-wrap mbs-4 p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white mlb-16 p-2 rounded shadow text-sm md:text-base"
  }, "mlb-16"), /* @__PURE__ */ h("div", {
    class: "bg-white mli-16 p-2 rounded shadow text-sm md:text-base"
  }, "mli-16"), /* @__PURE__ */ h("div", {
    class: "bg-white mbs-16 p-2 rounded shadow text-sm md:text-base"
  }, "mbs-16"), /* @__PURE__ */ h("div", {
    class: "bg-white mbe-16 p-2 rounded shadow text-sm md:text-base"
  }, "mbe-16"), /* @__PURE__ */ h("div", {
    class: "bg-white mis-16 p-2 rounded shadow text-sm md:text-base"
  }, "mis-16"), /* @__PURE__ */ h("div", {
    class: "bg-white mie-16 p-2 rounded shadow text-sm md:text-base"
  }, "mie-16"))), /* @__PURE__ */ h("section", {
    id: "overscroll-behavior"
  }, /* @__PURE__ */ h("h2", {
    class: "font-bold text-2xl"
  }, "Overscroll Behavior"), /* @__PURE__ */ h("ul", {
    class: "mbs-2"
  }, /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/mdn-css_properties_overscroll-behavior-block"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "overscroll-behavior-block"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/mdn-css_properties_overscroll-behavior-inline"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "overscroll-behavior-inline")))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 gap-4 grid grid-cols-3 mbs-4 p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white bs-32 overflow-auto overscroll-b-auto p-2 rounded shadow text-sm md:text-base"
  }, /* @__PURE__ */ h("p", null, "overscroll-b-auto"), /* @__PURE__ */ h("p", {
    class: "text-gray-400 text-xs"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis magna neque, ultricies tempus est mollis eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra tortor non augue lacinia, vel tempus nunc pellentesque. Nulla et posuere lectus. Suspendisse ac magna at dolor luctus placerat. Suspendisse porttitor fermentum nibh non porttitor. Morbi turpis ipsum, porttitor sit amet leo at, aliquet aliquet nibh.")), /* @__PURE__ */ h("div", {
    class: "bg-white bs-32 overflow-auto overscroll-b-contain p-2 rounded shadow text-sm md:text-base"
  }, /* @__PURE__ */ h("p", null, "overscroll-b-contain"), /* @__PURE__ */ h("p", {
    class: "text-gray-400 text-xs"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis magna neque, ultricies tempus est mollis eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra tortor non augue lacinia, vel tempus nunc pellentesque. Nulla et posuere lectus. Suspendisse ac magna at dolor luctus placerat. Suspendisse porttitor fermentum nibh non porttitor. Morbi turpis ipsum, porttitor sit amet leo at, aliquet aliquet nibh.")), /* @__PURE__ */ h("div", {
    class: "bg-white bs-32 overflow-auto overscroll-b-none p-2 rounded shadow text-sm md:text-base"
  }, /* @__PURE__ */ h("p", null, "overscroll-b-none"), /* @__PURE__ */ h("p", {
    class: "text-gray-400 text-xs"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis magna neque, ultricies tempus est mollis eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra tortor non augue lacinia, vel tempus nunc pellentesque. Nulla et posuere lectus. Suspendisse ac magna at dolor luctus placerat. Suspendisse porttitor fermentum nibh non porttitor. Morbi turpis ipsum, porttitor sit amet leo at, aliquet aliquet nibh."))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 mbs-4 overflow-auto p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("div", {
    class: "bs-96 flex flex-col gap-4",
    style: "min-width: 200%"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white bs-32 is-64 overflow-auto overscroll-i-auto p-2 rounded shadow whitespace-nowrap text-sm md:text-base"
  }, /* @__PURE__ */ h("p", null, "overscroll-i-auto"), /* @__PURE__ */ h("p", {
    class: "text-gray-400 text-xs"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis magna neque, ultricies tempus est mollis eu.")), /* @__PURE__ */ h("div", {
    class: "bg-white bs-32 is-64 overflow-auto overscroll-i-contain p-2 row-start-2 rounded shadow whitespace-nowrap text-sm md:text-base"
  }, /* @__PURE__ */ h("p", null, "overscroll-i-contain"), /* @__PURE__ */ h("p", {
    class: "text-gray-400 text-xs"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis magna neque, ultricies tempus est mollis eu.")), /* @__PURE__ */ h("div", {
    class: "bg-white bs-32 is-64 overflow-auto overscroll-i-none p-2 row-start-3 rounded shadow whitespace-nowrap text-sm md:text-base"
  }, /* @__PURE__ */ h("p", null, "overscroll-i-none"), /* @__PURE__ */ h("p", {
    class: "text-gray-400 text-xs"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis magna neque, ultricies tempus est mollis eu."))))), /* @__PURE__ */ h("section", {
    id: "padding"
  }, /* @__PURE__ */ h("h2", {
    class: "font-bold text-2xl"
  }, "Padding"), /* @__PURE__ */ h("ul", {
    class: "mbs-2"
  }, /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_padding-block"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "padding-block"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_padding-inline"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "padding-inline"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_padding-block-start"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "padding-block-start"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_padding-block-end"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "padding-block-end"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_padding-inline-start"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "padding-inline-start"))), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_padding-inline-end"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "padding-inline-end")))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 flex flex-wrap gap-4 mbs-4 p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white plb-16 pli-2 rounded shadow text-sm md:text-base"
  }, "plb-16"), /* @__PURE__ */ h("div", {
    class: "bg-white pli-16 plb-2 rounded shadow text-sm md:text-base"
  }, "pli-16"), /* @__PURE__ */ h("div", {
    class: "bg-white pbs-16 pli-2 rounded shadow text-sm md:text-base"
  }, "pbs-16"), /* @__PURE__ */ h("div", {
    class: "bg-white pbe-16 pli-2 rounded shadow text-sm md:text-base"
  }, "pbe-16"), /* @__PURE__ */ h("div", {
    class: "bg-white pie-2 pis-16 plb-2 rounded shadow text-sm md:text-base"
  }, "pis-16"), /* @__PURE__ */ h("div", {
    class: "bg-white pie-16 pis-2 plb-2 rounded shadow text-sm md:text-base"
  }, "pie-16"))), /* @__PURE__ */ h("section", {
    id: "resize"
  }, /* @__PURE__ */ h("h2", {
    class: "font-bold text-2xl"
  }, "Resize"), /* @__PURE__ */ h("ul", {
    class: "mbs-2"
  }, /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_resize_flow_relative_support"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "resize: block"), " and", " ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "resize: inline")))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 flex flex-wrap gap-4 mbs-4 p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("textarea", {
    class: "resize-block text-sm md:text-base"
  }, "resize-block"), /* @__PURE__ */ h("textarea", {
    class: "resize-inline text-sm md:text-base"
  }, "resize-inline"))), /* @__PURE__ */ h("section", {
    id: "space-between"
  }, /* @__PURE__ */ h("h2", {
    class: "font-bold text-2xl"
  }, "Space Between"), /* @__PURE__ */ h("ul", {
    class: "mbs-2"
  }, /* @__PURE__ */ h("li", null, "These use the Flow-relative Margin properties. See", " ", /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "#margin"
  }, "Margin Utilities"), " ", "for browser support details.")), /* @__PURE__ */ h("div", {
    class: "space-b-4 mbs-4"
  }, /* @__PURE__ */ h("div", {
    class: "bg-gray-300 flow-root p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("p", {
    class: "mbe-2 text-sm md:text-base"
  }, "space-i-2"), /* @__PURE__ */ h("div", {
    class: "flex space-i-2"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 flow-root p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("p", {
    class: "mbe-2 text-sm md:text-base"
  }, "space-i-8"), /* @__PURE__ */ h("div", {
    class: "flex space-i-8"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 flow-root p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("p", {
    class: "mbe-2 text-sm md:text-base"
  }, "space-i-8 + space-i-reverse (with flex-row-reverse)"), /* @__PURE__ */ h("div", {
    class: "flex flex-row-reverse space-i-8 space-i-reverse"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }))), /* @__PURE__ */ h("div", {
    class: "flex space-i-4"
  }, /* @__PURE__ */ h("div", {
    class: "bg-gray-300 flex-1 flow-root p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("p", {
    class: "mbe-2 text-sm md:text-base"
  }, "space-b-2"), /* @__PURE__ */ h("div", {
    class: "flex flex-col space-b-2"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 flex-1 flow-root p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("p", {
    class: "mbe-2 text-sm md:text-base"
  }, "space-b-8"), /* @__PURE__ */ h("div", {
    class: "flex flex-col space-b-8"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 flex-1 flow-root p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("p", {
    class: "mbe-2 text-sm md:text-base"
  }, "space-b-8 + space-b-reverse (plus flex-col-reverse)"), /* @__PURE__ */ h("div", {
    class: "flex flex-col flex-col-reverse space-b-8 space-b-reverse"
  }, /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  }), /* @__PURE__ */ h("div", {
    class: "bg-white bs-16 is-16 rounded shadow"
  })))))), /* @__PURE__ */ h("section", {
    id: "text-align"
  }, /* @__PURE__ */ h("h2", {
    class: "font-bold text-2xl"
  }, "Text Align"), /* @__PURE__ */ h("ul", {
    class: "mbs-2"
  }, /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://caniuse.com/#feat=mdn-css_properties_text-align_flow_relative_values_start_and_end"
  }, "Can I use… ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "text-align: start"), " and", " ", /* @__PURE__ */ h("code", {
    class: "leading-none"
  }, "text-align: end")))), /* @__PURE__ */ h("div", {
    class: "bg-gray-300 mbs-4 p-4 rounded shadow-inner"
  }, /* @__PURE__ */ h("p", {
    class: "text-start text-sm md:text-base"
  }, "text-start"), /* @__PURE__ */ h("p", {
    class: "text-end text-sm md:text-base"
  }, "text-end"))), /* @__PURE__ */ h("section", {
    class: "font-light max-is-prose text-gray-700 text-rhythmLead"
  }, /* @__PURE__ */ h("p", null, "Ready to get started? Check out the", " ", /* @__PURE__ */ h("a", {
    class: "font-medium text-cyan-600 underline hover:text-cyan-800",
    href: "https://github.com/stevecochrane/tailwindcss-logical/#tailwindcss-logical"
  }, "README"), " ", "for more info on usage and configuration."))), /* @__PURE__ */ h("footer", {
    class: "border-bs border-gray-300 col-span-3 col-start-2 leading-6 pbe-12 pbs-6 text-center text-gray-500 text-sm"
  }, /* @__PURE__ */ h("p", null, /* @__PURE__ */ h("a", {
    class: "underline hover:text-black",
    href: "https://github.com/stevecochrane/tailwindcss-logical/"
  }, "tailwindcss-logical"), " ", "is a plugin for", " ", /* @__PURE__ */ h("a", {
    class: "underline hover:text-black",
    href: "https://tailwindcss.com/"
  }, "Tailwind CSS"), " ", "by", " ", /* @__PURE__ */ h("a", {
    class: "underline hover:text-black",
    href: "https://stevecochrane.com/"
  }, "Steve Cochrane"), ".", /* @__PURE__ */ h("br", {
    class: "hidden sm:inline"
  }), " If you like the project, please give it a star on GitHub. Thank you!")))));
}
