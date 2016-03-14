/**
 * Decodes html entities in strings. Uses the browser to decode rather than using
 * a entity database like [he.js](https://github.com/mathiasbynens/he).
 *
 * decodeEntities is a function that has a closure over a new html document so a
 * new one isn't created on each function call.
 * 
 * http://stackoverflow.com/questions/5796718/html-entity-decode/27385169#27385169
 */
const decodeEntities = (function () {
  //create a new html document (doesn't execute script tags in child elements)
  const doc = document.implementation.createHTMLDocument('');
  const element = doc.createElement('div');

  function decodeHTMLEntities(str) {
    if(str && typeof str === 'string') {
      element.innerHTML = str;
      const text = element.textContent;
      element.textContent = '';
      return text;
    }

    return str;
  }

  return decodeHTMLEntities;
})();

export default decodeEntities;
