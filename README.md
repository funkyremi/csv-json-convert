# CSV JSON convert

This Javascript library helps converting CSV to JSON and JSON to CSV


## Installation

`npm install --save csv-json-convert`

## Usage

```javascript
const converter = require('csv-json-convert');

// Convert CSV string to JSON data array. 
converter.csvToJson(CSV_string, delimiter);

// Convert data array to CSV string
converter.jsonToCsv(Data_array, delimiter);

// Delimiter can be ';' or ',' or '\t' or '|' or '~'
```

## Tests

```
npm test
```