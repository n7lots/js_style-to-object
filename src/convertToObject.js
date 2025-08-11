'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  const lines = sourceString.split(';').filter((rule) => rule.trim().length);

  for (const line of lines) {
    const [key, value] = line.split(':');

    styles[key.trim()] = value.trim();
  }

  return styles;
}

module.exports = convertToObject;
