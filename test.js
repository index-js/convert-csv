const csv = require('./csv')({
  // There are default values, not necessarily.
  // delimiter, quote, escape
})

let array = [
['id', 'col1', 'col2'],
[1, 'foo\n', 'foo,bar'],
[2, 'foo "foo bar"', 'foo']
]

const toCsv = csv.write(array)
console.log(toCsv)

const parsed = csv.parse(toCsv)
console.log(parsed)
