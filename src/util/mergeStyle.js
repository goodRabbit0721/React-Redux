const mergeStyle = (...styles) => {
  const combined = {};
  for (const style of styles) {
    for (const key of Object.keys(style)) {
      combined[key] = style[key];
    }
  }
  return combined;
};

export default mergeStyle;
