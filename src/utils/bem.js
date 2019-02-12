function isObject(variable) {
  return typeof(variable) === 'object';
}

function isString(variable) {
  return typeof(variable) === 'string';
}

function processBemComponent(
  prefixes,
  typePrefix, /* e.g. Element == (__) */
  definition
) {
  // if null or undefined then just return what we have
  if (isObject(definition)) {
    // get true definitions
    const postfixes = Object.keys(definition)
                            .filter(key => definition[key]);

    // post-fix all TRUE value
    let components = [];

    // we need a flat array here so the simple solution
    // is just to push each result into an array
    prefixes.forEach((prefix) => {
      postfixes.forEach((postfix) => {
        components.push(prefix + typePrefix + postfix);
      })
    });

    return components;
  }
  else if (isString(definition)) {
    return prefixes.map((prefix) => {
      return prefix + typePrefix + definition;
    })
  }
}

function Block(BlockName) {
  return (ElementName) => {
    return (ModifierName) => {
      let classes = processBemComponent(
        [""],
        "",
        BlockName
      );
      classes = processBemComponent(
        classes,
        "__",
        ElementName
      );
      classes = processBemComponent(
        classes,
        "--",
        ModifierName
      )

      return classes.join(' ');
    };
  };
}

function Style(classes) {
  if (Array.isArray(classes)) {
    return classes.join(' ');
  }
}

export {Block, Style};
