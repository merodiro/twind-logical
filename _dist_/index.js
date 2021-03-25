const twindLogical = {
  "float-start": {float: "inline-start"},
  "float-end": {float: "inline-end"},
  "clear-start": {clear: "inline-start"},
  "clear-end": {clear: "inline-end"},
  "text-start": {textAlign: "start"},
  "text-end": {textAlign: "end"},
  "resize-block": {resize: "block"},
  "resize-inline": {resize: "inline"},
  "overscroll-b-auto": {overscrollBehaviorBlock: "auto"},
  "overscroll-b-contain": {overscrollBehaviorBlock: "contain"},
  "overscroll-b-none": {overscrollBehaviorBlock: "none"},
  "overscroll-i-auto": {overscrollBehaviorInline: "auto"},
  "overscroll-i-contain": {overscrollBehaviorInline: "contain"},
  "overscroll-i-none": {overscrollBehaviorInline: "none"},
  bs: (params, {theme}) => {
    const value = theme("width", params);
    return value && {blockSize: value};
  },
  "min-bs": (params, {theme}) => {
    const value = theme("minWidth", params);
    return value && {minBlockSize: value};
  },
  "max-bs": (params, {theme}) => {
    const value = theme("maxWidth", params);
    return value && {maxBlockSize: value};
  },
  is: (params, {theme}) => {
    const value = theme("width", params);
    return value && {inlineSize: value};
  },
  "min-is": (params, {theme}) => {
    const value = theme("minWidth", params);
    return value && {minInlineSize: value};
  },
  "max-is": (params, {theme}) => {
    const value = theme("maxWidth", params);
    return value && {maxInlineSize: value};
  },
  mlb: (params, {theme}) => {
    const value = theme("margin", params);
    return value && {marginBlock: value};
  },
  mli: (params, {theme}) => {
    const value = theme("margin", params);
    return value && {marginInline: value};
  },
  mbs: (params, {theme}) => {
    const value = theme("margin", params);
    return value && {marginBlockStart: value};
  },
  mbe: (params, {theme}) => {
    const value = theme("margin", params);
    return value && {marginBlockEnd: value};
  },
  mis: (params, {theme}) => {
    const value = theme("margin", params);
    return value && {marginInlineStart: value};
  },
  mie: (params, {theme}) => {
    const value = theme("margin", params);
    return value && {marginInlineEnd: value};
  },
  plb: (params, {theme}) => {
    const value = theme("padding", params);
    return value && {paddingBlock: value};
  },
  pli: (params, {theme}) => {
    const value = theme("padding", params);
    return value && {paddingInline: value};
  },
  pbs: (params, {theme}) => {
    const value = theme("padding", params);
    return value && {paddingBlockStart: value};
  },
  pbe: (params, {theme}) => {
    const value = theme("padding", params);
    return value && {paddingBlockEnd: value};
  },
  pis: (params, {theme}) => {
    const value = theme("padding", params);
    return value && {paddingInlineStart: value};
  },
  pie: (params, {theme}) => {
    const value = theme("padding", params);
    return value && {paddingInlineEnd: value};
  },
  "space-b": (params, {theme}) => {
    const value = theme("space", params);
    return value && {
      "> :not([hidden]) ~ :not([hidden])": {
        "--tw-space-b-reverse": "0",
        marginBlockStart: `calc(${value} * calc(1 - var(--tw-space-b-reverse)))`,
        marginBlockEnd: `calc(${value} * var(--tw-space-b-reverse))`
      }
    };
  },
  "space-b-reverse": {
    "> :not([hidden]) ~ :not([hidden])": {
      "--tw-space-b-reverse": "1"
    }
  },
  "space-i": (params, {theme}) => {
    const value = theme("space", params);
    return value && {
      "> :not([hidden]) ~ :not([hidden])": {
        "--tw-space-i-reverse": "0",
        marginInlineStart: `calc(${value} * calc(1 - var(--tw-space-i-reverse)))`,
        marginInlineEnd: `calc(${value} * var(--tw-space-i-reverse))`
      }
    };
  },
  "space-i-reverse": {
    "> :not([hidden]) ~ :not([hidden])": {
      "--tw-space-i-reverse": "1"
    }
  },
  "inset-block": (params, {theme}) => {
    const value = theme("inset", params);
    return value && {insetBlock: value};
  },
  "inset-inline": (params, {theme}) => {
    const value = theme("inset", params);
    return value && {insetInline: value};
  },
  "block-start": (params, {theme}) => {
    const value = theme("inset", params);
    return value && {insetBlockStart: value};
  },
  "block-end": (params, {theme}) => {
    const value = theme("inset", params);
    return value && {insetBlockEnd: value};
  },
  "inline-start": (params, {theme}) => {
    const value = theme("inset", params);
    return value && {insetInlineStart: value};
  },
  "inline-end": (params, {theme}) => {
    const value = theme("inset", params);
    return value && {insetInlineEnd: value};
  },
  "border-bs": (params, {theme}) => {
    const value = theme("borderWidth", params);
    return value && {borderBlockStartWidth: value};
  },
  "border-be": (params, {theme}) => {
    const value = theme("borderWidth", params);
    return value && {borderBlockEndWidth: value};
  },
  "border-is": (params, {theme}) => {
    const value = theme("borderWidth", params);
    return value && {borderInlineStartWidth: value};
  },
  "border-ie": (params, {theme}) => {
    const value = theme("borderWidth", params);
    return value && {borderInlineEndWidth: value};
  },
  "rounded-bs": (params, {theme}) => {
    const value = theme("borderRadius", params);
    return value && {borderStartStartRadius: value, borderStartEndRadius: value};
  },
  "rounded-be": (params, {theme}) => {
    const value = theme("borderRadius", params);
    return value && {borderEndStartRadius: value, borderEndEndRadius: value};
  },
  "rounded-is": (params, {theme}) => {
    const value = theme("borderRadius", params);
    return value && {borderStartStartRadius: value, borderEndStartRadius: value};
  },
  "rounded-ie": (params, {theme}) => {
    const value = theme("borderRadius", params);
    return value && {borderStartEndRadius: value, borderEndEndRadius: value};
  },
  "rounded-ss": (params, {theme}) => {
    const value = theme("borderRadius", params);
    return value && {borderStartStartRadius: value};
  },
  "rounded-se": (params, {theme}) => {
    const value = theme("borderRadius", params);
    return value && {borderStartEndRadius: value};
  },
  "rounded-es": (params, {theme}) => {
    const value = theme("borderRadius", params);
    return value && {borderEndStartRadius: value};
  },
  "rounded-ee": (params, {theme}) => {
    const value = theme("borderRadius", params);
    return value && {borderEndEndRadius: value};
  },
  "divide-b": (params, {theme}) => {
    const value = theme("divideWidth", params);
    return value && {
      "> :not([hidden]) ~ :not([hidden])": {
        "--tw-divide-b-reverse": "0",
        borderBlockStartWidth: `calc(${value} * calc(1 - var(--tw-divide-b-reverse)))`,
        borderBlockEndWidth: `calc(${value} * var(--tw-divide-b-reverse))`
      }
    };
  },
  "divide-b-reverse": {
    "> :not([hidden]) ~ :not([hidden])": {
      "--tw-divide-b-reverse": "1"
    }
  },
  "divide-i": (params, {theme}) => {
    const value = theme("divideWidth", params);
    return value && {
      "> :not([hidden]) ~ :not([hidden])": {
        "--tw-divide-i-reverse": "0",
        borderInlineStartWidth: `calc(${value} * calc(1 - var(--tw-divide-i-reverse)))`,
        borderInlineEndWidth: `calc(${value} * var(--tw-divide-i-reverse))`
      }
    };
  },
  "divide-i-reverse": {
    "> :not([hidden]) ~ :not([hidden])": {
      "--tw-divide-i-reverse": "1"
    }
  }
};
export default twindLogical;
