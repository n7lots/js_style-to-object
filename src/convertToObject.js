'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  const lines = sourceString.split(';').filter((rule) => rule.trim().length);

  lines.forEach((line) => {
    const [property, value] = line.split(':');

    if (property && value) {
      styles[property.trim()] = value.trim();
    }
  });

  return styles;
}

module.exports = convertToObject;
