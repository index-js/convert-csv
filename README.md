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
  delimiter, quote, escape
})

const parsed = csv.parse('1,2,3\n4,5,6')
console.log(parsed)

const toArray = csv.write(parsed)
console.log(toArray)
```

## Authors

**Yanglin** ([i@yangl.in](mailto:mail@yanglin.me))


## License

Copyright (c) 2018 Yanglin

Released under the MIT license
