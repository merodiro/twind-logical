import type { Negatable, FromTheme, Plugin, Join } from 'twind'

declare module 'twind' {
  interface Plugins {
    float: 'start' | 'end'
    clear: 'start' | 'end'
    text: 'start' | 'end'
    resize: 'block' | 'inline'

    overscroll: Join<'b' | 'i', 'auto' | 'contain' | 'none'>

    bs: FromTheme<'width'>
    is: FromTheme<'width'>
    min: Join<'is' | 'bs', FromTheme<'minWidth'>>
    max: Join<'is' | 'bs', FromTheme<'maxWidth'>>

    mlb: Negatable<FromTheme<'margin'>>
    mli: Negatable<FromTheme<'margin'>>

    mbs: Negatable<FromTheme<'margin'>>
    mbe: Negatable<FromTheme<'margin'>>
    mis: Negatable<FromTheme<'margin'>>
    mie: Negatable<FromTheme<'margin'>>

    plb: Negatable<FromTheme<'padding'>>
    pli: Negatable<FromTheme<'padding'>>

    pbs: Negatable<FromTheme<'padding'>>
    pbe: Negatable<FromTheme<'padding'>>
    pis: Negatable<FromTheme<'padding'>>
    pie: Negatable<FromTheme<'padding'>>

    space: Negatable<Join<'i' | 'b', FromTheme<'space'>>> | Join<'i' | 'b', 'reverse'>
    divide: Negatable<Join<'i' | 'b', FromTheme<'divideWidth'>>> | Join<'i' | 'b', 'reverse'>

    inset: Join<'block' | 'inline', FromTheme<'inset'>>
    block: Join<'start' | 'end', FromTheme<'inset'>>
    inline: Join<'start' | 'end', FromTheme<'inset'>>

    border: Join<'bs' | 'be' | 'is' | 'ie', FromTheme<'borderWidth'>>
    rounded: Join<'bs' | 'be' | 'is' | 'ie' | 'ss' | 'se' | 'es' | 'ee', FromTheme<'borderRadius'>>
  }
}

const twindLogical: Record<string, Plugin> = {
  // Float
  'float-start': {
    '&[dir=ltr], [dir=ltr] &': { float: 'left' },
    '&[dir=rtl], [dir=rtl] &': { float: 'right' },
  },
  'float-end': {
    '&[dir=ltr], [dir=ltr] &': { float: 'right' },
    '&[dir=rtl], [dir=rtl] &': { float: 'left' },
  },

  // Clear
  'clear-start': {
    '&[dir=ltr], [dir=ltr] &': { clear: 'left' },
    '&[dir=rtl], [dir=rtl] &': { clear: 'right' },
  },
  'clear-end': {
    '&[dir=ltr], [dir=ltr] &': { clear: 'right' },
    '&[dir=rtl], [dir=rtl] &': { clear: 'left' },
  },

  // text align
  'text-start': {
    '&[dir=ltr], [dir=ltr] &': { textAlign: 'left' },
    '&[dir=rtl], [dir=rtl] &': { textAlign: 'right' },
  },
  'text-end': {
    '&[dir=ltr], [dir=ltr] &': { textAlign: 'right' },
    '&[dir=rtl], [dir=rtl] &': { textAlign: 'left' },
  },

  // resize
  'resize-block': { resize: 'vertical' },
  'resize-inline': { resize: 'horizontal' },

  // overscroll
  'overscroll-b-auto': { overscrollBehaviorY: 'auto' },
  'overscroll-b-contain': { overscrollBehaviorY: 'contain' },
  'overscroll-b-none': { overscrollBehaviorY: 'none' },
  'overscroll-i-auto': { overscrollBehaviorX: 'auto' },
  'overscroll-i-contain': { overscrollBehaviorX: 'contain' },
  'overscroll-i-none': { overscrollBehaviorX: 'none' },

  // block size
  bs: (params, { theme }) => {
    const value = theme('width', params)
    return value && { height: value }
  },

  // min block size
  'min-bs': (params, { theme }) => {
    const value = theme('minWidth', params)
    return value && { minHeight: value }
  },

  // max block size
  'max-bs': (params, { theme }) => {
    const value = theme('maxWidth', params)
    return value && { maxHeight: value }
  },

  // inline size
  is: (params, { theme }) => {
    const value = theme('width', params)
    return value && { width: value }
  },

  // min inline size
  'min-is': (params, { theme }) => {
    const value = theme('minWidth', params)
    return value && { minWidth: value }
  },

  // max inline size
  'max-is': (params, { theme }) => {
    const value = theme('maxWidth', params)
    return value && { maxWidth: value }
  },

  // margin shorthand
  mlb: (params, { theme }) => {
    const value = theme('margin', params)
    return (
      value && {
        marginTop: value,
        marginBottom: value,
      }
    )
  },
  mli: (params, { theme }) => {
    const value = theme('margin', params)
    return (
      value && {
        marginRight: value,
        marginLeft: value,
      }
    )
  },

  // margin single side
  mbs: (params, { theme }) => {
    const value = theme('margin', params)
    return value && { marginTop: value }
  },
  mbe: (params, { theme }) => {
    const value = theme('margin', params)
    return value && { marginBottom: value }
  },
  mis: (params, { theme }) => {
    const value = theme('margin', params)
    return (
      value && {
        '&[dir=ltr], [dir=ltr] &': { marginLeft: value },
        '&[dir=rtl], [dir=rtl] &': { marginRight: value },
      }
    )
  },
  mie: (params, { theme }) => {
    const value = theme('margin', params)
    return (
      value && {
        '&[dir=ltr], [dir=ltr] &': { marginRight: value },
        '&[dir=rtl], [dir=rtl] &': { marginLeft: value },
      }
    )
  },

  // padding shorthand
  plb: (params, { theme }) => {
    const value = theme('padding', params)
    return (
      value && {
        paddingTop: value,
        paddingBottom: value,
      }
    )
  },
  pli: (params, { theme }) => {
    const value = theme('padding', params)
    return (
      value && {
        paddingRight: value,
        paddingLeft: value,
      }
    )
  },

  // padding single side
  pbs: (params, { theme }) => {
    const value = theme('padding', params)
    return value && { paddingTop: value }
  },
  pbe: (params, { theme }) => {
    const value = theme('padding', params)
    return value && { paddingBottom: value }
  },
  pis: (params, { theme }) => {
    const value = theme('padding', params)
    return (
      value && {
        '&[dir=ltr], [dir=ltr] &': { paddingLeft: value },
        '&[dir=rtl], [dir=rtl] &': { paddingRight: value },
      }
    )
  },
  pie: (params, { theme }) => {
    const value = theme('padding', params)
    return (
      value && {
        '&[dir=ltr], [dir=ltr] &': { paddingRight: value },
        '&[dir=rtl], [dir=rtl] &': { paddingLeft: value },
      }
    )
  },

  // space between
  'space-b': (params, { theme }) => {
    const value = theme('space', params)
    return (
      value && {
        '> :not([hidden]) ~ :not([hidden])': {
          '--tw-space-b-reverse': '0',
          marginTop: `calc(${value} * calc(1 - var(--tw-space-b-reverse)))`,
          marginBottom: `calc(${value} * var(--tw-space-b-reverse))`,
        },
      }
    )
  },
  'space-b-reverse': {
    '> :not([hidden]) ~ :not([hidden])': {
      '--tw-space-b-reverse': '1',
    },
  },
  'space-i': (params, { theme }) => {
    const value = theme('space', params)
    return (
      value && {
        '> :not([hidden]) ~ :not([hidden])': {
          '--tw-space-i-reverse': '0',

          '&[dir=ltr], [dir=ltr] &': {
            marginLeft: `calc(${value} * calc(1 - var(--tw-space-i-reverse)))`,
            marginRight: `calc(${value} * var(--tw-space-i-reverse))`,
          },
          '&[dir=rtl], [dir=rtl] &': {
            marginRight: `calc(${value} * calc(1 - var(--tw-space-i-reverse)))`,
            marginLeft: `calc(${value} * var(--tw-space-i-reverse))`,
          },
        },
      }
    )
  },
  'space-i-reverse': {
    '> :not([hidden]) ~ :not([hidden])': {
      '--tw-space-i-reverse': '1',
    },
  },

  // inset
  'inset-block': (params, { theme }) => {
    const value = theme('inset', params)
    return (
      value && {
        top: value,
        bottom: value,
      }
    )
  },
  'inset-inline': (params, { theme }) => {
    const value = theme('inset', params)
    return (
      value && {
        left: value,
        right: value,
      }
    )
  },

  // inset single value
  'block-start': (params, { theme }) => {
    const value = theme('inset', params)
    return value && { top: value }
  },
  'block-end': (params, { theme }) => {
    const value = theme('inset', params)
    return value && { bottom: value }
  },
  'inline-start': (params, { theme }) => {
    const value = theme('inset', params)
    return (
      value && {
        '&[dir=ltr], [dir=ltr] &': { left: value },
        '&[dir=rtl], [dir=rtl] &': { right: value },
      }
    )
  },
  'inline-end': (params, { theme }) => {
    const value = theme('inset', params)
    return (
      value && {
        '&[dir=ltr], [dir=ltr] &': { right: value },
        '&[dir=rtl], [dir=rtl] &': { left: value },
      }
    )
  },

  // border width
  'border-bs': (params, { theme }) => {
    const value = theme('borderWidth', params)
    return value && { borderTopWidth: value }
  },
  'border-be': (params, { theme }) => {
    const value = theme('borderWidth', params)
    return value && { borderBottomWidth: value }
  },
  'border-is': (params, { theme }) => {
    const value = theme('borderWidth', params)
    return (
      value && {
        '&[dir=ltr], [dir=ltr] &': { borderLeftWidth: value },
        '&[dir=rtl], [dir=rtl] &': { borderRightWidth: value },
      }
    )
  },
  'border-ie': (params, { theme }) => {
    const value = theme('borderWidth', params)
    return (
      value && {
        '&[dir=ltr], [dir=ltr] &': { borderRightWidth: value },
        '&[dir=rtl], [dir=rtl] &': { borderLeftWidth: value },
      }
    )
  },

  // border radius side
  'rounded-bs': (params, { theme }) => {
    const value = theme('borderRadius', params)
    return (
      value && {
        borderTopLeftRadius: value,
        borderTopRightRadius: value,
      }
    )
  },
  'rounded-be': (params, { theme }) => {
    const value = theme('borderRadius', params)
    return (
      value && {
        borderBottomLeftRadius: value,
        borderBottomRightRadius: value,
      }
    )
  },
  'rounded-is': (params, { theme }) => {
    const value = theme('borderRadius', params)
    return (
      value && {
        '&[dir=ltr], [dir=ltr] &': { borderTopLeftRadius: value, borderBottomLeftRadius: value },
        '&[dir=rtl], [dir=rtl] &': { borderTopRightRadius: value, borderBottomRightRadius: value },
      }
    )
  },
  'rounded-ie': (params, { theme }) => {
    const value = theme('borderRadius', params)
    return (
      value && {
        '&[dir=ltr], [dir=ltr] &': { borderTopRightRadius: value, borderBottomRightRadius: value },
        '&[dir=rtl], [dir=rtl] &': { borderTopLeftRadius: value, borderBottomLeftRadius: value },
      }
    )
  },

  // border radius corder
  'rounded-ss': (params, { theme }) => {
    const value = theme('borderRadius', params)
    return (
      value && {
        '&[dir=ltr], [dir=ltr] &': { borderTopLeftRadius: value },
        '&[dir=rtl], [dir=rtl] &': { borderTopRightRadius: value },
      }
    )
  },
  'rounded-se': (params, { theme }) => {
    const value = theme('borderRadius', params)
    return (
      value && {
        '&[dir=ltr], [dir=ltr] &': { borderTopRightRadius: value },
        '&[dir=rtl], [dir=rtl] &': { borderTopLeftRadius: value },
      }
    )
  },
  'rounded-es': (params, { theme }) => {
    const value = theme('borderRadius', params)
    return (
      value && {
        '&[dir=ltr], [dir=ltr] &': { borderBottomLeftRadius: value },
        '&[dir=rtl], [dir=rtl] &': { borderBottomRightRadius: value },
      }
    )
  },
  'rounded-ee': (params, { theme }) => {
    const value = theme('borderRadius', params)
    return value && { borderEndEndRadius: value }
  },

  // divide
  'divide-b': (params, { theme }) => {
    const value = theme('divideWidth', params)
    return (
      value && {
        '> :not([hidden]) ~ :not([hidden])': {
          '--tw-divide-b-reverse': '0',
          borderTopWidth: `calc(${value} * calc(1 - var(--tw-divide-b-reverse)))`,
          borderBottomWidth: `calc(${value} * var(--tw-divide-b-reverse))`,
        },
      }
    )
  },
  'divide-b-reverse': {
    '> :not([hidden]) ~ :not([hidden])': {
      '--tw-divide-b-reverse': '1',
    },
  },
  'divide-i': (params, { theme }) => {
    const value = theme('divideWidth', params)
    return (
      value && {
        '> :not([hidden]) ~ :not([hidden])': {
          '--tw-divide-i-reverse': '0',
          '&[dir=ltr], [dir=ltr] &': {
            borderLeftWidth: `calc(${value} * calc(1 - var(--tw-divide-i-reverse)))`,
            borderRightWidth: `calc(${value} * var(--tw-divide-i-reverse))`,
          },
          '&[dir=rtl], [dir=rtl] &': {
            borderRightWidth: `calc(${value} * calc(1 - var(--tw-divide-i-reverse)))`,
            borderLeftWidth: `calc(${value} * var(--tw-divide-i-reverse))`,
          },
        },
      }
    )
  },
  'divide-i-reverse': {
    '> :not([hidden]) ~ :not([hidden])': {
      '--tw-divide-i-reverse': '1',
    },
  },
}

export default twindLogical
