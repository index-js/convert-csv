(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  global.Convert_CSV = factory();
}(this, function(){
'use strict'

const split = '\r\n'
const splitReg = /\r?\n/


const CSV = function(options = {}) {
  if (!(this instanceof CSV)) return new CSV(options)

  this.delimiter = options.delimiter || ','
  this.quote = options.quote || '"'
  this.escape = (options.escape || '"').replace(/\\/, '\\\\')
  this.trim = options.trim || true
}

CSV.prototype.write = function(array) {
  let { delimiter, quote, escape } = this
  let escapeReg = new RegExp(quote, 'g')

  return array.map(line => {
    return line.map(item => {
      item = String(item)
      if (item.match(delimiter) || item.match(quote) || item.match(splitReg)) {
        return [quote, item.replace(escapeReg, escape + quote), quote].join('')
      }
      return item
    }).join(delimiter)
  }).join(split)
}

CSV.prototype.parse = function(string) {
  let { delimiter, quote, escape, trim } = this
  let unescapeReg = new RegExp(escape + quote, 'g')
  let patternReg = new RegExp([
    '(', delimiter, '|\\r?\\n|^)',
    '(?:', quote, '([^', quote, ']*(?:', escape, quote, '[^', quote, ']*)*)', quote,
    '|([^', quote, delimiter, '\\r\\n]*))'
    ].join(''), 'g')

  let result = []
  String(string).replace(patternReg, ($, $delimiter, $escape = '', $item) => {
    let item = $item || $escape.replace(unescapeReg, quote)

    if (trim) item = String(item).trim()

    $delimiter === delimiter ? result[result.length - 1].push(item) : result.push([item])
  })
  return result
}

return CSV
}))
