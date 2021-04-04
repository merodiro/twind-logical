import type { JSX } from 'preact'
import { useState } from 'preact/hooks'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from 'preact'

export default function App(): JSX.Element {
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr')

  return (
    <div class="bg-fixed bg-gradient-to-tr from-teal-300 via-cyan-400 to-lightBlue-400" dir={dir}>
      <div class="bg-white max-is-7xl mli-auto pli-4 md:pli-8 xl:pli-12">
        <div class="lg:gap-x-8 lg:grid lg:grid-cols-4 xl:gap-x-12">
          <div class="pbs-8 lg:pbe-12">
            <div class="block-start-8 sticky">
              <div class="flex flex-col">
                <h1 class="text-center">
                  <span class="block plb-0.5 text-6xl">🖖</span>{' '}
                  <span class="font-bold leading-8 text-xl">twind-logical</span>
                </h1>
                <div class="flex justify-center">
                  <button
                    onClick={() => setDir(dir === 'rtl' ? 'ltr' : 'rtl')}
                    id="switch-alignment"
                    class="appearance-none bg-gradient-to-br block bs-12 flex-1 font-medium from-cyan-100 mlb-6 rounded shadow-sm text-cyan-700 to-cyan-200 hover:from-cyan-100 hover:text-cyan-900 hover:to-cyan-300 sm:flex-none sm:pli-12 lg:flex-1 lg:pli-0"
                  >
                    Switch Text Direction
                  </button>
                </div>
              </div>
              <nav class="hidden lg:block">
                <ol class="font-light leading-loose text-gray-500">
                  <li>
                    <a
                      class="block pli-4 rounded hover:bg-gray-100 hover:text-black"
                      href="#block-size"
                    >
                      Block Size
                    </a>
                  </li>
                  <li>
                    <a
                      class="block pli-4 rounded hover:bg-gray-100 hover:text-black"
                      href="#border-radius"
                    >
                      Border Radius
                    </a>
                  </li>
                  <li>
                    <a
                      class="block pli-4 rounded hover:bg-gray-100 hover:text-black"
                      href="#border-width"
                    >
                      Border Width
                    </a>
                  </li>
                  <li>
                    <a
                      class="block pli-4 rounded hover:bg-gray-100 hover:text-black"
                      href="#divide-width"
                    >
                      Divide Width
                    </a>
                  </li>
                  <li>
                    <a
                      class="block pli-4 rounded hover:bg-gray-100 hover:text-black"
                      href="#float-and-clear"
                    >
                      Float and Clear
                    </a>
                  </li>
                  <li>
                    <a
                      class="block pli-4 rounded hover:bg-gray-100 hover:text-black"
                      href="#inline-size"
                    >
                      Inline Size
                    </a>
                  </li>
                  <li>
                    <a class="block pli-4 rounded hover:bg-gray-100 hover:text-black" href="#inset">
                      Inset
                    </a>
                  </li>
                  <li>
                    <a
                      class="block pli-4 rounded hover:bg-gray-100 hover:text-black"
                      href="#margin"
                    >
                      Margin
                    </a>
                  </li>
                  <li>
                    <a
                      class="block pli-4 rounded hover:bg-gray-100 hover:text-black"
                      href="#overscroll-behavior"
                    >
                      Overscroll Behavior
                    </a>
                  </li>
                  <li>
                    <a
                      class="block pli-4 rounded hover:bg-gray-100 hover:text-black"
                      href="#padding"
                    >
                      Padding
                    </a>
                  </li>
                  <li>
                    <a
                      class="block pli-4 rounded hover:bg-gray-100 hover:text-black"
                      href="#resize"
                    >
                      Resize
                    </a>
                  </li>
                  <li>
                    <a
                      class="block pli-4 rounded hover:bg-gray-100 hover:text-black"
                      href="#space-between"
                    >
                      Space Between
                    </a>
                  </li>
                  <li>
                    <a
                      class="block pli-4 rounded hover:bg-gray-100 hover:text-black"
                      href="#text-align"
                    >
                      Text Align
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <main class="col-span-3 pbe-24 pbs-4 space-b-12 lg:pbs-12">
            <section
              id="introduction"
              class="font-light max-is-prose space-b-6 text-gray-700 text-rhythmLead"
            >
              <p>
                The following is an demonstration of every type of utility provided by
                twind-logical. You can read about installation, configuration, and more in{' '}
                <a
                  class="font-medium text-cyan-600 underline hover:text-cyan-800"
                  href="https://github.com/merodiro/twind-logical#twind-logical"
                >
                  the project's README
                </a>
                .
              </p>
              <p>
                This page is entirely styled with twind, from{' '}
                <a
                  class="font-medium text-cyan-600 underline hover:text-cyan-800"
                  href="https://github.com/merodiro/twind-logical/blob/main/example/index.tsx"
                >
                  a mostly unmodified twind config file
                </a>
                .
              </p>
              <p>
                To see how these utilities enable multi-directional layouts, click the Switch Text
                Direction button! All it does is flip the <code class="leading-none">dir</code>{' '}
                attribute on the <code class="leading-none">&lt;html&gt;</code> element from{' '}
                <code class="leading-none">"ltr"</code> to <code class="leading-none">"rtl"</code>{' '}
                and back again, and the rest is handled through the magic of logical properties and
                values.
              </p>
            </section>

            <section id="block-size">
              <h2 class="font-bold text-2xl">Block Size</h2>
              <ul class="mbs-2">
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_block-size"
                  >
                    Can I use… <code class="leading-none">block-size</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_min-block-size"
                  >
                    Can I use… <code class="leading-none">min-block-size</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_max-block-size"
                  >
                    Can I use… <code class="leading-none">max-block-size</code>
                  </a>
                </li>
              </ul>
              <div class="bg-gray-300 gap-4 grid grid-cols-4 mbs-4 p-4 rounded shadow-inner">
                <div class="bg-white bs-12 p-2 rounded shadow text-sm md:text-base">bs-12</div>
                <div class="bg-white bs-24 p-2 rounded shadow text-sm md:text-base">bs-24</div>
                <div class="bg-white bs-36 p-2 rounded shadow text-sm md:text-base">bs-36</div>
              </div>
              <div class="bg-gray-300 bs-48 gap-4 grid grid-cols-4 mbs-4 p-4 rounded shadow-inner">
                <div class="bg-white bs-12 min-bs-0 p-2 rounded shadow text-sm md:text-base">
                  min-bs-0
                </div>
                <div class="bg-white bs-12 min-bs-full p-2 rounded shadow text-sm md:text-base">
                  min-bs-full
                </div>
              </div>
              <div class="bg-gray-300 bs-24 gap-4 grid grid-cols-4 grid-rows-1 mbs-4 p-4 rounded shadow-inner">
                <div class="bg-white bs-36 max-bs-full p-2 rounded shadow text-sm md:text-base">
                  max-bs-full
                </div>
              </div>
            </section>

            <section id="border-radius">
              <h2 class="font-bold text-2xl">Border Radius</h2>
              <ul class="mbs-2">
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_border-start-start-radius"
                  >
                    Can I use… <code class="leading-none">border-start-start-radius</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_border-start-end-radius"
                  >
                    Can I use… <code class="leading-none">border-start-end-radius</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_border-end-start-radius"
                  >
                    Can I use… <code class="leading-none">border-end-start-radius</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_border-end-end-radius"
                  >
                    Can I use… <code class="leading-none">border-end-end-radius</code>
                  </a>
                </li>
              </ul>
              <div class="bg-gray-300 gap-4 grid grid-cols-4 mbs-4 p-4 rounded shadow-inner">
                <div class="bg-white bs-16 p-2 rounded-bs-xl shadow text-sm md:text-base">
                  rounded-bs-xl
                </div>
                <div class="bg-white bs-16 p-2 rounded-be-xl shadow text-sm md:text-base">
                  rounded-be-xl
                </div>
                <div class="bg-white bs-16 p-2 rounded-is-xl shadow text-sm md:text-base">
                  rounded-is-xl
                </div>
                <div class="bg-white bs-16 p-2 rounded-ie-xl shadow text-sm md:text-base">
                  rounded-ie-xl
                </div>
                <div class="bg-white bs-16 p-2 rounded-ss-xl shadow text-sm md:text-base">
                  rounded-ss-xl
                </div>
                <div class="bg-white bs-16 p-2 rounded-se-xl shadow text-sm md:text-base">
                  rounded-se-xl
                </div>
                <div class="bg-white bs-16 p-2 rounded-es-xl shadow text-sm md:text-base">
                  rounded-es-xl
                </div>
                <div class="bg-white bs-16 p-2 rounded-ee-xl shadow text-sm md:text-base">
                  rounded-ee-xl
                </div>
              </div>
            </section>

            <section id="border-width">
              <h2 class="font-bold text-2xl">Border Width</h2>
              <ul class="mbs-2">
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_border-block-start"
                  >
                    Can I use… <code class="leading-none">border-block-start</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_border-block-end"
                  >
                    Can I use… <code class="leading-none">border-block-end</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_border-inline-start"
                  >
                    Can I use… <code class="leading-none">border-inline-start</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_border-inline-end"
                  >
                    Can I use… <code class="leading-none">border-inline-end</code>
                  </a>
                </li>
              </ul>
              <div class="bg-gray-300 gap-4 grid grid-cols-4 mbs-4 p-4 rounded shadow-inner">
                <div class="bg-white border-0 border-blue-400 border-bs-8 border-solid bs-16 p-2 rounded shadow text-sm md:text-base">
                  border-bs-8
                </div>
                <div class="bg-white border-0 border-be-8 border-blue-400 border-solid bs-16 p-2 rounded shadow text-sm md:text-base">
                  border-be-8
                </div>
                <div class="bg-white border-0 border-blue-400 border-is-8 border-solid bs-16 p-2 rounded shadow text-sm md:text-base">
                  border-is-8
                </div>
                <div class="bg-white border-0 border-blue-400 border-ie-8 border-solid bs-16 p-2 rounded shadow text-sm md:text-base">
                  border-ie-8
                </div>
              </div>
            </section>

            <section id="divide-width">
              <h2 class="font-bold text-2xl">Divide Width</h2>
              <p class="mbs-2">
                These use the Flow-relative Border Width properties. See{' '}
                <a
                  class="font-medium text-cyan-600 underline hover:text-cyan-800"
                  href="#border-width"
                >
                  Border Width Utilities
                </a>{' '}
                for browser support details.
              </p>
              <div class="space-b-4 mbs-4">
                <div class="bg-gray-300 p-4 rounded shadow-inner">
                  <p class="mbe-2 text-sm md:text-base">divide-i</p>
                  <div class="flex divide-i">
                    <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                    <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                    <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                    <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                    <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                    <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                  </div>
                </div>
                <div class="bg-gray-300 p-4 rounded shadow-inner">
                  <p class="mbe-2 text-sm md:text-base">divide-i-4</p>
                  <div class="flex divide-i-4">
                    <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                    <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                    <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                    <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                    <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                    <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                  </div>
                </div>
                <div class="bg-gray-300 p-4 rounded shadow-inner">
                  <p class="mbe-2 text-sm md:text-base">
                    divide-i-4 + divide-i-reverse (with flex-row-reverse)
                  </p>
                  <div class="divide-i-4 divide-i-reverse flex flex-row-reverse">
                    <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                    <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                    <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                    <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                    <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                    <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                  </div>
                </div>
                <div class="flex space-i-4">
                  <div class="bg-gray-300 flex-1 p-4 rounded shadow-inner">
                    <p class="mbe-2 text-sm md:text-base">divide-b</p>
                    <div class="divide-b flex flex-col">
                      <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                      <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                      <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                      <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                    </div>
                  </div>
                  <div class="bg-gray-300 flex-1 p-4 rounded shadow-inner">
                    <p class="mbe-2 text-sm md:text-base">divide-b-4</p>
                    <div class="divide-b-4 flex flex-col">
                      <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                      <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                      <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                      <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                    </div>
                  </div>
                  <div class="bg-gray-300 flex-1 p-4 rounded shadow-inner">
                    <p class="mbe-2 text-sm md:text-base">
                      divide-b-4 + divide-b-reverse (plus flex-col-reverse)
                    </p>
                    <div class="divide-b-4 divide-b-reverse flex flex-col flex-col-reverse">
                      <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                      <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                      <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                      <div class="bg-white border-0 border-solid border-yellow-400 bs-16 is-16"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="float-and-clear">
              <h2 class="font-bold text-2xl">Float and Clear</h2>
              <ul class="mbs-2">
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_float_flow_relative_values"
                  >
                    Can I use… <code class="leading-none">float: inline-start</code> and{' '}
                    <code class="leading-none">float: inline-end</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_clear_flow_relative_values"
                  >
                    Can I use… <code class="leading-none">clear: inline-start</code> and{' '}
                    <code class="leading-none">clear: inline-end</code>
                  </a>
                </li>
              </ul>
              <div class="bg-gray-300 flow-root mbs-4 p-4 rounded shadow-inner space-b-4">
                <div class="bg-white bs-16 float-start is-1/4 p-2 rounded shadow text-sm md:text-base">
                  float-start
                </div>
                <div class="bg-white bs-16 clear-start is-1/4 p-2 rounded shadow text-sm md:text-base">
                  clear-start
                </div>
                <div class="bg-white bs-16 float-end is-1/4 p-2 rounded shadow text-sm md:text-base">
                  float-end
                </div>
                <div class="bg-white bs-16 clear-end is-1/4 p-2 rounded shadow text-sm md:text-base">
                  clear-end
                </div>
              </div>
            </section>

            <section id="inline-size">
              <h2 class="font-bold text-2xl">Inline Size</h2>
              <ul class="mbs-2">
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_inline-size"
                  >
                    Can I use… <code class="leading-none">inline-size</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_min-inline-size"
                  >
                    Can I use… <code class="leading-none">min-inline-size</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_max-inline-size"
                  >
                    Can I use… <code class="leading-none">max-inline-size</code>
                  </a>
                </li>
              </ul>
              <div class="bg-gray-300 flex mbs-4 p-4 rounded shadow-inner space-i-4">
                <div class="bg-white bs-16 is-16 p-2 rounded shadow text-sm md:text-base">
                  is-16
                </div>
                <div class="bg-white bs-16 is-32 p-2 rounded shadow text-sm md:text-base">
                  is-32
                </div>
                <div class="bg-white bs-16 is-48 p-2 rounded shadow text-sm md:text-base">
                  is-48
                </div>
              </div>
              <div class="bg-gray-300 flow-root mbs-4 p-4 rounded shadow-inner space-b-4">
                <div class="bg-white bs-16 clear-start float-start min-is-0 p-2 rounded shadow text-sm md:text-base">
                  min-is-0
                </div>
                <div class="bg-white bs-16 clear-start float-start min-is-full p-2 rounded shadow text-sm md:text-base">
                  min-is-full
                </div>
              </div>
              <div class="bg-gray-300 flow-root mbs-4 p-4 rounded shadow-inner space-b-4">
                <div class="bg-white bs-16 clear-start float-start is-32 is-full max-is-sm p-2 rounded shadow text-sm md:text-base">
                  max-is-sm
                </div>
                <div class="bg-white bs-16 clear-start float-start is-32 is-full max-is-md p-2 rounded shadow text-sm md:text-base">
                  max-is-md
                </div>
                <div class="bg-white bs-16 clear-start float-start is-32 is-full max-is-lg p-2 rounded shadow text-sm md:text-base">
                  max-is-lg
                </div>
              </div>
            </section>

            <section id="inset">
              <h2 class="font-bold text-2xl">Inset</h2>
              <ul class="mbs-2">
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_inset-block"
                  >
                    Can I use… <code class="leading-none">inset-block</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_inset-inline"
                  >
                    Can I use… <code class="leading-none">inset-inline</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_inset-block-start"
                  >
                    Can I use… <code class="leading-none">inset-block-start</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_inset-block-end"
                  >
                    Can I use… <code class="leading-none">inset-block-end</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_inset-inline-start"
                  >
                    Can I use… <code class="leading-none">inset-inline-start</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_inset-inline-end"
                  >
                    Can I use… <code class="leading-none">inset-inline-end</code>
                  </a>
                </li>
              </ul>
              <div class="bg-gray-300 bs-32 mbs-4 p-4 relative rounded shadow-inner">
                <div class="absolute bg-white bs-16 inline-start-4 is-1/4 p-2 rounded shadow text-sm md:text-base">
                  inline-start-4
                </div>
                <div class="absolute bg-white bs-16 inline-end-4 is-1/4 p-2 rounded shadow text-sm md:text-base">
                  inline-end-4
                </div>
              </div>
              <div class="bg-gray-300 bs-32 mbs-4 p-4 relative rounded shadow-inner">
                <div class="absolute bg-white bs-16 inset-inline-4 p-2 rounded shadow text-sm md:text-base">
                  inset-inline-4
                </div>
              </div>
              <div class="flex space-i-4">
                <div class="bg-gray-300 bs-64 flex-1 mbs-4 p-4 relative rounded shadow-inner">
                  <div class="absolute bg-white bs-16 block-start-4 is-1/3 p-2 rounded shadow text-sm md:text-base">
                    block-start-4
                  </div>
                  <div class="absolute bg-white bs-16 block-end-4 is-1/3 p-2 rounded shadow text-sm md:text-base">
                    block-end-4
                  </div>
                </div>
                <div class="bg-gray-300 bs-64 flex-1 mbs-4 p-4 relative rounded shadow-inner">
                  <div class="absolute bg-white inset-block-4 is-1/3 p-2 rounded shadow text-sm md:text-base">
                    inset-block-4
                  </div>
                </div>
              </div>
            </section>

            <section id="margin">
              <h2 class="font-bold text-2xl">Margin</h2>
              <ul class="mbs-2">
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_margin-block"
                  >
                    Can I use… <code class="leading-none">margin-block</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_margin-inline"
                  >
                    Can I use… <code class="leading-none">margin-inline</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_margin-block-start"
                  >
                    Can I use… <code class="leading-none">margin-block-start</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_margin-block-end"
                  >
                    Can I use… <code class="leading-none">margin-block-end</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_margin-inline-start"
                  >
                    Can I use… <code class="leading-none">margin-inline-start</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_margin-inline-end"
                  >
                    Can I use… <code class="leading-none">margin-inline-end</code>
                  </a>
                </li>
              </ul>
              <div class="bg-gray-300 flex flex-wrap mbs-4 p-4 rounded shadow-inner">
                <div class="bg-white mlb-16 p-2 rounded shadow text-sm md:text-base">mlb-16</div>
                <div class="bg-white mli-16 p-2 rounded shadow text-sm md:text-base">mli-16</div>
                <div class="bg-white mbs-16 p-2 rounded shadow text-sm md:text-base">mbs-16</div>
                <div class="bg-white mbe-16 p-2 rounded shadow text-sm md:text-base">mbe-16</div>
                <div class="bg-white mis-16 p-2 rounded shadow text-sm md:text-base">mis-16</div>
                <div class="bg-white mie-16 p-2 rounded shadow text-sm md:text-base">mie-16</div>
              </div>
            </section>

            <section id="overscroll-behavior">
              <h2 class="font-bold text-2xl">Overscroll Behavior</h2>
              <ul class="mbs-2">
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/mdn-css_properties_overscroll-behavior-block"
                  >
                    Can I use… <code class="leading-none">overscroll-behavior-block</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/mdn-css_properties_overscroll-behavior-inline"
                  >
                    Can I use… <code class="leading-none">overscroll-behavior-inline</code>
                  </a>
                </li>
              </ul>
              <div class="bg-gray-300 gap-4 grid grid-cols-3 mbs-4 p-4 rounded shadow-inner">
                <div class="bg-white bs-32 overflow-auto overscroll-b-auto p-2 rounded shadow text-sm md:text-base">
                  <p>overscroll-b-auto</p>
                  <p class="text-gray-400 text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis magna
                    neque, ultricies tempus est mollis eu. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Fusce pharetra tortor non augue lacinia, vel tempus nunc
                    pellentesque. Nulla et posuere lectus. Suspendisse ac magna at dolor luctus
                    placerat. Suspendisse porttitor fermentum nibh non porttitor. Morbi turpis
                    ipsum, porttitor sit amet leo at, aliquet aliquet nibh.
                  </p>
                </div>
                <div class="bg-white bs-32 overflow-auto overscroll-b-contain p-2 rounded shadow text-sm md:text-base">
                  <p>overscroll-b-contain</p>
                  <p class="text-gray-400 text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis magna
                    neque, ultricies tempus est mollis eu. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Fusce pharetra tortor non augue lacinia, vel tempus nunc
                    pellentesque. Nulla et posuere lectus. Suspendisse ac magna at dolor luctus
                    placerat. Suspendisse porttitor fermentum nibh non porttitor. Morbi turpis
                    ipsum, porttitor sit amet leo at, aliquet aliquet nibh.
                  </p>
                </div>
                <div class="bg-white bs-32 overflow-auto overscroll-b-none p-2 rounded shadow text-sm md:text-base">
                  <p>overscroll-b-none</p>
                  <p class="text-gray-400 text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis magna
                    neque, ultricies tempus est mollis eu. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Fusce pharetra tortor non augue lacinia, vel tempus nunc
                    pellentesque. Nulla et posuere lectus. Suspendisse ac magna at dolor luctus
                    placerat. Suspendisse porttitor fermentum nibh non porttitor. Morbi turpis
                    ipsum, porttitor sit amet leo at, aliquet aliquet nibh.
                  </p>
                </div>
              </div>
              <div class="bg-gray-300 mbs-4 overflow-auto p-4 rounded shadow-inner">
                <div class="bs-96 flex flex-col gap-4" style="min-width: 200%">
                  <div class="bg-white bs-32 is-64 overflow-auto overscroll-i-auto p-2 rounded shadow whitespace-nowrap text-sm md:text-base">
                    <p>overscroll-i-auto</p>
                    <p class="text-gray-400 text-xs">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis magna
                      neque, ultricies tempus est mollis eu.
                    </p>
                  </div>
                  <div class="bg-white bs-32 is-64 overflow-auto overscroll-i-contain p-2 row-start-2 rounded shadow whitespace-nowrap text-sm md:text-base">
                    <p>overscroll-i-contain</p>
                    <p class="text-gray-400 text-xs">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis magna
                      neque, ultricies tempus est mollis eu.
                    </p>
                  </div>
                  <div class="bg-white bs-32 is-64 overflow-auto overscroll-i-none p-2 row-start-3 rounded shadow whitespace-nowrap text-sm md:text-base">
                    <p>overscroll-i-none</p>
                    <p class="text-gray-400 text-xs">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis magna
                      neque, ultricies tempus est mollis eu.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="padding">
              <h2 class="font-bold text-2xl">Padding</h2>
              <ul class="mbs-2">
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_padding-block"
                  >
                    Can I use… <code class="leading-none">padding-block</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_padding-inline"
                  >
                    Can I use… <code class="leading-none">padding-inline</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_padding-block-start"
                  >
                    Can I use… <code class="leading-none">padding-block-start</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_padding-block-end"
                  >
                    Can I use… <code class="leading-none">padding-block-end</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_padding-inline-start"
                  >
                    Can I use… <code class="leading-none">padding-inline-start</code>
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_padding-inline-end"
                  >
                    Can I use… <code class="leading-none">padding-inline-end</code>
                  </a>
                </li>
              </ul>
              <div class="bg-gray-300 flex flex-wrap gap-4 mbs-4 p-4 rounded shadow-inner">
                <div class="bg-white plb-16 pli-2 rounded shadow text-sm md:text-base">plb-16</div>
                <div class="bg-white pli-16 plb-2 rounded shadow text-sm md:text-base">pli-16</div>
                <div class="bg-white pbs-16 pli-2 rounded shadow text-sm md:text-base">pbs-16</div>
                <div class="bg-white pbe-16 pli-2 rounded shadow text-sm md:text-base">pbe-16</div>
                <div class="bg-white pie-2 pis-16 plb-2 rounded shadow text-sm md:text-base">
                  pis-16
                </div>
                <div class="bg-white pie-16 pis-2 plb-2 rounded shadow text-sm md:text-base">
                  pie-16
                </div>
              </div>
            </section>

            <section id="resize">
              <h2 class="font-bold text-2xl">Resize</h2>
              <ul class="mbs-2">
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_resize_flow_relative_support"
                  >
                    Can I use… <code class="leading-none">resize: block</code> and{' '}
                    <code class="leading-none">resize: inline</code>
                  </a>
                </li>
              </ul>
              <div class="bg-gray-300 flex flex-wrap gap-4 mbs-4 p-4 rounded shadow-inner">
                <textarea class="resize-block text-sm md:text-base">resize-block</textarea>
                <textarea class="resize-inline text-sm md:text-base">resize-inline</textarea>
              </div>
            </section>

            <section id="space-between">
              <h2 class="font-bold text-2xl">Space Between</h2>
              <ul class="mbs-2">
                <li>
                  These use the Flow-relative Margin properties. See{' '}
                  <a class="font-medium text-cyan-600 underline hover:text-cyan-800" href="#margin">
                    Margin Utilities
                  </a>{' '}
                  for browser support details.
                </li>
              </ul>
              <div class="space-b-4 mbs-4">
                <div class="bg-gray-300 flow-root p-4 rounded shadow-inner">
                  <p class="mbe-2 text-sm md:text-base">space-i-2</p>
                  <div class="flex space-i-2">
                    <div class="bg-white bs-16 is-16 rounded shadow"></div>
                    <div class="bg-white bs-16 is-16 rounded shadow"></div>
                    <div class="bg-white bs-16 is-16 rounded shadow"></div>
                    <div class="bg-white bs-16 is-16 rounded shadow"></div>
                    <div class="bg-white bs-16 is-16 rounded shadow"></div>
                    <div class="bg-white bs-16 is-16 rounded shadow"></div>
                  </div>
                </div>
                <div class="bg-gray-300 flow-root p-4 rounded shadow-inner">
                  <p class="mbe-2 text-sm md:text-base">space-i-8</p>
                  <div class="flex space-i-8">
                    <div class="bg-white bs-16 is-16 rounded shadow"></div>
                    <div class="bg-white bs-16 is-16 rounded shadow"></div>
                    <div class="bg-white bs-16 is-16 rounded shadow"></div>
                    <div class="bg-white bs-16 is-16 rounded shadow"></div>
                    <div class="bg-white bs-16 is-16 rounded shadow"></div>
                    <div class="bg-white bs-16 is-16 rounded shadow"></div>
                  </div>
                </div>
                <div class="bg-gray-300 flow-root p-4 rounded shadow-inner">
                  <p class="mbe-2 text-sm md:text-base">
                    space-i-8 + space-i-reverse (with flex-row-reverse)
                  </p>
                  <div class="flex flex-row-reverse space-i-8 space-i-reverse">
                    <div class="bg-white bs-16 is-16 rounded shadow"></div>
                    <div class="bg-white bs-16 is-16 rounded shadow"></div>
                    <div class="bg-white bs-16 is-16 rounded shadow"></div>
                    <div class="bg-white bs-16 is-16 rounded shadow"></div>
                    <div class="bg-white bs-16 is-16 rounded shadow"></div>
                    <div class="bg-white bs-16 is-16 rounded shadow"></div>
                  </div>
                </div>
                <div class="flex space-i-4">
                  <div class="bg-gray-300 flex-1 flow-root p-4 rounded shadow-inner">
                    <p class="mbe-2 text-sm md:text-base">space-b-2</p>
                    <div class="flex flex-col space-b-2">
                      <div class="bg-white bs-16 is-16 rounded shadow"></div>
                      <div class="bg-white bs-16 is-16 rounded shadow"></div>
                      <div class="bg-white bs-16 is-16 rounded shadow"></div>
                      <div class="bg-white bs-16 is-16 rounded shadow"></div>
                    </div>
                  </div>
                  <div class="bg-gray-300 flex-1 flow-root p-4 rounded shadow-inner">
                    <p class="mbe-2 text-sm md:text-base">space-b-8</p>
                    <div class="flex flex-col space-b-8">
                      <div class="bg-white bs-16 is-16 rounded shadow"></div>
                      <div class="bg-white bs-16 is-16 rounded shadow"></div>
                      <div class="bg-white bs-16 is-16 rounded shadow"></div>
                      <div class="bg-white bs-16 is-16 rounded shadow"></div>
                    </div>
                  </div>
                  <div class="bg-gray-300 flex-1 flow-root p-4 rounded shadow-inner">
                    <p class="mbe-2 text-sm md:text-base">
                      space-b-8 + space-b-reverse (plus flex-col-reverse)
                    </p>
                    <div class="flex flex-col flex-col-reverse space-b-8 space-b-reverse">
                      <div class="bg-white bs-16 is-16 rounded shadow"></div>
                      <div class="bg-white bs-16 is-16 rounded shadow"></div>
                      <div class="bg-white bs-16 is-16 rounded shadow"></div>
                      <div class="bg-white bs-16 is-16 rounded shadow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="text-align">
              <h2 class="font-bold text-2xl">Text Align</h2>
              <ul class="mbs-2">
                <li>
                  <a
                    class="font-medium text-cyan-600 underline hover:text-cyan-800"
                    href="https://caniuse.com/#feat=mdn-css_properties_text-align_flow_relative_values_start_and_end"
                  >
                    Can I use… <code class="leading-none">text-align: start</code> and{' '}
                    <code class="leading-none">text-align: end</code>
                  </a>
                </li>
              </ul>
              <div class="bg-gray-300 mbs-4 p-4 rounded shadow-inner">
                <p class="text-start text-sm md:text-base">text-start</p>
                <p class="text-end text-sm md:text-base">text-end</p>
              </div>
            </section>

            <section class="font-light max-is-prose text-gray-700 text-rhythmLead">
              <p>
                Ready to get started? Check out the{' '}
                <a
                  class="font-medium text-cyan-600 underline hover:text-cyan-800"
                  href="https://github.com/merodiro/twind-logical#twind-logical"
                >
                  README
                </a>{' '}
                for more info on usage and configuration.
              </p>
            </section>
          </main>
          <footer class="border-bs border-gray-300 col-span-3 col-start-2 leading-6 pbe-12 pbs-6 text-center text-gray-500 text-sm">
            <p>
              <a
                class="underline hover:text-black"
                href="https://github.com/merodiro/twind-logical"
              >
                twind-logical
              </a>{' '}
              is a plugin for{' '}
              <a class="underline hover:text-black" href="http://twind.dev/">
                twind
              </a>{' '}
              by{' '}
              <a class="underline hover:text-black" href="https://twitter.com/amr_c137">
                Amr Gad
              </a>
              .<br class="hidden sm:inline" /> If you like the project, please give it a star on
              GitHub. Thank you!
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
