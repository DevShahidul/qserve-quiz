// Transition
export function transition(property = 'all', timing = 0.3) {
  return `
      -webkit-transition: ${property} ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      -moz-transition: ${property} ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      -ms-transition: ${property} ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      -o-transition: ${property} ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      transition: ${property} ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
  `;
}


// Border Radius
export function borderRadius(radius = 0) {
  return `
      -webkit-border-radius: ${radius};
      -moz-border-radius: ${radius};
      -ms-transition: ${radius};
      -o-border-radius: ${radius};
      border-radius: ${radius};
  `;
}

// Box Shadow
export function boxShadow(shadow = 'none') {
  return `
      -webkit-box-shadow: ${shadow};
      -moz-box-shadow: ${shadow};
      box-shadow: ${shadow};
  `;
}
