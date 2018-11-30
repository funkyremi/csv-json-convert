const convert = require('./index.js');

const json = [{
    key1: 'first value 1',
    key2: 'first value 2',
    key3: 'first value 3',
    key4: 'first value 4',
}, {
    key1: 'second value 1',
    key2: 'second value 2',
    key3: 'second value 3',
    key4: 'second value 4',
}];

const csv = 'key1;key2;key3;key4\r\nfirst value 1;first value 2;first value 3;first value 4\r\nsecond value 1;second value 2;second value 3;second value 4\r\n';

test('json to csv', () => {
    expect(convert.jsonToCsv(json, ';')).toBe(csv);
});

test('csv to json', () => {
    const jsonResult = convert.csvToJson(csv, ';');
    jsonResult.forEach((data, idx) => {
        expect(data).toEqual(json[idx]);
    })
});
