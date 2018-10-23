# Convert-csv
> A Simple CSV Converter

## Installation

Install via `npm`:

```
$ npm i convert-csv
```

## Usage

``` js
const csv = require('convert-csv')({
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
```

## Authors

**Yanglin** ([i@yangl.in](mailto:mail@yanglin.me))


## License

Copyright (c) 2018 Yanglin

Released under the MIT license
