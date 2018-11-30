module.exports = {
    jsonToCsv: (array, delimiter) => {
        let result = '';
        for (const key in array[0]) {
            result.length === 0 ? result += key : result += `${delimiter}${key}`;
        }
        result += '\r\n';
        array.forEach(line => {
            let lineStr = '';
            for (const value in line) {
                lineStr.length === 0 ? lineStr += line[value] : lineStr += `${delimiter}${line[value]}`;
            }
            result += `${lineStr}\r\n`;
        });
        return result;
    },
    csvToJson: (data, delimiter) => {
        let csvArray;
        if (data.includes('\r\n')) {
            csvArray = data.split('\r\n').filter(Boolean);
        } else if (data.includes('\r')) {
            csvArray = data.split('\r').filter(Boolean);
        } else if (data.includes('\n')) {
            csvArray = data.split('\n').filter(Boolean);
        }
        const keyNames = csvArray[0].split(delimiter);
        const dataArray = csvArray.slice(1, csvArray.length - 1);
        const result = [];
        dataArray.forEach(d => {
            let jsonEntryResult = {};
            const entries = d.split(delimiter);
            keyNames.forEach((keyName, idx) => {
                jsonEntryResult[keyName] = entries[idx];
            });
            result.push(jsonEntryResult);
        })
        return result;
    },
};
