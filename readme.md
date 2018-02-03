# shortest-first

Sorts items in ascending order of length.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i shortest-first
```

## API

The module exports a single function.

* **Parameter**: `items` (iterable): Values that should be sorted by their `length` property. (The original iterable is not modified.)
* **Return Value**: Array

## Example

```javascript
const shortestFirst = require('shortest-first')

shortestFirst(['example', 'test']) // ['test', 'example']

// Supports the bind operator
['example', 'test']::shortestFirst() // ['test', 'example']
```
