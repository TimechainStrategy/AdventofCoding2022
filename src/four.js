/* Solution to #4 */

import fs from 'fs';
const filePath =
    '/Users/markkinney/Documents/GitHub/Personal-Projects/AdventOfCoding2022/src/four.txt';

const four = async () => {
    try {
        //read data in as a string
        const data = fs.readFileSync(filePath, 'utf8');
        //not split into array by new lines
        const array = data.split(/\r?\n/);
        array.pop(); //Get rid of blank last item in Array
        let countContained = 0;
        let countOverlap = 0;
        for (let index = 0; index < array.length; index++) {
            countContained = countContained + isContained(array[index]);
            countOverlap = countOverlap + doesOverlap(array[index]);
        }
        console.log('Total number fully contained is: ', countContained);
        console.log('Total number fully contained is: ', countOverlap);
    } catch (err) {
        console.error(err);
    }
};

const doesOverlap = (pair) => {
    const [a, b] = parsePair(pair);
    if (a[0] <= b[0]) {
        if (a[1] >= b[0]) return 1;
    }
    if (b[0] <= a[0]) {
        if (b[1] >= a[0]) return 1;
    }
    return 0;
};

const isContained = (pair) => {
    const [a, b] = parsePair(pair);
    if (a[0] <= b[0]) {
        if (a[1] >= b[1]) return 1;
    }
    if (b[0] <= a[0]) {
        if (b[1] >= a[1]) return 1;
    }
    return 0;
};

const parsePair = (pair) => {
    const x = pair.split(/,/);
    const a = x[0].split(/-/);
    const b = x[1].split(/-/);
    return [
        [Number(a[0]), Number(a[1])],
        [Number(b[0]), Number(b[1])],
    ];
};

export default four;
